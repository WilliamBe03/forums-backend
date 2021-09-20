class Forum {
    constructor(title) {
        this.title = title;
        this.posts = [];
    }
    addPost(post) {
        this.posts.push(post);
    }
    findPost(postName) {
        for (let post of this.posts) {
            if (post.title == postName) {
                return post;
            }
        }
    }
}

module.exports = Forum;