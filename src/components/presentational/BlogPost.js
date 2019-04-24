import React from 'react';

const BlogPost = (props) =>{
    console.log(props)
    const {post} = props;
    return (
        post?
        <div className="Blog-wrapper">
            <h2 className="Blog-Title">{post.title}</h2>
            <div className="Blog-Content" dangerouslySetInnerHTML={{__html: post.content.replace(/(<? *script)/gi, 'illegalscript')}}/>
        </div>
         : null
        );
}

export default BlogPost;