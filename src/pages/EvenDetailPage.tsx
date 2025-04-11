import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/ui/Carousel";
import Jumbotron from "../components/ui/Jumbotron";

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

function EventDetailPage() {
  return (
    <>
      <Navbar />
      <Jumbotron
        title="Easter Hunt"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1555384495092-GGYAKB182TZZKA3T1WQY/Easter+Egg+Hunt.jpg?format=1000w"
      />
      <div className="container mt-3">
        <h1>Activities</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In delectus
          aspernatur officiis consequuntur laboriosam nemo hic voluptatum
          doloremque unde labore! Cupiditate obcaecati, voluptatibus in quis
          dicta dolorem libero dolorum nihil?
        </p>
        <ul>
          <li>1 pernat</li>
          <li>2 emque u</li>
          <li>3 onsectetur adipis</li>
          <li>4 dolorum n</li>
        </ul>
      </div>
      <Carousel id="customCarousel" slides={slides} />
    </>
  );
}
export default EventDetailPage;
