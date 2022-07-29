import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: inline;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
  position: center;
  margin: 5px 5px;
  `

const EditButton = () => {
    return (
        <Container>
        <button>
            Редактировать
        </button>
        </Container>
    );
};

export default EditButton;