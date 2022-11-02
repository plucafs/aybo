import TextArea from './components/TextArea';
import Day from './components/Day';

import './App.css';
import './components/Theme.css';

const App = () => {
  return (
    <div className="app dark">
      <Day></Day>
      <TextArea></TextArea>
    </div>
  );
}

export default App;
