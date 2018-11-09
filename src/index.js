import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css'


// import('./SiteContent.json').then(data => {
//     ReactDOM.render(<App {...data}/>, document.getElementById('root'));
// })
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker();
