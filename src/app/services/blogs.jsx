"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/services/blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowIcon } from '@/src/app/app-constants'
import Link from "next/link";

import { getPostRecent } from "@/lib/posts";
import FeaturedImage from "@/src/components/FeaturedImage";
import Image from "next/image";

const Blogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const postsData = await getPostRecent(); // No need to pass parameters here
                setPosts(postsData.nodes); // Access 'nodes' from the response
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        })();
    }, []);

    return (
        <section className={`${styles.blogsSection} pb-100`}>
            <Container>
                <Row>
                    {posts.length !== 0 ? (
                        <>
                            <Col lg={12} md={12} className="m-auto">
                                <h2 className="text-center">Our Related Blog Posts</h2>
                            </Col>
                            {posts.map((post, index) => (
                                <Col lg={4} md={6} className='m-auto' key={index}>
                                    <div className={styles.blogBox}>
                                        <div className={styles.imgBox}>

                                            {post.featuredImage
                                                ?
                                                <Image src={`https://inhouse.pulse-force.com/wordpress/bitswits/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}`} alt={post.title} fill />
                                                :
                                                <Image src={`https://inhouse.pulse-force.com/wordpress/bitswits/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png`} alt={post.title} fill />


                                            }
                                        </div>
                                        <div className={styles.contentBox}>
                                            <div className={styles.category}>
                                                {post.categories?.nodes?.map((category) => (
                                                    <div key={category.slug}>
                                                        {category.name}
                                                    </div>
                                                ))}
                                            </div>
                                            <h6><Link href={`/blog/${post.slug}`}>{post.title}</Link></h6>
                                            {post.excerpt && (
                                                <p>
                                                    {post.excerpt.replace(/<[^>]+>/g, '').substring(0, 150)}...
                                                </p>
                                            )}
                                            <div className={styles.btnBox}>
                                                <div className={styles.data}>{new Date(post.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric"
                                                })}</div>
                                                <div className={styles.links}>
                                                    <Link href={`/blog/${post.slug}`} >Read More <ArrowIcon /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </>
                    ) : (
                        <Col lg={12} md={12} className="m-auto">
                            <h2 className="text-center">Loading Related Blog Posts</h2>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
