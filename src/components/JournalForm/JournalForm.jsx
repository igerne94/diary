import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useReducer, useEffect, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	// destructuring formState:
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();

	const focusOnInvalidField = (isValid) => {
		switch (true) {
			case !isValid.title:
				titleRef.current.focus();
				break;
			case !isValid.date:
				dateRef.current.focus();
				break;
			case !isValid.post:
				postRef.current.focus();
				break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.post) {
			focusOnInvalidField(isValid);
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
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit, onSubmit, values]) // mb use useCallback here later
	
	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const onChange = (e) => {
		console.log(e.target.value, 'value')
		console.log(e.target.name, 'name')
		dispatchForm({
			type: 'SET_VALUE', payload: {
				[e.target.name]: e.target.value
			}
		});
	};
	
 return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' ref={titleRef} onChange={onChange} value={values.title} className={cn(styles['input-title'], { [styles['invalid']]: !isValid.title })}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='src/assets/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<input type='date' name='date' ref={dateRef} id="date" onChange={onChange} value={values.date} className={cn(styles['input'], { [styles['invalid']]: !isValid.date })} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='src/assets/tag.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<input type='text' id="tag" onChange={onChange} value={values.tag} name='tag' className={cn(styles['input'])}/>
			</div>
		<textarea name="post" ref={postRef} id="" cols="30" rows="10" value={values.post} onChange={onChange} className={cn(styles['input'], {[styles['invalid']]: !isValid.post})}></textarea>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;