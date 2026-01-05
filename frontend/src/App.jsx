import CareersCTA from "./components/CareersCTA";
import ContentHub from "./components/ContentHub";
import Navbar from "./components/Navbar";
import PodcastUpdates from "./components/PodcastUpdates";
import ServicesOverview from "./components/ServicesOverview";
import SocialProof from "./components/SocialProof";
import Footer from "./pages/footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialProof />
      <ServicesOverview />
      <CareersCTA />
      <PodcastUpdates />
      <ContentHub />
      <Footer />
    </div>
  );
}

export default App;
