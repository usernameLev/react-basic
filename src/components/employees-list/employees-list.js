import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

export const EmployyesList = ({ data }) => {
  const elements = data.map((element) => (
    <EmployeesListItem {...element} />
  ));

  return <ul className='app-list list-group'>{elements}</ul>;
};
