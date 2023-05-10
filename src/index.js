import React from 'react'; //SON IMPORTANTES PARA EL VIRTUAL DOM
import ReactDOM from 'react-dom/client';
//import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
//import ParagraphLink from './components/paragraphLink/ParagraphLink';
import { App } from './App';

import P from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root')); //objeto que se pasa a root
root.render(
  <React.StrictMode>
    {/*<p href="http">texto</p> */}
    <App/>
  </React.StrictMode>
);


