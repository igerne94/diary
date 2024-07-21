import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';

function JournalForm({ onSubmit }) {
	const [formValidState, setFormValidsState] = useState({
		title: true,
		date: true,
		text: true
	});
	
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidsState(state => ({ ...state, title: false }))
			isFormValid = false;
		}
		if (!formProps.date) {
			setFormValidsState(state => ({ ...state, date: false }))
			isFormValid = false;

		}
		if (!formProps.text?.trim().length) {
			setFormValidsState(state => ({ ...state, text: false }))
			isFormValid = false;
		}
		if (!isFormValid) return true;
		onSubmit(formProps);
		console.log('formProps', formProps);
	};
	
  return (
	<form className={styles['journal-form']} onSubmit={addJournalItem}>
		<input type="text" name='title' placeholder='title'
			className={cn(styles['input'], {
				[styles['invalid']]: !formValidState.title
			})}
		/>
		<input type="date" name='date' className={`${styles.input} ${formValidState.date ? '' : styles['invalid']}`} />
		<input type="text" name='tag' placeholder='tag'  />
		<textarea name='text' id='' cols='30' placeholder='textarea' className={`${styles.input} ${formValidState.text ? '' : styles['invalid']}`} ></textarea>
		<Button text="Save" onClick={() => {console.log('clicked!!');}}/>
	</form>

  );
}

export default JournalForm;