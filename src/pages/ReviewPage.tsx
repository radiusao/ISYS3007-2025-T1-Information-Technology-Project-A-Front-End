import Jumbotron from "../components/ui/Jumbotron";
import Navbar from "../components/navbar/Navbar";
import styles from "../components/CustomStyling.module.css";
import StarRating from "../components/ui/reviewStars";

function ExplorePage() {
  return (
    <>
      <Navbar />

      <Jumbotron
        title="Review"
        height="20vh"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/3337f402-8871-48dc-b639-097c9949668f/3.jpg?format=2500w"
      />
      <div className="container mt-3">
        <h1 className={styles.display_1}>Write a review</h1>
        <div className="mb-3">
          <label className="form-label">Select Tour</label>
          <select defaultValue="1" className="form-select">
            <option value="1">Easter Egg Hunt</option>
            <option value="2">Flowers Tour</option>
            <option value="3">Animal Tour</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="textBox" className="form-label">
            Leave a message
          </label>
          <textarea className="form-control" id="textBox" rows={5}></textarea>
        </div>
        <div className="mb-3">
          <StarRating />
        </div>
        <button className={`btn btn-lg btn-primary ${styles.bg_primary}`}>
          Submit
        </button>
      </div>
    </>
  );
}
export default ExplorePage;
