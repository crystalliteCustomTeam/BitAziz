import styles from "@/styles/author/banner.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

import BannerBg from "media/newblogs/blogs-banner.webp";

const Banner = ({ slug, data }) => {
  if (!slug || !data) return null;

  const author = data.find(
    (author) => author.slug?.toLowerCase() === slug.toLowerCase()
  );

  if (!author) return null;

  const social = author.socialLinks || {};

  return (
    <section
      className={styles.bannerAuthorSec}
      style={{ backgroundImage: `url(${BannerBg.src})` }}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} lg={8} className="m-auto text-center">
            <div className={styles.authorBox}>
              <div className={styles.authorImage}>
                <Image
                  src={author.image}
                  alt={author.name}
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.authorContent}>
                <h2 className={styles.authorName}>{author.name}</h2>
                <p className={styles.authorInfo}>{author.description}</p>
                <div className={styles.socialIcons}>
                  {social.facebook && (
                    <a
                      href={social.facebook}
                      className="me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon size={32} round />
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={social.twitter}
                      className="me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon size={32} round />
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon size={32} round />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
