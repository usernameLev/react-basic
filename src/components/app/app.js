import './app.css';

import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';
import { EmployyesList } from '../employees-list/employees-list';
import { SearchPanel } from '../search-panel/search-panel';

export const App = () => {
  const data = [
    { name: 'John C.', salary: 800, increase: false, key: 1 },
    { name: 'Alex M.', salary: 3000, increase: true, key: 2 },
    { name: 'Carl W.', salary: 15000, increase: false, key: 3 },
  ];

  return (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />

        <AppFilter />
      </div>

      <EmployyesList data={data} />

      <EmployeesAddForm />
    </div>
  );
};
