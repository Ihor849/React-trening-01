import PropTypes from 'prop-types';
import { Statistic, Title, StatList, Item, Label, Percentage } from 'components/Statistics/Statistics.styled'

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export const Statistics = ({title = "", stats}) => {
  return (
    <Statistic>
      <Title>{title}</Title>

      <StatList>{stats.map(({id,label,percentage}) => (
        <Item key={id} style={{backgroundColor: generateColor()}}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>))}
      </StatList>
    </Statistic>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}