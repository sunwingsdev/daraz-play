const express = require("express");

const kycApi = (kycCollection) => {
  const router = express.Router();

  // add a kyc
  router.post("/", async (req, res) => {
    const kycInfo = req.body;
    kycInfo.status = "pending";
    kycInfo.createdAt = new Date();
    const result = await kycCollection.insertOne(kycInfo);
    res.send(result);
  });

  // get all kycs
  router.get("/", async (req, res) => {
    try {
      const result = await kycCollection
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
      console.error("Error fetching kycs:", error);
      res.status(500).send({ error: "Failed to fetch kycs" });
    }
  });

  // get a agent by ID
  router.get("/single-kyc/:id", async (req, res) => {
    const { id } = req?.params;
    if (!id) {
      return;
    }
    const result = await kycCollection.findOne(
      { userId: id },
      { projection: { password: 0 } }
    );
    res.send(result);
  });

  return router;
};
module.exports = kycApi;
