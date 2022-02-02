import PaintingList from './components/PaintingList';

import friends from './friends.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="SECTION" name="GOSHA" autor="ALISA" />
      <Section title="SECTION2">
        <PaintingList items={friends} />{' '}
      </Section>{' '}
      <Section title="SECTION3" />
    </div>
  );
}
