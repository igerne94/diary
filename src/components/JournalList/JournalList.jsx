import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

// Presentational component
function JournalList({ items }) {
    if (items.lenght === 0) {
        return <p>No entry found</p>
    }

    const sortItems = (a, b) => {
        if (a.date < b.date) return 1;
        else return -1;
    };

    return <>
        {items.sort(sortItems).map((item) => {
            return (
                <CardButton key={item.id} >
                    <JournalItem
                        title={item.title}
                        text={item.text}
                        date={item.date}
                    />
                </CardButton>
            );
        })}
    </>;

}

export default JournalList;