const sortArray = (arr) => {

    console.log(arr.sort((a,b) => (a-b)));

}


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log(inputArr);
};

sortArray([3,2,45,99,4,1,36]);
bubbleSort([3,2,45,99,4,1,36,0]);