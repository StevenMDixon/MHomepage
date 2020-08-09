import styles from './PostPreviewItem.module.scss';
import Link from 'next/link';


const PostPreviewItem = ({post}) => {

  console.log(post)
  return (
  <Link href="/posts/pid" as={`/posts/${post.slug.current}`} >
    <article className={styles.preview_item}>
      <img className={styles.preview_image} alt="Preview picture for article" src={post.previewImage}/>
      <div className={styles.article_wrapper}>
        <h3 className={styles.preview_title}>{post.title}</h3>
        <p className={styles.preview_excerpt}>{post.excerpt}</p>
        <p className={styles.preview_date}>{new Date(post.publishedAt).toLocaleDateString()}</p>
      </div>
    </article>  
    </Link>
  )
}

export default PostPreviewItem;