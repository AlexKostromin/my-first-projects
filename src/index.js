import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css'
import  {Provider} from "react-redux";


    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store = {store}>   {/*внутри себя дает работать с Context, заключенный в StoreContext*/}
                <App /> {/*bind-связывание addPost со Store, при прокидывании по пропсам не ставятся (), так как скопки используются для вызова*/}
                </Provider>
                           </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));

       /*вызов функции с параметром, который может вызвать data, чтобы избежать цикличности*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


