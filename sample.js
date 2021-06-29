
function insertAt(array, index, ...elementsArray) {
        array.splice(index, 0, ...elements);
    }

    var num = [1,2,3,6,7,8];

    console.log(insertAt(num, 3, 4, 5));

    