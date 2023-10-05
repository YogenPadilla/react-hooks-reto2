import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import Products from "@/sections/Pokemons";


export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Products />
      </Layout>
    </>
  );
}
