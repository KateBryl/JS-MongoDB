import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
//throw new Error(req);
            const {Name, ProgLang, DataBase} = req.body
            const post = await Post.create({Name, ProgLang, DataBase})
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'He указан ID'})
            }
            const post = await Post.findById(id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({message: 'He указан ID'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'He указан ID'})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new PostController();