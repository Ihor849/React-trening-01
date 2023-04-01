// import user from 'components/json/user.json'

import { Profile } from 'components/Profile/Profile'
import upcomingEvent from 'components/json/user.json'
import {Page} from './App.styled'

export const App = () => {
  return (
    <Page>
      <Profile events = {upcomingEvent} />
    </Page>
  )
}
