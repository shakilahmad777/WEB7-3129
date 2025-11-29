import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOption from './components/PricingOption/PricingOption'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
        <main>
          <Suspense fallback={
              <span 
                className="loading loading-spinner text-primary">
              </span>
            }>
            <PricingOption pricingPromise={pricingPromise}></PricingOption>
          </Suspense>
        </main>
      <footer>

      </footer>
    </>
  )
}

export default App