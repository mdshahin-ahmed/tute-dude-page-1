import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import FriendRefferd from "./Pages/FriendRefferd/FriendRefferd";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FriendRefferd></FriendRefferd>
      <Footer></Footer>
    </div>
  );
}

export default App;
