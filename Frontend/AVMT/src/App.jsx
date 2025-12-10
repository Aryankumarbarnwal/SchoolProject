import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AllAchievements from "./pages/AllAchievements.jsx";
import NoticeTicker from "./components/Notice/NoticeTicker.jsx";
import NoticePopup from "./components/Notice/NoticePopup.jsx";
import AllNotices from "./pages/AllNotice.jsx";
import { NoticeProvider } from "./Context/NoticeContext.jsx";
import About from "./pages/About.jsx";
import Admission from "./pages/Admission.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import Sports from "./pages/Sports.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <NoticeProvider>
            <Navbar />
            <NoticeTicker />
            <NoticePopup />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/achievements" element={<AllAchievements />} />
              <Route path="/notices" element={<AllNotices />} />
              <Route path="/about" element={<About />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </NoticeProvider>
        </>
      )}
    </>
  );
}

export default App;
