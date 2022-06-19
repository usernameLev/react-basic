import { Component } from 'react';

import './search-panel.css';

export class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        className='form-control search-input'
        type='text'
        placeholder='Найти сотрудника'
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}
