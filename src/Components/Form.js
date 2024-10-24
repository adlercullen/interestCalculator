import React,{useState} from "react"

const Form= (props)=>{

  const [cSaving,currentSaving]=useState("")
  const [ySaving,yearlySaving]=useState("")
  const [interest,finalInterest]=useState("")
  const [duration,finalDuration]=useState("")

const currentSavingChange =(event)=>{
  currentSaving(event.target.value)
  // console.log(cSaving)
}

const yearSavingChange=(event)=>{
  yearlySaving(event.target.value)
  // console.log(ySaving)
}

const interestChange=(event)=>{
  finalInterest(event.target.value)
  
}

const durationChange= (event)=>{
  finalDuration(event.target.value)
}  

var submitHandler=(event)=>{

  event.preventDefault()
  
  var expectedOutput={
    currentSavings :cSaving,
    yearlyContribution :ySaving,
    expectedReturn:interest,
    duration:duration
  }
  props.output(expectedOutput)

  // currentSaving("")
  // yearlySaving("")
  // finalInterest("")
  // finalDuration("")
}  



  






  
  return (
          <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={currentSavingChange}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={yearSavingChange} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={interestChange} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration"onChange={durationChange}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default Form