import { useState, useEffect } from "react";
import styles from "../CustomStyling.module.css";
import NavbarLogo from "./NavbarLogo";
import NavbarList from "./NavbarList";

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // written incolaboration with genAI
    const handleBodyClick = () => {
      setIsOpen(false);
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);
  return (
    <>
      <button
        className={`btn btn-outline-secondary`}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: "3",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <i className="bi bi-list"></i>
      </button>
      <div
        className={`${styles.menu_container} ${isOpen ? styles.menu_open : ""}`}
      >
        <NavbarLogo></NavbarLogo>
        <div className={`mb-3 ${styles.menu_content}`}>
          <ul>
            <NavbarList pageName="Explore" url="explore" />
            <NavbarList pageName="Upcoming Events" url="event" />
            <NavbarList pageName="Tour" url="tour" />
            <NavbarList pageName="Tenants" url="tenant" />
            <NavbarList pageName="Review" url="review" />
            <NavbarList pageName="About Us" url="about" />
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavbarMenu;
