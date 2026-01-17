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

  const checkEmail = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/check-email", {
      method: "POST",
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    setLoading(false);
    setStage(data.exists ? "login" : "signup");
  };

  const signup = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ ...form, email })
    });
    setLoading(false);
    if (res.ok) {
      onSuccess();
    }
  };

  const login = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password: form.password })
    });
    setLoading(false);
    if (res.ok) {
      onSuccess();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white text-black p-8 rounded-xl shadow-xl w-[420px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold"
        >
          ×
        </button>

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
              className="w-full bg-black text-white p-3 rounded font-semibold"
            >
              {loading ? "Checking..." : "Continue"}
            </button>
          </>
        )}

        {stage === "signup" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

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
              className="w-full bg-black text-white p-3 rounded font-semibold"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </>
        )}

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
              className="w-full bg-black text-white p-3 rounded font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </>
        )}
        
      </div>
    </div>
  );
}
