import style from "../components/CustomStyling.module.css";
import Navbar from "../components/navbar/Navbar";
import TourBox from "../components/ui/TourBox";
import { Link } from "react-router-dom";
function ExplorePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className={`displa-1 ${style.display_1} mb-1 mt-2`}>Explore</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3893917.7439862066!2d153.248291!3d-27.8682166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b90899547c96aa9%3A0x3746ccd0481dd6aa!2sThe%20Farm%20Byron%20Bay!5e1!3m2!1sen!2sau!4v1743852062026!5m2!1sen!2sau"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mb-4">
        <h1 className={`displa-1 ${style.display_1} mb-1 mt-2`}>Self-tour</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam, non quod, quae excepturi modi voluptas voluptate eos,
          incidunt minima quam ut mollitia inventore perspiciatis commodi. Alias
          omnis dolore sed! <Link to="/tour">Guided Tour</Link>
        </p>
        <TourBox
          title="Easter Egg Hunt"
          duration="1 hr"
          url="/explore/a"
          special
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1555384495092-GGYAKB182TZZKA3T1WQY/Easter+Egg+Hunt.jpg?format=1000w"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam, non quod, quae excepturi modi voluptas voluptate eos,
          incidunt minima quam ut mollitia inventore perspiciatis commodi. Alias
          omnis dolore sed!
        </TourBox>
        <TourBox
          title="Flowers Tour"
          duration="30 min"
          url="/explore/a"
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/86e51539-f4fe-4df4-bcf9-a3b2401148a9/02_Poppy-and-Fern_Flower-school_Mia-Forrest.jpeg?format=2500w"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam, non quod, quae excepturi modi voluptas voluptate eos,
          incidunt minima quam ut mollitia inventore perspiciatis commodi. Alias
          omnis dolore sed!
        </TourBox>
        <TourBox
          title="Animal Tour"
          duration="1 hr"
          url="/explore/a"
          backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/4b8fb596-0396-467f-af1a-2139c4464cb3/Screenshot+2024-01-02+at+4.23.45+pm.jpg?format=1000w"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam, non quod, quae excepturi modi voluptas voluptate eos,
          incidunt minima quam ut mollitia inventore perspiciatis commodi. Alias
          omnis dolore sed!
        </TourBox>
      </div>
    </>
  );
}
export default ExplorePage;
