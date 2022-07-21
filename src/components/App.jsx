import { Profile } from './Profile/Profile';
import user from './data/user.json';
import data from './data/data.json';
import transactions from './data/transactions.json';
import friends from './data/friends.json';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Section title="Upload stats">
        <Statistics stats={data} />
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
