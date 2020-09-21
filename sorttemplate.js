
// Problem
// 1. Create an array of 1,000 random integers, then sort it using Array.sort()
// 2. Create an array of 1,000 random integers
// 3. Move the elements from the second array into the first array, one at a time,
//      using binary locate and insertion.
//

// Solution by dichotomy
// I'm just going to start breaking down the problem

let n = 1000 //temporarily set to 10 instead of 1,000 for brevity's sake

function makeArray(n) {
    let result = []
    for(let i =0; i<n; ++i)
    result.push(Math.floor(Math.random()*n))
    return result
}
let src = makeArray(n)
let dst = makeArray(n)
dst.sort((a, b) => (a-b))//to make the sort numeric instead of alphabetical
console.log(src, dst)


// Now we need to loop through src and insert elements into dst
//
for(let i=0 ; i<n ; ++i) //commented out until we get the first element added right
   {
    insert(src[0], dst)
    src.shift()
   }


// Now we need the insert(elem, dst) function
//
function insert(value, ay) {
    // Let's add a function that does the binary lookup and returns the index where the value belongs
    //
    let idx = lookup(value, dst, 0, ay.length-1)
    dst.splice(idx, 0, src[0]) //I think that's how the insert function will work.
    //need to finish logic for lookup before filling out insert logic

    // Now splice value into the array at index 'idx'
    // Beware that idx can be 0 (first elem) or 1 past the last index (ay.length)
    //
    // TODO
}


// Here's our lookup.  We'll call this recursively, meaning it will call itself
// to gradually narrow the scope of the search
//
function lookup(value, ay, low, high) {
    if(high <= low) {
        return (value > dst[low]) ? (low + 1) : low
    }
    // Compute mid
    let mid = Math.floor((low + high)/2)
    // Compare value with ay[mid]
    if(value === dst[mid]) {
        return mid
    }
    if(value < dst[mid]){
        //check lower half for match
        return lookup(value, ay, low, mid-1)
    } else {
        //check upper half for match
        return lookup(value, ay, mid+1, high)
    }
    // adjust low or high to either mid+1 or mid-1 respectively
    // call lookup again and return the value, like this:

    return lookup(value, ay, low, high)
}

console.log(dst)
document.getElementById("sort").innerHTML = dst
