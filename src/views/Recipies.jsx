import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { recipes } from "../data/recipes";

function Recipies() {
  const { ident } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(ident));
  return (<Container>
    <h1>{recipe.name}</h1>
    <p>{recipe.details}</p>


  </Container>)
}

export default Recipies;
