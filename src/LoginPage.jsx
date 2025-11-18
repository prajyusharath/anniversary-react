import React, { useEffect } from "react";

export default function LoginPage({ setIsLoggedIn }) {
  useEffect(() => {
    // Create floating particles
    const particleContainer = document.getElementById("particle-layer");

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 6 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = 6 + Math.random() * 6 + "s";

      particleContainer.appendChild(particle);
      setTimeout(() => particle.remove(), 12000);
    }

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  function handleLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "professionalnappers_" && pass === "180525") {
      setIsLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    } else {
      document.getElementById("error").innerText =
        "its your phone password dumbass";
    }
  }

  return (
    <div style={styles.wrapper}>
      {/* Background layers */}
      <div id="particle-layer" style={styles.particleLayer}></div>

      <div style={styles.gradientOrb1}></div>
      <div style={styles.gradientOrb2}></div>
      <div style={styles.gradientOrb3}></div>

      {/* Main Login Box */}
      <div style={styles.card}>
        <h2 style={styles.title}>swagat hai aapka</h2>

        <input
          id="username"
          type="text"
          placeholder="Username"
          style={styles.input}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button} onClick={handleLogin}>
          Enter →
        </button>

        <div id="error" style={styles.error}></div>
      </div>

      {/* Style tag for keyframes */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          100% { transform: translateY(-120vh) scale(1.8); opacity: 0; }
        }

        .particle {
          position: fixed;
          bottom: -20px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          opacity: 0.6;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.7));
          animation: floatUp linear infinite;
        }

        @keyframes fadeInCard {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pulseGlow {
          0% { filter: blur(50px) brightness(1); }
          50% { filter: blur(60px) brightness(1.35); }
          100% { filter: blur(50px) brightness(1); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(120deg, #ffb7d5, #dfd4ff, #cbe3ff, #ffd6f3, #e4d1ff)",
    backgroundSize: "300% 300%",
    animation: "bgShift 16s ease infinite",
  },

  particleLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 2,
  },

  // glowing gradient circles
  gradientOrb1: {
    position: "absolute",
    width: "420px",
    height: "420px",
    background: "radial-gradient(circle, #ff92c2, transparent)",
    borderRadius: "50%",
    top: "10%",
    left: "5%",
    filter: "blur(80px)",
    animation: "pulseGlow 8s ease-in-out infinite",
  },

  gradientOrb2: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, #a0c5ff, transparent)",
    borderRadius: "50%",
    bottom: "12%",
    right: "8%",
    filter: "blur(90px)",
    animation: "pulseGlow 10s ease-in-out infinite",
  },

  gradientOrb3: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #ffd7ff, transparent)",
    borderRadius: "50%",
    top: "45%",
    right: "35%",
    filter: "blur(110px)",
    animation: "pulseGlow 14s ease-in-out infinite",
  },

  card: {
    zIndex: 5,
    width: "380px",
    padding: "40px",
    borderRadius: "22px",
    backdropFilter: "blur(14px)",
    background: "rgba(255, 255, 255, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
    animation: "fadeInCard 1.2s ease",
    textAlign: "center",
  },

  title: {
    fontSize: "32px",
    fontFamily: "Cormorant Garamond, serif",
    marginBottom: "22px",
    color: "#ff6fae",
    textShadow: "0 0 15px rgba(255,150,200,0.55)",
  },

  input: {
    width: "100%",
    padding: "13px",
    margin: "10px 0",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontSize: "15.5px",
    background: "rgba(255, 255, 255, 0.85)",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "18px",
    background: "linear-gradient(90deg, #ff8ac6, #ff5f9e)",
    border: "none",
    borderRadius: "14px",
    fontSize: "18px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 6px 20px rgba(255, 80, 150, 0.45)",
  },

  error: {
    marginTop: "12px",
    color: "red",
    fontSize: "14px",
    minHeight: "20px",
  },
};
