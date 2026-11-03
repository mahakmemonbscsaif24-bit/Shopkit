import { Container, Group, Text, Button } from "@mantine/core";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #ffd1dc", background: "#fffbfc", padding: "0.75rem 0" }}>
      <Container size="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Text fw={900} size="xl" c="#d81b60">✨ GlowShop</Text>
        <Group gap="lg">
          <a href="#" style={{ textDecoration: "none", color: "#4a4044", fontWeight: 500 }}>Home</a>
          <a href="#" style={{ textDecoration: "none", color: "#4a4044", fontWeight: 500 }}>Shop</a>
          <a href="#" style={{ textDecoration: "none", color: "#4a4044", fontWeight: 500 }}>About</a>
          <a href="#" style={{ textDecoration: "none", color: "#4a4044", fontWeight: 500 }}>Contact</a>
        </Group>
        <Button variant="filled" color="pink" radius="md">Cart 🛍️</Button>
      </Container>
    </header>
  );
}