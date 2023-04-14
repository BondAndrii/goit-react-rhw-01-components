import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import user from "../user.json"
import data from "../data.json";
import friends from "../friends.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {<Profile props={user} />}
      {<Statistic title="Upload stats" stats={data} />}
      {<FriendList friends={friends} />}
    </div>
  );
};
