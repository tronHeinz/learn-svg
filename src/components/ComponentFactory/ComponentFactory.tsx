import { LearingSession } from '../';

type props = {
  type: string;
};

const ComponentFactory = ({ type }: props) => {
  switch (type) {
    case 'learingSession':
      return <LearingSession />;
    default: {
      return <div>no defined compponent type available</div>;
    }
  }

  return <></>;
};

export default ComponentFactory;
