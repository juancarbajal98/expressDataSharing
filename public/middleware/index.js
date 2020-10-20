// creating first middleware func to check for author of post
    const Post = require('../models/posts');

    // hardcode current user to have id of 1
    const currentUser = {
        _id: 1,
        username: 'Juan'
    }

    module.exports = {
        isAuthor(req,res,next){
            const post = Post.findById(req.params.id);
            // if id's match
            // => post is updated and middleware handles 
            //    it off to next function in middleware line
            //    which in our case will be the callback 
            if (post.author._id === currentUser._id){
                // instead of trying to pass the post into next (an error)
                // we use res.locals which serves as a way to pass the
                // post into the callback if user succesfully passes 
                // middleware

                /*
                    the res.locals object serves as a common container
                    in the case that you may have to access data 
                    from several previous middleware funcs

                    => passing into next() is not good practice

                    => this way we can get through all our callbacks 
                       collecting necessary info for when we reach
                       the callback we have access to that
                */
                res.locals.post = post;
                next();
            }
            // otherwise
            // => REDIRECT USER and show an error
            else{
                req.session.error = "Must be author of post to edit!";
                return res.redirect('/app');
            }
        }
    }