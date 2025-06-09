const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    name: {
    type: String,
    },
  htmlContent: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Content', ContentSchema);
