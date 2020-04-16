let stringArray = ["zebra", "xyloPHONE", "apple", "fishing", "volleyball", 45, "test bre"]

function makeAllCaps(arrayWords) {
    return new Promise((resolve, reject) => {
        let checkArray = arrayWords.filter((element) => {
            return isNaN(element) && !element.includes(" ");
        });
        let upperArray = checkArray.map((element) => {
            return element.toUpperCase();
        });
        resolve(upperArray);
    });
};

function sortWords(arrayWords) {
    arrayWords.sort();
    console.log(arrayWords);
};

makeAllCaps(stringArray)
    .then((results) => {
        sortWords(results);
    });