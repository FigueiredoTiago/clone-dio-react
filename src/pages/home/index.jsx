import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Container, TitleHighLight, TextContent, Title,} from './style';
import  banner  from '../../assets/banner.png';
 
const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }

  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>

          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </Container>
    </div>
  );
};

export { Home };
