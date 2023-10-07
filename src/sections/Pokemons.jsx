import Button from "@/components/Button";
import { useState } from "react";
import { useEffect } from "react";
import Card from "@/components/Card";

const Products = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvol, setPokemonEvol] = useState([]);

  useEffect(() => {
    getEvolutions(pokemonId);
  }, [pokemonId]);

  async function getEvolutions(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();

    let pokemonEvolutions = [];

    let pokemonLv1Name = data.chain.species.name;
    let pokemonLv1Image = await getPokemonImages(pokemonLv1Name);
    pokemonEvolutions.push([pokemonLv1Name, pokemonLv1Image]);

    if (data.chain.evolves_to.length !== 0) {
      let pokemonLv2Name = data.chain.evolves_to[0].species.name;
      let pokemonLv2Image = await getPokemonImages(pokemonLv2Name);
      pokemonEvolutions.push([pokemonLv2Name, pokemonLv2Image]);

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonLv3Name =
          data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Image = await getPokemonImages(pokemonLv3Name);
        pokemonEvolutions.push([pokemonLv3Name, pokemonLv3Image]);
      }
    }
    setPokemonEvol(pokemonEvolutions);
  }

  async function getPokemonImages(Images) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${Images}/`
    );
    const data = await response.json();
    return data.sprites.other["official-artwork"].front_default;
  }

  const handlePrev = () => {
    if (pokemonId === 1) {
      setPokemonId(1);
    } else {
      setPokemonId(pokemonId - 1);
    }
  };

  const handleNext = () => {
    setPokemonId(pokemonId + 1);
  };

  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-start">
      <div className="flex items-center justify-center my-[24px] truncate ">
        <h1 className="text-[#F2CB05] text-[56px] text-center font-semibold uppercase">
         {"Poke-Cartas"}
        </h1>
      </div>
      <div className="w-full flex items-center justify-center p-[24px] gap-[16px]">
        {pokemonEvol.map((pokemon) => (
          <Card key={pokemon[0]} name={pokemon[0]} image={pokemon[1]} />
        ))}
      </div>
      <div className="w-full h-[80px] flex items-center justify-center gap-[48px] my-[24px] ">
        <Button
          onClick={() => {
            handlePrev();
          }}
          variant={"icon"}
          icon="ion:arrow-undo-sharp"
        />
        <Button
          onClick={() => {
            handleNext();
          }}
          variant={"icon"}
          icon="ion:arrow-redo-sharp"
        />
      </div>
    </div>
  );
};

export default Products;
