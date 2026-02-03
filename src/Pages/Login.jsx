import { ErrorBoundary } from "react-error-boundary";
import LoginForm from "../Component/LoginForm";
import ErrorFallback from "../Component/ErrorFallback";

const Login = () => {
  return (
    <div className="flex justify-center h-[80vh] items-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LoginForm />
      </ErrorBoundary>
    </div>
  );
};
export default Login;
