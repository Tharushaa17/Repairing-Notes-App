import AutoIncrement from 'mongoose-sequence';
import mongoose from 'mongoose';

const AutoIncrementPlugin = AutoIncrement(mongoose);

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    text: [{
        type: String,
        default: "Employee"
    }],
    completed: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

noteSchema.plugin(AutoIncrementPlugin, {
    inc_field: 'ticket',
    id: 'tiketNums',
    start_seq: 500
})

const Note = mongoose.model('Note', noteSchema);

export default Note;