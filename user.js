const Post = require("./post");
const Forum = require("./forum");
const Comment = require("./comment");
const Poll = require("./poll")

class User {
    constructor(username, admin=false) {
        this.username = username;
        this.votes = {}
        this.admin = admin
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
    deletePost(forum, title, user = this) {
        const post = forum.findPost(title);
        if (post.author != user && this.admin == false) {
            throw "You are not admin!";
        }
        else if (post.author == user || this.admin == true) {
            forum.removePost(post);
        }
    }
    deleteComment(forum, title, comment, user = this) {
        const post = forum.findPost(title);
        const com = post.findComment(comment);
        if (com.author != user && this.admin == false) {
            throw "You are not admin!";
        }
        else if (com.author == user || this.admin == true) {
            post.removeComment(com);
        }
    }
}

module.exports = User;

