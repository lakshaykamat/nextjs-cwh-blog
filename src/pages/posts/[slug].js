import Spinner from '@/components/Spinner';
import Head from 'next/head';
import React, {  useState } from 'react'
import * as fs from 'fs'

const BlogDetailPage = ({blogContents}) => {

  const [blogContent, setBlogContent] = useState(blogContents)

  if (!blogContent) {
    return <Spinner/>
  }
  
  return (
    <>
      <style>{`
        p {
          margin:1rem 0
        }
      `}</style>
      <Head>
        <title>{blogContent.title}</title>
      </Head>
      <div className=" lg:mx-28 mx-5 py-8 px-4">
        <h1 className="text-4xl font-semibold mb-4">{blogContent.title}</h1>
        <p className="text-gray-500 mb-4">
          By {blogContent.author} | {blogContent.date}
        </p>

        <article
          className={`prose max-w-none }`}
          dangerouslySetInnerHTML={{ __html: blogContent.content }}
        />
      </div>

    </>
  )
}

export default BlogDetailPage

export async function getStaticPaths(){
  return {
    paths:[
      {params:{slug: 'how-to-learn-javascript'}}
    ],
    fallback:true
  }
}
export async function getStaticProps(context) {
  const { slug } = context.params

  let res = await fs.promises.readFile(`blogData/${slug}.json`, 'utf-8')

  return {
    props: {
      blogContents:JSON.parse(res)
    }, // will be passed to the page component as props
  }
}
