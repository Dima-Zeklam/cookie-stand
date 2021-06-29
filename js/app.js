'use strict';

let hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;
let x=[];
let storsPlaces=[];
let calcTotl =[];
let dailyTotle = 0;
let container = document.getElementById('div');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
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


tableRender();
function total(){
    let megtotal = 0;
    let trEl = document.createElement('tr');
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = 'Totals';
    trEl.appendChild(tdEl1);
    tableEl.appendChild(trEl);
    for(let y=0 ; y < hour.length;y++){
    let tdEl = document.createElement('td');
    let sum=0;
    for(let s=0;s<storsPlaces.length;s++){
   sum += storsPlaces[s].hourlySales[y];
    }
    megtotal += sum;
    tdEl.textContent = sum;
    trEl.appendChild(tdEl);
    
    }
    let tdtotalEl = document.createElement('td');
    tdtotalEl .textContent = megtotal;
    trEl.appendChild(tdtotalEl );
    tableEl.appendChild(trEl);
}


cookieStand.prototype. generalCall = function(){ 
   this.calcRandHrlyCust();
   this.calcTotlPerhr();
   this.calDailyTotle();
   this.render();

}

let Seattle = new cookieStand(23,65,6.3,'Seattle');
let Tokyo  = new cookieStand(3,24,12,'Tokyo');
let Dubai  = new cookieStand(11,38,3.7,'Dubai');
let Paris  = new cookieStand(20,38,2.3,'Paris');
let Lima  = new cookieStand(2,16,4.6,'Lima' );

for(let f=0;f<storsPlaces.length;f++){
    storsPlaces[f].generalCall();
}

total();
 


