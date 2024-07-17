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
      date: new Date(newItem.date),
      id: Math.max(...oldItems.map(item => item.id)) + 1
    }]);
  }

  const sortItems = (a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  }

  let listItems = <p>No entry found</p>;
  if (items.length > 0) {
    listItems = items.sort(sortItems).map((item) => {
      return <CardButton key={item.id}>
        <JournalItem
          title={item.title}
          text={item.text}
          date={item.date}
        />
      </CardButton>
    })
  }

  return (
    <>
      <LeftPannel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {listItems}
        </JournalList>
      </LeftPannel>
      <Body>
        <JournalForm onSubmit={ addItem } />
      </Body>
    </>
  );
}

export default App;
