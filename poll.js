class Poll {
    constructor(forum, title, author, ...options) {
        this.forum = forum;
        this.date = new Date();
        this.title = title;
        this.author = author;
        this.options = {};
        for (let op of options[0]) {
            this.options[op] = [];
        }
        this.comments = [];
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    addVote(option, user) {
        this.options[option].push(user);
    }
}

module.exports = Poll;