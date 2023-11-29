import { useState } from "react";

import Header from "./components/header/header-index";
import Menu from "./components/menu/menu-index";

function App() {
  const [openMenu, setOpenMenu ] = useState(false);

  return (
    <div className="App">
          <Header openMenu={ openMenu } setOpenMenu={ setOpenMenu }/>
          <div style={{ width: '100%', display: 'flex', background: '#fff' }}>
            <Menu openMenu={ openMenu } />

     
        <div style={ { background: 'blue', width: '100%'}}>
        
        </div>
      </div>
    </div>
  );
}

export default App;
