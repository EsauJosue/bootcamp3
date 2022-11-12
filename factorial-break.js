var factorial = 1; 
var i = 1;
bucleFactorizacion: while(i > 0){
    if(i<10){
        factorial = factorial * i;
        console.log(factorial);
    }else{
        break bucleFactorizacion;       
    }
    i++;
}