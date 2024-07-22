import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useReducer, useEffect } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	// destructuring formState:
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.post) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		}
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFormReadyToSubmit]) // mb use useCallback here later
	
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({ type: 'SUBMIT', payload: formProps });
	};
	
 return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' className={cn(styles['input-title'], { [styles['invalid']]: !isValid.title })}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='src/assets/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' id="date" className={cn(styles['input'], { [styles['invalid']]: !isValid.date })} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='src/assets/tag.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<input type='text' id="tag" name='tag' className={cn(styles['input'])}/>
			</div>
			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {[styles['invalid']]: !isValid.post})}></textarea>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;