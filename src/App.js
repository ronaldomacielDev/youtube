import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/header-index";
import Menu from "./components/menu/menu-index";
import Home from "./pages/home/home-index";
import Library from "./pages/library/library-index";
import History from "./pages/history/history-index";
import Login from "./pages/login/login-index";



function App() {
  const [openMenu, setOpenMenu ] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={ openMenu } setOpenMenu={ setOpenMenu }/>
        <div style={{ width: '100%', display: 'flex', background: '#fff' }}>
          <Menu openMenu={ openMenu } />
   
          <div style={{ background: '#fff', width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
