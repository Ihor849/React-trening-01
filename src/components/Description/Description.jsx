import PropTypes  from 'prop-types'
import {Profile,Card,Avatar,Name,Tag,Location,Stats,StatsItem,Label,Quantity} from './Description.styled'

export const Description = ({ username, tag, location, avatar, followers, views, likes }) => {
  return (
    <Profile>
        <Card>
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className="avatar"
          />
        <Name>Petra Marica</Name>
        <Tag>@pmarica</Tag>
        <Location>Salvador, Brasil</Location>
        </Card>

      <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity className="quantity">1000</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity className="quantity">2000</Quantity>
    </StatsItem>
    <StatsItem>
        <Label>Likes</Label>
        <Quantity className="quantity">3000</Quantity>
    </StatsItem>
      </Stats>
    </Profile>)
}
Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:  PropTypes.number.isRequired,
}