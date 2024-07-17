import { useState } from 'react';
import './App.css';
// import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/body/Body';
import LeftPannel from './layouts/leftPannel/LeftPannel';

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

  const [inputData, setInputData] = useState('');

  const handleInput = (e) => {
    setInputData(e.target.value);
    console.log(inputData);
  };


  return (
    <>
      <LeftPannel>
        <Header />
        <JournalAddButton />
        <JournalList>
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
        </JournalList>
        <Body>
          <input type="text" onChange={handleInput} value={inputData} />
        </Body>
      </LeftPannel>
    </>
  );
}

export default App;
