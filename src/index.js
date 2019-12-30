import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick'
import './resource/style/index.scss';
import IndexRouter from './router'
import * as serviceWorker from './serviceWorker';
import './js/rem'
FastClick.attach(document.body)
ReactDOM.render(<IndexRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
