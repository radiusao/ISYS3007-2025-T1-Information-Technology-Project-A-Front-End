import { Link } from "react-router-dom";
import styles from "../CustomStyling.module.css";

interface TenantBoxProp {
  tenantName: string;
  tenantLogo: string;
  backgroundImage?: string;
  catagory: string;
  location: string;
  businessHours?: string;
  url: string;
}

function TenantBox({
  tenantName,
  tenantLogo,
  backgroundImage,
  location,
  businessHours,
  catagory,
  url,
}: TenantBoxProp) {
  return (
    <Link
      to={url}
      style={{
        textDecoration: "none",
      }}
    >
      <div className="container-fluid mt-3 border border border-1 border-black rounded">
        <div className="row">
          <div
            className="col-5"
            style={{
              position: "relative",
              backgroundImage: backgroundImage
                ? `url(${backgroundImage})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: ".3rem 0 0 .3rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: ".3rem 0 0 .3rem",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <div className="container">
                <img
                  src={tenantLogo}
                  className="img-responsive border border-1 rounded-0 border-black bg-white"
                  alt=""
                  height="80px"
                />
              </div>
            </div>
          </div>
          <div className="col-7 py-3">
            <h2 className={`mb-0 ${styles.display_2}`}>{tenantName}</h2>
            <p className={`mt-0 mb-3 ${styles.subheading}`}>{catagory}</p>
            <p className="mb-0">
              <i className="bi bi-geo-alt align-middle"></i>&nbsp;{location}
            </p>
            <p className="mb-0">
              <i className="bi bi-clock align-middle"></i>{" "}
              {businessHours ? businessHours : "Check with tenant"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TenantBox;
