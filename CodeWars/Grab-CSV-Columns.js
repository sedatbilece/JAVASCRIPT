function csvColumns(csv, indices) {
	arr=[]
    arr2=[]
    var lines = csv.split('\n');
    

    lines.map( (x)=>{
        line = x.split(',');
        for(var i=0;i<indices.length;i++){
            arr.push(line[indices[i]]);
        }
        arr.push('\n');
    })

    arr = arr.filter(x =>x !==undefined);

    arr.pop();
    cnt=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='\n'){
            cnt+=1;
        }
    }
    if(cnt==arr.length){
        return "";
    }
    
    arr.map( x =>{
        
        if(x.match(/\r\n|\r|\n/)!=null){
            arr2.push('\n')
        }
        else{
           arr2.push(x);
           
        }
        
    })
    
    return arr2.join(',').replace(',\n,','\n') 

}



console.log("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j" , [1, 3, 5, 7])



