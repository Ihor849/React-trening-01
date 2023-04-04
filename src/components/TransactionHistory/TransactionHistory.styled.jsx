import styled from '@emotion/styled'

export const Table = styled.table`
  width: 400px;
  margin: 0 auto;
  border: 2px solid ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.white};
  height: 20px;

` 

export const Thead = styled.thead`
  width: 33.3%;
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.brightGreen};
  Tr {
    height: 50px;
  }
`
export const Th = styled.th`
  width: 33.3%;
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.brightGreen};
  height: 20px;
`
export const Tr = styled.tr`
  font-size: ${props => props.theme.fontSize(5)};
  border: 1px solid ${props => props.theme.colors.black};
	color: ${props => props.theme.colors.indianOrange};  

  &:nth-of-type(2n + 1) {
  background-color: ${props => props.theme.colors.aqua};
	color: ${props => props.theme.colors.black};
}
`
export const Td = styled.td`
    border: 1px solid ${props => props.theme.colors.black};
  font-size: 20px;
  &:first-of-type {
  text-align: left;
  :first-of-type {
  padding-left: ${props => props.theme. spacing(8)};
}
}
`