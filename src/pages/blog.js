import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from './components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                      category
                    }
                    fields {
                        slug
                    }
                  }
                }
            }
        }
    `)

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">{data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <div className="-my-8 divide-y-2 divide-gray-100">

                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">{edge.node.frontmatter.category}</span>
                                    <span className="mt-1 text-gray-500 text-sm">{edge.node.frontmatter.date}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <Link to={`/blog/${edge.node.fields.slug}`}><h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{edge.node.frontmatter.title}</h2></Link>
                                    <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                    <Link to={`/blog/${edge.node.fields.slug}`} className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
                </div>
            </section>
        </Layout >
    )
}

export default BlogPage