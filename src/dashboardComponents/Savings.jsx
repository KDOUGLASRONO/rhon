import React from 'react'

const Savings = () => {
  return (
    <div className='py-4 px-4 bg-lime-100 w-full h-full text-center'>
        <div className='py-4 px-4 text-4xl text-bold'>
          <h2>Saving Goals</h2>
        </div>
        
        <div className="addSaving">
        </div>
        <div className='singleSaving saving1'>
            <div className='savingName'>
              <p>School Fees</p>
              {/* <p>Business</p> */}
            </div>
            <div className='savingAmount'>
              <span>$200</span>
            </div>
            <div className='savingProgress'>
              <div className='circle'>
                <div className='circle2'>
                  <p>30%</p>
                </div>
              </div>
            </div>
        </div>
        <div className='singleSaving saving2'>
            <div className='savingName'>
              <p>Agriculture</p>
              {/* <p>development</p> */}
            </div>
            <div className='savingAmount'>
              <span>$1300</span>
            </div>
            <div className='savingProgress'>
              <div className='circle'>
                <div className='circle2'>
                  <p>90%</p>
                </div>
              </div>
            </div>
        </div>
        <div className='singleSaving saving3'>
            <div className='savingName'>
              <p>App Store</p>
              <p>Technology</p>
            </div>
            <div className='savingAmount'>
              <span>$800</span>
            </div>
            <div className='savingProgress'>
              <div className='circle'>
                <div className='circle2'>
                  <p>60%</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Savings