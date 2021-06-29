'use strict';

let hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;
let x=[];
let storsPlaces=[];
let calcTotl =[];
let dailyTotle = 0;
function cookieStand (min,max,avg,location){
this.minCust = min;
this.maxCust = max;
this.avgCookiPerCust = avg;
this.storeloc = location ;
this.hourlySales = [];
this.dailyTotle =0;
storsPlaces.push(this);

}

cookieStand.prototype.calcRandHrlyCust = function(){

        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
}

cookieStand.prototype.calcTotlPerhr = function(){
    
       return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
       }
    
 cookieStand.prototype.calDailyTotle = function(){ 
        for(let i=0;i <hour.length;i++){
            this.hourlySales[i] = this.calcTotlPerhr();
            this.dailyTotle += this.hourlySales[i];  
        }
    }

    let container = document.getElementById('div');
    let tableEl = document.createElement('table');
    container.appendChild(tableEl);

function tableRender(){

       let trEl = document.createElement('tr');
       let thEl = document.createElement('th');
      tableEl.appendChild(trEl);
       thEl.textContent = 'location';
       trEl.appendChild(thEl);
       for(let i =0;i<hour.length;i++)
       {
        let thEl1 = document.createElement('th');
        thEl1.textContent= hour[i];
        trEl.appendChild(thEl1);
       }
        tableEl.appendChild(trEl);
        thEl=document.createElement('th');
        thEl.textContent = 'Daily Location Total';
        trEl.appendChild(thEl);
    }
    
cookieStand.prototype.render = function(){ 
    let trEl = document.createElement('tr');
     let tdEl = document.createElement('td');
     tdEl.textContent = this.storeloc;
     trEl.appendChild(tdEl);
     for(let i=0;i<hour.length;i++){
        let tdEl1 = document.createElement('td');
        
        tdEl1.textContent = this.hourlySales[i];
        
        trEl.appendChild(tdEl1);
    }
     tdEl = document.createElement('td');
     tdEl.textContent = this.dailyTotle;
     trEl.appendChild(tdEl);
         tableEl.appendChild(trEl);

}

cookieStand.prototype. countTotle = function(){ 
    let trEl = document.createElement('tr');
    for(let i=0;i<this.hourlySales.length;i++){
      
        calcTotl[i] = storsPlaces[0].hourlySales[i] + storsPlaces[1].hourlySales[i]+storsPlaces[2].hourlySales[i] + storsPlaces[3].hourlySales[i] + storsPlaces[4].hourlySales[i] ;
        
    }
    
}

tableRender();
function total(){
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = 'Totals';
    trEl.appendChild(tdEl1);
    tableEl.appendChild(trEl);
    for(let i=0 ; i<calcTotl.length;i++){
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = calcTotl[i];
    trEl.appendChild(tdEl1);
    }
    tableEl.appendChild(trEl)
}


cookieStand.prototype. generalCall = function(){ 
   this.calcRandHrlyCust();
   this.calcTotlPerhr();
   this.calDailyTotle();
   this.render();
   this.countTotle();
}

let Seattle = new cookieStand(23,65,6.3,'Seattle');
let Tokyo  = new cookieStand(3,24,12,'Tokyo');
let Dubai  = new cookieStand(11,38,3.7,'Dubai');
let Paris  = new cookieStand(20,38,2.3,'Paris');
let Lima  = new cookieStand(2,16,4.6,'Lima' );


Seattle.generalCall();
Tokyo.generalCall();
Dubai.generalCall();
Paris.generalCall();
Lima.generalCall();
total();
 


// let store1 = {
//    minCust: 23 ,
//    maxCust: 65 ,
//    avgCookiPerCust: 6.3,
//    storeLoc: 'Seattle' ,
//    dailyTotle : 0 ,
//    hourlySales:[],
//    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

//    calcRandHrlyCust : function(){
//       return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
//       },


//    calcTotlPerhr : function(){
//      return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
//      },

//     calDailyTotle:function(){
//         for(let i=0;i <14;i++){
//             this.hourlySales[i] = this.calcTotlPerhr();
//             this.dailyTotle += this.hourlySales[i];  
//         }
    
//     },
    
//    Show : function(){
//     this.calDailyTotle();
//        let headLi = document.getElementById('list1');
//        headLi.textContent = this.storeLoc ;

//        let divEl = document.getElementById('Seattle');
//        let ulEl = document.createElement('ul');

//     for(let i= 0;i<this.hourlySales.length;i++){
//         let liEL = document.createElement('li');
//         liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
//             ulEl.appendChild(liEL);
//         }
//          let liEL = document.createElement('li');
//         liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
//         ulEl.appendChild(liEL);
//          divEl.appendChild(ulEl);
    
//     }
// }

// store1.Show();

 

// let store2 = {
//     minCust: 3 ,
//     maxCust: 24 ,
//     avgCookiPerCust:12,
//     storeLoc: 'Tokyo' ,
//     dailyTotle : 0 ,
//    hourlySales:[],
//    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

//    calcRandHrlyCust : function(){
//       return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
//       },


//    calcTotlPerhr : function(){
//      return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
//      },

//     calDailyTotle(){
//         for(let i=0;i <14;i++){
//             this.hourlySales[i] = this.calcTotlPerhr();
//             this.dailyTotle += this.hourlySales[i];  
//         }
    
//     },
    
//    Show : function(){
//     this.calDailyTotle();
//        let headLi = document.getElementById('list2');
//        headLi.textContent = this.storeLoc ;

//        let divEl = document.getElementById('Tokyo');
//        let ulEl = document.createElement('ul');

//     for(let i= 0;i<this.hourlySales.length;i++){
//         let liEL = document.createElement('li');
//         liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
//             ulEl.appendChild(liEL);
//         }
//          let liEL = document.createElement('li');
//         liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
//         ulEl.appendChild(liEL);
//          divEl.appendChild(ulEl);
    
//     }
// }
 
//  store2.Show();


//  let store3 = {
//     minCust: 11,
//     maxCust: 38 ,
//     avgCookiPerCust: 3.7,
//     storeLoc: 'Dubai' ,
   
//     dailyTotle : 0 ,
//     hourlySales:[],
//     hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
//     calcRandHrlyCust : function(){
//        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
//        },
 
 
//     calcTotlPerhr : function(){
//       return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
//       },
 
//      calDailyTotle(){
//          for(let i=0;i <14;i++){
//              this.hourlySales[i] = this.calcTotlPerhr();
//              this.dailyTotle += this.hourlySales[i];  
//          }
     
//      },
     
//     Show : function(){
//      this.calDailyTotle();
//         let headLi = document.getElementById('list3');
//         headLi.textContent = this.storeLoc ;
 
//         let divEl = document.getElementById('Dubai');
//         let ulEl = document.createElement('ul');
 
//      for(let i= 0;i<this.hourlySales.length;i++){
//          let liEL = document.createElement('li');
//          liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
//              ulEl.appendChild(liEL);
//          }
//           let liEL = document.createElement('li');
//          liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
//          ulEl.appendChild(liEL);
//           divEl.appendChild(ulEl);
     
//      }
//  }
 
//  store3.Show();
 


// let store4 = {
//     minCust: 20,
//     maxCust: 38 ,
//     avgCookiPerCust: 2.3,
//     storeLoc: 'Paris' ,
//     dailyTotle : 0 ,
//    hourlySales:[],
//    hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

//    calcRandHrlyCust : function(){
//       return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
//       },


//    calcTotlPerhr : function(){
//      return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
//      },

//     calDailyTotle(){
//         for(let i=0;i <14;i++){
//             this.hourlySales[i] = this.calcTotlPerhr();
//             this.dailyTotle += this.hourlySales[i];  
//         }
    
//     },
    
//    Show : function(){
//     this.calDailyTotle();
//        let headLi = document.getElementById('list4');
//        headLi.textContent = this.storeLoc ;

//        let divEl = document.getElementById('Paris');
//        let ulEl = document.createElement('ul');

//     for(let i= 0;i<this.hourlySales.length;i++){
//         let liEL = document.createElement('li');
//         liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
//             ulEl.appendChild(liEL);
//         }
//          let liEL = document.createElement('li');
//         liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
//         ulEl.appendChild(liEL);
//          divEl.appendChild(ulEl);
    
//     }
   

// }
 
//  store4.Show();


//  let store5 = {
//     minCust: 2,
//     maxCust: 16 ,
//     avgCookiPerCust: 4.6,
//     storeLoc: 'Lima' ,
   
//     dailyTotle : 0 ,
//     hourlySales:[],
//     hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,
 
//     calcRandHrlyCust : function(){
//        return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
//        },
 
 
//     calcTotlPerhr : function(){
//       return  Math.floor(this.calcRandHrlyCust()*this.avgCookiPerCust);
//       },
 
//      calDailyTotle(){
//          for(let i=0;i <14;i++){
//              this.hourlySales[i] = this.calcTotlPerhr();
//              this.dailyTotle += this.hourlySales[i];  
//          }
     
//      },
     
//     Show : function(){
//      this.calDailyTotle();
//         let headLi = document.getElementById('list5');
//         headLi.textContent = this.storeLoc ;
 
//         let divEl = document.getElementById('Lima');
//         let ulEl = document.createElement('ul');
 
//      for(let i= 0;i<this.hourlySales.length;i++){
//          let liEL = document.createElement('li');
//          liEL.textContent =  this.hour[i] + ': ' + this.hourlySales[i] + ' cookies';
//              ulEl.appendChild(liEL);
//          }
//           let liEL = document.createElement('li');
//          liEL.textContent = 'Total: ' + this.dailyTotle +' cookies';
//          ulEl.appendChild(liEL);
//           divEl.appendChild(ulEl);
     
//      }
    
 
//  }
 
//  store5.Show();