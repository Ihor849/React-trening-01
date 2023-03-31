import PropTypes from 'prop-types'
import {Description} from 'components/Description/Description'



export const Profile = ({ events }) => {
   
    return (
        <div className='profile'>
            {events.map(({ username, teg, location, avatar, stats }) => (
                <Description className='event' key={username}
                    username={username}
                    tag={teg}
                    location={location}
                    avatar={avatar}
                    followers={stats.followers}
                    views={stats.views}
                    likes={stats.likes} />))}</div>
    );
};
Profile.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: {
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired,
            }
        },),
    ),
};