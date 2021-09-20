const Post = require("./post");
const Forum = require("./forum");
const Comment = require("./comment");
const Poll = require("./poll")

class User {
    constructor(username, admin=false) {
        this.username = username;
        this.pollVotes = {}
        this.votes = {}
        this.admin = admin
        this.posts = {}
        this.comments = {}
    }
    createPost(forum, title, desc) {
        if (forum.restricted && this.comments[forum] < 5) {
            throw "You cannot post in this forum yet!"
        }
        const newPost = new Post(forum, title, this, desc);
        forum.addPost(newPost);
        if (!(forum in this.posts)) {
            this.posts[forum] = 1;
        } else {
            this.posts[forum] = (this.posts[forum]+1)
        }
        return newPost;
    }
    createComment(forum, postTitle, commentContent) {
        const post = forum.findPost(postTitle);
        const newComment = new Comment(this, commentContent);
        post.addComment(newComment);
        if (!(forum in this.comments)) {
            this.comments[forum] = 1;
        } else {
            this.comments[forum] = (this.comments[forum]+1)
        }
        return newComment;
    }
    createPoll(forum, title, ...options) {
        const newPoll = new Poll(forum, title, this, options);
        forum.addPost(newPoll);
        return newPoll;
    }
    vote(forum, pollTitle, option) {
        const poll = forum.findPost(pollTitle);
        if (pollTitle in this.pollVotes) {
            throw "User already voted on poll!"
        }
        poll.addVote(option, this);
        this.pollVotes[pollTitle] = option;
    }
    upvotePost(forum, title) {
        const post = forum.findPost(title);
        if (title in this.votes) {
            throw "User already voted on post";
        }
        post.upvotes++;
        this.votes[title] = 1;
    }
    downvotePost(forum, title) {
        const post = forum.findPost(title);
        if (title in this.votes) {
            throw "User already voted on post";
        }
        post.downvotes++;
        this.votes[title] = 0;
    }
    upvoteComment(forum, title, comment) {
        const post = forum.findPost(title);
        const comm = post.findComment(comment);
        if (comment in this.votes) {
            throw "User already voted on comment";
        }
        comm.upvotes++;
        this.votes[comment] = 1;
    }
    downvoteComment(forum, title, comment) {
        const post = forum.findPost(title);
        const comm = post.findComment(comment);
        if (comment in this.votes) {
            throw "User already voted on comment";
        }
        comm.downvotes++;
        this.votes[comment] = 0;
    }
    deletePost(forum, title, user = this) {
        const post = forum.findPost(title);
        if (post.author != user && this.admin == false) {
            throw "You are not admin!";
        }
        else if (post.author == user || this.admin == true) {
            forum.removePost(post);
            this.posts[forum] = this.posts[forum]-1
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
            this.comments[forum] = this.comments[forum]-1
        }
    }
}

module.exports = User;