import './app.css';

import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EmployyesList } from '../employees-list/employees-list';
import { SearchPanel } from '../search-panel/search-panel';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';

export const App = () => {
  return (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />

        <AppFilter />
      </div>

      <EmployyesList />

      <EmployeesAddForm />
    </div>
  );
};
