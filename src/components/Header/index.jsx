import React from 'react'
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper, column} from './style';

import { Button} from '../Button';
import logo from '../../assets/logo.svg';


 const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} width="95px" alt="logo" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>

              <Menu>Live Code</Menu>

              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>

        <Row>
          {autenticado
            ? (<UserPicture src="https://avatars.githubusercontent.com/u/107004021?v=4" />) :
            
            (
                <>
                  <MenuRight href="#">Home</MenuRight>
                  <Button title="Entrar" />
                  <Button title="Cadastrar" />
                </>
              )
            }
        </Row>
      </Container>
    </Wrapper>
  );
}

export { Header };