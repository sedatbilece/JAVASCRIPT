
function maskify(cc) {
       cc =cc.split('')
    if(cc.length > 4) {
        var x = cc.length - 4;
        for (var i=0;i<x;i++){
            cc[i]='#';
        }
        return cc.join('')
    }else{
        return cc.join('')
    }
}

console.log(maskify(''))
/*
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/