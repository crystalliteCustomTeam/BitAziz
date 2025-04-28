"use client"
import { useEffect, useState } from "react"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"

const indexingapi = {
  type: "service_account",
  project_id: "bitswits-412709",
  private_key_id: "4859cfdcdf34feea60574b2ad152fd8b278b3b14",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDMhKVvtaYcez5\nnCGDGFFfN5n2L90ljPUrfPTEkGzTxCDWWABqFNB01ych5wYDeL8Mp0ZLyUm1uuVv\nnWyT/a1JWgrQ3d5wi0mXBTMu6r1L30dIb8H42mLVKZpStelsHoqNhVkCrK7Lhfq0\nfgXbYNJB98FK8/zsyd6CzzzeBbc3tN1bSXl0dr1v+BkKL8eRXDtQLJmh0KVRS3tj\nHmNv470Gcn4QjEZ9bybLX1jbOvPp1LC/NVuV4vntZgtDbbTGjN6rmWLBLdsRvLq5\n/FIj/HFiTQlElCKJzc4EhZn2Lis/C0A5ve+GnHQI5L4Yl4lf8n3ePXcNPEtG+REW\n4awcxtS/AgMBAAECggEAGocTlNulY9JtLP8rDsX0nnF6sG/mKNRJ/ZRd2i5GnAEW\nSrXAWKpmKiWTYT15yRRVN+2ugAjlxkJALDXDgS6t/j9eeO8DlrKsraQ8my5hIOPs\nrCDZcRiSQKYGyHbbN6EZngzMAVu2kF0FABf1ySVqGHezV/G7eJ12wBBUwAJxhABe\nca2HVICeh2kxfS6hDZq/SdgrJ+OYOQ0dVCJoVq+V1Yn56twvzCyF0ybUwuLbeT8H\n7z+6jKImYjpJuU6uSVu/GmKW7qCX6rg/Z6JHDqsvvdEuG6CbhkGCIyEW90ICDYYY\nZ0CxVWKuq6Z4Ru49Ikby6OHKVeOy6f0UgLGImIa/AQKBgQDoPQs8xBgfu81Ugmb/\n++B06d7oFaaU7xpsbkDxWUWFFYRWuyOylyjgELzHBDViBQ6hDSwZmYx23Xj/2AIa\ntOtNIsUIuNzx4Cs8qCySwmSBKv1fB2Jq1mPrDsc3XI+s1c6piTB5Rq9DL+blp5XK\nC/4Cu0lXk9hz0jhlhW92y2iLWwKBgQDXKsaQBa3IFqqDC06AkGRpELRo4oEhphm6\nTXnoBCX7s+zKJUCRg1pM3sFOuYYTsR5TCmtj99WBZ0itWO/UPhq70g4a/nE4lL6T\niLgGVDFHByaL004tihwUL+cGOxXyxjRyb3KyA0KcqStp/dl3uZ/eBAGsb8n9FFTL\nhGVfB/WtbQKBgQDZx8zO6hC5SXKuai7OpFODL4FR4GO7TFFaFzYdXZq8x0W303wR\nUIELRYbRlle9GIL0chbF1uEK4ntCaDzo8HmrdwyQNlMzGwVQt2A9K7/2BOte/tzC\n1VMTrWMRvmIZMNLA1x62y5s1BSmgeLwVoZNM2nZXgxQ64Ir0YOH645qg+wKBgDQK\ngYoWBYkuikE1u9/2jIKo6qmvlwH3daOM155ZWoJ9axkdV3eaaH3NJr4OuzIKFcaJ\n7513NOmefIKIz0DrYHXrAURgJCxGNa3jVHcbZ+vA+/63teHn1JDBYUQtiEp2y/qd\noAUUKslPVVPGdRGzEMqW93yocRdIEpZCyG3qs+4lAoGATUwK6xnxgt6rbYDbvrUz\nV2U1KfwS2Avcpt97GmRqV0AE1RX0rBszWn9qkA9CsRbXtm6y+ggEQze1frsr7rMs\nZr/X4or3vcZhoFnCn9QjQGz71UbUC5ANdNxcyLqWcbb8T662pzOzHAO1BQbxNmc2\n8a3sTgEveluuSzo7Diztl00=\n-----END PRIVATE KEY-----\n",
  client_email:
    "bitswits-api-service-account@bitswits-412709.iam.gserviceaccount.com",
  client_id: "115205466003356437781",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/bitswits-api-service-account%40bitswits-412709.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
}

export default function AfterLoadScripts() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      console.log("Page loaded, waiting for 5 seconds...")
      if (document.readyState === "complete") {
        setTimeout(() => {
          console.log("5 seconds passed, rendering scripts...")
          setIsReady(true)
        }, 1000)
      }
    }

    window.addEventListener("load", handleLoad)

    if (document.readyState === "complete") {
      handleLoad()
    }
    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (!isReady) return null
  return (
    <> 

      <GoogleTagManager gtmId="GTM-TFH5JWNF" />
      <GoogleAnalytics gaId="AW-11114809734" />
      <GoogleAnalytics gaId="G-T8JYHWL639" />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indexingapi) }}
      />
    </>
  )
}
