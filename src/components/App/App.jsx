// import user from 'components/json/user.json'

import { Profile } from 'components/Profile/Profile'
import upcomingEvent from 'components/json/user.json'
import { Page } from './App.styled'
import {Statistics} from 'components/Statistics/Statistics'
import statisticData from 'components/json/data.json'
import { FriendList } from 'components/FriendList/FriendList'
import friends from 'components/json/friends.json'
import transactions from 'components/json/transactions.json'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <Page>
      <Profile users={upcomingEvent} />
      <Statistics title='' stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions = {transactions} />
    </Page>
  )
}
