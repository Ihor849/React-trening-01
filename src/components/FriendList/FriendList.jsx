import PropTypes from 'prop-types'
import {FriendCard,Item, Status, Avatar, Name,Online } from 'components/FriendList/FriendList.styled'

import { CiApple } from "react-icons/ci"
import {iconSize} from 'components/constants/iconSize'
export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
   <FriendCard>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status Online={isOnline} >
            {isOnline}
          </Status >
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </Item>
        
      ))}
    </FriendCard>
  )
}


FriendList.propTypes =  {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}

