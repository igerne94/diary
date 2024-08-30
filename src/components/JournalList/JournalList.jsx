import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

// Presentational component
function JournalList({ items }) {
    const { userId } = useContext(UserContext);

    if (items.length === 0) {
        return <p>No entry found</p>
    }

    const sortItems = (a, b) => {
        if (a.date < b.date) return 1;
        else return -1;
    };

    return <>
        {items
            .filter(elem => elem.userId === userId)
            .sort(sortItems)
            .map((item) => {
                return (
                    <CardButton key={item.id} >
                        <JournalItem
                            title={item.title}
                            post={item.post}
                            date={item.date}
                        />
                    </CardButton>
                );
            }
        )}
    </>;

}

export default JournalList;