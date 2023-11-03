import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { AstronautIllustration, Attractions, Container, Description, Details, Header, Logo, Main, MarsIlustration, Span, Subtitle, Title } from './styles/styles';
import Button from './components/Button';
import Icon from './components/Icon';

function App() {
  return (
    <div>
      <GlobalStyles />

      <Container>

        <Header>
          <Logo>
            <img src="./images/logo-space-y.svg" alt="Logo Space Y" />
          </Logo>
        </Header>

        <Main>
          <Span>Finalmente é possível!</Span>
          <Title>
            Sua jornada para Marte começa aqui <span>.</span>
          </Title>
          <Subtitle>
            A primeira viagem para Marte estará disponível a partir do dia 12/03/2028. Inscreva-se em nossa lista de espera <span>.</span>
          </Subtitle>

          <AstronautIllustration />

          <Button text='Inscreva-se agora' fullSize={false} />

          <Attractions>
            <Icon
              src='./images/icon-rocket.svg'
              alt='Ícone de foguete'
              textInfo='Foguetes com a mais alta tecnologia e conforto.'
            />

            <Icon
              src='./images/icon-flag.svg'
              alt='Ícone de bandeira'
              textInfo='Mais de 100 missões consecutivas com sucesso.'
            />

            <Icon
              src='./images/icon-telescope.svg'
              alt='Ícone de Telescópio'
              textInfo='Experiência única e exclusiva.'
            />

          </Attractions>

        </Main>

        <Details>
          <MarsIlustration />

          <Description>
            <Span>Por que Marte ?</Span>

            <Title>Sobre o planeta vermelho</Title>
          </Description>

        </Details>

      </Container>

    </div>
  );
}

export default App;
