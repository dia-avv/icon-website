import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Events from "./pages/Events";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="stories" element={<Stories />} />
        <Route path="/stories/:id" element={<StoryDetails />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
