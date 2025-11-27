import React, { use } from 'react'
import PricingCart from '../PricingCart/PricingCart';

export default function PricingOption({pricingPromise}) {
    const pricingData = use(pricingPromise);
    console.log(pricingData)
  return (
    <div>
        <h3 className='text-4xl'>Get Our Membership</h3>
        {
            pricingData.map(pricing => <PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
        }
    </div>
  )
}
