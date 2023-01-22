import { useUser } from 'context';

export const Menu = () => {
  const { username, logIn, logOut } = useUser();

  return (
    <div>
      <h3>Username: {username ? username : 'guest'}</h3>
      {username ? (
        <button onClick={logOut}>Logout {username}</button>
      ) : (
        <button onClick={() => logIn('Piotrek')}>Login Piotrek</button>
      )}
    </div>
  );
};
