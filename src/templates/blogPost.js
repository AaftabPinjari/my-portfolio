import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Seo } from '../components/Seo'

export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        desc
      }
      html
    }
  }

`

const BlogPost = (props) => {

    return (

        <Layout>

            <Seo
                title={props.data.markdownRemark.frontmatter.title}
                description={props.data.markdownRemark.frontmatter.desc}
            />
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {props.data.markdownRemark.frontmatter.title}
                </h1>
                <div className=" lg:w-2/3 w-full">

                    <p className="mt-1 text-gray-500 text-sm">{props.data.markdownRemark.frontmatter.date}</p>
                    <div className="prose" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} ></div>
                </div>
            </div>



        </Layout>

    )
}

export default BlogPost
