const Post = require("./post");
const Forum = require("./forum");
const Comment = require("./comment");

class User {
    constructor(username) {
        this.username = username;
    }
    createPost(forum, title, desc) {
        const newPost = new Post(forum, title, this, desc);
        forum.addPost(newPost);
        return newPost;
    }
    createComment(forum, postTitle, commentContent) {
        const post = forum.findPost(postTitle);
        const newComment = new Comment(this, commentContent);
        post.addComment(newComment);
        return newComment;
    }
}

module.exports = User;

