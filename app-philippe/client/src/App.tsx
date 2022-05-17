import { Nav } from "./Nav";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./PostsPage";
import { NewPostPage } from "./NewPostPage";
import { FiboPage } from "./FiboPage";

const App = () => (
  <div className="App">
    <Nav />
    <hr />
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/new" element={<NewPostPage />} />
      <Route path="/fibo" element={<FiboPage />} />
    </Routes>
  </div>
);

export default App;
