import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm({ onSubmit}) {
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
		console.log('formProps', formProps);
	};
	
  return (
    <form className='journal-form' onSubmit={addJournalItem}>
		<input type="text" name='title' placeholder='title' />
		<input type="date" name='date' />
		<input type="text" name='tag' placeholder='text' />
		<textarea name='text' id='' cols='30' placeholder='textarea'></textarea>
		<Button text="Save" onClick={() => {console.log('clicked!!');}}/>
	</form>

  );
}

export default JournalForm;