const TableModalRow = props => {
  return (
    <div className='divTableRow'>
      <div className='divTableCell'>{props.rowNumber}</div>
      <div className='divTableCell'>{props.whoCell}</div>
      <div className='divTableCell'>{props.whenCell}</div>
      <div className='divTableCell'>{props.docNameCell}</div>
      <div className='divTableCell viewCell' onClick={props.viewOnClick}>
        <svg width='18' height='13' viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.03941 9.25C10.5582 9.25 11.7894 8.01878 11.7894 6.5C11.7894 4.98122 10.5582 3.75 9.03941 3.75C7.52063 3.75 6.28941 4.98122 6.28941 6.5C6.28941 8.01878 7.52063 9.25 9.03941 9.25Z'
            stroke='#33363F'
            stroke-width='1.5'
          />
          <path
            d='M16.5451 5.52311C16.9009 5.95513 17.0789 6.1711 17.0789 6.5C17.0789 6.8289 16.9009 7.04487 16.5451 7.47689C15.2433 9.05741 12.3721 12 9.03941 12C5.70666 12 2.83547 9.05741 1.53372 7.47689C1.17791 7.04487 1 6.8289 1 6.5C1 6.1711 1.17791 5.95513 1.53372 5.52311C2.83547 3.94263 5.70666 1 9.03941 1C12.3721 1 15.2433 3.94263 16.5451 5.52311Z'
            stroke='#33363F'
            stroke-width='1.5'
          />
        </svg>
      </div>
    </div>
  )
}

export default TableModalRow
