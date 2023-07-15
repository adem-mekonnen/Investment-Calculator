import Header from './Components/Header/Header';
import { useState } from 'react';
import CalculatorForm from './Components/UserInput/CalculatorForm';
import Result from './Components/ResultTable/Result';

function App() {
	const [userInput, setUserInput] = useState(null);

	const calculateHandler = (userInput) => {
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...
		setUserInput(userInput);

		// do something with yearlyData ...
	};
	const yearlyData = []; // per-year results
	if (userInput) {
		let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
		const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput['expected-return'] / 100;
		const duration = +userInput['duration'];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}
	}

	return (
		<div>
			<Header />
			<CalculatorForm onCalculate={calculateHandler} />
			{!userInput && (
				<p style={{ textAlign: 'center' }}>no investment calculated exist</p>
			)}
			{userInput && (
				<Result
					data={yearlyData}
					initialInvest={userInput['current-savings']}
				/>
			)}
		</div>
	);
}

export default App;
