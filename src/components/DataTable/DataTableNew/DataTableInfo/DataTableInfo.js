import PropTypes from 'prop-types';
import React from 'react';

const DataTableInfo = props => {
  const {
    activePage,
    entries,
    filteredRows,
    info,
    label = ['Showing', 'to', 'of', 'entries'],
    noRecordsFoundLabel,
    pages
  } = props;

  const SHOWING_LABEL = label[0];
  const TO_LABEL = label[1];
  const OF_LABEL = label[2];
  const ENTRIES_LABEL = label[3];

  const NO_RECORDS = filteredRows.length > 0 && filteredRows[0].message === noRecordsFoundLabel;
  const RECORDS = activePage > 0 ? activePage * entries + 1 : activePage + 1;
  const RECORDS_ON_PAGE =
    pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length;
  const ENTRIES = filteredRows.length;

  return (
    <>
      {info && (
        <div data-test='datatable-info' className='mdb-datatable-info d-flex align-items-center'>
          <div role='status' aria-live='polite'>
            {!NO_RECORDS
              ? `${SHOWING_LABEL} ${RECORDS} ${TO_LABEL} ${RECORDS_ON_PAGE} ${OF_LABEL} ${ENTRIES} ${ENTRIES_LABEL}`
              : `${SHOWING_LABEL} 0 ${ENTRIES_LABEL}`}
          </div>
        </div>
      )}
    </>
  );
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  noRecordsFoundLabel: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};

export default DataTableInfo;
export { DataTableInfo as MDBDataTableInfo };
