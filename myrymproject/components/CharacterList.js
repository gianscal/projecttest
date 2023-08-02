// components/CharacterList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import styles from './CharacterList.module.css';

const CharacterList = ({ characters, currentPage, onPageChange }) => {
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCharacters = characters.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.container}>
      <List>
        {visibleCharacters.map((character) => (
          <ListItem key={character.id} className={styles.listItem}>
            <ListItemText primary={character.name} />
          </ListItem>
        ))}
      </List>
      <Pagination
        count={Math.ceil(characters.length / itemsPerPage)}
        page={currentPage}
        onChange={onPageChange}
      />
    </div>
  );
};

export default CharacterList;
