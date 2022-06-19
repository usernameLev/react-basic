import { EmployeesListItem } from '../employees-list-item/employees-list-item';

import './employees-list.css';

export const EmployyesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((element) => {
    const { id, ...elementProps } = element;
    return (
      <EmployeesListItem
        key={id}
        {...elementProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(event) =>
          onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))
        }
      />
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};
