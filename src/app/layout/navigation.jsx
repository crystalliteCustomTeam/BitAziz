"use client";
import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { NavIcon, ServiceArrow, SubMenuIcon } from "@/src/app/app-constants"
import { Container } from "react-bootstrap"
import { useState } from "react"
import PopUp from "@/src/app/services/popup"
import { usePathname } from "next/navigation";

const ServicesMenu = [
  {
    title: "Mobile App Development",
    url: "/mobile-application-development-services",
  },
  {
    title: "AI Development Company",
    url: "/ai-development-company",
  },
  {
    title: "Android app development",
    url: "/android-app-development-company",
  },
  {
    title: "Mobile Game Development",
    url: "/mobile-game-development-company",
  },
  {
    title: "iOS app development",
    url: "/ios-app-development-company",
  },
  {
    title: "2d Game Development",
    url: "/2d-game-development-company",
  },
  {
    title: "Hybrid app development",
    url: "/hybrid-app-development-company",
  },
  {
    title: "3d Game Development",
    url: "/3d-game-development-company",
  },
  {
    title: "React Native app development",
    url: "/react-native-app-development",
  },
  {
    title: "Web3 Game Development",
    url: "/web3-game-development-company",
  },
  {
    title: "Cross Platform app development",
    url: "/cross-platform-app-development-services",
  },
  {
    title: "Blockchain game development",
    url: "/blockchain-game-development-company",
  },
  {
    title: "Flutter app development",
    url: "/flutter-app-development",
  },
  {
    title: "NFT game development",
    url: "/nft-game-development-company",
  },
]
const IndustriesMenu = [
  {
    title: "Healthcare",
    url: "/healthcare-app-development-services",
  },
  {
    title: "E-Commerce",
    url: "/ecommerce-app-development",
  },
  {
    title: "Education",
    url: "/education-app-development",
  },
  {
    title: "Real Estate",
    url: "/real-estate-app-development-company",
  },
  {
    title: "Music",
    url: "/music-app-development-company",
  },
  {
    title: "Automotive",
    url: "/automotive-software-development",
  },
  {
    title: "Social Media",
    url: "/social-media-app-development-company",
  },
  {
    title: "Logistics",
    url: "/logistics-software-development",
  },
  {
    title: "Fintech",
    url: "/fintech-app-development",
  },
  {
    title: "Taxi App",
    url: "/taxi-app-development-company",
  },
  {
    title: "Restaurant App",
    url: "/restaurant-app-development-company",
  },
  {
    title: "Enterprise App",
    url: "/enterprise-app-development-company",
  },
]

const arabicUrl = "/sa/شركة-تطوير-تطبيقات-الجوال-في-السعودية";
const englishUrl = "/mobile-app-development-company-saudi-arabia";

const Navigation = ({ isDarkHeader, isLightHeader, scrolled }) => {
  const [isActive, setIsActive] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const pathname = usePathname();



  const currentPath = decodeURIComponent(pathname);


  const handleClick = () => {
    setIsActive(!isActive)
    if (!isActive) {
      document.body.classList.add("active")
    } else {
      document.body.classList.remove("active")
    }
  }

  const handlePopUp = () => {
    setModalShow(true)
  }
  const HeaderLight = isLightHeader ? `${styles.blackNav}` : ""
  const HeaderDark = isDarkHeader ? `${styles.whiteNav}` : ""
  const HeaderScroll = scrolled ? `${styles.NavScroll}` : ""

  return (
    <>
      <div
        onClick={handleClick}
        className={`${isActive ? "navIcon active" : "navIcon"}`}
      >
        <NavIcon />
      </div>
      <ul
        className={`${styles.mainNavigation} ${HeaderLight}  ${HeaderDark} ${HeaderScroll}`}
      >
        <li>
          <Link href="/">Home </Link>
        </li>
        <li className={styles.subMenu}>
          <Link href="#">Services</Link>
          <div className={styles.submenuContainer}>
            <Container>
              <div className={styles.submenuBox}>
                <div className={styles.submenuItem}>
                  <div className={styles.title}>Services</div>
                  <ul>
                    {ServicesMenu.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.submenuItem}>
                  <div className={styles.title}>Industries</div>
                  <ul>
                    {IndustriesMenu.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className={styles.submenuItemLast}>
                                <ul>
                                    {LocationsMenu.map((item, index) => (
                                        <li key={index}><Link href={item.url}>{item.title} <ServiceArrow /></Link></li>
                                    ))}
                                </ul>
                            </div> */}
            </Container>
          </div>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
        {currentPath === arabicUrl ? (
          <li>
            <Link href={englishUrl}>EN</Link>
          </li>
        ) : currentPath === englishUrl ? (
          <li>
            <Link href={arabicUrl}>عربي</Link>
          </li>
        ) : null}
        <li className={styles.btnHeader} onClick={() => handlePopUp()}>
          <Link href="">Connect Now</Link>
        </li>
        <li className={styles.btnHeader}>
          <a href="tel:+18335006007">+1 833 500 6007</a>
        </li>
      </ul >
      <div
        className={`${styles.mainMobileNavigation}  ${isActive ? `${styles.active}` : ""
          }`}
      >
        <ul className={styles.mobileNavigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/about-us">About</Link>
          </li>
          <li className={styles.subMobileMenu}>
            <Link href="#">
              Services <SubMenuIcon />
            </Link>
            <ul className={styles.mobilesubMenu}>
              {ServicesMenu.map((item, index) => (
                <li onClick={handleClick} key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.subMobileMenu}>
            <Link href="#">
              Industries <SubMenuIcon />
            </Link>
            <ul className={styles.mobilesubMenu}>
              {IndustriesMenu.map((item, index) => (
                <li onClick={handleClick} key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li className={styles.subMobileMenu}>
                        <Link href="#">Locations <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {LocationsMenu.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}>{item.title}</Link></li>
                            ))}
                        </ul>
                    </li> */}
          <li>
            <Link href="/portfolio" onClick={handleClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={handleClick}>Blog</Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={handleClick}>
              Contact
            </Link>
          </li>
          {currentPath === arabicUrl ? (
            <li onClick={handleClick}>
              <Link href={englishUrl}>EN</Link>
            </li>
          ) : currentPath === englishUrl ? (
            <li onClick={handleClick}>
              <Link href={arabicUrl}>عربي</Link>
            </li>
          ) : null}
          <li>
            <Link href="/contact-us" onClick={() => handlePopUp()}>
              Connect Now
            </Link>
          </li>
          <li >
            <a href="tel:+18335006007">+1 833 500 6007</a>
          </li>
        </ul>
      </div>
      <PopUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Navigation
