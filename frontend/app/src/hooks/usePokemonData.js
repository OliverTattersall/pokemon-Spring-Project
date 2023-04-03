import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function usePokemonData() {
  return useQuery("allPokemonData", () =>
    axios.get("/pokemon").then((res) => res.data)
  );
  
}
