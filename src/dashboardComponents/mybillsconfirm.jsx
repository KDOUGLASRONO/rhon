
import {useState, useEffect} from 'react'

function confirm({bill,period,amount}){
    const[dailyDeduction, setdailyDeduction] = useState();

    useEffect(()=>{
        let timeline;
        if(period==='daily'){
            timeline = 1;
        }
        else if(period==='weekly'){
            timeline = 7;
        }
        else if(period==='Monthly'){
            timeline = 30;
        }
        else if(period==='Yearly'){
            timeline = 365;
        }
        else{
            timeline = NaN
        }
        console.log("timeline: " + timeline, typeof(timeline))
        console.log()
        let charge;
        let deduction = Math.ceil(parseInt(amount)/timeline);
        //add charges
        if(deduction<100){
            charge = 3;
        }
        else if(deduction>=100){
            charge  = 4;
        }
        setdailyDeduction(deduction + charge); 
        console.log("maths: ", deduction);
        console.log("imported: ",amount, bill, period);

    })
    return (
        <div className='mb-4'>
            <h3>Bill details</h3>
            <h3>Confirm: {bill}</h3>
            <h3>daily Deductions: {dailyDeduction}</h3>
            
        </div>
    )
}

export default confirm;