import styled from 'styled-components'

const Container = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 50%;
    color: #333;
    cursor: pointer;
  }

  .pagination .active a {
    color: #4F4BEB;
    background-color: #D8D9F8;
  }
`

export default {
  Container
}