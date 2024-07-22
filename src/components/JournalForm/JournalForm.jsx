import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import cn from 'classnames';

const INITIAL_STATE = {
	title: true,
	date: true,
	post: true
}

function JournalForm({ onSubmit }) {
	const [formValidState, setFormValidsState] = useState(INITIAL_STATE);

	useEffect(() => {
		let timerId;
		if (!formValidState.title || !formValidState.date || !formValidState.post) {
			timerId = setTimeout(() => {
				setFormValidsState(INITIAL_STATE);
			}, 2000);
			console.log('timerId', timerId);
		}
		return () => {
			clearTimeout(timerId);
		}
	}, [formValidState]);
	
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidsState(state => ({ ...state, title: false }))
			isFormValid = false;
		} else {
			setFormValidsState(state => ({ ...state, title: true }))
		}
		if (!formProps.date) {
			setFormValidsState(state => ({ ...state, date: false }))
			isFormValid = false;
		} else {
			setFormValidsState(state => ({ ...state, date: true }))
		}
		if (!formProps.post?.trim().length) {
			setFormValidsState(state => ({ ...state, post: false }))
			isFormValid = false;
		} else {
			setFormValidsState(state => ({ ...state, post: true }))
		}
		// if (!formProps.text?.trim().length) {
		// 	setFormValidsState(state => ({ ...state, text: false }))
		// 	isFormValid = false;
		// } else {
		// 	setFormValidsState(state => ({ ...state, text: true }))
		// }
		if (!isFormValid) return;
		onSubmit(formProps);
		console.log('formProps', formProps);
	};
	
 return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' className={cn(styles['input-title'], { [styles['invalid']]: !formValidState.title })}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' id="date" className={cn(styles['input'], { [styles['invalid']]: !formValidState.date })} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<input type='text' id="tag" name='tag' className={cn(styles['input'])}/>
			</div>
			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {[styles['invalid']]: !formValidState.post})}></textarea>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;