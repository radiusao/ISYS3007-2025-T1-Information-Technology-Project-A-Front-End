import { Link } from "react-router-dom";
import styles from "../components/CustomStyling.module.css";
import Navbar from "../components/navbar/Navbar";
function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className={`display-1 ${styles.display_1}`}>
          Page <br /> Not Found
        </h1>
        <Link
          to={"/"}
          className={`btn btn-large ${styles.bg_primary} mt-2 mb-5`}
        >
          Go back home
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
