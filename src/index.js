import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

import('./SiteContent.json').then(data => {
    ReactDOM.render(<App {...data}/>, document.getElementById('root'));
})

registerServiceWorker();
