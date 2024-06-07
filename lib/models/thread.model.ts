import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: String, require: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user", require: true },
  createdAt: { type: Date, default: Date.now },
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
  parrentId: { type: String },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thread" }],
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
