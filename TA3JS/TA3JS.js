function removeFromArray(arreglo, item){
    const filtered = arreglo.filter(element => element !== item);
    console.log(filtered);

}

removeFromArray([1,2,3,4,5], 3); 
    
