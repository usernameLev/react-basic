import ReactDOM from 'react-dom/client';

const text = 'hello how are you?';

const elem = (
  <div>
    <h2 className=''>{text}</h2>
    <label htmlFor=''></label>
    <button tabIndex='0'>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elem);
