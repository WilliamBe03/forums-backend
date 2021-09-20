class Comment {
    constructor(author, comment) {
        this.author = author;
        this.comment = comment;
        this.date = new Date();
        this.upvotes = 0
        this.downvotes = 0
        this.netvotes = this.upvotes - this.downvotes
    }
}

module.exports = Comment;