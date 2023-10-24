import styles from './boardList.styles'
import BoardHeader from '@/components/board/header'
import BoardItem from '@/components/board/boardItem'

function BoardList() {
  return (
    <styles.Container>
      <BoardHeader />
      {
        Array.from({ length: 5 }, () => ({
          id: Math.random(),
          title: '제목1',
          content: '내용1',
          date: '2021-01-01'
        })).map((data) => <BoardItem data={data} />)
      }
    </styles.Container>
  )
}

export default BoardList