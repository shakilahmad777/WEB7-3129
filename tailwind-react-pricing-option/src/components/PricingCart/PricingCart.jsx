import React from 'react'

export default function PricingCart({pricing}) {
    const {membershipType, price, billingCycle, benefits} = pricing;
  return (
    <div className='text-center'>
        {/* cart header */}
        <div>
            <h4 className='text-3xl'>{membershipType}</h4>
            <h4 className='text-2xl'>{price}</h4>
        </div>
        {/* cart boady */}
        <div>
            <p>{}</p>
        </div>
    </div>
  )
}
