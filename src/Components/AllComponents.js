import React,{useState} from "react"
import Head from "./Head"
import Form from "./Form"
import Output from "./Output"



const AllComponents = ()=>{
  
const [initial,final]=useState({})
  
const expectedOutput= (data)=>{
  final(data)
}


  
  return (
  <>
    <Head></Head>
    <Form output={expectedOutput} />
    <Output formdata={initial}/>
  </>
    )
}

export default AllComponents