import mongoose from "mongoose";

const cardScheme = mongoose.Schema({
  title: String,
  type: String,
  content: String,
  Start_data: Date,
  end_date: Date,
  link: String,
  amount: Number,
});

const cardDate = mongoose.model("cardDate", cardScheme);

export default cardDate;
