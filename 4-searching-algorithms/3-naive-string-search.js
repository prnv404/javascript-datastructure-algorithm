/* 
 Here is an example of naive string search 
*/

/**
 * We loop through the longer string, and for each character, we loop through the shorter string. If
 * the characters don't match, we break out of the inner loop. If the characters do match, we continue
 * onto the next characters. If the inner loop completes and we haven't broken out, we know that the
 * shorter string is in the longer string
 * @param longStr - the string we are searching through
 * @param shortStr - "lorie"
 * @returns The number of times the short string appears in the long string.
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

stringSearch('lorie loled','lol') // 1