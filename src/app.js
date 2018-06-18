import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import App from './components/App';

// const url = window.location.href; > pour prod
const url = 'http://localhost/www/kirby-react/';

ReactDOM.render( 

<BrowserRouter>
    <App  url={url} />
</BrowserRouter>, 
document.getElementById('app')

)
