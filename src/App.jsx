import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/body/Body';
import LeftPannel from './layouts/leftPannel/LeftPannel';
import { useState } from 'react';

const INITIAL_DATA = [
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
  
function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  
  const addItem = newItem => {
    setItems(oldItems => [...oldItems, {
      title: newItem.title,
      text: newItem.text,
      date: new Date(newItem.date)
    }]);
  }

  return (
    <>
      <LeftPannel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.map((item, idx) => {
            return <CardButton key={idx}>
              <JournalItem
                title={item.title}
                text={item.text}
                date={item.date}
              />
            </CardButton>
          })}
        </JournalList>
      </LeftPannel>
      <Body>
        <JournalForm onSubmit={ addItem } />
      </Body>
    </>
  );
}

export default App;
