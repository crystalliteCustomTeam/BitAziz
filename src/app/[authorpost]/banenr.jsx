import styles from "@/styles/author/banner.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import Profile from "media/newblogs/blog-client.png";
import BannerBg from "media/newblogs/blogs-banner.webp";

const data = [
  {
    name: "Isabella Harris",
    description:
      "Isabella Harris is a skilled Content Writer at Bitswits, renowned for her storytelling abilities and deep tech knowledge. She creates engaging and accessible content that effectively communicates",
    image: Profile.src,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    slug: "isabella-harris",
  },
];

const Banner = ({ slug }) => {
  if (!slug) return null; 

  const author = data.find(
    (author) => author.slug?.toLowerCase() === slug.toLowerCase()
  );


  if (!author) return null; 
  console.log("Author data:", author); 
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
                  {author.socialLinks.facebook && (
                    <a href={author.socialLinks.facebook} className="me-3">
                      <FacebookIcon size={32} round />
                    </a>
                  )}
                  {author.socialLinks.twitter && (
                    <a href={author.socialLinks.twitter} className="me-3">
                      <TwitterIcon size={32} round />
                    </a>
                  )}
                  {author.socialLinks.linkedin && (
                    <a href={author.socialLinks.linkedin}>
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
