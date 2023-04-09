import BlogCard from "@/components/BlogCard";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as fs from 'fs'
const PostPage = ({allBlogs}) => {
  const [blogPosts, setBlogPosts] = useState(null);
  useEffect(()=>{
    setBlogPosts(allBlogs)
  },[])
  if (!blogPosts) {
    return <Spinner/>;
  }
  return (
    <div className="container mx-auto py-8 max-w-5xl px-4">
      <h1 className="text-4xl font-semibold mb-4">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            slug={post.slug}
            title={post.title}
            author={post.author}
            date={post.date}
            imageSrc={post.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
export default PostPage;
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData")
  let myFile
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
      const item = data[index];
      myFile = await fs.promises.readFile(('blogData/'+item),'utf-8')
      allBlogs.push(JSON.parse(myFile))

  }
      
  return {
    props: {allBlogs} // will be passed to the page component as props
  }
}
