class Comment {
    constructor(author, comment) {
        this.author = author;
        this.comment = comment;
        this.date = new Date();
    }
}

module.exports = Comment;