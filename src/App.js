import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Bottombar from "./components/Bottombar";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </BrowserRouter>
  );
}

export default App;
