

const {Schema, model} = require("mongoose");

const BlogSchema = new Schema ({
    title: { type: String, required: true },
    author : { type: String, required: true },
    publishedDate: {type: Date, default: Date.now()},
    categories: {type: Array},
    words: {type: Number, required: true},
    time: {type: Number},
    content: {type: String, required: true},
    featuredImage: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now(),}
});

module.exports = new model("Blog", BlogSchema);