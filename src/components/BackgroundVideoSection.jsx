import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import { urlForFile } from "../sanityClient";

const BackgroundVideoSection = (props) => {
  return (
    <>
      <div className="fullscreen-video">
        {props.backgroundVideo && (
          <video autoPlay muted loop className="background-video">
            <source src={urlForFile(props.backgroundVideo)} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="above-video">
        <div className="above-video-text">
          {props.title && <h1>{props.title}</h1>}
          {props.text && <p className="ps-1">{props.text}</p>}
          {props.buttonLink && props.button && (
            <Link to={props.buttonLink}>
              <button className="btn btn-lg btn-primary mt-3">
                {props.button}
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default BackgroundVideoSection;
