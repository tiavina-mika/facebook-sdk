import { useLogin } from "react-facebook";

const Login = () => {
  const { login, isLoading } = useLogin();

  const handleLogin = async () => {
    try {
      const response = await login({
        scope: "email"
      });

      console.log("response", response);
    } catch (error) {
      console.log("error.message", (error as any).message);
    }
  };

  return (
    <button onClick={handleLogin} disabled={isLoading}>
      Login via Facebook
    </button>
  );
};
export default Login;
