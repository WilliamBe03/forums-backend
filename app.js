const User = require("./user");
const Forum = require("./forum");
const Post = require("./post");
const Comment = require("./comment");

const Gaming = new Forum("Gaming");
const Richard = new User("Rich21");
const newPost = Richard.createPost(Gaming, "Is this working?", "I dont know if this is working or not!");

console.log(newPost.author);