import React, { use } from 'react'
import PricingCart from '../PricingCart/PricingCart';

export default function PricingOption({pricingPromise}) {
    const pricingData = use(pricingPromise);
    console.log(pricingData)
  return (
    <div>
        <h3 className='text-4xl text-center text-amber-50 m-5'>Get Our Membership</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            pricingData.map(pricing => <PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
          }
        </div>
    </div>
  )
}
