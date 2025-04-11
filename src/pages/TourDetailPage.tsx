import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/ui/Carousel";
import Jumbotron from "../components/ui/Jumbotron";
import TourSpec from "../components/ui/tourspec/TourSpec";
import { Link } from "react-router-dom";
const slides = [
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1541546108515-0U6GE4G62F3JFNXB6VMW/IMG_3944+copy.jpg",
    altText: "First check point",
    heading: "First check point",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis, ipsum tenetur eos provident in beatae amet numquam voluptatem rem suscipit veniam adipisci error ipsam aut minus, quasi unde minima!",
  },
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1555384495092-GGYAKB182TZZKA3T1WQY/Easter+Egg+Hunt.jpg?format=1000w",
    altText: "Second check point",
    heading: "Second check point",
    description:
      "Lorem, ipsum dolor sit ambeatae amet numquam voluptatem rem suscipit veniam adipisci error ipsam aut minus, quasi unde minima!",
  },
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/86e51539-f4fe-4df4-bcf9-a3b2401148a9/02_Poppy-and-Fern_Flower-school_Mia-Forrest.jpeg?format=2500w",
    altText: "Third check point",
    heading: "Third check point",
    description:
      "Lorem, ipsum psum tenetur eos provident in beatae amet numquam voluptatem rem suscipit veniam adipisci error ipsam aut minus, quasi unde minima!",
  },
];

function TourDetailPage() {
  return (
    <>
      <Navbar />
      <Jumbotron
        title="Flower tour"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/86e51539-f4fe-4df4-bcf9-a3b2401148a9/02_Poppy-and-Fern_Flower-school_Mia-Forrest.jpeg?format=2500w"
      />
      <div className="container">
        <TourSpec
          tourType="Self-tour"
          tourLength="1.5 KM"
          tourTime="30 min"
          tourRating="4.5"
        />
      </div>
      <Carousel id="customCarousel" slides={slides} />
      <img
        className="img-fluid"
        src="https://i.pinimg.com/736x/10/7a/11/107a11eff18f34611c2dd2b8ebf7cafa.jpg"
      />
      {/* <Jumbotron
        title="TourMap"
        height="33rem"
        backgroundImage="https://i.ytimg.com/vi/4GUCcXE29Yk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBX1BKz1rj0uPlAVe3mUfFb_kAyEw"
      /> */}
      <div className="container mt-2 mb-2">
        <div className="d-grid d-md-block">
          <Link to="#" className="btn btn-primary text-white">
            Open Google Map
          </Link>
        </div>
      </div>
    </>
  );
}
export default TourDetailPage;
