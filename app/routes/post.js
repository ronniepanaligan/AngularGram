// Dependencies
var mongoose  = require('mongoose');
var Post = require('../models/post');
// App routes
module.exports = function() {
    return {

        getAll : function(req, res){

            var query = Post.find({});
            query.exec(function(err, posts){
                if(err) res.send(err);

                res.json(posts);
            });
        },

        post: function(req, res){

            var newPost = new Post(req.body);

            newPost.save(function(err){
                if(err) res.send(err);

                res.json(req.body);
            });
        },

        delete: function(req, res) {
                Post.remove({
                    _id: req.params.post_id
                }, function(err, post) {
                    if (err) res.send(err);

                Post.find(function(err, posts) {
                  if(err)
                    res.send(err)
                  res.json(posts)
                });
            });
        },

        getOne: function(req, res){
            Post.findById(req.params.id, function(err, post){
                if(err) res.send(err);

                res.json(post);
            });
        }
    };
};
