import client from '../../client';
import Layout from '../../Components/Layout';
import Nav from '../../Components/Nav';
import PostWrapper from '../../Components/PostWrapper';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';


function urlFor (source) {
  return imageUrlBuilder(client).image(source);
}


const Post = ({data}) => {
console.log(data)
const postData = {
  ...data,
  categories: data.categories,
  mainImage: urlFor(data.mainImage).width(1200).url(),
  authorImage: urlFor(data.authorImage).width(100).url()
}

 
return (
<Layout>
<Nav current='blog' />
<PostWrapper client = {client} post = {postData}>
  <BlockContent
    blocks = {data.body}
    imageOptions={{w: 480, h:240, fit: 'max'}}
    {...client.config()}
    />
</PostWrapper>
</Layout>
)
}

const query = groq`*[_type == "post" && slug.current == $pid][0]{
  title,
  "name": author ->name,
  "categories": categories[] -> title,
  "authorImage": author -> image,
  body,
  mainImage,
  publishedAt
} `;

export async function getServerSideProps(context) {
  const{ pid = "" } = context.query;
  const data =  await client.fetch(
    query, {pid})  

  return {props: {data}}
}



export default Post