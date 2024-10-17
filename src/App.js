import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="bg-bgCol h-full w-full">
      <Header />
      <Hero />
      <Content />
    </div>
  )
}

export default App;
