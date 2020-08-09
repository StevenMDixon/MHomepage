import styles from './PostPreviewWrapper.module.scss';
import PostPreviewItem from './PostPreviewItem';

const PostPreviewWrapper = ({posts}) => {
  
 return(
  <div className={styles.preview_wrapper}>
    <h2>Latest Posts:</h2>
    {posts.map(item => <PostPreviewItem key={item.title} post={item}/>)}
  </div>

 );

}

export default PostPreviewWrapper;