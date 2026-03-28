import React, { memo, useRef, useEffect } from "react";

const injectShimmer = () => {
  if (document.getElementById("shimmer-kf")) return;
  const s = document.createElement("style");
  s.id = "shimmer-kf";
  s.textContent = `
    @keyframes shimmerSweep {
      0%   { left: -80%; }
      100% { left: 160%; }
    }
  `;
  document.head.appendChild(s);
};

const styles = `
  .contact-tag::before { content: '+ '; color: #4ade80; }

  .wa-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #111;
    border-radius: 14px;
    padding: 18px 22px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: transform 0.25s;
  }
  .wa-card:hover { transform: translateY(-2px); }
  .wa-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    padding: 1px;
    background: linear-gradient(135deg, #60c8f5, #4ade80);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .form-card {
    background: #111;
    border-radius: 24px;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
  }
  .form-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(135deg, #60c8f5 0%, #4ade80 50%, #f472b6 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .contact-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    background: rgba(255,255,255,0.04);
    border: 1px solid #1e1e1e;
    color: #e0e0e0;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .contact-input::placeholder { color: #2e2e2e; }
  .contact-input:focus {
    border-color: #60c8f5;
    box-shadow: 0 0 0 3px rgba(96, 200, 245, 0.08);
  }
  .contact-textarea:focus {
    border-color: #f472b6 !important;
    box-shadow: 0 0 0 3px rgba(244, 114, 182, 0.08) !important;
  }

  .send-btn {
    width: 100%;
    padding: 0.9rem;
    border-radius: 14px;
    background: linear-gradient(90deg, #60c8f5 0%, #4ade80 50%, #f472b6 100%);
    color: #000;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: 0.02em;
    position: relative;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
  }
  .send-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 32px rgba(96,200,245,0.35), 0 4px 12px rgba(244,114,182,0.3);
  }
  .send-btn:active { transform: scale(0.99); }
`;

const Contact = memo(({ theme }) => {
  const shimmerRef = useRef(null);

  useEffect(() => { injectShimmer(); }, []);

  const handleBtnEnter = () => {
    if (shimmerRef.current) {
      shimmerRef.current.style.animation = "none";
      void shimmerRef.current.offsetHeight;
      shimmerRef.current.style.animation = "shimmerSweep 0.65s ease-out forwards";
    }
  };

  const handleBtnLeave = () => {
    if (shimmerRef.current) {
      shimmerRef.current.style.animation = "none";
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section
        id="contact"
        style={{
          padding: "5rem 2rem",
          borderTop: `1px solid ${theme.border}`,
          position: "relative",
          zIndex: 2,
          background: "#0d0d0d",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div className="reveal">
            <div
              className="contact-tag"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "1.25rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              CONTACT
            </div>

            <h2
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 48px)",
                color: "#fff",
                marginBottom: "1rem",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Let's Build Something Amazing
            </h2>

            <p style={{
              color: "#555",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
              fontSize: "15px",
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            }}>
              Ready to transform your business? Reach out directly.
            </p>

            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="wa-card">
              <div
                style={{
                  width: 48, height: 48,
                  borderRadius: 12,
                  background: "#0d1f0d",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4ade80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "#fff", fontSize: "15px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>WhatsApp</div>
                <div style={{ fontSize: "0.82rem", color: "#555", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>Chat with us instantly</div>
              </div>
            </a>
          </div>

          {/* RIGHT */}
          <div className="reveal form-card" style={{ transitionDelay: "100ms" }}>
            {[
              { label: "Your Name", type: "text", ph: "Name" },
              { label: "Email Address", type: "email", ph: "name@example.com" },
            ].map((f) => (
              <div key={f.label} style={{ marginBottom: "1.5rem" }}>
                <label style={{
                  display: "block", fontSize: "0.82rem", fontWeight: 500,
                  color: "#aaa", marginBottom: "0.5rem", letterSpacing: "0.04em",
                  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                }}>
                  {f.label}
                </label>
                <input type={f.type} placeholder={f.ph} className="contact-input" />
              </div>
            ))}

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block", fontSize: "0.82rem", fontWeight: 500,
                color: "#aaa", marginBottom: "0.5rem", letterSpacing: "0.04em",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
              }}>
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="contact-input contact-textarea"
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Send button with exact shimmer from ServiceCard */}
            <button
              className="send-btn"
              onMouseEnter={handleBtnEnter}
              onMouseLeave={handleBtnLeave}
            >
              {/* Shimmer sweep — exact same as ServiceCard */}
              <div
                ref={shimmerRef}
                style={{
                  position: "absolute",
                  top: 0, left: "-80%",
                  width: "55%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), rgba(255,255,255,0.15), transparent)",
                  transform: "skewX(-15deg)",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              />
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
});

export default Contact;
