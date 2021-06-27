'use strict';

let store1 = {
   min: 23 ,
   max: 65 ,
   avg: 6.3,
   location: 'Sattle' ,
   hourlySales:[],
   hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

    setRandom : function(){
     let randNum = Math.floor(Math.random()*(this.max-this.min)+this.min);
     return Math.floor(randNum*this.avg);
    },
    cookieP : function(){
        let sum=0;
        let num=0;
        let diveL = document.getElementById('list1');
       let ulEl = document.createElement('ul');
       diveL.appendChild(ulEl);
    ulEl.textContent = this.location;
    for(let i=0;i<15;i++){
        let liEL = document.createElement('li');
        if(i == 14){
            liEL.textContent = 'Total: ' + sum +' cookies';
            ulEl.appendChild(liEL);
            break;
        }
        num = this.setRandom();
        sum=sum+num;
        liEL.textContent =  this.hour[i] + ': ' + num  + ' cookies';
       
        ulEl.appendChild(liEL);
    }
   
    diveL.appendChild(ulEl);
    
    }

}

store1.cookieP();


let store2 = {
    min: 3 ,
    max: 24 ,
    avg:12,
    location: 'Tokyo' ,
   
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
     setRandom : function(){
      let randNum = Math.floor(Math.random()*(this.max-this.min)+this.min);
      return Math.floor(randNum*this.avg);
     },
     cookieP : function(){
      
        let sum=0;
        let num=0;
        let diveL = document.getElementById('list1');
       let ulEl = document.createElement('ul');
       diveL.appendChild(ulEl);
    ulEl.textContent = this.location;
    for(let i=0;i<15;i++){
        let liEL = document.createElement('li');
        if(i == 14){
            liEL.textContent = 'Total: ' + sum +' cookies';
            ulEl.appendChild(liEL);
            break;
        }
        num = this.setRandom();
        sum=sum+num;
        liEL.textContent =  this.hour[i] + ': ' + num  + ' cookies';
       
        ulEl.appendChild(liEL);
     }
     diveL.appendChild(ulEl);
     
     }
 
 }
 
 store2.cookieP();



 let store3 = {
    min: 11,
    max: 38 ,
    avg: 3.7,
    location: 'Dubai' ,
   
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
     setRandom : function(){
      let randNum = Math.floor(Math.random()*(this.max-this.min)+this.min);
      return Math.floor(randNum*this.avg);
     },
     cookieP : function(){
  
        let sum=0;
        let num=0;
        let diveL = document.getElementById('list1');
       let ulEl = document.createElement('ul');
       diveL.appendChild(ulEl);
    ulEl.textContent = this.location;
    for(let i=0;i<15;i++){
        let liEL = document.createElement('li');
        if(i == 14){
            liEL.textContent = 'Total: ' + sum +' cookies';
            ulEl.appendChild(liEL);
            break;
        }
        num = this.setRandom();
        sum=sum+num;
        liEL.textContent =  this.hour[i] + ': ' + num  + ' cookies';
       
        ulEl.appendChild(liEL);
     }
     diveL.appendChild(ulEl);
     
     }
 
 }
 
 store3.cookieP();
 


let store4 = {
    min: 20,
    max: 38 ,
    avg: 2.3,
    location: 'Paris' ,
   
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
     setRandom : function(){
      let randNum = Math.floor(Math.random()*(this.max-this.min)+this.min);
      return Math.floor(randNum*this.avg);
     },
     cookieP : function(){
     
        let sum=0;
        let num=0;
        let diveL = document.getElementById('list1');
       let ulEl = document.createElement('ul');
       diveL.appendChild(ulEl);
    ulEl.textContent = this.location;
    for(let i=0;i<15;i++){
        let liEL = document.createElement('li');
        if(i == 14){
            liEL.textContent = 'Total: ' + sum +' cookies';
            ulEl.appendChild(liEL);
            break;
        }
        num = this.setRandom();
        sum=sum+num;
        liEL.textContent =  this.hour[i] + ': ' + num  + ' cookies';
       
        ulEl.appendChild(liEL);
       
     }
     diveL.appendChild(ulEl);
     
     }
 
 }
 
 store4.cookieP();


 let store5 = {
    min: 2,
    max: 16 ,
    avg: 4.6,
    location: 'Lima' ,
   
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
     setRandom : function(){
      let randNum = Math.floor(Math.random()*(this.max-this.min)+this.min);
      return Math.floor(randNum*this.avg);
     },
     cookieP : function(){
   
        let sum=0;
        let num=0;
        let diveL = document.getElementById('list1');
       let ulEl = document.createElement('ul');
       diveL.appendChild(ulEl);
    ulEl.textContent = this.location;
    for(let i=0;i<15;i++){
        let liEL = document.createElement('li');
        if(i == 14){
            liEL.textContent = 'Total: ' + sum +' cookies';
            ulEl.appendChild(liEL);
            break;
        }
        num = this.setRandom();
        sum=sum+num;
        liEL.textContent =  this.hour[i] + ': ' + num  + ' cookies';
       
        ulEl.appendChild(liEL);
       
     }
     diveL.appendChild(ulEl);
     
     }
 
 }
 store5.cookieP();