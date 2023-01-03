import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    Name: {type: String, required: true},
    ProgLang: {type: String, required: true},
    DataBase: {type: String, required: true},
})

export default mongoose.model('Post', Post)