import React, { useState } from "react";
import "./Envelope.css";

export default function EnvelopeSurprise({ onClose }) {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function handleOpenClick() {
    // start flap/open animation, then after a short delay reveal letter content
    setOpened(true);
    setTimeout(() => {
      setRevealed(true);
    }, 900); // reveal after flap animation (~900ms)
  }

  return (
    <div className="env-overlay" role="dialog" aria-modal="true">
      <div className="env-center">
        <div className={`env-large ${opened ? "open" : ""}`}>
          {/* envelope flap */}
          <div className="env-flap" />

          {/* envelope front */}
          <div className="env-front">
            {!opened && (
              <button className="env-open-btn" onClick={handleOpenClick}>
                Open Me
              </button>
            )}
          </div>

          {/* letter paper slides up inside the envelope (preview) */}
          <div className={`env-letter ${revealed ? "visible" : ""}`}>
            {/* poem/content — identical to your previous modal text */}
            <div className="env-letter-paper">
              <h2 className="env-letter-title">ishan</h2>
              <div className="env-letter-body">
                baby ive absolutely loved every moment with you these past six months.
                youre the best partner i couldve ever asked for, and i feel so lucky
                to have you in my life.
                <br />
                you make me so incredibly happy, and i feel the safest when i am with you.
                <br />
                i love your kindness, your humor, your intelligence, your creativity,
                your passion, your warmth, your everything.
                <br />
                i just wanna spend every day making you smile and showing you how much
                i love you.
                <br />
                thank you for choosing me, loving me, caring for me and also handling my tantrums lol.
                <br />
                i wouldnt ever want to do this with anyone else but you.
                i love you so so much handsome
                <br /><br />
                — PR
              </div>

              <div className="env-letter-actions">
                <button
                  className="env-close-btn"
                  onClick={() => {
                    // close envelope and notify parent
                    setRevealed(false);
                    setTimeout(() => {
                      setOpened(false);
                      onClose && onClose();
                    }, 300);
                  }}
                >
                  close 💗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* small note: clicking background also closes (optional) */}
        <button
          className="env-skip"
          onClick={() => {
            // immediate close
            onClose && onClose();
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
