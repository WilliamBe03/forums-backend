const User = require("./user");
const Forum = require("./forum");
const Post = require("./post");
const Comment = require("./comment");
const Poll = require("./poll")

const Politics = new Forum("Politics");
const Sarah = new User("Sar22");
const Eddy = new User("Edd");
const globalWarming = Sarah.createPoll(Politics, "Is global warming real?", "Yes", "No");
Eddy.vote(Politics, globalWarming.title, "Yes");
console.log()
