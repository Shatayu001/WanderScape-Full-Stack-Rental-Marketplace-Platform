const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderscape");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68d317b5f09e5042f4e35ee8",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
