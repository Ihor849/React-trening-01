import styled from '@emotion/styled'


export const FriendCard = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Item = styled.li`
  width: 400px;
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  align-items: center;
  background-color:  ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.colors. grey};
  margin-bottom: ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(3)};
  // &:last-child {
  //   margin-bottom: 0
  // }
`

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ Online, theme }) => {
  if (Online) {
    return props => props.theme.colors.brightGreen
  } else {
    return props => props.theme.colors.red
  }}
  }
  
`

export const Avatar = styled.img`
  width: 70px;
  margin-left: 20px;
  border-radius: 5px;
`
export const Name = styled.p`
  margin-left: 35px;
  font-size: 20px;
  font-weight: 700;
`

