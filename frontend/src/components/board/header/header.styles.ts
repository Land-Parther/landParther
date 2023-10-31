import styled from 'styled-components'

const Container = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: 30% 40% 15%;
  padding: 15px 0;
  background-color: #f6f8fa;
  text-align: left;
`

const HeaderItem = styled.li`
  padding-left: 85px;
`

export default {
  Container, HeaderItem
}