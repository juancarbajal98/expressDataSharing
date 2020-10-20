// array of objects - each object being a post
const posts = [
    {
        _id: 1,
        title: 'Hello World',
        body: 'post 1',
        author: {
            _id: 1,
            username: 'Juan1'
        }
    },
    {
        _id: 2,
        title: 'Hello',
        body: 'post 2',
        author: {
            _id: 2,
            username: 'Juan2'
        }
    },
    {
        _id: 3,
        title: 'World',
        body: 'post 3',
        author: {
            _id: 3,
            username: 'Juan3'
        }
    },
];

/*  
object we export - has two defined methods :
    1. find: returns all posts
    2. findById: returns post from specified id
*/
const Post = {
    find: () => {
        return posts;
    },
    findById: (id) => {
        // utilize .filter() method to find by id
        result = posts.filter(post => post._id === Number(id));
        return result[0];
    }
};

module.exports = Post;