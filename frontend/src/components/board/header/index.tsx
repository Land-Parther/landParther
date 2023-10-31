import styles from './header.styles'

const BoardHeaders = [
  { id: 1, name: '제목' },
  { id: 2, name: '내용' },
  { id: 3, name: '일자' }
]

function BoardHeader() {
  return (
    <styles.Container>
      {BoardHeaders.map((header) =>
        <styles.HeaderItem key={header.id}>
          {header.name}
        </styles.HeaderItem>
      )}
    </styles.Container>
  )
}

export default BoardHeader