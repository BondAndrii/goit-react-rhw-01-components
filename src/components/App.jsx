import { Profile } from "./Profile/Profile";
import user from "../user.json"

export const App = () => {
  console.log(user);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {<Profile props={user} />}
    </div>
  );
};
