import React, {Component} from 'react';
import BlogTile from '../presentational/BlogTile';
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
        console.log(this.props)
        this.setState({currentBlog: this.props.match.params.blogId});
        const db = this.props.fire.firestore();
        db.collection("fl_content").get()
        .then(refs => this.setState({docs: refs.docs.reverse().filter(item => item.data().status === "published").map(item => item.data())}
        , ()=>{
            Promise.all([...this.state.docs.map(item => item.blogThumbNail[0].get())])
            .then((data)=>this.setState({thumbs: data.map(i => i.data())}))
        }));
    }
    openArticle = (e, id) =>{
        e.preventDefault();
        this.props.history.push(`blog/${id}`);
    }
    render(){
        return (<div className="Blog-Sections">
        {this.state.currentBlog ? null :
        this.state.docs.map((blog, i) => <BlogTile fire key={i+'l'} index={i} data={blog} navigateTo={this.openArticle} image={this.state.thumbs.filter(i => i.id === blog.blogThumbNail[0].id)[0]} />)}
        </div>)
    }
}

export default withRouter(BlogSections);