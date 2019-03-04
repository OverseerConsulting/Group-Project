var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pdfSchema = new Schema({
    pages:
        [{
            width: Number,
            height: Number,
            pageId: Number,
            texts:
                [{
                    text: String,
                    direction: String,
                    width: Number,
                    height: Number,
                    top: Number,
                    left: Number,
                    transform: Array,
                    fontSize: Number,
                    fontName: String,
                    fontOriginName: String,
                    bold: Boolean,
                    italic: Boolean,
                    black: Boolean,
                    color: String
                }]
        }]
});

module.exports = mongoose.model("rawpdf", pdfSchema);