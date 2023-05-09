import React from 'react'

const AvailableBills = ({singleBill}) => {
  return (
    <option value={singleBill.name} id={singleBill['_id']}>{singleBill.name}</option>
  )
}

export default AvailableBills