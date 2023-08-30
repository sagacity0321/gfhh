import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Nav from "./pages/Nav";
import HeadersV12 from "./components/HeadersV12";
import Index1 from "./pages/Index1";
import LandingPage1 from "./pages/LandingPage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/headers-v12":
        title = "";
        metaDescription = "";
        break;
      case "/index":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/headers-v12" element={<HeadersV12 />} />
      <Route path="/index" element={<Index1 />} />
      <Route path="/landing-page-1" element={<LandingPage1 />} />
    </Routes>
  );
}
export default App;
