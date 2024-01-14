import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame4 from "./pages/Frame4";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Frame9 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";
import Frame11 from "./pages/Frame11";
import Frame12 from "./pages/Frame12";
import Frame13 from "./pages/Frame13";

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
      case "/frame-40":
        title = "";
        metaDescription = "";
        break;
      case "/frame-12":
        title = "";
        metaDescription = "";
        break;
      case "/frame-10":
        title = "";
        metaDescription = "";
        break;
      case "/frame-9":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame4 />} />
      <Route path="/frame-40" element={<Frame2 />} />
      <Route path="/frame-12" element={<Frame3 />} />
      <Route path="/frame-10" element={<Frame5 />} />
      <Route path="/frame-9" element={<Frame6 />} />
      <Route path="/frame-8" element={<Frame7 />} />
      <Route path="/frame-7" element={<Frame8 />} />
      <Route path="/frame-2" element={<Frame9 />} />
      <Route path="/frame-1" element={<Frame10 />} />
      <Route path="/frame-4" element={<Frame11 />} />
      <Route path="/frame-6" element={<Frame12 />} />
      <Route path="/frame-3" element={<Frame13 />} />
    </Routes>
  );
}
export default App;
