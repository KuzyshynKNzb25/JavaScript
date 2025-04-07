(function(window){
    const Balabalabam = {};
    let numberOfComparing = 0;
    let numberOfChanging = 0;
    Balabalabam.changing = function(arr, up){
        const sortedArray = arr.slice();
        if(up){
            let box;
            let isOk = true;
            while(isOk){
                isOk = false;
                for(let i = 0 ;i < sortedArray.length-1;i++){
                    numberOfComparing++;
                    if(sortedArray[i] > sortedArray[i+1] ||(sortedArray[i] && !sortedArray[i+1]) ){
                        box = sortedArray[i];
                        sortedArray[i] = sortedArray[i+1];
                        sortedArray[i+1] = box;
                        numberOfChanging++;
                        isOk = true;
                    }
                }
            }

        }
        else{
            let box;
            let isOk = true;
            while(isOk){
                isOk = false;
                for(let i = 0 ;i < sortedArray.length-1;i++){
                    numberOfComparing++;
                    if(sortedArray[i] < sortedArray[i+1] || (!sortedArray[i] && sortedArray[i+1])){
                        box = sortedArray[i];
                        sortedArray[i] = sortedArray[i+1];
                        sortedArray[i+1] = box;
                        numberOfChanging++;
                        isOk = true;
                    }
                }
            }
        }
        console.log(`Кількість порівнянь: ${numberOfComparing}\nКількість перестановок: ${numberOfChanging}`);
        console.log(sortedArray);
        numberOfComparing = 0;
        numberOfChanging = 0;
    }

    Balabalabam.byLessValues = function(arr, up){
        const sortedArray = arr.slice();
        if(up){
            let box;
            let thatIndex;
            for(let i = 0 ;i < sortedArray.length-1;i++){
                box = sortedArray[i];
                thatIndex = i;
                if(box){
                    for(let j = i;j < sortedArray.length;j++){
                        numberOfComparing++;
                        if(!sortedArray[j]){
                            box = sortedArray[j];
                            thatIndex = j;
                            break;
                        }
                        if (sortedArray[j] < box ){
                            box = sortedArray[j];
                            thatIndex = j;
                        }
                    }
                    numberOfChanging++;
                    sortedArray[thatIndex] = sortedArray[i];
                    sortedArray[i] = box;
                }
            }
        }
        else{
            let box;
            let thatIndex;
            for(let i = 0 ;i < sortedArray.length-1;i++){
                box = sortedArray[i];
                thatIndex = i;
                if(box){
                    for(let j = i;j < sortedArray.length;j++){
                        numberOfComparing++;
                        if(sortedArray[j] > box){
                            box = sortedArray[j];
                            thatIndex = j;
                        }
                    }
                    numberOfChanging++;
                    sortedArray[thatIndex] = sortedArray[i];
                    sortedArray[i] = box;
                }
            }
        }
        console.log(`Кількість порівнянь: ${numberOfComparing}\nКількість перестановок: ${numberOfChanging}`);
        console.log(sortedArray);
        numberOfComparing = 0;
        numberOfChanging = 0;
    }

    Balabalabam.insert = function(arr, up) {
        const sortedArray = arr.slice();
        if (up) {
            let box, i;
            for (let k = 1; k <= sortedArray.length - 1; k++) {
                    box = sortedArray[k];
                    i = k - 1;
                    numberOfComparing++;
                    while (i >= 0 && (sortedArray[i] > box || !box)) {
                        numberOfComparing++;
                        numberOfChanging++;
                        sortedArray[i + 1] = sortedArray[i];
                        i--;
                    }
                    numberOfChanging++;
                    sortedArray[i + 1] = box;
            }
        } else {
            let box, i;
            for (let k = 1; k <= sortedArray.length - 1; k++) {
                box = sortedArray[k];
                i = k - 1;
                numberOfComparing++;
                while (i >= 0 && (sortedArray[i] < box || !sortedArray[i])) {
                    numberOfComparing++;
                    numberOfChanging++;
                    sortedArray[i + 1] = sortedArray[i];
                    i--;
                }
                numberOfChanging++;
                sortedArray[i + 1] = box;
            }
        }
        console.log(`Кількість порівнянь: ${numberOfComparing}\nКількість перестановок: ${numberOfChanging}`);
        console.log(sortedArray);
        numberOfComparing = 0;
        numberOfChanging = 0;
    }

        Balabalabam.shell = function(arr, up){
            const sortedArray = arr.slice();
            if(up){
                let box;
                for(let d = Math.floor(sortedArray.length/2) ;d >= 1;d = Math.floor(d/2) ){
                    for(let i = d;i < sortedArray.length;i++){
                        numberOfComparing++;
                        for(let j = i;j >=d && (sortedArray[j] < sortedArray[j-d] || !sortedArray[j]) ;j-=d){
                            numberOfComparing++;
                            numberOfChanging++;
                            box = sortedArray[j-d];
                            sortedArray[j-d] = sortedArray[j];
                            sortedArray[j] = box;
                        }
                    }
                }
            }
            else {
                let box;
                for(let d = Math.floor(sortedArray.length/2) ;d >= 1;d = Math.floor(d/2) ){
                    for(let i = d;i < sortedArray.length;i++){
                        numberOfComparing++;
                        for(let j = i;j >=d && (sortedArray[j] > sortedArray[j-d] || !sortedArray[j-d]) ;j-=d){
                            numberOfComparing++;
                            numberOfChanging++;
                            box = sortedArray[j-d];
                            sortedArray[j-d] = sortedArray[j];
                            sortedArray[j] = box;
                        }
                    }
                }
            }
            console.log(`Кількість порівнянь: ${numberOfComparing}\nКількість перестановок: ${numberOfChanging}`);
            console.log(sortedArray);
            numberOfComparing = 0;
            numberOfChanging = 0;
        }

        function recursive(arr){
            if (arr.length <= 1) {
                return arr;
            }
            let pivot = arr[Math.floor(arr.length / 2)];
            if(!pivot){
                for(let i = Math.floor(arr.length / 2); i < arr.length; i++){
                    if(arr[i]){
                        pivot = arr[i];
                        break;
                    }
                }
                if(!pivot){
                    for(let i = 0; i < Math.floor(arr.length / 2); i++){
                        if(arr[i]){
                            pivot = arr[i];
                            break;
                        }
                    }
                }
            }
            const undefineds = [];
            const less = [];
            const greater = [];
            const pivots = []

            for (let i = 0; i < arr.length; i++) {
                numberOfComparing++;

                if(!arr[i]){
                    numberOfChanging++;
                    undefineds.push(arr[i]);
                }
                else {

                    if (arr[i] < pivot) {
                        numberOfChanging++;
                        less.push(arr[i]);
                    } else if (arr[i] > pivot) {
                        numberOfChanging++;
                        greater.push(arr[i]);
                    }
                    else if(arr[i] === pivot) {
                        pivots.push(arr[i]);
                    }
                }
            }
            return [...undefineds, ...recursive(less), ...pivots,
                ...recursive(greater)];
        }

        function recursiveReverse(arr){
            if (arr.length <= 1) {
                return arr;
            }
            let pivot = arr[Math.floor(arr.length / 2)];
            if(!pivot){
                for(let i = Math.floor(arr.length / 2); i < arr.length; i++){
                    if(arr[i]){
                        pivot = arr[i];
                        break;
                    }
                }
                if(!pivot){
                    for(let i = 0; i < Math.floor(arr.length / 2); i++){
                        if(arr[i]){
                            pivot = arr[i];
                            break;
                        }
                    }
                }
            }
            const undefineds = [];
            const less = [];
            const greater = [];
            const pivots = []

            for (let i = 0; i < arr.length; i++) {
                numberOfComparing++;
                if(!arr[i]){
                    numberOfChanging++;
                    undefineds.push(arr[i]);
                }
                else {
                    if (arr[i] > pivot) {
                        numberOfChanging++;
                        less.push(arr[i]);
                    } else if (arr[i] < pivot) {
                        numberOfChanging++;
                        greater.push(arr[i]);
                    }
                    else if(arr[i] === pivot) {
                        pivots.push(arr[i]);
                    }
                }

            }
            return [...recursiveReverse(less), ...pivots,
                ...recursiveReverse(greater), ...undefineds];
        }

        Balabalabam.hoara = function quickSort(arr, up) {
            let newArray;
            if (up) {
                newArray = recursive(arr);
            } else {
                newArray = recursiveReverse(arr);
            }
            console.log(`Кількість порівнянь: ${numberOfComparing}\nКількість перестановок: ${numberOfChanging}`);
            console.log(newArray);
            numberOfComparing = 0;
            numberOfChanging = 0;
        }
    window.sort007 = Balabalabam;
})(window)