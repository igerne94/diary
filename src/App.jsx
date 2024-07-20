import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/body/Body';
import LeftPannel from './layouts/leftPannel/LeftPannel';
import { useState } from 'react';

const INITIAL_DATA = [
    {
      title: 'Journal Item title 1',
      text: 'Lorem ipsum dolor sit amet',
      date: new Date(),
      id: 1
      
    },
    {
      title: 'Journal Item title 2',
      text: 'Lorem ipsum dolor sit amet 2',
      date: new Date(),
      id: 2
    }
];
  
function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  
  const addItem = newItem => {
    setItems(oldItems => [...oldItems, {
      title: newItem.title,
      text: newItem.text,
      date: new Date(newItem.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }]);
  }

  return (
    <>
      <LeftPannel>
        <Header />
        <JournalAddButton />
        <JournalList items={items}/>
      </LeftPannel>
      <Body>
        <JournalForm onSubmit={ addItem } />
      </Body>
    </>
  );
}

export default App;
