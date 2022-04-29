import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Intro from "./components/Intro";
import Project from "./components/Project";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Body /> */}
      <section>
        <Intro />
      </section>
      <section>
        <Project />
      </section>
      <Footer />
    </div>
  );
}

export default App;
