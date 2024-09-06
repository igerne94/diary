import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/body/Body';
import LeftPannel from './layouts/leftPannel/LeftPannel';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContextProvider } from './context/UserContext';
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
  const [selectedItem, setSelectedItem] = useState(null);

  const addOrUpdateItem = newItem => {
    if (!newItem.id) {
      // creating new item
      setItems([...mapItems(items), {
        ...newItem,
        date: new Date(newItem.date),
        id: items?.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
      }]);
    } else { // updating existing item
      setItems([...mapItems(items).map(i => {
          i.id === newItem.id ? newItem : i;
        })
      ]);
    }
  }

  const deleteCard = (id) => {
    return () => {
      setItems(
        mapItems(items)
          .filter(item => item.id !== id)
      );
    };
  };
  
  return (
    <UserContextProvider>
      <div className="app">
        <LeftPannel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null)} />
          {/* //! fix this bug! /*When clicking on the "New Journal Entry" button, the form cleared, gives null for card and then tries to render the item with .date is null .*/}
          <JournalList items={mapItems(items)} selectItem={setSelectedItem} />
        </LeftPannel>
        <Body>
          <JournalForm
            onSubmit={addOrUpdateItem}
            cardData={selectedItem}
            onDelete={deleteCard(selectedItem?.id)} // !
          />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
