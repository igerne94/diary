import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/body/Body';
import LeftPannel from './layouts/leftPannel/LeftPannel';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContext } from './context/UserContext';
import { useState } from 'react';

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

function mapItems(items) { 
  if (!items) {
    return [];
  }
  return items.map(i => ({
      ...i,
      date: new Date(i.date)
    }))
}
  
function App() {
  const [items, setItems] = useLocalStorage('data');
  const [userId, setUserId] = useState(1);

  const addItem = newItem => {
    setItems([...mapItems(items), {
      title: newItem.title,
      post: newItem.post,
      date: new Date(newItem.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }]);
  }

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <div className="app">
        <LeftPannel>
          <Header />
          <JournalAddButton />
          <JournalList items={ mapItems(items) }/>
        </LeftPannel>
        <Body>
          <JournalForm onSubmit={ addItem } />
        </Body>
      </div>
    </UserContext.Provider>
  );
}

export default App;
