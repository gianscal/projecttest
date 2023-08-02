import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import CharacterList from '../components/CharacterList.js';
import { getCharacters } from '../utils/api.js';

const Home = ({ characters }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" style={{ textAlign: 'center', margin: '0 auto', fontWeight: 'bold', color: 'darkblue' }}>
          Listado de personajes humanos de Rick and Morty
        </Typography>
        <CharacterList characters={characters} currentPage={currentPage} onPageChange={handlePageChange} />
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const characters = await getCharacters();
  return { props: { characters } };
}

export default Home;
