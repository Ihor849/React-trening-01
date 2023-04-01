import PropTypes from 'prop-types'
import { Description } from 'components/Description/Description'
import {ContainerProfile} from './Profile.styled'



export const Profile = ({ events }) => {
   
    return (
        <ContainerProfile>
            {events.map(({ username, teg, location, avatar, stats }) => (
                <Description className='profile' key={username}
                    username={username}
                    tag={teg}
                    location={location}
                    avatar={avatar}
                    followers={stats.followers}
                    views={stats.views}
                    likes={stats.likes} />))}
        </ContainerProfile>
    );
};
Profile.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            username: PropTypes.string.isRequired,
            tag: PropTypes.string,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.exact({
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired,
            }) 
            
            
        },),
    ),
};