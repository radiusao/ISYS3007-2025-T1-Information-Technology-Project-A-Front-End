import styles from "../components/CustomStyling.module.css";
import NavbarLogo from "../components/navbar/NavbarLogo";
import JumbotronVideo from "../components/ui/JumbotronVideo";
import MenuLeaf from "../components/menuleaf/MenuLeaf";

function VisitorLandingPage() {
  return (
    <>
      <NavbarLogo />
      <div className="container-fluid">
        <h1 className={`display-1 ${styles.display_1} mb-3`}>
          Grow.
          <br /> Feed. <br />
          Educate.
          <br /> Give Back.
        </h1>
        <h2 className={`${styles.subheading}`}>
          Explore our interactive map to discover everything The Farm has to
          offer.
        </h2>
      </div>
      <JumbotronVideo
        height="60vh"
        src="https://player.vimeo.com/video/1017399635?autoplay=1&muted=1&loop=1&byline=0&portrait=0&title=0&controls=0"
      />
      <MenuLeaf />
    </>
  );
}

export default VisitorLandingPage;
