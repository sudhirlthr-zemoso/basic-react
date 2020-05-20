import React from 'react';

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

export default ComposeComponent;