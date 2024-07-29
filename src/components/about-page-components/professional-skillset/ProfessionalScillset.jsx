import {
  Container,
  ContentBox,
  PapaScilset,
  SkillsBox,
  StyledBox,
  Title,
  TitleTools,
} from './StyleProfessionalScillset';
import { Skills, tools } from '../../../data/data';

const ProfessionalScillset = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <Title>
              профессиональные <span>навыки</span>
            </Title>
            <PapaScilset>
              {Skills.map((item) => (
                <SkillsBox key={item.id}>
                  <img src={item.img} alt={item.id} />
                </SkillsBox>
              ))}
            </PapaScilset>
            <TitleTools>
              <span>использование</span> инструментов
            </TitleTools>
            <PapaScilset>
              {tools.map((item) => (
                <SkillsBox key={item.id}>
                  <img src={item.img} alt={item.id} />
                </SkillsBox>
              ))}
            </PapaScilset>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default ProfessionalScillset;
