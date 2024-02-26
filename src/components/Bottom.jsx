import React from 'react'

const Line = () => {
    return (
        <div className='inline mx-1 px-[0.05rem] py-[0.05rem] bg-[#ec3336]'>
        </div>
    )
}

const Bottom = () => {
    return (
        <div className='min-[600px]:mx-12 mx-4 max-[600px]:text-[0.75rem]'>
            <p className='text-center mt-6 font-[800]'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <p className='text-center my-4 font-[500]'>CHEMICALS & PROCESS <Line /> POWER <Line /> WATER & WASTE WATER <Line />OILS & GAS <Line />  PHARMA <Line />  SUGARS & DISTILLERIES <Line /> PAPER PULP  <Line /> MARINE & DEFENCE  <Line /> METAL & MINING <Line /> FOOD & BEVERAGE <Line /> PETROCHEMICAL & REFINERIES <Line /> SOLAR <Line /> BUILDING <Line /> HVAC <Line /> FIRE FIGHTING <Line /> AGRICULTURE & RESIDENTIAL</p>
        </div>
    )
}

export default Bottom