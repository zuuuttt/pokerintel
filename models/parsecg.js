const models=require('./models');
const Session=models.Session;
    
    
    
  

var props=['start','end','duration','variant','blinds','venue','buyin','cashout','profit']
var fs = require('fs');

fs.readFile('parsecg.csv', 'utf8', function(err, data) {  
    if (err) throw err;
    
    let arr=data.split('\n');
    let sessions_arr=[];
     
    
    arr.pop();
    
    for(let i=1; i<arr.length; i++) {
        let fields=arr[i].split(';');
        let sessionObj={user: 'zuuuttt'};
        for(let i=0; i<fields.length; i++) {
            
            sessionObj[props[i]]=fields[i];
        }
        
        
        sessionObj.buyin=parseInt(sessionObj.buyin||0)
        sessionObj.cashout=parseInt(sessionObj.cashout||0);
        
        sessionObj.start=parseDate(sessionObj.start)
        sessionObj.end=parseDate(sessionObj.end);
        sessionObj.blinds=parseBlinds(sessionObj.blinds);
        
        sessionObj.profit=sessionObj.cashout-sessionObj.buyin;
        sessionObj.duration=sessionObj.end-sessionObj.start;
        
        console.log(sessionObj);
        sessions_arr.push(sessionObj);
    }
    
});
function parseBlinds(str) {
    re=/[0-9]{1,2}/g;
    return str.match(re)
}
function parseDate(str) {
    re=/[0-9]{1,2}/g;
    let found=str.match(re);
    let month=parseInt(found[0],10)-1;
    let day=parseInt(found[1],10);
    let year=parseInt(found[2],10)+2000;
    let hour=parseInt(found[3],10);
    let min=parseInt(found[4],10);
    
    let time=str.match(/..$/g);
    if(time[0]==='PM') {hour+=12;}
 
    let date=new Date(year,month,day,hour,min);
    
    return date;

}
