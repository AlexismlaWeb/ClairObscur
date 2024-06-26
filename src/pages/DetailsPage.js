import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const { state } = useLocation();
  const { item } = state; // Décomposez l'état pour obtenir l'item
  console.log(item);

  return (
    <div>
      <Header />
      {!item.video ? (
        <div className="d-flex align-items-center justify-content-center mt-5 mb-4 list-item">
          <img src={item.image} alt={"details"} />
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center mt-5 mb-4">
          {item.linkYtb || item.video ? (
            item.linkYtb ? (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : item.video ? (
              <video
                width="80%"
                height="20%"
                controls
                src={item.video}
                muted
                playsInline
              ></video>
            ) : null
          ) : null}
        </div>
      )}
      <div className="d-flex align-items-center justify-content-center mb-3 team-member-name">
        <h1>{item.title}</h1>
      </div>
      <div
        className="d-flex align-items-center justify-content-center m-5 team-member-description px-5"
        style={{ textAlign: "justify" }}
      >
        {item.description}
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
