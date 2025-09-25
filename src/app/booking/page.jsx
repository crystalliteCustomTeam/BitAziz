"use client";
import { useEffect, useState } from "react";
import BookingPopUp from "@/src/app/home/components/bookingpopup";

export default function Page() {
  const [showVideo, setShowVideo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenModal = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div style={{ height: "100vh", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <botton onClick={handleOpenModal}>Book Now</botton>
        <BookingPopUp show={showPopup} onHide={() => setShowPopup(false)} />
      </div>
    </>
  );
}

