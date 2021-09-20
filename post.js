class Post {
    constructor(forum, title, author, desc) {
        this.title = title;
        this.author = author;
        this.forum = forum;
        this.desc = desc;
        this.date = new Date();
        this.comments = [];
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}

module.exports = Post;