import { FacebookProvider } from "react-facebook";
import Login from "./components/Login";

const App = () => {
  return (
    <FacebookProvider appId="485197992891856">
      <Login />
    </FacebookProvider>
  );
};

export default App;
