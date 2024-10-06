let arr=[10,30,5,20,6];
let max=0;
for(let i=0;i<arr.length;i++){
if(max<arr[i]){
    max=arr[i];
}
}
console.log("maximum number is ",max);