import React, {Fragment} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <Fragment>
      <Header />
      <div class="contenedor">
      <Main />
      <Footer />

      </div>
    </Fragment>
  );
}

export default App;