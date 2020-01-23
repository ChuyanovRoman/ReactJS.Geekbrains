import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const knopka = <button onClick={f}>Ответить</button>;

function f() {
   messages.push('Нормально');
   ReactDOM.render(
      <MessageField messages={ messages } />,
      document.getElementById('root'),
   );
}

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);

ReactDOM.render(
   knopka,
   document.getElementById('root2'),
);