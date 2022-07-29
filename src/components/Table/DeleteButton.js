import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: inline;
  justify-content: center;
  background-color: transparent;
  color: rosybrown;
  border-radius: 5px;
  position: center;
  margin: 5px 5px;
`

const DeleteButton = () => {
    return (
        <Container>
           <button>
               Удалить
           </button>
        </Container>
    );
};

export default DeleteButton;