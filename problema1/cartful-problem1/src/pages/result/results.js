import React from 'react'
import './results.scss'
import product from '../../assets/product.png'
import icon0 from '../../assets/results/icon0.png'
import icon1 from '../../assets/results/icon1.png'
import icon2 from '../../assets/results/icon2.png'
import icon3 from '../../assets/results/icon3.png'
import CountNumber from '../countNumbers/countNumber'
function Result() {

  const nvalues = [
    {
      value: 1,
      active: false
    },
    {
      value: 2,
      active: false
    },
    {
      value: 3,
      active: false
    },
    {
      value: 4,
      active: false
    },
    {
      value: 5,
      active: false
    },
    {
      value: 6,
      active: false
    }]

  return (
    <div className='resultContainer'>
      <div className='m-2'>  <CountNumber numbers={nvalues} />
      </div>
      <h1>Meet your new favorite coffee.</h1>
      <p>Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.</p>
      <div className='row w-100'>
        <div className='col-2 offset-4 centerElements'>
          <p className='borderElement'>Email my results</p>
        </div>
        <div className='col-2 centerElements'>
          <p className='borderElement'>Retake the quiz</p>
        </div>
      </div>
      <div className='row containerInfo'>
        <div className='col-3 offset-1 borderDotsRight'>
          <div className='centerElements w-100'>
            <p style={{ color: "gray" }}>BEST MATCH</p>
          </div>
          <img src={product} alt='coffe' />
          <div className='centerElements w-100 p-4'>
            <p>GUATEMALA COFFE</p>
            <p><b>$20.50</b></p>
          </div>
        </div>
        <div className='col-7'>
          <div className='row'>
            <div><p style={{ fontSize: "12px", textAlign: "left" }}>WHY YOU’LL LOVE IT</p></div>
            <div className='centerElements'><p style={{ fontSize: "20px" }}>IF YOU’VE EVER TAKEN A BITE FROM A RIPE RED APPLE </p></div>
            <div className='centerElements'><p style={{ fontSize: "20px" }}>
              YOU’LL KNOW THE WAY THIS COFFEE TASTES. </p></div>
          </div>
          <div className='row'>
            <div className='col-3 pt-1 borderDotsTop borderDotsRight'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>TASTING NOTES</p>
              </div>
              <div className='centerElements w-100 p-4'>
                <img src={icon1} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Red Apple, Lemongrass,
                    Malt Chocolate</p>
                </div>
              </div>
            </div>
            <div className='col-3 pt-1 borderDotsTop borderDotsRight'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>ROAST LEVEL</p>
              </div>
              <div className='centerElements w-100 p-4'>

                <img src={icon2} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Medium</p></div>
              </div>
            </div>
            <div className='col-3 pt-1 borderDotsTop borderDotsRight'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>SIPPING STYLE</p>
              </div>
              <div className='centerElements w-100 p-4'>
                <img src={icon3} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Great with
                    milk/cream</p></div>
              </div>
            </div>
            <div className='col-3 pt-1 borderDotsTop'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>BREW METHOD</p>
              </div>
              <div className='centerElements w-100 p-4'>
                <img src={icon0} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Brews a delicious cup
                    with a pour over</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result