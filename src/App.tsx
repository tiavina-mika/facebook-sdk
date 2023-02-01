import { FacebookProvider } from "react-facebook";
import Login from "./components/Login";

const App = () => {
  return (
    <FacebookProvider appId="xxx">
      <Login />
    </FacebookProvider>
  );
};

export default App;
