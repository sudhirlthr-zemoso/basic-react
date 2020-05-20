import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function formatName(user){
    return user.firstName +' '+user.lastName;
}


const user = {
    firstName: 'Sudhir',
    lastName: 'Kumar'
};
const element = <h1>Hello , {formatName(user)}</h1>;

function Welcome(props){
    return <h1> hello, {props.name}</h1>;
}
const compo = <Welcome name="Sara" />


function Greet(props){
    return <h1>Greeting of the day, {props.name}</h1>;
}
function ComposeComponent(){
    return (
        <div>
            <Greet name="Sara" />
            <Greet name="Chal" />
            <Greet name="Eric" />
            <Greet name="Emiliya" />
        </div>
    );
}




ReactDOM.render(
  <ComposeComponent />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
