import styles from "../CustomStyling.module.css";
interface JumbotronProps {
  title?: string;
  titleImg?: string;
  caption?: string;
  backgroundImage?: string;
  textColour?: string;
  overlayColour?: string;
  height?: string;
}

function Jumbotron({
  title,
  titleImg,
  caption,
  backgroundImage,
  textColour = "white",
  overlayColour = "rgba(0, 0, 0, 0.4)",
  height = "100%",
}: JumbotronProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textColour,
        height: height,
        padding: "20px 0",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: height,
          backgroundColor: overlayColour,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
        className="text-center"
      >
        {titleImg ? (
          <img src={titleImg} className="mx-auto d-block" height="100px" />
        ) : (
          ""
        )}

        <h1 className={styles.display_1}>{title}</h1>
        <p className={styles.subheading}>{caption}</p>
      </div>
    </div>
  );
}

export default Jumbotron;
