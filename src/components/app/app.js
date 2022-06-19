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
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 15000, increase: false, rise: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteElement = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((element) => element.id !== id),
      };
    });
  };

  addElement = (name, salary) => {
    const newElement = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newElement];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((element) => {
        if (element.id === id) {
          return { ...element, [prop]: !element[prop] };
        }
        return element;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(
      (element) => element.increase,
    ).length;
    return (
      <div className='app'>
        <AppInfo employees={employees} increased={increased} />

        <div className='search-panel'>
          <SearchPanel />

          <AppFilter />
        </div>

        <EmployyesList
          data={this.state.data}
          onDelete={this.deleteElement}
          onToggleProp={this.onToggleProp}
        />

        <EmployeesAddForm onAdd={this.addElement} />
      </div>
    );
  }
}
