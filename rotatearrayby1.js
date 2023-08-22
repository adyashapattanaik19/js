function rotate(nums, k) {
    k = k % nums.length;
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
    }
    console.log(nums);
   }
   let nums= [1,2,3,45];
   let k=1;
   rotate(nums,k);

// function Rotate_and_Print(arr,d,n)
// {
// 	var temp=new Array(n);
	
// 	let k = 0;

	
// 	for (let i = d; i < n; i++) {
// 		temp[k] = arr[i];
// 		k++;
// 	}


// 	for (let i = 0; i < d; i++) {
// 		temp[k] = arr[i];
// 		k++;
// 	}
	
// 	for (let i = 0; i < n; i++) {
// 		console.log(temp[i]+" ");
// 	}
// }

// let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
// let n = arr.length;
// let d = 1; //number of times rotating the array
// Rotate_and_Print(arr, d, n);





