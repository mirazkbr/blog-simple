const blogSchema = require("../models/blogSchema");

async function readPost(req, res) {
    try {
        const allPosts = await blogSchema.find(); 
        res.status(200).json(allPosts);
        console.log(allPosts);
    
    }
    catch (e) {
        console.error(e, 'Error readPost');
    }
}

module.exports = readPost;