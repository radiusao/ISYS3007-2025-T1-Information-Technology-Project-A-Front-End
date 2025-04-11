import Navbar from "../components/navbar/Navbar";
import Jumbotron from "../components/ui/Jumbotron";
import styles from "../components/CustomStyling.module.css";
import TenantContact from "../components/ui/TenantContact";
import TenantBusinessHours from "../components/ui/TenantBusinessHours";

function TenantDetailPage() {
  return (
    <>
      <Navbar />
      <Jumbotron
        titleImg="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524542591681-4UA4D6QJ4FMCVF1G7E1X/TBD-primary-CMYK-black.png?format=500w"
        caption="Open Today, 7am - 4pm"
        textColour="black"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524553862158-KY9XBQV76YZ8V95NMUX6/Page+7.jpg?format=2500w"
        overlayColour="rgba(255, 255, 255, 0.5)"
      />
      <div className="container mt-3">
        <h1 className={styles.display_1}>About</h1>
        <p>
          Three Blue Ducks run the restaurant, cafe and produce store at The
          Farm Byron Bay. ‘The Ducks’, as we are fondly known, are five mates
          who are passionate about nourishing the community with ethical,
          authentic, quality food and hospitality. We endeavour to source as
          much as possible from The Farm and then we venture further afield. We
          embrace produce that is organic or spray free and sustainably farmed
          to make all the meals on our menu.
        </p>
        <TenantContact
          phoneNum="(02) 6190 8966"
          email="enquiries@threeblueducks.com"
          websiteLink="https://www.threeblueducks.com/"
        />
        <TenantBusinessHours
          mon="7am - 4pm"
          tue="7am - 4pm"
          wed="7am - 4pm"
          thu="7am - 4pm"
          fri="7am - 4pm"
          sat="7am - 3pm"
          sun="7am - 3pm"
          publicHoldiy="Closed"
        />
      </div>
    </>
  );
}

export default TenantDetailPage;
