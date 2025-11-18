import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Envelope from "./Envelope";   // <-- IMPORT THE NEW FILE

export default function AnniversarySite() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    generateSparkles();
  }, []);

  return (
    <div style={styles.container}>
      <div id="sparkles"></div>

      <Clouds />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        style={styles.heading}
      >
        happy six months, my love
      </motion.h1>

      <ScrollGallery />

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        style={styles.subtext}
      >
      </motion.p>

      <FloatingHearts />
      <FloatingNotes />

      {/* ⭐ Envelope popup instead of the old modal */}
      {modalOpen && <Envelope close={() => setModalOpen(false)} />}

      <button style={styles.loveButton} onClick={() => setModalOpen(true)}>
        surprise
      </button>
    </div>
  );
}

/* ------------------ SCROLL GALLERY (unchanged) ------------------ */
function ScrollGallery() {
  const images = [
    "src/pics/WhatsApp Image 2025-11-18 at 17.19.33.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.19.51.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.20.04.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.20.26.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.20.40.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.21.07.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.21.14.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.21.26.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.21.33.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.21.47.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.22.10.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.22.21.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.22.35.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.22.40.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.23.04.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.23.22.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.23.32.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.23.36.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.23.42.jpeg",
    "src/pics/WhatsApp Image 2025-11-18 at 17.23.53.jpeg",
  ];

  return (
    <div style={galleryStyles.wrapper}>
      <div style={galleryStyles.scroll}>
        {images.map((src, i) => (
          <div key={i} style={galleryStyles.polaroid}>
            <img src={src} alt="" style={galleryStyles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------ SPARKLES ------------------ */
function generateSparkles() {
  const container = document.getElementById("sparkles");
  if (!container) return;

  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("div");
    spark.className = "sparkle";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 100 + "vh";
    spark.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(spark);
  }
}

/* ------------------ CLOUDS ------------------ */
function Clouds() {
  const clouds = Array.from({ length: 6 });
  return (
    <>
      {clouds.map((_, i) => (
        <div
          key={i}
          className="cloud"
          style={{
            top: `${Math.random() * 50 + 10}%`,
            width: `${200 + Math.random() * 200}px`,
            height: `${80 + Math.random() * 60}px`,
            background: "white",
            borderRadius: "50%",
            left: `${-200 - Math.random() * 300}px`,
            animationDuration: `${28 + Math.random() * 12}s`,
          }}
        ></div>
      ))}
    </>
  );
}

/* ------------------ FLOATING HEARTS (unchanged) ------------------ */
function FloatingHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-10, -200 - Math.random() * 300],
            x: [0, (Math.random() - 0.5) * 200],
            scale: [0.6, 1.2, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            ...styles.heart,
            left: `${Math.random() * 100}%`,
            fontSize: `${24 + Math.random() * 28}px`,
          }}
        >
          💗
        </motion.div>
      ))}
    </>
  );
}

/* ------------------ FLOATING NOTES (unchanged) ------------------ */
function FloatingNotes() {
  const notes = [
    "you make me so happy💓",
    "always so grateful for you",
    "forever yours <3",
    "your smile is my favourite thing",
    "i love you hottie",
    "my baby, my love",
    "cant get enough of you",
  ];

  return (
    <>
      {notes.map((text, i) => {
        const leftPosition = (i + 1) * (100 / (notes.length + 1));

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [40, -350 - Math.random() * 200],
            }}
            transition={{
              duration: 12 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              ...styles.note,
              left: `${leftPosition}%`,
              transform: "translateX(-50%)",
            }}
          >
            {text}
          </motion.div>
        );
      })}
    </>
  );
}

/* ------------------ GALLERY STYLES (unchanged) ------------------ */

const galleryStyles = {
  wrapper: {
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px 0",
  },
  scroll: {
    display: "inline-flex",
    gap: "18px",
    padding: "0 20px",
  },
  polaroid: {
    background: "white",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    border: "2px solid #ffe4f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "160px",
    width: "auto",
    borderRadius: "8px",
    objectFit: "cover",
  },
};

/* ------------------ MAIN STYLES (unchanged) ------------------ */

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Inter', sans-serif",
  },

  heading: {
    textAlign: "center",
    fontSize: "64px",
    marginTop: "40px",
    color: "black",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    letterSpacing: "1px",
    textShadow: "0 2px 12px rgba(255, 255, 255, 0.8)",
  },

  subtext: {
    textAlign: "center",
    fontSize: "22px",
    color: "black",
    position: "absolute",
    bottom: "40px",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    opacity: 0.9,
    textShadow: "0 2px 8px rgba(255, 255, 255, 0.7)",
  },

  heart: {
    position: "absolute",
    bottom: "-40px",
    userSelect: "none",
  },

  note: {
    position: "absolute",
    bottom: "-30px",
    padding: "10px 20px",
    background:
      "linear-gradient(135deg, rgba(255, 230, 245, 0.85), rgba(255, 200, 235, 0.9))",
    borderRadius: "14px",
    fontSize: "18px",
    color: "#8b3f73",
    fontWeight: 500,
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 25px rgba(255, 150, 200, 0.6)",
    border: "1px solid rgba(255, 180, 220, 0.7)",
    whiteSpace: "nowrap",
  },

  loveButton: {
    position: "absolute",
    top: "78%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "12px 22px",
    fontSize: "18px",
    borderRadius: "25px",
    border: "none",
    background: "#ff9ecb",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(255, 158, 203, 0.5)",
  },
};
