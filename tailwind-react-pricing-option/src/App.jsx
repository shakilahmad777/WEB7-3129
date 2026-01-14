import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOption from './components/PricingOption/PricingOption'
import ScatterCharts from './components/ExampleChart/ScatterCharts/ScatterCharts';
import SimpleBarCharts from './components/ExampleChart/SimpleBarCharts/SimpleBarCharts';
import SimpleLineChart from './components/ExampleChart/SimpleLineCharts/SimpleLineCharts';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
// const marksPromise = axios

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
        <SimpleLineChart></SimpleLineChart>
        {/* <ScatterCharts></ScatterCharts> */}
        {/* <SimpleBarCharts> </SimpleBarCharts> */}
      </footer>
    </>
  )
}

export default App