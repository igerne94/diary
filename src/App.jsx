import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/body/Body';
import LeftPannel from './layouts/leftPannel/LeftPannel';
import { useEffect, useState } from 'react';

//! Keep doublequoted when uncommented
// const INITIAL_DATA = [
//   {
//     "title": "Journal Item title 1",
//     "post": "Lorem ipsum dolor sit amet",
//     "date": "2024-07-22T16:19:42.474Z",
//     "id": 1
//   },
//   {
//     "title": "Journal Item title 2",
//     "post": "Lorem ipsum dolor sit amet 2",
//     "date": "2024-07-22T16:19:42.474Z",
//     "id": 2
//   }
// ];
  
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('data');
    try {
      const parsedData = JSON.parse(data);
       if (parsedData) {
        setItems(parsedData.map(item => ({
          ...item,
          date: new Date(item.date)
        })));
      } 
    } catch (e) {
      console.log('Error parsing data from local storage', e);
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);

  const addItem = newItem => {
    setItems(oldItems => [...oldItems, {
      title: newItem.title,
      post: newItem.post,
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
