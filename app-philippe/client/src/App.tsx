import { Nav } from "./Nav";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./PostsPage";
import { NewPostPage } from "./NewPostPage";
import { FiboPage } from "./FiboPage";
import { Async } from "./Async";
import { getUserInfo, signIn, signUp } from "./server-api";
import { memo, useState } from "react";

const AppAuthenticated = ({ userName }: { userName: string }) => (
  <>
    <p>Logged in as {userName}</p>
    <Nav />
    <hr />
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/new" element={<NewPostPage />} />
      <Route path="/fibo" element={<FiboPage />} />
    </Routes>
  </>
);

const AppUnauthenticated = ({
  onSignIn,
  onSignUp,
}: {
  onSignIn: (name: string, password: string) => Promise<void>;
  onSignUp: (name: string, password: string) => Promise<void>;
}) => {
  const handler =
    (fn: (name: string, password: string) => Promise<void>) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const username = (
        e.currentTarget.elements.namedItem("username") as HTMLInputElement
      )?.value;
      const password = (
        e.currentTarget.elements.namedItem("username") as HTMLInputElement
      )?.value;
      if (username && password) {
        await fn(username, password);
      }
    };

  const handleSignIn = handler(onSignIn);
  const handleSignUp = handler(onSignUp);

  return (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSignIn}>
        <input name="username" placeholder="Username" autoFocus />
        <input name="password" placeholder="Password" type="password" />
        <button type="submit">Log in</button>
      </form>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" type="password" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

const App = memo(() => {
  const [stateToken, setToken] = useState<string | null>(null);

  const handleSignIn = async (name: string, password: string) => {
    const { token } = await signIn(name, password);
    setToken(token);
  };
  const handleSignUp = async (name: string, password: string) => {
    const { token } = await signUp(name, password);
    setToken(token);
  };

  return (
    <div className="App">
      <Async
        key={stateToken}
        fn={getUserInfo}
        loading={() => <div>Authenticating…</div>}
      >
        {(userInfo) => {
          return userInfo?.name ? (
            <AppAuthenticated userName={userInfo.name} />
          ) : (
            <AppUnauthenticated
              onSignIn={handleSignIn}
              onSignUp={handleSignUp}
            />
          );
        }}
      </Async>
    </div>
  );
});

export default App;
