const mongoose = require('mongoose');
const schema = mongoose.schema;

const loginSchema = new schema({
    title: {
        type: string,
        require: true
    },
    snippet: {
        type: string,
        required: true
    },
}, { timestamps: true});

const use = mongoose.model('login', useSchema);
module.exports = use;
