// eslint-disable-next-line react/prop-types
function InvestmentInput({ title, value, onChange }) {
    return <div>
        <label>
            {title}
        </label>
        <input type="number"
               required
               value={value}
               onChange={onChange}/>
    </div>;
}

// eslint-disable-next-line react/prop-types
export const UserInput = ({ onChange, userInput: {initialInvestment, annualInvestment, expectedReturn, duration} }) => {

    return (
        <section id="user-input">
            <div className="input-group">
                <InvestmentInput value={initialInvestment}
                                     title={'Initial Investment'}
                                     onChange={(e) => onChange('initialInvestment', e.target.value)}/>
                <InvestmentInput value={annualInvestment}
                                     title={'Annual Investment'}
                                     onChange={(e) => onChange('annualInvestment', e.target.value)}/>
            </div>

            <div className="input-group">
                <InvestmentInput value={expectedReturn}
                                     title={'Expected Return'}
                                     onChange={(e) => onChange('expectedReturn', e.target.value)}/>
                <InvestmentInput value={duration}
                                     title={'Duration'}
                                     onChange={(e) => onChange('duration', e.target.value)}/>
            </div>
        </section>
    )
}