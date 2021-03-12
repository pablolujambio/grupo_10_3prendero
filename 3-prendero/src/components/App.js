import React, {Fragment} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



function App() {
  return (
    <Fragment>
      <div class="contprincipal">
      

      <Header />
      <div class="contenedor">
      <Main />
      <Footer />
      </div>
      
      </div>
    </Fragment>
  );
}

export default App;