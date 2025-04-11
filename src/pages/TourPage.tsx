import { Link } from "react-router-dom";
import Jumbotron from "../components/ui/Jumbotron";
import TourBox from "../components/ui/TourBox";
import Navbar from "../components/navbar/Navbar";
function ExplorePage() {
  return (
    <>
      <Navbar />

      <Jumbotron
        title="Guided Tour"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1524538014129-ZSK8NZOWU9ELPT63CCUO/image-asset.jpeg"
      />
      <div className="container mt-4 mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          asperiores distinctio quis velit delectus veniam? Maxime dolorum qui
          laboriosam deleniti cumque exercitationem labore fugiat neque earum
          consequuntur. Reprehenderit, iusto quam?{" "}
          <Link to="/explore">Self Tour</Link>
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
