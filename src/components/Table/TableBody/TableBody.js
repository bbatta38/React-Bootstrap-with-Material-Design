import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TableBody = props => {
  const { children, color, columns, rows, textWhite = false, ...attributes } = props;
  const classes = classNames(color, {
    'text-white': textWhite
  });
  const renderTD = (field, key, array, row) => {
    if (field === 'clickEvent') {
      return null;
    }
    if (field === 'rowClassName') {
      return null;
    }
    if (field !== 'colspan') {
      if (row.message) {
        return (
          key === 0 && (
            <td data-th={columns[key]?.label} key={key} colSpan={row.colspan}>
              {row.message}
            </td>
          )
        );
      } else {
        return (
          (array[key + 1] !== 'colspan' && row[field] !== null && (
            <td data-th={columns[key]?.label} key={key}>
              {row[field]}
            </td>
          )) || <td data-th={columns[key]?.label} key={key}></td>
        );
      }
    }
    return (
      <td data-th={columns[key]?.label} key={key} colSpan={row.colspan}>
        {row[array[key - 1]]}
      </td>
    );
  };

  return (
    <tbody data-test='table-body' {...attributes} className={classes || undefined}>
      {rows &&
        rows.map((row, index) => (
          <tr
            onClick={row.hasOwnProperty('clickEvent') ? row.clickEvent : undefined}
            className={row.hasOwnProperty('rowClassName') ? row.rowClassName : undefined}
            key={index}
          >
            {columns
              ? columns.map(({ field }, key, array) => renderTD(field, key, array, row))
              : Object.keys(row).map((field, key, array) => renderTD(field, key, array, row))}
          </tr>
        ))}
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.array,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

export default TableBody;
export { TableBody as MDBTableBody };
