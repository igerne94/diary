import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useReducer, useEffect, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/UserContext';

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
		<UserContext.Consumer>
			{(context) => (
				<form className={styles['journal-form']} onSubmit={addJournalItem}>
					{context.userId}
					<div>
						<Input
							type='text'
							name='title'
							onChange={onChange}
							value={values.title}
							isValid={isValid.title}
							appearance='title'
							ref={titleRef}
						/>
					</div>
					<div className={styles['form-row']}>
						<label htmlFor="date" className={styles['form-label']}>
							<img src='src/assets/calendar.svg' alt='Иконка календаря'/>
							<span>Дата</span>
						</label>
						<Input
							type='date'
							name='date'
							id="date"
							onChange={onChange}
							value={values.date}
							isValid={isValid.date}
							ref={dateRef}
						/>
					</div>
					<div className={styles['form-row']}>
						<label htmlFor="tag" className={styles['form-label']}>
							<img src='src/assets/tag.svg' alt='Иконка папки'/>
							<span>Метки</span>
						</label>
						<Input
							type='text'
							name='tag'
							id="tag"
							onChange={onChange}
							value={values.tag}
						/>
					</div>
					<textarea name="post" ref={postRef} id="" cols="30" rows="10" value={values.post} onChange={onChange} className={cn(styles['input'], {[styles['invalid']]: !isValid.post})}></textarea>
					<Button text="Сохранить" />
				</form>
			)}
		</UserContext.Consumer>
	);
}

export default JournalForm;