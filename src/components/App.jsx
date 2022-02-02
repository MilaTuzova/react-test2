import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard />
    </div>
  );
};
