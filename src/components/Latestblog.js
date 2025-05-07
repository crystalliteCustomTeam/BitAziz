"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Latestblog.module.css";
import { getPostRecent } from "@/lib/posts";
import FeaturedImage from "@/src/components/FeaturedImage";
import Image from "next/image";

const Latestblog = (props) => {
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
    <>
      <section className={styles.ourBlogs}>
        <Container>
          <Row className="gy-4 gy-lg-5">
            {posts.length !== 0 ? (
              <>
                <Col lg={12}>
                  <h4 className="font40 text-black f-500 center">
                    Our Latest Blog Posts
                  </h4>
                </Col>
                {posts.map((post, index) => (
                  <Col md={4} className="mb-lg-3">
                    <div
                      key={index}
                      className={`${styles.blogBox}  d-flex flex-column gap-2 gap-lg-4 pb-3 pb-lg-5`}
                    >
                      <div className={styles.imgBlog}>
                        {post.featuredImage ? (
                          <Image
                            src={`https://inhouse.pulse-force.com/wordpress/bitswits/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}`}
                            alt={post.title}
                            fill
                          />
                        ) : (
                          <Image
                            src={`https://inhouse.pulse-force.com/wordpress/bitswits/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png`}
                            alt={post.title}
                            fill
                          />
                        )}
                      </div>
                      <div className="px-3">
                        <h4 className="text-black f-500">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>

                        {post.excerpt && (
                          <p className="fw300 m-0">
                            {post.excerpt
                              .replace(/<[^>]+>/g, "")
                              .substring(0, 150)}
                            ...
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                ))}
                <Col lg={12}>
                  <Link
                    rel="preload"
                    href="/blog"
                    className={`${styles.blogBtn} pink mt-3 mt-lg-0`}
                  >
                    View All
                  </Link>
                </Col>
              </>
            ) : (
              <Col lg={12} md={12} className="m-auto">
                <p className="text-center">Loading Related Blog Posts</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Latestblog;
