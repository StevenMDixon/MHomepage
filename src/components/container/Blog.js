import React, {Component} from 'react';
import BlogTile from '../presentational/BlogTile';
import BlogPost from '../presentational/BlogPost';
import '../css/blog.scss';
import {withRouter} from 'react-router-dom';

class BlogSections extends Component {
    constructor(props){
        super(props);
        this.state = {
            docs: [],
            thumbs: [],
            currentBlog: ""
        }
    }
    componentDidMount(){
        this.setState({currentBlog: this.props.match.params.blogId});
        const db = this.props.fire.firestore();
        db.collection("fl_content").get()
        .then(refs => this.setState({docs: 
        refs.docs.filter(item => item.data().status === "published")
        .map(item => item.data())
        .sort((a,b) => new Date(a.date) > new Date(b.date)? -1:1)}
        , ()=>{
            
        }));
    }
    openArticle = (e, id) =>{
        e.preventDefault();
        this.props.history.push(`blog/${id}`);
    }
    render(){
        return (<div className="Blog-Sections">
        {this.state.currentBlog ? <BlogPost post={this.state.docs.filter(item => item.id === this.state.currentBlog)[0]}/> :
        this.state.docs.map((blog, i) => <BlogTile fire key={i} index={i} data={blog} navigateTo={this.openArticle} />)}
        </div>)
    }
}

export default withRouter(BlogSections);