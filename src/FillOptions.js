import React from 'react'

export default function FillOptions() {
   const amounts = [];
   for (let i = 0; i <= 24; i ++) {
       amounts.push(i);
   }

   return (
    amounts.map(amount =>{
        return <option value={amount}>{amount}</option>
    })
   )

}
