
export const binarySearch = function(arr, key){
    let li = 0, hi = arr.length-1; 
    while(li <= hi){
        let mid = li + Math.floor(hi - li) / 2;
        if(arr[mid] == key){
            return mid;
        }else if(arr[mid] > key) {
            hi = mid - 1;
        }else {
            li = mid + 1;
        }
    }
    return undefined;
}

export const linearSearch = function(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target) return i;
    }
    return undefined;
}

export default function printing(arr) {
    console.log("this is not have to destructing")
}