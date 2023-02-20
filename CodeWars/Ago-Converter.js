
function AgoConverter(string){
    const day = 60 * 60 * 1000 * 24;
    const date = new Date(string);
    var now = new Date();
    
    var diff = now.getTime() - date.getTime();
    var returnString = "";
    
    var time = Math.floor(diff / day);
    var days=0;
    var months=0;
    var years=0;

    months = Math.floor(time/30);
    years = Math.floor(months/12);
    
    if(time<30){
        days = time;
        returnString = days +" "+"gün önce";
    }
    
    if(time==30){
        days = time%30;
        returnString =months +" "+"ay önce";
    }
    if(time>30 && time<365){
         days = time%30;
         returnString = months +" "+"ay " + days +" "+"gün önce";
    }
    if(months>12){
            months = months%12;
            returnString = years +" "+"yıl"+ " "+ months +" "+"ay önce";
    }
    if(months==12){ 
        months = months%12;
        returnString = years +" "+"yıl önce";
    }

    return returnString;
}

console.log(AgoConverter("2022-03-20"))// 1 yıl 2 ay 10 gün önce