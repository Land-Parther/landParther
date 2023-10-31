import { useEffect, useState } from 'react'
import styles from './boardList.styles'
import BoardHeader from '@/components/board/header'
import BoardItem from '@/components/board/boardItem'
import Pagination from '@/components/shared/pagination'

const data = [
  {
    id: 1,
    title: '제목1',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 2,
    title: '제목2',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 3,
    title: '제목3',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 4,
    title: '제목4',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 5,
    title: '제목5',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 6,
    title: '제목6',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 7,
    title: '제목7',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 8,
    title: '제목8',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 9,
    title: '제목9',
    content: '내용1',
    date: '2021-01-01'
  },
  {
    id: 10,
    title: '제목10',
    content: '내용1',
    date: '2021-01-01'
  }
]

function BoardList() {
  const itemsPerPage = 5
  const [page, setPage] = useState(1)
  const [visibleData, setVisibleData] = useState(data.slice(0, itemsPerPage))

  const handlePage = (data) => {
    setPage(data.selected + 1)
  }

  useEffect(() => {
    setVisibleData(data.slice((page - 1) * itemsPerPage, page * itemsPerPage))
  }, [page])

  return (
    <styles.Container>
      <main>
        <BoardHeader />
        <div className='border-list'>
          {
            visibleData.map((item) => <BoardItem key={item.id} data={item} />)
          }
        </div>
      </main>
      <footer>
        <Pagination totalCount={data.length} handlePage={handlePage} />
      </footer>
    </styles.Container>
  )
}

export default BoardList