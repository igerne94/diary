import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  const data = [
    {
      title: 'Journal Item title 1',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date()
    },
    {
      title: 'Journal Item title 2',
      text: 'Lorem ipsum dolor sit amet 2',
      date: new Date()
    }
  ];

  return (
    <>
      <h1>Header</h1>
      <p>Some text</p>
      <Button />
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>
      <CardButton>
        To be continued...
      </CardButton>
    </>
  );
}

export default App;
