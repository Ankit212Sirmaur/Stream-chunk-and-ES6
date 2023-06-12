const linearSearch = function(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target) return i;
    }
    return undefined;
}

const binarySearch = function(arr, key){
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

module.exports = {
    // we can add keyValue pair 
    // linear : linearSearch
    // if key and value are search just keep them as it is;
    linearSearch,
    binarySearch
}

// module.exports = linearSearch; also u can do this 
