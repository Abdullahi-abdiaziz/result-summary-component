import React from 'react'
import './Items.jsx'
import data from '../data'
import Items from './Items.jsx'

function App() {
  const items = data.map(item => {
    return (
    <Items
      key={item.id}
      item={item}
    />
    )
  });

  return (
    <main>
      <div className='flex flex-col justify-center items-center w-full
                      shadow-lg rounded-3xl md:max-w-3xl md:flex-row'>
        <div className='flex flex-col w-full max-w-md justify-center items-center
                        bg-gradient-to-t from-grLightRoyalBluebg to-grLightSlateBluebg
                        px-10 py-10 text-center text-lightLavender rounded-b-3xl
                        md:w-1/2 md:rounded-3xl'>

          <h3 className='text-lg mb-4'>Your Results</h3>
          <div className='py-9 px-12 mb-6 rounded-full bg-gradient-to-t from-grVioletBlue to-grPersianbBlue'>
            <h1 className='text-white text-5xl font-extrabold'>76</h1>
            <span className='text-sm'>of 100</span>
          </div>
          <h4 className='text-white mb-4 text-2xl font-semibold'>Great</h4>
          <p className='text-center px-4'>You scored higher than 65% of the people who have taken these results</p>
        </div>
        <div className='w-full px-6 my-2 md:w-1/2'>
          <h3 className='my-4 text-2xl font-bold text-darkGrayBlue'>Summary</h3>
          {items}
          <a href="#" className="mx-2 my-4 block text-center text-white font-semibold py-3 rounded-full bg-darkGrayBlue">Continue</a>
        </div>
      </div>
    </main>
  )
}

export default App
