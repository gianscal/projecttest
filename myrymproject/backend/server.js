const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const axios = require('axios');

const schema = buildSchema(`
  type Character {
    id: ID!
    name: String!
    species: String!
  }

  type Query {
    characters: [Character]
  }
`);

const root = {
  characters: async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results.filter((character) => character.species === 'Human');
  },
};

const app = express();

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend listo en http://localhost:${PORT}/api`);
});
