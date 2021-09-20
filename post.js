class Post {
    constructor(forum, title, author, desc) {
        this.title = title;
        this.author = author;
        this.forum = forum;
        this.desc = desc;
        this.date = new Date();
        this.comments = [];
        this.upvotes = 0
        this.downvotes = 0
        this.netvotes = this.upvotes - this.downvotes
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    removeComment(comment) {
        const index = this.comments.indexOf(comment);
        if (index > -1) {
            this.comments.splice(index, 1);
        }
    }
    findComment(comment) {
        for (let com of this.comments) {
            if (com.comment == comment) {
                return com;
            }
        }
        throw "Comment doesn't exist!";
    }
}

module.exports = Post;