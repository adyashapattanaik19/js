function removeduplicates(){
let arr=[5,3,5,5,3,4,6];
let obj = Object.assign({},arr);
//console.log(JSON.stringify(obj));

let arr1 = [];
let newobj={};
	for( let i = 1 ;i < arr.length ;i++){
        //arr1=arr[i];
        // for(let j= 0; j<arr1.length; j++)
        if(arr[i]=true){
            break;
        }else{
            arr1.push(arr)
        }
    newobj[arr1]=arr[i];
    }
    console.log(arr1)  
}
removeduplicates();


