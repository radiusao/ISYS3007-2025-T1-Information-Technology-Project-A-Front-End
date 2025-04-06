import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CustomStyling.module.css";

interface MenuLeafItemProps {
  children: React.ReactNode;
  backgroundImage?: string;
  textColor?: string;
  overlayColour?: string;
  redirectUrl: string;
  viewHeight?: string;
}

function MenuLeafItem({
  children,
  backgroundImage,
  textColor = "white",
  overlayColour = "rgba(0, 0, 0, 0.4)",
  redirectUrl,
  viewHeight = "35vh",
}: MenuLeafItemProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };
  const handleClick = () => setClicked((prev) => !prev);

  const dynamicOverlay = clicked
    ? "rgba(0, 0, 0, 0.7)"
    : hovered
    ? "rgba(0, 0, 0, 0.6)"
    : overlayColour;

  const content = (
    <div
      className="text-center cursor-pointer"
      style={{
        position: "relative",
        display: "flex",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textColor,
        height: viewHeight,
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: dynamicOverlay,
          transition: "background-color 0.3s ease-in-out",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className={styles.display_2}>{children}</h1>
      </div>
    </div>
  );

  return (
    <Link
      to={redirectUrl}
      ref={(node) => {
        if (node) {
          node.style.setProperty("padding", "0", "important");
          node.style.setProperty("text-decoration", "none", "important");
        } //!important to override <a> styling
      }}
    >
      {content}
    </Link>
  );
}

export default MenuLeafItem;
