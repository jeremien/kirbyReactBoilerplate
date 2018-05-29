import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import DataFetch from './components/DataFetch';

// const url = window.location.href; > pour prod
const url = 'http://localhost/www/kirby-react/';

ReactDOM.render(<DataFetch url={url} />, document.getElementById('app'));
