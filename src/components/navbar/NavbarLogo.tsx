import { Link } from "react-router-dom";
function NavbarLogo() {
  return (
    <>
      <ul className="nav mt-2 mb-4" style={{ display: "flex" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Link
            to="/ISYS3007-2025-T1-Information-Technology-Project-A-Front-End/tour"
            className="navbar-brand"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/5a9f42243c3a53481a5c1800/1571272313979-GAQGUIV2U12C0JU55JNE/TheFarm_Logo_Black_RGB.png?format=300w"
              alt="the farm logo"
              width="auto"
              height="40"
            />
          </Link>
        </div>
      </ul>
    </>
  );
}

export default NavbarLogo;
