import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Container } from './styles';

interface Props {
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp: React.FC<Props> = ({ setModalVisibility, children }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={ () => { setModalVisibility(false) }}>
      <Container>
          { children }
      </Container>
    </Overlay>,
    document.body
  )
}

export default PopUp;