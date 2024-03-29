/*// given an array give new array only of even array from the array

const arr= [1,2,3,4,5]
const newArray=[]
for(let i =0;i<arr.length;i++){
    if (arr[i] % 2 === 0) {
        newArray.push(arr[i])
    }
}
console.log(newArray)

// by using filter*/
const arr= [1,2,3,4,5]
function filterlogic(n){
    if(n%2==0)
    {
        return true
    }
    else{
        false
    }
}
const newArray = arr.filter(filterlogic);
console.log(newArray)
