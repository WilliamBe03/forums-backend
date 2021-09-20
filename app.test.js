const User = require("./user");
const Forum = require("./forum");
const Post = require("./post");
const Comment = require("./comment");

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

test("Can create comment", () => {
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
