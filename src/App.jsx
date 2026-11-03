import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { Container, Title, SimpleGrid } from "@mantine/core";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Container size="lg">
          <Hero />
          <Features />
          
          <div style={{ margin: "2rem 0" }}>
            <Title order={2} ta="center" mb="xl" c="#2d2427">Featured Skincare</Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </SimpleGrid>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}