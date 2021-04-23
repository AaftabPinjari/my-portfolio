import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
    }
  }

`

const BlogPost = (props) => {

    return (
        <Layout>

            <div>
                <section className=" ">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {props.data.markdownRemark.frontmatter.title}
                        </h1>
                        {/*<img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src="https://dummyimage.com/720x600"></img>*/}
                        <div className="text-center lg:w-2/3 w-full">

                            <p className="mt-1 text-gray-500 text-sm">{props.data.markdownRemark.frontmatter.date}</p>
                            <div className="title-font mt-1  font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} ></div>
                            {/*<p className="mb-8 leading-relaxed">
                                Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.
                                Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami
                                snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk
                                freegan photo booth af fingerstache pitchfork.
                                </p>*/}
                            {/*<div className="flex justify-center">
                                <button
                                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Button
                                </button>
                                <button
                                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                    Button
                                </button>
                                </div>*/}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default BlogPost
