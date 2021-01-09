import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {fragrances} from './Fragrances';
import Fragrance from './Fragrance';

function FragranceList(){          //function name must have a capital letter    //to access the props it needs to be done where we are rendering the object, instead of object the console should show what is written 
  return (
      <section className="fragrancelist">
        {fragrances.map((fragrance) => {            //book can be named whatever it just point at every iteration inside of the array
        console.log(fragrance);
          return (
            <Fragrance key={fragrance.id} {...fragrance}></Fragrance>
          );
        })}
      </section>
  )};



ReactDom.render(<FragranceList />, document.getElementById('root'));         //render looks for two things, what you want to render, and where you want it to be rendered

