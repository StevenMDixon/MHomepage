import React from 'react';

const BlogTile = (props) => {
    //console.log(props)
    let image = props.image? props.image.file : null;
    let url = image? `https://firebasestorage.googleapis.com/v0/b/mollies-website.appspot.com/o/flamelink%2Fmedia%2F${image}?alt=media&token=b92d99cb-8a7b-49fb-b4ee-871695fe39f9`: null;
    return(
    <div className={props.index%2===0? "Blog-OverView-Wrapper normal": "Blog-OverView-Wrapper reverse"}>
        <img alt="Thumbnail for Blog entry" className="Blog-ThumbNail" src={url}></img>
        <div className="Blog-Content-Wrapper">
            <h3 className="Blog-Tile-SubTitle">Date: {props.data.date.slice(0,10)} / Author: {props.data.author}</h3>
            <h1 className="Blog-Tile-Title">{props.data.title}  </h1>
            <p className="Blog-Tile-Summary"> {props.data.summary.slice(0,400)} ...<a href={`./${props.data.id}`}>Read More</a></p>
        </div>
        
    </div>)
};

export default BlogTile;