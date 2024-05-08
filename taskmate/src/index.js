import React from 'react';
import ReactDOM from 'react-dom/client';
//Note default import
import {App2} from './App';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App2 />
    </React.StrictMode>
);