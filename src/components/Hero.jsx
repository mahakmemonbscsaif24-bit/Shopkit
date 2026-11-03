export default function Hero() {
  const headline = "Glow Naturally Every Single Day";
  const subtitle = "Discover pure botanical skincare crafted to nourish your skin.";

  return (
    <section style={{ textAlign: "center", padding: "3.5rem 1rem", background: "linear-gradient(135deg, #fff0f3 0%, #ffe4e9 100%)", color: "#4a4044", borderRadius: "20px", margin: "1rem 0", border: "1px solid #ffd1dc", boxShadow: "0 10px 25px rgba(255, 182, 193, 0.15)" }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem", fontWeight: "800", color: "#2d2427" }}>{headline}</h1>
      <p style={{ color: "#7a6b70", marginBottom: "1.75rem", fontSize: "1.1rem" }}>{subtitle}</p>
      <button style={{ padding: "0.75rem 2rem", background: "linear-gradient(135deg, #ff8da1 0%, #ff69b4 100%)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 15px rgba(255, 105, 180, 0.3)" }}>
        Explore Collection ✨
      </button>
    </section>
  );
}