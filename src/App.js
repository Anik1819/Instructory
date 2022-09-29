import "./App.css";
import Admiton from "./components/Admition/Admiton";
import Copmition from "./components/Copmition/Copmition";

import Courses from "./components/Courses/Courses";
import Hero from "./components/Hero";
import Join from "./components/Join/Join";
import Problem from "./components/Problem/Problem";

import Search from "./components/Search/Search";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Hero></Hero>
      <Search />

      <Courses title="NEWLY LAUNCHED COURSES"> </Courses>
      <Courses title="HIGHEST SELLING COURSES"> </Courses>
      <Copmition />
      <Admiton />
      <Copmition />
      <Join />
      <Problem />
      <Footer />
    </div>
  );
}

export default App;
