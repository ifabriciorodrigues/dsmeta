import styled from 'styled-components';

export const Row = styled.tr`
  height: 74px;
  border-top: 1px solid #5f6e82;

  &:hover {
    background-color: #5F6E82;
  }

  &:nth-child(odd) {
    background-color: #242c3b;
    &:hover {
      background-color: #5F6E82;
    }
  }
`

export const TableData = styled.td`
`

export const IconWrapper = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 74px;
  
  &:hover {
    background-color: #5F6E82;
  }
`