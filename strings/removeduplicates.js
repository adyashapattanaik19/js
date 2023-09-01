function removeduplicates(){
let arr=[5,3,5,5,3,4,6];
let obj={};
	for( let i = 0 ;i < arr.length ;i++){
        
        obj[arr[i]]=true;
    }
    console.log(Object.keys(obj));
}
removeduplicates();

