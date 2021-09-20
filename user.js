const Post = require("./post");
const Forum = require("./forum");
const Comment = require("./comment");
const Poll = require("./poll")

class User {
    constructor(username) {
        this.username = username;
        this.votes = {}
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
    createPoll(forum, title, ...options) {
        const newPoll = new Poll(forum, title, this, options);
        forum.addPost(newPoll);
        return newPoll;
    }
    vote(forum, pollTitle, option) {
        const poll = forum.findPost(pollTitle);
        if (pollTitle in this.votes) {
            throw "User already voted!"
        }
        poll.addVote(option, this);
        this.votes[pollTitle] = option;
        
    }
}

module.exports = User;

