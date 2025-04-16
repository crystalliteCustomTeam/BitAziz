"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/blogNew/BlogContent.module.css";
//===== Components
import { getPostList } from "@/lib/posts";
import FeaturedImage from "@/src/components/FeaturedImage";
//===== Images
import Arrow from "media/newblogs/blogArrow.png";
import BannerBg from "media/newblogs/blogs-banner.webp";

const AuthorListing = ({ slug }) => {
  const [posts, setPosts] = useState({ nodes: [], pageInfo: {} });
  const [buttonText, setButtonText] = useState("Load More");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (endCursor = null) => {
    try {
      setLoading(true);
      const newPosts = await getPostList(endCursor);
      return newPosts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { nodes: [], pageInfo: {} };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const initialPosts = await fetchPosts();
      setPosts(initialPosts);
    })();
  }, []);

  const handleLoadMore = async () => {
    setButtonText("Loading...");
    setButtonDisabled(true);

    const morePosts = await fetchPosts(posts.pageInfo?.endCursor);

    setPosts((prevPosts) => ({
      pageInfo: morePosts.pageInfo,
      nodes: [...prevPosts.nodes, ...morePosts.nodes],
    }));

    if (morePosts.pageInfo?.hasNextPage) {
      setButtonText("Load More");
      setButtonDisabled(false);
    } else {
      setButtonText("No more posts to load");
      setButtonDisabled(true);
    }
  };

  const filteredPosts = slug
    ? posts.nodes.filter(
        (post) =>
          post.author?.node?.name?.toLowerCase().replace(/\s+/g, "-") ===
          slug.toLowerCase()
      )
    : [];

  return (
    <>
    
      <section className={styles.blogcontent}>
        <Container>
          <Row>
            <Col lg={12} className="mt-md-4">
              <Row className="gy-3">
                {loading && (
                  <Col lg={12} className="text-center">
                    <div className={styles.loader}>
                      <div className={styles.loaderRoller}>
                        {[...Array(8)].map((_, i) => (
                          <div key={i}></div>
                        ))}
                      </div>
                      <div className={styles.loaderTxt}>Loading...</div>
                    </div>
                  </Col>
                )}
                {filteredPosts.length === 0 ? (
                  <p className={`${styles.blogDesciption} text-center`}>
                    No data found
                  </p>
                ) : (
                  filteredPosts.map((post, i) => (
                    <Col
                      key={i}
                      md={6}
                      lg={4}
                      className="p-2 order-3 order-lg-1"
                    >
                      <div className={styles.card}>
                        <FeaturedImage post={post} className="w-100" />
                        <div className={styles.cardContent}>
                          {post.categories.nodes.map((category) => (
                            <p
                              key={category.slug}
                              className={`fontsfregular ${styles.categoriesPara}`}
                            >
                              {category.name}
                            </p>
                          ))}
                          <Link href={`/blog/${post.slug}`}>
                            <h5 className="fontsfregular text-black">
                              {post.title}
                            </h5>
                          </Link>
                          <div
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            className={styles.blogDesciption}
                          ></div>
                          <div className={styles.btn}>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-black"
                            >
                              Read More
                              <Image
                                src={Arrow}
                                alt="Bitswits"
                                className="ms-2"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <button
                className={styles.loadMore}
                onClick={handleLoadMore}
                disabled={buttonDisabled}
              >
                {buttonText}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AuthorListing;
