import { Component } from 'react';
import './App.css';

export const Header = () => {
  return <h2>hello Jack!</h2>;
};

/* const Field = () => {
  const holder = 'Enter here';
  const styledField = {
    width: '250px',
  };
  return <input type='text' placeholder={holder} style={styledField} />;
}; */

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '250px',
    };
    return <input type='text' placeholder={holder} style={styledField} />;
  }
}

const Btn = () => {
  const text = 'Login in';
  const logged = false;
  return <button>{logged ? 'Enter' : text}</button>;
};

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Field />
      <Btn />
    </div>
  );
};
