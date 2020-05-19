import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatName(user){
    return user.firstName +' '+user.lastName;
}

function greeting(user){
    if(user)
        return (
                    <div>
                        <h1 tabIndex="0">hello, {formatName(user)}</h1>
                        <img src={user.avatarUrl}></img>
                    </div>
                  );
     else
        return (
                    <h1>Hello Strangers</h1>
                );
}

const user = {
    firstName: 'Sudhir',
    lastName: 'Kumar'
};

const element = <h1>Hello , {formatName(user)}</h1>;
function tick() {
    const element = (
        <div>
            <h2>Hello World</h2>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
ReactDOM.render(
  setInterval,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
