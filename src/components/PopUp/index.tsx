import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Title } from './styles';
import { Overlay } from './../../styles/global';
interface Props {
  title: string,
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp: React.FC<Props> = ({ setModalVisibility, title, children }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={ () => { setModalVisibility(false) }} />
      <Container>
          <Title>{ title }</Title>
          { children }
      </Container>
    </>,
    document.body
  )
}

export default PopUp;