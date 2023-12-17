import { Footer } from "./components/Footer/Footer";
import { Topbar } from "./components/Topbar/Topbar";
import img1 from "./assets/banner1.png";
import img2 from "./assets/banner2.png";
import { Banner } from "./components/Banner/Banner";
import { Middlecontent } from "./components/Middlecontent/Middlecontent";

const bannerData = [
  {
    title: "Web & Mobile App Development",
    body: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
    leftImage: img1,
  },

  {
    title: "Digital Strategy Consulting",
    body: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
    rightImage: img2,
  },
];
function App() {
  return (
    <div>
      <Topbar />
      <Middlecontent />
      {bannerData.map((b) => (
        <Banner
          title={b.title}
          body={b.body}
          leftImage={b.leftImage}
          rightImage={b.rightImage}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
