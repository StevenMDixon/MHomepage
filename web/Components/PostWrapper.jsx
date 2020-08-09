import styles from './PostWrapper.module.scss';

const PostWrapper = ({children, post}) => {
  return (
  <div className={styles.post_wrapper}>
    <img className={styles.post_main_image} src={post.mainImage}></img>
    <div className={styles.post_article_wrapper}>
      <article className={styles.post_main}>
        <h1 className ={styles.post_main_title}>{post.title}</h1>
      {children}
       </article>
      <div className={styles.post_side_bar}>
       <p className={styles.post_publish_date}>{new Date(post.publishedAt).toDateString()}</p>
       <div className={styles.post_author}>
         <p>Author</p>
         <div className = {styles.post_author_wrapper}>
          <img className={styles.author_image} src={post.authorImage} />
          <p className={styles.author_name}>{post.name}</p>
         </div>
       </div>
       <div className={styles.post_categories}>
         <p>Categories</p>
         <div className = {styles.post_category_wrapper}>
          {post.categories.map(item => <p key={item}>{item}</p>)}
         </div>
       </div>
      </div>
    </div>
   
  </div>
  )
}

export default PostWrapper;