import React from 'react'

const Fragrance = (props) =>{
  console.log(props);
  const { img, company, productName, price, description} = props;
  return(
    <section className="fragrance">
      <img src={img} alt="Fragrance"/>
      <h1>{company} {productName}</h1>
      <h4>{price}</h4>
      <h4>{description}</h4>
    </section>
  )
} 

export default Fragrance;
