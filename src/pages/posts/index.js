import BlogCard from "@/components/BlogCard";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let res = await data.json()
      
  return {
    props: {
      allBlogs:res
    }, // will be passed to the page component as props
  }
}
