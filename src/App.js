import React, {useState} from "react";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout";
import NominationSideBar from "./Components/NominationSideBar/NominationSideBar";

function App() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
      <NominationSideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}>
          <Layout setSideBarOpen={setSideBarOpen}>
              <p>THis is the body</p>
          </Layout>
      </NominationSideBar>
  );
}

export default App;
