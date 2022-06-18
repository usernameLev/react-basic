import { Component } from 'react';
import './employees-list-item.css';

export class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase } = this.state;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
      classNames += ' increase';
    }

    return (
      <li className={classNames}>
        <span className='list-group-item-label'>{name}</span>
        <input
          className='list-group-item-input'
          type='text'
          defaultValue={`${salary} $`}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            className='btn-cookie btn-sm'
            type='button'
            onClick={this.onIncrease}
          >
            <i className='fas fa-cookie'></i>
          </button>

          <button className='btn-trash btn-sm' type='button'>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    );
  }
}
