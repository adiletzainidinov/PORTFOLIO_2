import LeftCard from './LeftCard';
import RigtCard from './RigtCard';
import { CardBox, CardContainder, ContentBox } from './StyleIntroductionCard';

const IntroductionCard = () => {
  return (
    <>
      <CardContainder>
        <CardBox>
          <ContentBox>
            <LeftCard />
            <RigtCard />
          </ContentBox>
        </CardBox>
      </CardContainder>
    </>
  );
};

export default IntroductionCard;
