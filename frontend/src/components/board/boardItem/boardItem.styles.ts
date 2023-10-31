import styled from 'styled-components'

const Container = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 10% 30% 40% 15%;
  padding: 15px 0;
  border-top: 1px solid #ddd;

  .num {
    display: grid;
    place-items: center;
  }

  &:hover {
    background-color: #eeeefb;
    cursor: pointer;
  }
`

export default {
  Container
}