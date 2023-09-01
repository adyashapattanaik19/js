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
