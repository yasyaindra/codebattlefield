let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// function createPhoneNumber(numbers){
//     let dalamKurung = numbers.slice(0,3).join('').toString()
//     let beforeDash = numbers.slice(3,6).join('').toString()
//     let afterDash = numbers.slice(6,11).join('').toString()

//     return `(${dalamKurung}) ${beforeDash}-${afterDash}`
// }


// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx"
//     for(let i = 0; i<numbers.length;i++){
//         format = format.replace('x',numbers[i])
//     }
//     return format
// }

console.log(createPhoneNumber(numbers))