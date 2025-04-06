import styles from "../CustomStyling.module.css";
import Jumbotron from "./Jumbotron";

interface EventBoxProp {
  title: string;
  date: string;
  hourStart: string;
  hourEnd: string;
  img: string;
  emoji?: string;
}

function EventBox({
  title,
  date,
  hourStart,
  hourEnd,
  img,
  emoji,
}: EventBoxProp) {
  return (
    <div className="border border-1 border-black rounded mb-3">
      <Jumbotron
        title=""
        height="15rem"
        overlayColour="rgba(22,22,22, 0)"
        backgroundImage={img}
      />
      <div className="container-fluid border-top border-secondary">
        <div className="row">
          <div className="col-7 pt-3 pb-3">
            <h1 className={` ${styles.display_2}`}>{title}</h1>
            <h5 className={`mb-0 ${styles.subheading}`}>{date}</h5>
          </div>
          <div className="col-5 pt-3 pb-3 text-end ">
            <h3 className={`mb-0 ${styles.subheading}`}>{hourStart}</h3>
            <h3 className={` ${styles.subheading}`}>{hourEnd}</h3>
          </div>
          <div className="col-6 pt-3">
            <h4>{emoji}</h4>
          </div>
          <div className="col-6 pt-3 text-end">
            <p>
              <i className="bi bi-clock align-middle"></i> 24m 34s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventBox;
