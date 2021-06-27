'use strict';

let store1 = {
   min: 23 ,
   max: 65 ,
   avg: 6.3,
   location: 'Sattle' ,
  
   hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

    setRandom : function(){
     let randNum = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
     return randNum;
    },
    cookieP : function(){
        let h1 = document.getElementById('title');
         h1.textContent = this.location;
        let diveL = document.getElementById('cookie');
       let ulEl = document.createElement('ul');
       diveL.appendChild(ulEl);
  
    for(let i=0;i<14;i++){
        let liEL = document.createElement('li');
        liEL.textContent =  this.hour[i] + ': ' + this.setRandom() + ' cookies';
        ulEl.appendChild(liEL);
      
    }
    diveL.appendChild(ulEl);
    
    }

};

store1.cookieP();


let store2 = {
    min: 3 ,
    max: 624 ,
    avg: 3.7,
    location: 'Tokyo' ,
   
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
     setRandom : function(){
      let randNum = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
      return randNum;
     },
     cookieP : function(){
         let h1 = document.getElementById('title');
          h1.textContent = this.location;
         let diveL = document.getElementById('cookie');
        let ulEl = document.createElement('ul');
        diveL.appendChild(ulEl);
   
     for(let i=0;i<14;i++){
         let liEL = document.createElement('li');
         liEL.textContent =  this.hour[i] + ': ' + this.setRandom() + ' cookies';
         ulEl.appendChild(liEL);
       
     }
     diveL.appendChild(ulEl);
     
     }
 
 };
 
 store2.cookieP();



 let store3 = {
    min: 11,
    max: 38 ,
    avg: 2.3,
    location: 'Dubai' ,
   
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
     setRandom : function(){
      let randNum = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
      return randNum;
     },
     cookieP : function(){
         let h1 = document.getElementById('title');
          h1.textContent = this.location;
         let diveL = document.getElementById('cookie');
        let ulEl = document.createElement('ul');
        diveL.appendChild(ulEl);
   
     for(let i=0;i<14;i++){
         let liEL = document.createElement('li');
         liEL.textContent =  this.hour[i] + ': ' + this.setRandom() + ' cookies';
         ulEl.appendChild(liEL);
       
     }
     diveL.appendChild(ulEl);
     
     }
 
 };
 
 store3.cookieP();
 
//  Paris	20	38	2.3
//  Lima	2	16	4.6