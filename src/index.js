import React from 'react'; //SON IMPORTANTES PARA EL VIRTUAL DOM
import ReactDOM from 'react-dom/client';
//import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
//import ParagraphLink from './components/paragraphLink/ParagraphLink';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
//import P from './components/paragraphLink/ParagraphLink';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';



const root = ReactDOM.createRoot(document.getElementById('root')); //objeto que se pasa a root
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);


