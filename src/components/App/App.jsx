// import user from 'components/json/user.json'

import { Profile } from 'components/Profile/Profile'
import upcomingEvent from 'components/json/user.json'

export const App = () => {
  return (
    <div >
      <Profile events = {upcomingEvent} />
    </div>
  )
}
