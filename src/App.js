import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/header-index";
import Menu from "./components/menu/menu-index";
import Home from "./pages/home/home-index";
import Library from "./pages/library/library-index";
import History from "./pages/history/history-index";



function App() {
  const [openMenu, setOpenMenu ] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={ openMenu } setOpenMenu={ setOpenMenu }/>
        <div style={{ width: '100%', display: 'flex', background: '#fff' }}>
          <Menu openMenu={ openMenu } />
   
          <div style={ { width: '100%'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
