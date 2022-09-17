import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import App from './App';
import "../src/fonts/Montserrat.ttf"
import "../src/fonts/Montserrat_italic.ttf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App className={styles["app"]} />
);

