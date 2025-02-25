import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableFoot = props => {
  const { children, color, columns, textWhite = false, ...attributes } = props;

  const isTheadColor = color === 'dark' || color === 'light';

  const classes = classNames({
    'text-white': textWhite,
    [`thead-${color}`]: color && isTheadColor,
    [`${color}`]: color && !isTheadColor
  });

  return (
    <thead data-test='table-foot' {...attributes} className={classes || undefined}>
      {columns && (
        <tr>
          {columns.map(col => (
            <th key={col.field} className={col.hasOwnProperty('minimal') ? `th-${col.minimal}` : undefined}>
              {col.label}
            </th>
          ))}
        </tr>
      )}
      {children}
    </thead>
  );
};

TableFoot.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

export default TableFoot;
export { TableFoot as MDBTableFoot };
