import React from 'react';

import { Overlay, Container } from './styles';

const PopUp: React.FC = () => {
  return (
    <Overlay>
        <Container>
            <h1>Hello!</h1>
        </Container>
    </Overlay>
  );
}

export default PopUp;