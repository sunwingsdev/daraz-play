const express = require("express");
const { ObjectId } = require("mongodb");

const paymentNumberApi = (paymentNumberCollection) => {
  const router = express.Router();

  // add a payment number
  router.post("/", async (req, res) => {
    const paymentNumberInfo = req.body;
    paymentNumberInfo.status = "pending";
    paymentNumberInfo.createdAt = new Date();
    const result = await paymentNumberCollection.insertOne(paymentNumberInfo);
    res.send(result);
  });

  // get all payment numbers
  router.get("/", async (req, res) => {
    try {
      const result = await paymentNumberCollection
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

  // get a payment number by ID
  router.get("/single-number/:id", async (req, res) => {
    const { id } = req?.params;
    if (!id) {
      return;
    }
    const result = await paymentNumberCollection.findOne(
      { userId: id },
      { projection: { password: 0 } }
    );
    res.send(result);
  });

  return router;
};

module.exports = paymentNumberApi;
