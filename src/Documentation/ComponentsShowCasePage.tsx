import styles from "../components/CustomStyling.module.css";
import Jumbotron from "../components/ui/Jumbotron";
import NavbarLogo from "../components/navbar/NavbarLogo";
import LearningBox from "./LearningBox";
function ComponentsShowCasePage() {
  return (
    <>
      <div className="container mt-5">
        <h1 className={`display-1 ${styles.display_2}`}>
          Documentation
          <br />
          Page
        </h1>
        <p>
          A documentation page for libraries used, routing, pages, and useable
          components
        </p>
        <h2>Libraries</h2>
        <div className="container mb-5">
          <h3>React Router</h3>
          <h3>Bootstrap</h3>
          <h3>Bootstrap Icon</h3>
          <h3>Google Font</h3>
          <h3>CSS Module</h3>
        </div>
        <h2>Routing</h2>
        <div className="container mb-5">-</div>
        <h2>Components</h2>
        <div className="container">
          <h3>NavbarLogo</h3>
          <LearningBox
            purpose="For navbar centrer logo"
            toCall="<NavbarLogo />"
          >
            <NavbarLogo />
          </LearningBox>
          <h3>NavbarMenu</h3>
          <LearningBox
            purpose="To show navbar Icon Menu"
            toCall="<NavbarMenu />"
          >
            <button className={`btn btn-outline-secondary`}>
              <i className="bi bi-list"></i>
            </button>
          </LearningBox>
          <h3>Jumbotron</h3>
          <LearningBox
            purpose="To show navbar Icon Menu"
            toCall={`<Jumbotron
            title=" "
            caption?=" "
            backgroundImage?=" "
            textColour?=" "
            overlayColour?=" "
            height?=" "/>`}
            explainMore="'?' is optional, Title = Jumbotron Title in String, Caption = Jumbotron Caption, BackgroundImage = url for img, textColour = to set text colour height = to set jumbotron height overlayColour = set overlay colour in rgba format"
            example={`<Jumbotron
              title="Title"
              caption="Caption"
              backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524541674896-5R0COGPS8JV0OGGZHN17/the+farm+byron+bay+33.jpg?format=2500w"
              textColour="Yellow"
              overlayColour="rgba(255, 0, 0, .4)"
              height="20vh"
            />`}
          >
            <Jumbotron
              title="Title"
              caption="Caption"
              backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524541674896-5R0COGPS8JV0OGGZHN17/the+farm+byron+bay+33.jpg?format=2500w"
              textColour="Yellow"
              overlayColour="rgba(255, 0, 0, .4)"
              height="20vh"
            />
          </LearningBox>
          <h3>JumbotronVideo</h3>
          <h3>MenuLeaf</h3>
          <div className="container">
            <h4>MenuLeafItem</h4>
          </div>
          <h3>Carousel</h3>
          <h3>TourBox</h3>
          <h3>TenantBox</h3>
        </div>
      </div>
    </>
  );
}
export default ComponentsShowCasePage;
