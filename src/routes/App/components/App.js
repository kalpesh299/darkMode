import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';

function App() {
  const [clicked, setClicked] = useState({status:false});
  
  const handelDarkmode = () =>{
    setClicked(prevState=> ({...prevState,status: !clicked.status}));
    const back =document.querySelector('.app');
    const title =document.querySelector('.title');
    const btn =document.querySelector('.app__dark-mode-btn');
    const para = document.querySelector('p');
    const btno=document.querySelector('.is-primary');
    const btnt=document.querySelector('.is-link');
    const input=document.querySelector('input');
    
    
    back.classList.toggle("dark");
    title.classList.toggle("dark");
    btn.classList.toggle("dark");
    para.classList.toggle("dark");
    btno.classList.toggle("dark");
    btnt.classList.toggle("dark");
    input.classList.toggle("dark")
    
    

}
  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        
        <button className="app__dark-mode-btn icon level-right" onClick={handelDarkmode}>
        {clicked.status? <FontAwesomeIcon icon={faSun} />:<FontAwesomeIcon icon={faMoon} />}                 
        </button>

      </div>

      <div className="columns">
      <div className="column">
      {clicked.status? <p className="dark">Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>: <p >Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>}
          
        </div>
        <div className="column">
        {clicked.status?<p className="dark" >Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>:<p >Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>}
         
        </div> 
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">{clicked.status?<input  className="input dark" type="text" placeholder="Email" />:<input  className="input" type="text" placeholder="Email" />}
         
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
