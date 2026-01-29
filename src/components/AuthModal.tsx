"use client";

import { useState } from "react";

interface Props {
  onSuccess: () => void;
  onClose: () => void;
}

export default function AuthModal({ onSuccess, onClose }: Props) {
  const [stage, setStage] = useState<"email" | "signup" | "login">("email");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ---------------------------
  // STEP 1: CHECK EMAIL
  // ---------------------------
  const checkEmail = async () => {
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      setStage(data.exists ? "login" : "signup");
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // STEP 2: SIGNUP
  // ---------------------------
  const signup = async () => {
    setError("");
    const { name, phone, pincode, password } = form;

    if (!name || !phone || !pincode || !password) {
      setError("All fields are required");
      return;
    }

    if (phone.length < 10) {
      setError("Enter a valid phone number");
      return;
    }

    if (pincode.length !== 6) {
      setError("Enter a valid 6-digit pincode");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, email })
      });

      if (res.ok) {
        onSuccess();
      } else {
        setError("Signup failed");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // STEP 3: LOGIN
  // ---------------------------
  const login = async () => {
    setError("");

    if (!form.password) {
      setError("Password is required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: form.password })
      });

      if (res.ok) {
        onSuccess();
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-white text-black p-8 rounded-xl shadow-xl w-[420px] relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ×
        </button>

        {/* ERROR */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* EMAIL STEP */}
        {stage === "email" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Enter Email</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border p-3 rounded mb-4"
            />
            <button
              disabled={loading}
              onClick={checkEmail}
              className="w-full bg-black text-white p-3 rounded font-semibold disabled:opacity-60"
            >
              {loading ? "Checking..." : "Continue"}
            </button>
          </>
        )}

        {/* SIGNUP STEP */}
        {stage === "signup" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>

            <input
              placeholder="Full Name"
              className="w-full border p-3 rounded mb-3"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Phone Number"
              className="w-full border p-3 rounded mb-3"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />

            <input
              placeholder="Pincode"
              className="w-full border p-3 rounded mb-3"
              value={form.pincode}
              onChange={e => setForm({ ...form, pincode: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded mb-4"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />

            <button
              disabled={loading}
              onClick={signup}
              className="w-full bg-black text-white p-3 rounded font-semibold disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </>
        )}

        {/* LOGIN STEP */}
        {stage === "login" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded mb-4"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />

            <button
              disabled={loading}
              onClick={login}
              className="w-full bg-black text-white p-3 rounded font-semibold disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
