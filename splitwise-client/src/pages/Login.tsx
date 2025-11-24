import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../services/auth.service";
import { useAuth } from "../store/auth.store";
import {
  PageContainer,
  Title,
  Input,
  Button,
  ErrorText,
  LinkText,
} from "../styles/common";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuth((state: any) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const { user, token } = await loginApi(email, password);

      // save user + token in Zustand + localStorage
      login(user, token);

      // redirect to dashboard
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Title>Login</Title>

      {error && <ErrorText>{error}</ErrorText>}

      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />

      <Button disabled={loading} onClick={handleLogin}>
        {loading ? "Logging In..." : "Login"}
      </Button>

      <LinkText>
        Don’t have an account? <Link to="/register">Register</Link>
      </LinkText>
    </PageContainer>
  );
};

export default Login;
