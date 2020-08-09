import Layout from '../Components/Layout';
import Nav from '../Components/Nav';
import PostPreviewWrapper from '../Components/PostPreviewsWrapper';
import client from '../client';
import groq from 'groq';
import urlImageBuilder from '@sanity/image-url';

const urlFor = (source) => {
  return urlImageBuilder(client).image(source);
}

const Post = ({data}) => {
const posts = data.map((item =>( {...item, previewImage: urlFor(item.mainImage).width(400).url()})));
return (
  <Layout>
  <Nav current='blog' />
  <PostPreviewWrapper posts={posts}/>
  </Layout>
)
}

const query = groq`*[_type == "post"]{
  mainImage,
  title,
  publishedAt,
  "author": author -> name,
  "categories": categories[] -> title,
  slug,
  excerpt
}`;

export async function getServerSideProps(context) {
  const data =  await client.fetch(query)  
  return {props: {data}}
}

export default Post;