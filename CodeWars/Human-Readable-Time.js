function humanReadable (seconds) {
    let hh =0;
    let mm=0;
    let ss=0

    while(seconds>=3600){
        hh++;
        seconds-=3600;
    }
    while(seconds>=60){
        mm++;
        seconds-=60;
    }
    ss=seconds;

    return `${isTwoDigits(hh)?hh:'0'+hh}:${isTwoDigits(mm)?mm:'0'+mm}:${isTwoDigits(ss)?ss:'0'+ss}`;
  }


function isTwoDigits(num){
    return num.toString().length==2 ? true :false
}

  console.log(humanReadable(90)); 

  /*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
  */