import React from 'react';

const BlogPost = (props) =>{
    const {post} = props;
    return (
        post?
        <div className="Blog-wrapper">
            <h3 className="Blog-Tile-SubTitle">Date: {post.date.slice(0,10)} / Author: {post.author}</h3>
            <h2 className="Blog-Title">{post.title}</h2>
            <div className="Blog-Content" dangerouslySetInnerHTML={{__html: post.content.replace(/(<? *script)/gi, 'illegalscript')}}/>
        </div>
         : null
        );
}

export default BlogPost;