import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": "basic_membership",
            "name": "Basic Membership",
            "features": [
              "Access to gym equipment",
              "One group class per week",
              "Free initial fitness assessment",
              "Access to locker rooms",
              "Basic nutritional guidance"
            ],
            "price": 29.99
          },
          {
            "id": "standard_membership",
            "name": "Standard Membership",
            "features": [
              "Unlimited access to gym equipment",
              "Three group classes per week",
              "Free fitness assessment",
              "Monthly nutrition workshop",
              "Access to showers and sauna",
              "Discounts on personal training"
            ],
            "price": 49.99
          },
          {
            "id": "premium_membership",
            "name": "Premium Membership",
            "features": [
              "Unlimited access to gym equipment",
              "Unlimited group classes",
              "Personal training sessions (2 per month)",
              "Access to premium facilities (pool, sauna, steam room)",
              "Monthly wellness consultations",
              "Priority booking for classes and personal training",
              "Exclusive access to special events and workshops"
            ],
            "price": 79.99
          },
          {
            "id": "family_membership",
            "name": "Family Membership",
            "features": [
              "Access for up to 4 family members",
              "Unlimited access to gym equipment",
              "Unlimited group classes for all members",
              "Discounted rates for personal training",
              "Family fitness challenges with prizes",
              "Monthly family wellness events",
              "Access to kids’ classes and activities"
            ],
            "price": 99.99
          }
    ]
    return (
        <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4  justify-around gap-8 text-center m-10">
              {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;