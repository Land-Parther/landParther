import ReactPaginate from 'react-paginate'
import styles from './pagination.styles'

function Pagination({ totalCount, handlePage }) {
  return (
    <styles.Container>
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        onPageChange={handlePage}
        pageCount={totalCount / 5}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </styles.Container>
  )
}

export default Pagination