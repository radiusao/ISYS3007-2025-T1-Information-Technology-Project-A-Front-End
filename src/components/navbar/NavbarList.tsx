import { Link } from "react-router-dom";
import styles from "../CustomStyling.module.css";

interface NavbarListProp {
  url: string;
  pageName: string;
}

function NavbarList({ url, pageName }: NavbarListProp) {
  const rawPageUrl = String(window.location.pathname);
  const filterUrl = new RegExp(`\/(${url})(\/|$)`);
  const isCurrentPageMatchedMenuName = rawPageUrl.match(filterUrl);

  return (
    <Link to={`/${url}`}>
      <li className={isCurrentPageMatchedMenuName ? styles.active : ""}>
        {pageName}
      </li>
    </Link>
  );
}
export default NavbarList;
