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
            Promise.all([...this.state.docs.map(item => item.blogThumbNail[0].get())])
            .then((data)=>this.setState({thumbs: data.map(i => i.data())}))
        }));
    }
    getThumbNail(){

    }
    openArticle = (e, id) =>{
        e.preventDefault();
        this.props.history.push(`blog/${id}`);
    }
    render(){
        return (<div className="Blog-Sections">
        {this.state.currentBlog ? <BlogPost post={this.state.docs.filter(item => item.id === this.state.currentBlog)[0]}/> :
        this.state.docs.map((blog, i) => <BlogTile fire key={i} index={i} data={blog} navigateTo={this.openArticle} image={this.state.thumbs.filter(i => i.id === blog.blogThumbNail[0].id)[0]} />)}
        </div>)
    }
}

export default withRouter(BlogSections);