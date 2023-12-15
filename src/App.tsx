import React from 'react';
import { motion } from 'framer-motion';
import { GlobalStyles } from './styles/globalStyles';
import {
  AstronautIllustration,
  Attractions,
  Background,
  Description,
  Details,
  EmphasisSubtitle,
  EmphasisTitle,
  Gallery,
  GalleryContent,
  GalleryText,
  Header,
  Logo,
  Main,
  MarsIlustration,
  OrbitIllustration,
  Span,
  Subtitle,
  TextButton,
  Title,
  FormSection,
  FormContent,
  RocketIllustration,
  SmokeIllustration,
  Footer,
  Social,
  Navigation,
  Thanks,
  Container,
} from './styles/styles';
import Button from './components/Button';
import Icon from './components/Icon';
import Carousel from './components/Carousel';
import Form from './components/Form';
import { scrollTo } from './utils/utils';
import useWindowSize from './hooks/windowSize';
import { size } from './styles/responsive';

const images = [
  './images/gallery-1.jpg',
  './images/gallery-2.jpg',
  './images/gallery-3.jpg',
  './images/gallery-4.jpg',
  './images/gallery-5.jpg',
  './images/gallery-6.jpg',
];

function App() {
  const mobile = useWindowSize();
  return (
    <Container>
      <GlobalStyles />

      <Header>
        <Logo>
          <img src="./images/logo-space-y.svg" alt="Logo Space Y" />
        </Logo>
      </Header>

      <div id="home">
        <Main>
          <Span>Finalmente é possível!</Span>
          <EmphasisTitle>
            Sua jornada para Marte começa aqui <span>.</span>
          </EmphasisTitle>
          <EmphasisSubtitle>
            A primeira viagem para Marte estará disponível a partir do dia
            12/03/2028. Inscreva-se em nossa lista de espera <span>.</span>
          </EmphasisSubtitle>

          <Button
            text="Inscreva-se agora"
            fullsize={0}
            click={() => {
              scrollTo('contact');
            }}
          />

          <AstronautIllustration />

          <Attractions>
            <Icon
              src="./images/icon-rocket.svg"
              alt="Ícone de foguete"
              textInfo="Foguetes com a mais alta tecnologia e conforto."
            />

            <Icon
              src="./images/icon-flag.svg"
              alt="Ícone de bandeira"
              textInfo="Mais de 100 missões consecutivas com sucesso."
            />

            <Icon
              src="./images/icon-telescope.svg"
              alt="Ícone de Telescópio"
              textInfo="Experiência única e exclusiva."
            />
          </Attractions>
        </Main>
      </div>

      {mobile > +size.mobileL && (
        <Background>
          <div id="about-us">
            <Details>
              <OrbitIllustration />
              <MarsIlustration />

              <Description>
                <Span>Por que Marte ?</Span>

                <Title>Sobre o planeta vermelho</Title>

                <Subtitle>
                  A uma distância média de 140 milhões de milhas, Marte é um dos
                  vizinhos habitáveis mais próximos da Terra. Marte está mais ou
                  menos a metade da distância da Terra do Sol, então ainda tem
                  luz solar decente. Está um pouco frio, mas podemos esquentar.
                  Sua atmosfera é composta principalmente de CO2 com um pouco de
                  nitrogênio e argônio e alguns outros oligoelementos, o que
                  significa que podemos cultivar plantas em Marte apenas
                  comprimindo a atmosfera.
                </Subtitle>
                <Subtitle>
                  A gravidade em Marte é cerca de 38% da da Terra, então você
                  seria capaz de levantar coisas pesadas e dar voltas. Além
                  disso, o dia está notavelmente próximo ao da Terra.
                </Subtitle>
              </Description>
            </Details>
          </div>

          <div id="mission">
            <GalleryContent>
              <GalleryText>
                <Logo>
                  <img src="./images/logo-space-y.svg" alt="Logo Space Y" />
                </Logo>

                <Title>
                  O Caminho para tornar a humanidade multiplanetária{' '}
                  <span>.</span>
                </Title>
                <TextButton>Inscreva-se agora</TextButton>
              </GalleryText>

              <Gallery>
                <Carousel images={images} />
              </Gallery>
            </GalleryContent>
          </div>

          <div id="contact">
            <FormSection>
              <FormContent>
                <Form />

                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <RocketIllustration />
                </motion.div>
              </FormContent>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.5 }}
              >
                <SmokeIllustration />
              </motion.div>
            </FormSection>
          </div>

          <Footer>
            <Logo>
              <img src="./images/logo-space-y.svg" alt="Space Y" />
            </Logo>
            <div>
              <Social>
                <img src="./images/instagram.svg" alt="Instagram" />
              </Social>
              <Social
                href="https://br.linkedin.com/in/gabriel-emilio-45b1b1227"
                target="_blank"
                rel="noopener"
              >
                <img src="./images/linkedin.svg" alt="LinkedIn" />
              </Social>
              <Social>
                <img src="./images/facebook.svg" alt="Facebook" />
              </Social>
              <Social
                href="https://github.com/gabrielEmilio00"
                target="_blank"
                rel="noopener"
              >
                <img src="./images/github.svg" alt="Facebook" />
              </Social>
            </div>
            <div>
              <Navigation
                onClick={() => {
                  scrollTo('home');
                }}
              >
                Início
              </Navigation>
              <Navigation
                onClick={() => {
                  scrollTo('about-us');
                }}
              >
                Sobre nós
              </Navigation>
              <Navigation
                onClick={() => {
                  scrollTo('mission');
                }}
              >
                Missão
              </Navigation>
              <Navigation
                onClick={() => {
                  scrollTo('contact');
                }}
              >
                Contato
              </Navigation>
            </div>
          </Footer>
          <Thanks>
            <p>
              Feito com <span>&#10084;</span> por Gabriel Emílio.
            </p>
            <p>
              Layout de
              <a
                href="https://www.figma.com/file/YWDu2qbvkFpF22le27grGo/SpaceY---Figmentor-(Community)?type=design&mode=design&t=WCqkQnRjFLEh4eWp-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figmentor
              </a>
            </p>
          </Thanks>
        </Background>
      )}
    </Container>
  );
}

export default App;
