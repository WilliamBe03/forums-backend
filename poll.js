class Poll {
    constructor(forum, title, author, ...options) {
        this.forum = forum;
        this.date = new Date();
        this.title = title;
        this.author = author;
        this.options = {};
        for (let op in options) {
            options[op] = [];
        }

    }
}