function maxMin (arr) {
    let sum = 0;
    for(i = 0; i < arr.lenght; i++) {
        sum += arr[i];
    }
    let min = math.Min(...arr);
    let max = math.Min(...arr);
    console.log(`Max=${max} , Min=${min} , Sum=${sum}`);
}
let array
 = [5,10,15,20,25];
 maxMin(array);