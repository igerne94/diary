import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm() {

	const [inputData, setInputData] = useState('');
	const handleInput = (e) => {
		setInputData(e.target.value);
		console.log(inputData);
	};
	
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log('formProps', formProps);
	}
	
  return (
    <form className='journal-form' onSubmit={addJournalItem}>
		<input type="text" name='title' />
		<input type="date" name='date' />
		<input type="text" name='tag' onChange={handleInput} value={inputData} />
		<textarea name='post' id='' cols='30' row='10'></textarea>
		<Button text="Save"/>
    </form>

  );
}

export default JournalForm;