// SignInForm.js
import React, { useState } from "react";
import { auth, signInWithEmailAndPassword, signInAnonymously } from "../../services/dbInitialization";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      navigate("/App"); // 🔁 redirect after login
      // console.log("Signed in:", result.user.email);
    } catch (error) {
      console.error("Error signing in with email:", error.message);
    }
  };
  const handleAnonymousSignIn = async () => {
    try {
      const result = await signInAnonymously(auth);
       navigate("/App"); // 🔁 redirect after login
      // console.log("Signed in anonymously as:", result.user.uid);
    } catch (error) {
      console.error("Anonymous sign-in failed:", error.message);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto", padding: 20 }}>
      <h2>Sign In</h2>
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%" }}>Sign In</button>
      </form>
      <hr style={{ margin: "20px 0" }} />
      <button onClick={handleAnonymousSignIn} style={{ width: "100%" }}>
        Sign In Anonymously
      </button>
    </div>
  );
};

export default SignInForm;
