import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import { MarketBalls } from "@/sections/MarketBalls";
import Pokemons from "@/sections/Pokemons";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Pokemons />
        <MarketBalls />
      </Layout>
    </>
  );
}
