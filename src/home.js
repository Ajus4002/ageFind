import React,{useState,useEffect} from 'react'
import moment from 'moment'


function Home() {
    const [firstDate, setFirstdate] = useState('')
    const [secondDate, setSeconddate] = useState('')
    const [diffrence, setDifference] =  useState ('')
    function datechange(e){
        setFirstdate(e.target.value)
    }
    function datechanged(e){
        setSeconddate(e.target.value)
    }
useEffect(() => {
 if(firstDate != '' && secondDate != ''){
    var a = moment(firstDate);
    var b = moment(secondDate);
   setDifference( b.diff(a, 'year') )
 }
 
}, [ firstDate,secondDate])

  return (
    <div>
    <div className='datedive'>
    <h1>Find your age:{diffrence}</h1>
    </div>
    <div className='center'>
  <ul>
    <li><input type="date" value={firstDate} onChange = {datechange} /></li>
    <li><input type="date" value={secondDate} onChange = {datechanged} /></li>
    </ul>
    </div>
   </div>
    
   
  )
}

export default Home