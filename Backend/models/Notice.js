import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["text", "image"],
    required: true,
  },

  // Only required for text notices
  title: {
    type: String,
    required: function () {
      return this.type === "text";
    },
  },

  description: {
    type: String,
    required: function () {
      return this.type === "text";
    },
  },

  // Only for image notices
  image: {
    type: String,
    required: function () {
      return this.type === "image";
    },
  },

  category: {
    type: String,
    default: "General",
  },

  audience: {
    type: String,
    enum: ["Public", "Students", "Teachers", "All"],
    default: "Public",
  },
  
  visibleOnHomepage: {
    type: Boolean,
    default: true
  },


}, { timestamps: true });

export default mongoose.model("Notice", NoticeSchema);

