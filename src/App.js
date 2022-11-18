import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import FriendRefferd from "./Pages/FriendRefferd/FriendRefferd";
import ReferAndEarn from "./Pages/ReferAndEarn/ReferAndEarn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReferAndEarn></ReferAndEarn>}></Route>
          <Route
            path="/referAndEarn"
            element={<ReferAndEarn></ReferAndEarn>}
          ></Route>
          <Route
            path="/friendRefferd"
            element={<FriendRefferd></FriendRefferd>}
          ></Route>
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
