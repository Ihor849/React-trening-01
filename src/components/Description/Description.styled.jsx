import styled from '@emotion/styled'


export const Profile = styled.div`
  width: 400px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${props => props.theme.spacing(3)};
`

export const Card = styled.div`
  width: 400px;
  background-color: white;
  margin: 0 auto;
  padding: ${props => props.theme.spacing(4)};
`
export const Avatar = styled.img`
  margin-top: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(5)};
  width: 200px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 50%;
`

export const Name = styled.p`
  margin-top: ${props => props.theme.spacing(6)};
  font-size: ${props => props.theme.fontSize(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color:${props => props.theme.colors.primaryText};
`
export const Tag = styled.p`
  margin-top: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSize(6)};

  font-weight: 700;
  letter-spacing: 0.5px;
  color:${props => props.theme.colors.grey};
`
export const Location = styled.p`
  margin-top: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSize(5)};

  font-weight: 700;
  letter-spacing: 0.5px;
  color:${props => props.theme.colors.grey};
`
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.colors. aquamarine};
`
export const StatsItem = styled.li`
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  border-right: ${props => `2px solid ${props.theme.colors. grey}`};

  &:last-child {
    border-right: 0px;
  }
`
export const Label = styled.span`
  display: flex;
  font-size: ${props => props.theme.fontSize(5)};
  font-weight: 700;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.secondaryText};
`
export const Quantity = styled.span`
  font-size: ${props => props.theme.fontSize(5)};
  line-height: ${props => props.theme.spacing(4)};
  font-weight: 700;
  letter-spacing: 1px;
`