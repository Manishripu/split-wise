import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../services/auth.service";
import { useAuth } from "../store/auth.store";
import {
  PageContainer,
  Title,
  Input,
  Button,
  ErrorText,
  LinkText,
} from "../styles/common";

const Register = () => {
  const navigate = useNavigate();
  const login = useAuth((state: any) => state.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      if (!name || !email || !password) {
        setError("All fields are required");
        return;
      }

      const { user, token } = await registerApi(name, email, password);

      // Save user + token via Zustand
      login(user, token);

      // Redirect to dashboard
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Title>Create Account</Title>

      {error && <ErrorText>{error}</ErrorText>}

      <Input
        placeholder="Full Name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />

      <Input
        placeholder="Email address"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Create password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />

      <Button disabled={loading} onClick={handleRegister}>
        {loading ? "Creating Account..." : "Register"}
      </Button>

      <LinkText>
        Already have an account? <Link to="/login">Login</Link>
      </LinkText>
    </PageContainer>
  );
};

export default Register;
