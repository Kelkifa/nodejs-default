const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var mongoose_delete = require('mongoose-delete');
const myDocument = new Schema(
    {
        type: { type: String },
        parent_part: {
            title: { type: String }
        },
        children_parts: [
            {
                _id: false,
                index: Number,
                title: String,
                content: [String],
                sort: [Number]
            }
        ]
    },
    {
        timestamps: true
    }
);
myDocument.plugin(mongoose_delete, { overrideMethods: 'all' });
var model = mongoose.model('research_documents', myDocument);

module.exports = new MyDocumentModel;