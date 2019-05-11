import React from 'react';

const BlogTile = (props) => {
    return(
    <div className={"Blog-OverView-Wrapper"}>
        <div className="Blog-Content-Wrapper">
            <h3 className="Blog-Tile-SubTitle">Date: {props.data.date.slice(0,10)} / Author: {props.data.author}</h3>
            <h1 className="Blog-Tile-Title">{props.data.title}  </h1>
            <p className="Blog-Tile-Summary">{props.data.summary.slice(0,400)} ...<button className="Blog-readmore" onClick={(e)=>props.navigateTo(e, props.data.id)}>Read More</button></p>
        </div>
    </div>)
};

export default BlogTile;