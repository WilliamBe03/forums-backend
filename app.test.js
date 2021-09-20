const User = require("./user");
const Forum = require("./forum");
const Post = require("./post");
const Comment = require("./comment");
const Poll = require("./poll");

test("Can create forum", () => {
    const Gardening = new Forum("Gardening");
    expect(Gardening.title).toBe("Gardening");
});

test("Can create user", () => {
    const Michael = new User("Michael123");
    expect(Michael.username).toBe("Michael123");
});

test("Can create post", () => {
    const Gaming = new Forum("Gaming");
    const Richard = new User("Rich21");
    const newPost = Richard.createPost(Gaming, "Is this working?", "I dont know if this is working or not!");
    expect(newPost.title).toBe("Is this working?");
    expect(newPost.author.username).toBe("Rich21");
    expect(newPost.forum.title).toBe("Gaming");
    expect(newPost.desc).toBe("I dont know if this is working or not!");
});

test("Can create comment on post", () => {
    const Food = new Forum("Food");
    const Jimmy = new User("Jmy32");
    const Polly = new User("PolPols");
    const proteins = Jimmy.createPost(Food,
        "Best food for protein?",
        "Im tryna get the gains bro");
    const spinach = Polly.createComment(Food,
        proteins.title,
        "Spinach");
    expect(proteins.comments[0]).toEqual(spinach);
});

test("Can create poll and vote", () => {
    const Politics = new Forum("Politics");
    const Sarah = new User("Sar22");
    const Eddy = new User("Edd");
    const globalWarming = Sarah.createPoll(Politics, "Is global warming real?", "Yes", "No");
    Eddy.vote(Politics, globalWarming.title, "Yes");
    expect(globalWarming.title).toBe("Is global warming real?");
    expect(globalWarming.forum.title).toBe("Politics");
    expect(globalWarming.options["Yes"][0]).toEqual(Eddy);
});

test("Can vote on posts and comments", () => {
    const Kettles = new Forum("Kettles");
    const Mary = new User("Mary");
    const John = new User("John");
    const Tim = new User("Tim");

    const newKettleTit = "Who likes my new kettle?";
    const newKettleDesc = "It is red!";
    const newKettle = Mary.createPost(Kettles, newKettleTit, newKettleDesc);
    John.upvotePost(Kettles, newKettleTit);
    expect(newKettle.upvotes).toBe(1);
    const kettleComment = John.createComment(Kettles, newKettleTit, "Lovely and red!");
    Mary.upvoteComment(Kettles, newKettleTit, "Lovely and red!");
    expect(kettleComment.upvotes).toBe(1);
    Tim.downvotePost(Kettles, newKettleTit);
    expect(newKettle.downvotes).toBe(1);
})