const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },

    category: {
      type: String,
      required: [true, "cat is required"],
    },

    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },

    date: {
      type: String,
      required: [true, "data is required"],
    },
  },
  { timestamps: true }
);

const transection = mongoose.model("transections", transectionSchema);

module.exports = transection;
