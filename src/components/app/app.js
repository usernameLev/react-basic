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
      term: '',
      filter: 'all',
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

  searchEmp = (arrs, term) => {
    if (term.length === 0) {
      return arrs;
    }

    return arrs.filter((arr) => {
      return arr.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (arrs, filter) => {
    switch (filter) {
      case 'rise':
        return arrs.filter((arr) => arr.rise);
      case 'moreThen1000':
        return arrs.filter((arr) => arr.salary > 1000);
      default:
        return arrs;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(
      (element) => element.increase,
    ).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className='app'>
        <AppInfo employees={employees} increased={increased} />

        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />

          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployyesList
          data={visibleData}
          onDelete={this.deleteElement}
          onToggleProp={this.onToggleProp}
        />

        <EmployeesAddForm onAdd={this.addElement} />
      </div>
    );
  }
}
