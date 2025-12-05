
import PricingFeatures from './PricingFeatures/PricingFeatures';

export default function PricingCart({pricing}) {
    const {membershipType, price, features, description} = pricing;
  return (
    <div className='bg-amber-600 p-5 rounded-2xl'>
        {/* cart header */}
        <div>
            <h4 className='text-3xl'>{membershipType}</h4>
            <div className='grid justify-center'>
              <h4 className='text-2xl text-center my-3 bg-amber-400 rounded-2xl w-full px-5'>{price}</h4>
            </div>
        </div>
        {/* cart boady */}
        <div className='bg-amber-400 rounded p-3'>
            <h3 className='mb-5'>{description}</h3>
            {
              features.map((featrue, index) => <PricingFeatures key={index} feature={featrue}></PricingFeatures>)
            }
        </div>
        <div className='text-center'>
           <button type='button' className='bg-amber-900 py-3 px-6 mt-3 rounded'>Book Now</button>
        </div>
    </div>
  )
}
