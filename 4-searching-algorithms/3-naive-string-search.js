/* 
 Here is an example of naive string search 
*/

/*
 create a function which accepts two string and check if the short string exist in longer 
 string
*/


function stringSearch(longStr, shortStr) {
    let count = 0
    for (let i = 0; i < longStr.length; i++){
        for (let j = 0; j < shortStr.length; j++){
            if (shortStr[j] !== longStr[i + j]) {
                break
            }
            if (j === shortStr.length - 1) count++
        }
    }
    return count
}
/**
 * We loop through the longer string, and for each character, we loop through the shorter string. If
 * the characters don't match, we break out of the inner loop. If the characters do match, we continue
 * onto the next characters. If the inner loop completes and we haven't broken out, we know that the
 * shorter string is in the longer string
 */

stringSearch('lorie loled','lol') // 1