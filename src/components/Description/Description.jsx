import PropTypes  from 'prop-types'

export const Description = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (<div class='Container'>
        <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
    <p className="name">Petra Marica</p>
    <p className="tag">@pmarica</p>
    <p className="location">Salvador, Brasil</p>
  </div>

  <ul className="stats">
    <li className="stats-item">
      <span className="label">Followers</span>
      <span className="quantity">1000</span>
    </li>
    <li className="stats-item">
      <span className="label">Views</span>
      <span className="quantity">2000</span>
    </li>
    <li className="stats-item">
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
    </div>)
}
Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:  PropTypes.number.isRequired,
}