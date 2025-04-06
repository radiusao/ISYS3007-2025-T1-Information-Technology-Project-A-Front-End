import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactNode, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import VisitorLandingPage from "./pages/VisitorLandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import ExplorePage from "./pages/ExplorePage";
import TenantPage from "./pages/TenantPage";
import TourPage from "./pages/TourPage";
import ReviewPage from "./pages/ReviewPage";
import AboutPage from "./pages/AboutPage";
import ComponentsShowCasePage from "./Documentation/ComponentsShowCasePage";
import EventPage from "./pages/EventPage";

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  //Copied from stackoverflow
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    //Copied from stackoverflow
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return <>{children}</>;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      {/*fixing react router issue of not loading the page from the top*/}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<VisitorLandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/tenant" element={<TenantPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/component-show-case"
            element={<ComponentsShowCasePage />}
          />
          {/*404 error page*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  </StrictMode>
);
