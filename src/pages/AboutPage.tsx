import Jumbotron from "../components/ui/Jumbotron";
import Carousel from "../components/ui/Carousel";
import Navbar from "../components/navbar/Navbar";
const slides = [
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1541546108515-0U6GE4G62F3JFNXB6VMW/IMG_3944+copy.jpg",
  },
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1555384495092-GGYAKB182TZZKA3T1WQY/Easter+Egg+Hunt.jpg?format=1000w",
  },
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/86e51539-f4fe-4df4-bcf9-a3b2401148a9/02_Poppy-and-Fern_Flower-school_Mia-Forrest.jpeg?format=2500w",
  },
];
function ExplorePage() {
  return (
    <>
      <Navbar />
      <Jumbotron
        title="About us"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1541546108515-0U6GE4G62F3JFNXB6VMW/IMG_3944+copy.jpg"
        height="20vh"
      />
      <div className="container mt-4 mb-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit, quasi. Facilis perferendis accusamus vitae architecto,
          quos, cupiditate ab eos ullam assumenda omnis quidem dolorum
          necessitatibus excepturi repudiandae temporibus eligendi provident.
        </p>
        <Carousel id="customCarousel" slides={slides} />
      </div>
    </>
  );
}
export default ExplorePage;
