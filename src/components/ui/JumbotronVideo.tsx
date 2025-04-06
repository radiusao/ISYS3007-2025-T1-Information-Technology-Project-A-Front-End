interface VideoBoxProps {
  src: string;
  height: string;
}

function VideoBox({ src, height }: VideoBoxProps) {
  return (
    <div
      style={{
        marginTop: "10px",
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    >
      <iframe
        src={src}
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(2.5)",
          minWidth: "100%",
          minHeight: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
    //the full div above is created by genAI
  );
}

export default VideoBox;
