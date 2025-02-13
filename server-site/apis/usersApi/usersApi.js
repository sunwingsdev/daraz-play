const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const sendEmail = require("../../emailService");

const usersApi = (usersCollection) => {
  const router = express.Router();
  const jwtSecret = process.env.JWT_SECRET;

  // Middleware to validate JWT tokens
  const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader)
      return res
        .status(401)
        .json({ error: "Access denied. No token provided." });

    const token = authHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ error: "Access denied. Invalid token format." });

    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }
  };

  // Register a new user
  router.post("/register", async (req, res) => {
    const userInfo = req.body;
    if (!userInfo?.username || !userInfo?.password) {
      return res
        .status(400)
        .send({ message: "Username and password are required" });
    }
    try {
      const existingUser = await usersCollection.findOne({
        username: userInfo?.username,
      });
      if (existingUser)
        return res.status(400).json({ error: "User already exists" });
      const hashedPassword = await bcrypt.hash(userInfo?.password, 10);
      const newUser = {
        ...userInfo,
        password: hashedPassword,
        role: "user",
      };
      newUser.createdAt = new Date();
      const result = await usersCollection.insertOne(newUser);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: "Registration failed" });
    }
  });

  // Register as an agent
  router.post("/agentregistration", async (req, res) => {
    const userInfo = req.body;
    if (!userInfo?.username || !userInfo?.password) {
      return res
        .status(400)
        .send({ message: "Username and password are required" });
    }
    try {
      const existingUser = await usersCollection.findOne({
        username: userInfo?.username,
      });
      if (existingUser)
        return res.status(400).json({ error: "User already exists" });
      const hashedPassword = await bcrypt.hash(userInfo?.password, 10);
      const newUser = {
        ...userInfo,
        password: hashedPassword,
        role: "agent",
        status: "pending",
      };
      newUser.createdAt = new Date();
      const result = await usersCollection.insertOne(newUser);
      // Send Registration Email to the agent
      const emailSubject = "Thanks for Registration";
      const emailText = `Thanks for your registration. Please wait for admin approval. After approval, you will get an confirmation email with further instructions.`;
      await sendEmail(userInfo?.email, emailSubject, emailText);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send({ message: "Registration failed" });
    }
  });

  // Login a user and validate JWT issuance
  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      const user = await usersCollection.findOne({ username });
      if (!user) return res.status(400).json({ error: "Invalid credentials" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ error: "Invalid credentials" });

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        jwtSecret,
        { expiresIn: "7d" }
      );

      await usersCollection.updateOne(
        { username },
        { $set: { lastLoginAt: new Date() } },
        { upsert: true }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Login a agent and validate JWT issuance
  router.post("/agent/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      const user = await usersCollection.findOne({ username });
      if (!user)
        return res
          .status(400)
          .json({ error: "Username or password do not match." });

      if (user?.status?.toLowerCase() !== "approve") {
        return res.status(403).json({
          error:
            "Your account is not approved yet. Please wait for approval or check your email.",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ error: "Username or password do not match." });

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        jwtSecret,
        { expiresIn: "7d" }
      );

      await usersCollection.updateOne(
        { username },
        { $set: { lastLoginAt: new Date() } },
        { upsert: true }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Login failed." });
    }
  });

  // Example Protected Route Using Middleware
  router.get("/profile", authenticateToken, async (req, res) => {
    try {
      const user = await usersCollection.findOne({
        _id: new ObjectId(req.user.userId),
      });
      if (!user) return res.status(404).json({ error: "User not found" });
      const { password: _, ...userInfo } = user;
      res.status(200).json(userInfo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const result = await usersCollection
        .find({}, { projection: { password: 0 } })
        .toArray();
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch users" });
    }
  });

  // get all agents
  router.get("/agent", async (req, res) => {
    try {
      const result = await usersCollection
        .find({ role: "agent" }, { projection: { password: 0 } })
        .sort({ createdAt: -1 })
        .toArray();
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch users" });
    }
  });

  // update status of an agent
  router.put("/updateagentstatus/:id", authenticateToken, async (req, res) => {
    const { id } = req.params; // User ID from the URL parameter
    const { status, email } = req.body; // New status from the request body
    if (!id || !status) {
      return res.status(400).json({ error: "User ID and status are required" });
    }

    try {
      const validStatuses = ["approve", "reject", "pending"];
      if (!validStatuses.includes(status.toLowerCase())) {
        return res.status(400).json({
          error: "Invalid status. Use 'approve', 'reject', or 'pending'.",
        });
      }

      const result = await usersCollection.updateOne(
        { _id: new ObjectId(id), role: "agent" },
        { $set: { status: status.toLowerCase(), updatedAt: new Date() } }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      // Send email based on the updated status
      let emailSubject = "";
      let emailText = "";

      if (status.toLowerCase() === "approve") {
        emailSubject = "Your Account has been Approved";
        emailText =
          "Congratulations! Your account has been approved. You can now log in to your account. Please visit our website and log in with your credentials.";
      } else if (status.toLowerCase() === "reject") {
        emailSubject = "Your Account has been Rejected";
        emailText =
          "Unfortunately, your account has been rejected for some reason. Please contact our customer support for further assistance.";
      }

      if (emailSubject && emailText) {
        await sendEmail(email, emailSubject, emailText);
      }

      res.status(200).json({ message: "User status updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update user status" });
    }
  });

  router.get("/single-user/:id", async (req, res) => {
    const { id } = req?.params;
    if (!id) {
      return;
    }
    const result = await usersCollection.findOne(
      { _id: new ObjectId(id) },
      { projection: { password: 0 } }
    );
    res.send(result);
  });

  return router;
};

module.exports = usersApi;
