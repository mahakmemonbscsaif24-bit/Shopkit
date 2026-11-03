import { Container, SimpleGrid, Card, Text, Title } from "@mantine/core";

export default function Features() {
  const features = [
    { title: "100% Organic", desc: "Pure botanical ingredients sourced directly from nature." },
    { title: "Cruelty Free", desc: "Never tested on animals, crafted with love and ethics." },
    { title: "Dermatologist Tested", desc: "Safe for all skin types, providing deep hydration & glow." },
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={2} ta="center" mb="lg" c="#2d2427">Why Choose Us?</Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
        {features.map((item, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" style={{ background: "#fff0f3", border: "1px solid #ffd1dc" }}>
            <Text fw={700} size="lg" mb="xs" c="#d81b60">{item.title}</Text>
            <Text size="sm" c="#7a6b70">{item.desc}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}