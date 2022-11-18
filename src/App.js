import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Enrolled from "./Components/Enrolled/Enrolled";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Enrolled></Enrolled>
      <Footer></Footer>
    </div>
  );
}

export default App;
