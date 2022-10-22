function sum(numbers){
    return numbers.reduce((prev, curr) => prev + curr, 0);    
}
function avg(numbers){
    return sum(numbers) / numbers.length;    
}
function max(numbers){
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);    
}
function med(numbers){
    /* sort array in ascending order */
    numbers.sort(function(a, b){
        return a-b;
    });

    var mid = numbers.length/2;
    /* print value (considering the array size) */
    if (mid%2 === 0){
        return (numbers[mid-1] + numbers[mid])/2;
    }
    return numbers[mid-0.5];
}
function iqr(numbers){
    /* sort array in ascending order */
    numbers.sort(function(a, b){
        return a-b;
    });
    /* arr1: 1st subarray // arr2: 2nd subarray // arr1Med: median of arr1 (Q1) // arr2Med: median of arr2 (Q3) */
    let arr1 = [];
    let arr2 = [];
    var len = numbers.length;
    var result = Math.floor(len/2);
    var arr1Med;
    var arr2Med;
    /* Get Q1 and Q3 from the array */
    if (len%2 === 0){
        for (let i = 0; i < result; i++){
            arr1[i] = numbers[i];
        }
        arr1Med = med(arr1);
        for (let j = result; j < len; j++){
            arr2[j] = numbers[j];
            var arr2Filtered = arr2.filter(function(el){
                return el != null;
            });
        }
        arr2Med = med(arr2Filtered)
    }
    else {
        for (let k = 0; k < result; k++){
            arr1[k] = numbers[k];
        }
        arr1Med = med(arr1);
        for (let l = result+1; l < len; l++){
            arr2[l] = numbers[l];
            var arr2Filtered = arr2.filter(function(el){
                return el != null;
            });
        }
        arr2Med = med(arr2Filtered);
    }
    /* Print result (consider if the result is either negative or positive) */
    if (arr2Med-arr1Med < 0){
        return -(arr2Med-arr1Med);
    }
    else {
        return arr2Med-arr1Med;
    }
}
function outlier(numbers){
    /* sort array in ascending order */
    numbers.sort(function(a, b){
        return a-b;
    });
    /* arr1: 1st subarray // arr2: 2nd subarray // arr1Med: median of arr1 // arr2Med: median of arr2 */
    let arr1 = [];
    let arr2 = [];
    var len = numbers.length;
    var result = Math.floor(len/2);
    var arr1Med;
    var arr2Med;
    /* Get Q1 and Q3 from the array */
    if (len%2 == 0){
        for (let i = 0; i < result; i++){
            arr1[i] = numbers[i];
            arr1Med = med(arr1);
        }
        console.log(arr1Med);
        for (let j = result; j < len; j++){
            arr2[j] = numbers[j];
            var arr2Filtered = arr2.filter(function(el){
                return el != null;
            });
            arr2Med = med(arr2Filtered)
        }
    }
    else {
        for (let k = 0; k < result; k++){
            arr1[k] = numbers[k];
            arr1Med = med(arr1);
        }
        for (let l = result+1; l < len; l++){
            arr2[l] = numbers[l];
            var arr2Filtered = arr2.filter(function(el){
                return el != null;
            });
            arr2Med = med(arr2Filtered);
        }
    }
    /* set two cases that is outlier */
    var case1 = arr1Med-1.5*iqr(numbers);
    var case2 = arr2Med+1.5*iqr(numbers);
    /* get outlier numbers using for loop */
    var outlierArray = [];
    for (let m = 0; m < len; m++){
        if (numbers[m] < case1 || numbers[m] > case2){
            outlierArray[m] = numbers[m];
            var outArrFiltered = outlierArray.filter(function(el){
                return el != null;
            });
        }
    }
    return outArrFiltered;
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier,
};