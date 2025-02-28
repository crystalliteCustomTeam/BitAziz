"use client"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
const Footer = dynamic(() => import("@/src/app/layout/footer"))
const LpFooter = dynamic(() => import("./website-development-services/layout/footer"))
const LcFooter = dynamic(() => import("@/src/components/LocationsFooter"))

const lpHeaderFooterPaths = [
  "/website-development-services",
  "/app-marketing",
  "/top-mobile-app-developers",
  "/lp/mobile-app-development-services",
]

const locationsFooterPaths = [
  "/app-development-austin",
  "/app-development-chicago",
  "/mobile-app-development-company-dallas",
  "/mobile-app-development-company-denver",
  "/mobile-app-development-company-dubai",
  "/app-development-florida",
  "/mobile-app-development-company-miami",
  "/app-development-company-new-york",
  "/mobile-app-development-company-saudi-arabia",
  "/app-development-company-toronto",
  "/app-development-company-washington-dc",
  "/app-development-houston",
]

const ConditionalFooter = () => {
  const pathname = usePathname()
  const isLpFooter = lpHeaderFooterPaths.includes(pathname)
  const isLocationsFooter = locationsFooterPaths.includes(pathname)

  if (isLocationsFooter) {
    return <LcFooter />
  } else if (isLpFooter) {
    return <LpFooter />
  } else {
    return <Footer />
  }
}

export default ConditionalFooter