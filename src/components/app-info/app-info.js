import './app-info.css';

export const AppInfo = ({employees, increased}) => (
  <div className='app-info'>
    <h1>Учет сотрудников в компании</h1>
    <h2>Общее число сотрудников {employees}</h2>
    <h2>Примею получат: {increased}</h2>
  </div>
);
