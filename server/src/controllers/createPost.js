const Blog = require("../models/blogSchema");

async function createPost(req, res) {
    try {
        const { titleName, description, cover } = req.body;

        const duplicate = Blog.findOne({ titleName})

        if (duplicate) {
            res.status(404).send
            console.log('data already exists');
            
        }

        const newPost = new Blog({
            titleName,
            description,
            cover
        });

        const savedPost = await newPost.save();
        console.log(savedPost);

        res.status(201).send(savedPost); // 201 indicates resource creation success
    } catch (e) {
        console.error('Error creating post:', e);
        res.status(500).send({ message: 'Error creating post', error: e.message });
    }
}

module.exports = createPost;
