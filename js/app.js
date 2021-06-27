'use strict';

let store1 = {
   minCust: 23 ,
   maxCust: 65 ,
   avgCookiPerCust: 6.3,
   storeLoc: 'Seattle' ,
   dailyTotle : 0 ,
   hourlySales:[],
   hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

   calcRandHrlyCust : function(){
      return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
      },


   calcTotlPerhr : function(){
     return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
     },

    calDailyTotle(){
        for(let i=0;i <14;i++){
            this.hourlySales[i] = this.calcTotlPerhr();
            this.dailyTotle += this.hourlySales[i];  
        }
    
    },
    
   Show : function(){
    this.calDailyTotle();
       let headLi = document.getElementById('list1');
       headLi.textContent = this.storeLoc ;

       let divEl = document.getElementById('Seattle');
       let ulEl = document.createElement('ul');

    for(let i= 0;i<this.hourlySales.length;i++){
        let liEL = document.createElement('li');
        liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
            ulEl.appendChild(liEL);
        }
         let liEL = document.createElement('li');
        liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
        ulEl.appendChild(liEL);
         divEl.appendChild(ulEl);
    
    }
}

store1.Show();

 

let store2 = {
    minCust: 3 ,
    maxCust: 24 ,
    avgCookiPerCust:12,
    storeLoc: 'Tokyo' ,
    dailyTotle : 0 ,
   hourlySales:[],
   hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

   calcRandHrlyCust : function(){
      return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
      },


   calcTotlPerhr : function(){
     return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
     },

    calDailyTotle(){
        for(let i=0;i <14;i++){
            this.hourlySales[i] = this.calcTotlPerhr();
            this.dailyTotle += this.hourlySales[i];  
        }
    
    },
    
   Show : function(){
    this.calDailyTotle();
       let headLi = document.getElementById('list2');
       headLi.textContent = this.storeLoc ;

       let divEl = document.getElementById('Tokyo');
       let ulEl = document.createElement('ul');

    for(let i= 0;i<this.hourlySales.length;i++){
        let liEL = document.createElement('li');
        liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
            ulEl.appendChild(liEL);
        }
         let liEL = document.createElement('li');
        liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
        ulEl.appendChild(liEL);
         divEl.appendChild(ulEl);
    
    }
}
 
 store2.Show();


 let store3 = {
    minCust: 11,
    maxCust: 38 ,
    avgCookiPerCust: 3.7,
    storeLoc: 'Dubai' ,
   
    dailyTotle : 0 ,
    hourlySales:[],
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
    calcRandHrlyCust : function(){
       return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
       },
 
 
    calcTotlPerhr : function(){
      return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
      },
 
     calDailyTotle(){
         for(let i=0;i <14;i++){
             this.hourlySales[i] = this.calcTotlPerhr();
             this.dailyTotle += this.hourlySales[i];  
         }
     
     },
     
    Show : function(){
     this.calDailyTotle();
        let headLi = document.getElementById('list3');
        headLi.textContent = this.storeLoc ;
 
        let divEl = document.getElementById('Dubai');
        let ulEl = document.createElement('ul');
 
     for(let i= 0;i<this.hourlySales.length;i++){
         let liEL = document.createElement('li');
         liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
             ulEl.appendChild(liEL);
         }
          let liEL = document.createElement('li');
         liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
         ulEl.appendChild(liEL);
          divEl.appendChild(ulEl);
     
     }
 }
 
 store3.Show();
 


let store4 = {
    minCust: 20,
    maxCust: 38 ,
    avgCookiPerCust: 2.3,
    storeLoc: 'Paris' ,
    dailyTotle : 0 ,
   hourlySales:[],
   hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

   calcRandHrlyCust : function(){
      return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
      },


   calcTotlPerhr : function(){
     return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
     },

    calDailyTotle(){
        for(let i=0;i <14;i++){
            this.hourlySales[i] = this.calcTotlPerhr();
            this.dailyTotle += this.hourlySales[i];  
        }
    
    },
    
   Show : function(){
    this.calDailyTotle();
       let headLi = document.getElementById('list4');
       headLi.textContent = this.storeLoc ;

       let divEl = document.getElementById('Paris');
       let ulEl = document.createElement('ul');

    for(let i= 0;i<this.hourlySales.length;i++){
        let liEL = document.createElement('li');
        liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
            ulEl.appendChild(liEL);
        }
         let liEL = document.createElement('li');
        liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
        ulEl.appendChild(liEL);
         divEl.appendChild(ulEl);
    
    }
   

}
 
 store4.Show();


 let store5 = {
    minCust: 2,
    maxCust: 16 ,
    avgCookiPerCust: 4.6,
    storeLoc: 'Lima' ,
   
    dailyTotle : 0 ,
    hourlySales:[],
    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
    calcRandHrlyCust : function(){
       return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
       },
 
 
    calcTotlPerhr : function(){
      return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
      },
 
     calDailyTotle(){
         for(let i=0;i <14;i++){
             this.hourlySales[i] = this.calcTotlPerhr();
             this.dailyTotle += this.hourlySales[i];  
         }
     
     },
     
    Show : function(){
     this.calDailyTotle();
        let headLi = document.getElementById('list5');
        headLi.textContent = this.storeLoc ;
 
        let divEl = document.getElementById('Lima');
        let ulEl = document.createElement('ul');
 
     for(let i= 0;i<this.hourlySales.length;i++){
         let liEL = document.createElement('li');
         liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
             ulEl.appendChild(liEL);
         }
          let liEL = document.createElement('li');
         liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
         ulEl.appendChild(liEL);
          divEl.appendChild(ulEl);
     
     }
    
 
 }
 
 store5.Show();