import { Loader } from 'components/Loader';
import { StoryContainer } from '../../../scaffold/.storybook/StoryContainer';

export default {
  title: 'Loader',
};

export const loader = () => (
  <StoryContainer>
    <Loader size={48} />
  </StoryContainer>
);
