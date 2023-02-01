import { useLogin } from 'react-facebook';

const Login = () => {
  const { login, status, isLoading, error} = useLogin();
  
  async function handleLogin() {
    try {
      const response = await login({
        scope: 'email',
      });

      console.log(response.status);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <button onClick={handleLogin} disabled={isLoading}>
      Login via Facebook
    </button>
  );
}
export default Login;
