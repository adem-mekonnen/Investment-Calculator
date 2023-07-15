import './Calculator.css';
import { useState } from 'react';
const initialUserInput = {
	'current-savings': 1000,
	'yearly-contribution': 1200,
	'expected-return': 7,
	duration: 10,
};
const CalculatorForm = (props) => {
	/* 	const [currentSaving, setCurrentSaving] = useState('');
	const [yearlyContribution, setYearlyContribution] = useState('');
	const [expectDuration, setExpectDuration] = useState('');
	const [duration, setDuration] = useState(''); */
	const [userInput, setUserInput] = useState(initialUserInput);
	/* 	const currentSavingHandling = (event) => {
		setCurrentSaving(event.target.value);
	};
	const yearlyContributionHandling = (event) => {
		setYearlyContribution(event.target.value);
	};
	const expectDurationHandling = (event) => {
		setExpectDuration(event.target.value);
	};
	const durationHandling = (event) => {
		setDuration(event.target.value);
	}; */
	const inputChangeHandler = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: value,
			};
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		//..
		props.onCalculate(userInput);
	};
	const resetHandler = () => {
		setUserInput(initialUserInput);
		//..
	};

	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						type="number"
						id="current-savings"
						value={userInput['current-savings']}
						onChange={(event) =>
							inputChangeHandler('current-savings', event.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						type="number"
						id="yearly-contribution"
						value={userInput['yearly-contribution']}
						onChange={(event) =>
							inputChangeHandler('yearly-contribution', event.target.value)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						type="number"
						id="expected-return"
						value={userInput['expected-return']}
						onChange={(event) =>
							inputChangeHandler('expected-return', event.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						type="number"
						id="duration"
						value={userInput['duration']}
						onChange={(event) =>
							inputChangeHandler('duration', event.target.value)
						}
					/>
				</p>
			</div>
			<p className="actions">
				<button type="reset" className="buttonAlt" onClick={resetHandler}>
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	);
};
export default CalculatorForm;
