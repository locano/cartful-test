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
      <div className='mt-5'>
        <CountNumber numbers={nvalues} />
      </div>
      <div className='mt-4 centerElements'>
        <h1 className='title'>Meet your new favorite coffee.</h1>
        <div className='description'>
          <p >Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.</p>
        </div>
      </div>
      <div className='links'>
        <p className='borderElement'>Email my results</p>
        <p className='borderElement'>Retake the quiz</p>
      </div>
      <div className='row containerInfo mt-3'>
        <div className='col-md-4 col-12' id='coffeContainer'>
          <div className='centerElements w-100'>
            <p style={{ color: "gray" }}>BEST MATCH</p>

            <img src={product} alt='coffe' className='coffeIcon' />
          </div>
          <div className='centerElements w-100'>
            <p>GUATEMALA COFFE</p>
            <p><b>$20.50</b></p>
          </div>
        </div>
        <div className='col-md-8 col-12'>
          <div className='row p-2'>
            <div style={{ fontSize: "12px", textAlign: "left" }}><p >WHY YOU’LL LOVE IT</p></div>
            <div className='centerElements description'><p>IF YOU’VE EVER TAKEN A BITE FROM A RIPE RED APPLE </p></div>
            <div className='centerElements description'><p>
              YOU’LL KNOW THE WAY THIS COFFEE TASTES. </p></div>
          </div>
          <div className='row'>
            <div className='col-md-3 col-12 pt-1 infoContainer'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>TASTING NOTES</p>
              </div>
              <div className='centerElements w-100 p-4 infoIcon'>
                <img src={icon1} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Red Apple, Lemongrass,
                    Malt Chocolate</p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-12 pt-1 infoContainer'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>ROAST LEVEL</p>
              </div>
              <div className='centerElements w-100 p-4 infoIcon'>

                <img src={icon2} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Medium</p></div>
              </div>
            </div>
            <div className='col-md-3 col-12 pt-1 infoContainer'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>SIPPING STYLE</p>
              </div>
              <div className='centerElements w-100 p-4 infoIcon'>
                <img src={icon3} alt='coffe' />
                <div className='centerElements w-100 p-4'>
                  <p>Great with
                    milk/cream</p></div>
              </div>
            </div>
            <div className='col-md-3 col-12 pt-1 infoContainer'>
              <div className='w-100 pt-3'>
                <p style={{ color: "gray" }}>BREW METHOD</p>
              </div>
              <div className='centerElements w-100 p-4 infoIcon'>
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