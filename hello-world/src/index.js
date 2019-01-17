import React from 'react'; // React nos va a ayudar a escribir componentes como el de app
import ReactDOM from 'react-dom'; // ReactDom nos va a ayudar a renderizar ese contenido dentro de nuestra página
// ReactDom nos dará el método de render y le dirá a app que se renderice dentró de un elemento con el id Root
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
