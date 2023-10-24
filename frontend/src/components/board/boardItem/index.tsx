import styles from './boardItem.styles'

function BoardItem({ data }) {
  return (
    <styles.Container key={data.id}>
      <div className='num'>1</div>
      <div className='title'>{data.title}</div>
      <div className='content'>{data.content}</div>
      <div className='date'>{data.date}</div>
    </styles.Container>
  )
}

export default BoardItem