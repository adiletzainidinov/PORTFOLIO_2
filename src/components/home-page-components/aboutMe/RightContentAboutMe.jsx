import { BoxRigh, MainText, SubTitle, Title } from './StyleAboutMe';

const RightContentAboutMe = () => {
  return (
    <BoxRigh>
      <Title>ОБО МНЕ</Title>
      <SubTitle>Опытный <span style={{color: '#ae08bc'}}>Front-end</span> разработчик из Кыргызстана 📍</SubTitle>
      <MainText>
        Как <span style={{ color: '#ae08bc' }}>Front-end</span> разработчик, я
        обладаю широкими знаниями в области современных технологий, таких как{' '}
        <span style={{ color: '#ae08bc' }}>React</span> и{' '}
        <span style={{ color: '#ae08bc' }}>TypeScript</span>. Моя цель —
        создавать и поддерживать адаптивные и безопасные веб-сайты, обеспечивая
        при этом безупречный пользовательский опыт. Я специализируюсь на
        разработке динамичных интерфейсов с чистым и эффективным кодом,
        используя передовые инструменты и следуя лучшим практикам. Работа в{' '}
        <span style={{ color: '#ae08bc' }}>кросс-функциональных командах</span>{' '}
        помогает мне разрабатывать{' '}
        <span style={{ color: '#ae08bc' }}>исключительные веб-приложения</span>.
      </MainText>
    </BoxRigh>
  );
};

export default RightContentAboutMe;
