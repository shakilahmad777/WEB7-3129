import { CheckCheck } from "lucide-react";

export default function PricingFeatures({feature}) {
  return (
    <div>
      <p className="flex">
        <CheckCheck className="mr-2"></CheckCheck>
        {
          feature
        }
      </p>
    </div>
  )
}
