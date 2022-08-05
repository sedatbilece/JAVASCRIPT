    function cakes(recipe, available) {
        
        const need = Object.values(recipe);
        const have = Object.values(available);
        let count =0;
        let go=1;
        let res=0;
        if(need.length>have.length ){
            return 0;
        }

        while(go){
            need.map((item,index)=>{
                if(have[index]>=item){
                    count +=1;
                }
                else{
                go=0;
                }
        })
       
        if(count === need.length){
            count =0;

            need.map((item,index)=>{
                have[index] = have[index]-item;
        })
        res+=1;  
        }
        }
            return res;
    }






console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 500, sugar: 200, eggs: 1}));
