const User = require("./user");
const Forum = require("./forum");
const Post = require("./post");
const Comment = require("./comment");
const Poll = require("./poll")

const Politics = new Forum("Politics");
const Sarah = new User("Sar22");
const Eddy = new User("Edd");
const mrAdmin = new User("AdminMan", true)
const globalWarming = Sarah.createPost(Politics,
    "Is global warming real?", "Can someone tell me?");
Eddy.createComment(Politics, "Is global warming real?", "Nah can't be!");
Eddy.createComment(Politics, "Is global warming real?", "Stupid question!");
console.log(globalWarming.comments)
mrAdmin.deleteComment(Politics, "Is global warming real?", "Stupid question!")
console.log(globalWarming.comments)