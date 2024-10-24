import OutputTags from "./OutputTags"

const Output= (props)=>{



    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +props.formdata.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +props.formdata.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +props.formdata.expectedReturn / 100;
    const duration = +props.formdata.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }

    // do something with yearlyData ...
  




  
  return (
          <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            {/* <th>Total Interest</th> */}
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.length==0? <p>No data is available</p> : yearlyData.map((Data)=>
           <OutputTags
             key={Math.random()}
              year={Data.year}
              yearlyInterest={Data.yearlyInterest}
              savingsEndOfYear={Data.savingsEndOfYear}
              yearlyContribution={Data.yearlyContribution}
          />
          )}
        </tbody>
      </table>
  )
}

export default Output