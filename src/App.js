import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import MultiCarousel from "./MultiCarousel";
import Services from "./Services";
import Features from "./Features";
import ProductGallery from "./ProductGallery";
import DownWardBanner from "./DownWardBanner";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MultiCarousel />
      <Services />
      <Features />
      <ProductGallery />
      <DownWardBanner />
    </div>
  );
}

export default App;
