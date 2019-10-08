import React from 'react';
import ReactDOM from 'react-dom';

const App = (props): JSX.Element => {
  const sum = (a:number, b:number):number => a + b;
  return <h1>
    Hello { sum(1, 10) }
  </h1>
}

const root = document.getElementById("app");
ReactDOM.render(<App />, root);
