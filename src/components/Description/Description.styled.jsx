import styled from '@emotion/styled'


export const Profile = styled.div`
    width: 400px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
`

export const Card = styled.div`
    width: 400px;
    background-color: white;
    margin: 0 auto;
    padding: 15px;
`
export const Avatar = styled.img`
    margin-top: 20px;
    padding: 20px;
  width: 200px;
  background-color: var(--color-green);
  border-radius: 50%;
`

export const Name = styled.p`
    margin-top: 25px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
   color:#010101;
`
export const Tag = styled.p`
    margin-top: 10px;
  font-size: 25px;

  font-weight: 700;
  letter-spacing: 0.5px;
  color:#777272;
`
export const Location = styled.p`
    margin-top: 10px;
  font-size: 24px;

  font-weight: 700;
  letter-spacing: 0.5px;
  color:#777272;
`
export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
  background-color:  #09d2f1;
`
export const StatsItem = styled.li`
    padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
//   border-right: 1px solid #010101;
`
export const Label = styled.span`
    display: flex;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #2b2323;
`
export const Quantity = styled.span`
    ont-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
`