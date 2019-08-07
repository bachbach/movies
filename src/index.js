import React from 'react'
import ReactDOM from 'react-dom'
import AppLayout from './AppLayout'
import unregister from './registerServiceWorker'

import './index.scss'
import "react-tabs/style/react-tabs.css";

ReactDOM.render(<AppLayout />, document.getElementById('root'));
unregister();
