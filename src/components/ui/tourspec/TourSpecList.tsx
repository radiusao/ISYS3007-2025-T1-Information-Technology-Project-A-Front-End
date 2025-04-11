import styles from "../../CustomStyling.module.css";

interface TourSpecListProp {
  title: string;
  icon: string;
  specDetail: string;
}

function TourSpecList({ title, icon, specDetail }: TourSpecListProp) {
  return (
    <div className="row border mb-1">
      <div style={{ display: "flex", alignItems: "center" }} className="col-4">
        <h3 className={styles.subheading}>{title}</h3>
      </div>
      <div className={`col-4 py-2 text-end ${styles.bg_secondary}`}>
        <i className={`bi ${icon} display-3`}></i>
      </div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={`col-4 py-2 ${styles.bg_secondary}`}
      >
        <h3 style={{ margin: "0" }} className={`${styles.display_1}`}>
          {specDetail}
        </h3>
      </div>
    </div>
  );
}
export default TourSpecList;
