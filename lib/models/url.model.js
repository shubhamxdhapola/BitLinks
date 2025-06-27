import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, unique : true },
});

export const Url = mongoose.models.Url || mongoose.model("Url", urlSchema);
