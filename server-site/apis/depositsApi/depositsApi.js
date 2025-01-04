const express = require("express");
const { ObjectId } = require("mongodb");

const depositsApi = (depositsCollection, usersCollection) => {
  const router = express.Router();

  //   add a deposit
  router.post("/", async (req, res) => {
    const depositInfo = req.body;
    depositInfo.status = "pending";
    depositInfo.createdAt = new Date();
    const result = await depositsCollection.insertOne(depositInfo);
    res.send(result);
  });

  //   get all deposits
  router.get("/", async (req, res) => {
    try {
      const result = await depositsCollection
        .aggregate([
          {
            $addFields: {
              userId: { $toObjectId: "$userId" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
          {
            $unwind: {
              path: "$userInfo",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              "userInfo.password": 0,
            },
          },
        ])
        .toArray();

      res.send(result);
    } catch (error) {
      console.error("Error fetching deposits:", error);
      res.status(500).send({ error: "Failed to fetch deposits" });
    }
  });

  //   status updated
  router.patch("/status/:id", async (req, res) => {
    const { id } = req.params;
    const { status, reason } = req.body;
    try {
      const deposit = await depositsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!deposit) {
        return res.status(404).send({ error: "Deposit not found" });
      }
      if (deposit.status !== "pending") {
        return res
          .status(400)
          .send({ error: "Deposit is not in a pending state" });
      }
      const updatedDoc = { $set: { status, reason } };
      const result = await depositsCollection.updateOne(
        { _id: new ObjectId(id) },
        updatedDoc
      );

      if (status === "completed") {
        // Increment the user's balance
        await usersCollection.updateOne(
          { _id: new ObjectId(deposit.userId) },
          { $inc: { balance: deposit.amount } }
        );
      }
      res.send(result);
    } catch (error) {
      console.error("Error updating deposit status:", error);
      res.status(500).send({ error: "Failed to update deposit status" });
    }
  });

  //  delete a deposit
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const result = await depositsCollection.deleteOne(query);
    res.send(result);
  });

  return router;
};
module.exports = depositsApi;
