import styled from '@emotion/styled'

export const Statistic = styled.section`
  margin: 30px auto;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Title = styled.h2`
  display: block;
  flex-basis: 100%;
  text-transform: uppercase;
  text-align: center;
  background-color:${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey};
  font-size: 16px;
  margin: 0;
  padding: 30px 0;
`
export const StatList = styled.ul`
  outline: 1px solid red;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  list-style: none;
    
`
export const Item = styled.li`
 
  display: flex;
  flex-wrap: wrap;
  width: 80px;
  height: 60px;
  background-color: teal;
  outline: 1px solid red;

`
export const Label = styled.span`

  display: block;
  flex-basis: 100%;
  font-size: 12px;
  line-height: 40px;
  margin: 0;
  padding: 0;
  height: 30px;
  color:  ${props => props.theme.colors.black};
`
export const Percentage = styled.span`
    display: block;
  flex-basis: 100%;
  font-size: 18px;
  margin: 0;
  padding: 0;
  height: 30px;
  color: #fff;
`