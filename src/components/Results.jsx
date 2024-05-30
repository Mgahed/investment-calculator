import {calculateInvestmentResults, formatter} from "../util/investment.js";

// eslint-disable-next-line react/prop-types
export const Results = ({ input: {initialInvestment, annualInvestment, expectedReturn, duration} }) => {
    const results = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    });
    const initialInvestmentValue = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results.map(({year, valueEndOfYear, interest, annualInvestment}, index) => {
                const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestmentValue;
                const totalAmountInvested = valueEndOfYear - totalInterest;
                return (
                    <tr key={index}>
                        <td>{year}</td>
                        <td>{formatter.format(valueEndOfYear)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}