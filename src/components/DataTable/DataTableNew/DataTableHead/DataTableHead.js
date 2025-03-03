import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DataTableHead = props => {
  const {
    color,
    columns,
    handleSort,
    scrollX = false,
    scrollY = false,
    sortable = true,
    sorted,
    textWhite = false
  } = props;

  const theadClasses = classNames(
    'mdb-dataTable-head',
    color && (color !== 'dark' && color !== 'light' ? color : `thead-${color}`),
    textWhite && 'text-white'
  );
  return (
    <>
      {(scrollY || scrollX) && (
        <colgroup>
          {columns.map(col => (
            <col
              key={col.field}
              style={{
                width: `${col.width}px` || 'auto',
                minWidth: `${col.width}px` || 'auto'
              }}
            />
          ))}
        </colgroup>
      )}
      <thead data-test='datatable-head' className={theadClasses || undefined}>
        <tr>
          {columns.map(col => (
            <th
              onClick={() => sortable && handleSort(col.field, col.sort)}
              key={col.field}
              className={classNames(
                col.hasOwnProperty('minimal') ? `th-${col.minimal}` : null,
                sortable &&
                  col.sort !== 'disabled' &&
                  (sorted && col.sort ? `sorting_${col.sort === 'asc' ? 'desc' : 'asc'}` : 'sorting')
              )}
              {...col.attributes}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

DataTableHead.propTypes = {
  sorted: PropTypes.bool.isRequired,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  textWhite: PropTypes.bool
};

export default DataTableHead;
export { DataTableHead as MDBDataTableHead };
