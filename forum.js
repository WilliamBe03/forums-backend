class Forum {
    constructor(title) {
        this.title = title;
        this.posts = [];
    }
    addPost(post) {
        this.posts.push(post);
    }
    removePost(post) {
        const index = this.posts.indexOf(post);
        if (index > -1) {
            this.posts.splice(index, 1)
        }
    }
    findPost(postName) {
        for (let post of this.posts) {
            if (post.title == postName) {
                return post;
            }
        }
        throw "Post doesn't exist!";
    }
}

module.exports = Forum;