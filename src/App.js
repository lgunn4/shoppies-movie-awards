import React, {useState} from "react";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout/Layout";
import NominationSideBar from "./Containers/NominationSideBar/NominationSideBar";

function App() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
      <NominationSideBar>
          <Layout>
              <p>THis is the body</p>
          </Layout>
      </NominationSideBar>
  );
}



export default App;
