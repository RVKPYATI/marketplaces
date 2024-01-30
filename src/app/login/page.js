import "../globals.css";
import { AuthProvider } from "../services/authContext";
import { LoginForm } from "../components/ui/LoginForm/LoginForm";

export default function Login() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}
