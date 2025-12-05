import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOption from './components/PricingOption/PricingOption'
import ExampleChart from './components/ExampleChart/ExampleChart';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {

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
            <ExampleChart></ExampleChart>
      </footer>
    </>
  )
}

export default App