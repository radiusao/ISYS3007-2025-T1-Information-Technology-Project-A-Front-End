import { useState } from "react";
import styles from "../CustomStyling.module.css";
import { Link } from "react-router-dom";

interface TourBoxProps {
  title: string;
  duration: string;
  backgroundImage?: string;
  textColor?: string;
  children: React.ReactNode;
  special?: boolean;
  url: string;
}

function TourBox({
  title,
  duration,
  backgroundImage,
  textColor = "white",
  children,
  special,
  url,
}: TourBoxProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="mb-3"
      style={{
        position: "relative",
        flexDirection: "column",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textColor,
        height: expanded ? "350px" : "150px",
        transition: "height 0.4s ease-in-out",
        padding: "2rem 0",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          paddingLeft: "1rem",
        }}
      >
        <p className={`display-6 ${styles.display_2} mb-2`}>
          {title}{" "}
          {special ? (
            <span
              className="align-top text-white badge bg-danger rounded-pill"
              style={{ fontSize: ".9rem", fontWeight: "300" }}
            >
              special!
            </span>
          ) : (
            ""
          )}
        </p>
        <p>
          Duration: &nbsp;
          <span
            className={`align-middle text-black badge rounded-pill ${styles.subheading} ${styles.bg_secondary}`}
          >
            {duration}
          </span>
        </p>
        {expanded && (
          <>
            <p
              style={{
                //generate by genAI
                marginTop: "1rem",
                opacity: expanded ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
              }} //generate by genAI
            >
              {children}
            </p>
            <Link
              to={url}
              className={`btn btn-lg text-white ${styles.bg_secondary_outline}`}
            >
              Explore&nbsp;
              <i className={`bi bi-arrow-right-circle align-middle`}></i>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default TourBox;
