import React from 'react'
import CardSection from './CardSection'
import LabelSection from '../LabelSection/LabelSection'

const Cards = () => {

    const cardarr = [
        {perc: "90"},
        {perc: "90"},
        {perc: "90"},
    ]
  return (
    <>
    <div  style={{background:'black',color:'white', display:'flex', justifyContent:'center', alignContent:'center', marginBottom:'100px'}}>
         <LabelSection label="Why Choose us?" />
    </div>
    <div style={{background:'black', display:'flex', justifyContent:'center', alignContent:'center'}}>
         
    {
        cardarr.map((card,index) => (
            <CardSection key={index} perc={card.parc} />
        ))
    }
 
    </div>
    </>
  )
}

export default Cards