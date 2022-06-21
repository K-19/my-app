import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
    dialogs: [
        {id: 1, name: 'Коля'},
        {id: 2, name: 'Максим'},
        {id: 3, name: 'Гена'},
        {id: 4, name: 'Света'},
        {id: 5, name: 'Асёл'},
        {id: 6, name: 'Гитлер'},
    ],
    messages: [
        {id: 1, text: 'Привет1'},
        {id: 2, text: 'Привет2'},
        {id: 3, text: 'Привет3'},
        {id: 4, text: 'Привет4'},
    ],
    posts: [
        {id: 1, message: '1st post', likes: 128},
        {id: 2, message: '2st post', likes: 24},
        {id: 3, message: '3st post', likes: 6},
        {id: 4, message: '4st post', likes: 5},
    ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

