import { Component } from 'react';

import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';
import { EmployyesList } from '../employees-list/employees-list';
import { SearchPanel } from '../search-panel/search-panel';

import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
        { name: 'Carl W.', salary: 15000, increase: false, id: 3 },
      ],
    };
  }

  deleteElement = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((element) => element.id !== id),
      };
    });
  };

  render() {
    return (
      <div className='app'>
        <AppInfo />

        <div className='search-panel'>
          <SearchPanel />

          <AppFilter />
        </div>

        <EmployyesList data={this.state.data} onDelete={this.deleteElement} />

        <EmployeesAddForm />
      </div>
    );
  }
}
