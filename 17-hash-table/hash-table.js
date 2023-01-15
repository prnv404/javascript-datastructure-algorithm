/* A hash table is a data structure that is used to implement an associative array,
 a structure that can map keys to values. A hash table uses a hash function to compute
  an index into an array of buckets or slots, from which the desired value can be found.
   The basic idea is to use the keys themselves as the indices of an array, and store the 
   values in the corresponding locations. This allows for efficient insertion, deletion,
    and retrieval operations, with an average time complexity of O(1) for each of these
     operations.

Hash tables are widely used in many different types of software, including databases, 
caching systems, and programming language implementations. They are particularly useful
 for tasks such as maintaining a dictionary of key-value pairs, or for implementing efficient 
 algorithms for grouping or searching large sets of data. */


class HashTable{
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
   /**
    * We loop through each character in the key, convert it to a number based on its position in the
    * alphabet, then add these values together
    * @param key - the key of the key-value pair you want to add
    * @returns The index of the key in the keyMap array.
    */
    _hash(key) {
        let total = 0 
        let WERIED_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[0]
            let value = char.charCodeAt(0) - 96
            total = (total * WERIED_PRIME+value) % this.keyMap.length
        }
        return total
    }

    /**
     * If the key doesn't exist in the keyMap, create a new array at that index and push the key and
     * value into it
     * @param key - the key of the key-value pair
     * @param value - the value we want to hash
     */
    set(key,value) {
        const hashIdx = this._hash(value)
        if (!this.keyMap[hashIdx]) {
            this.keyMap[hashIdx] = []
        }
        this.keyMap[hashIdx].push([key,value])
    }
/**
 * We use the hash function to find the index of the key, then we loop through the array at that index
 * to find the key/value pair
 * @param key - the key we want to get the value of
 * @returns The value of the key
 */

    get(key) {
        const hashIdx = this._hash(value)
        if (this.keyMap[hashIdx]) {
            for (let i = 0; i < this.keyMap[hashIdx].length; i++){
                if (this.keyMap[hashIdx][i][0] === key) {
                    return this.keyMap[hashIdx][i][1]
                }
            }
        }
        return undefined
    }

    /**
     * We loop through the keyMap array and check if the current index is not empty. If it's not empty,
     * we loop through the sub-array at the current index and check if the value at the current index
     * is not already in the valueArr array. If it's not, we push it into the valueArr array
     * @returns An array of all the values in the hash table.
     */
    values() {
        let valueArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if (!valueArr.includes(this.keyMap[i][j][1])) {
                        this.valueArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valueArr
    }

   /**
    * We loop through the keyMap array and push the first element of each sub-array into the keyArr
    * array
    * @returns An array of all the keys in the hash table.
    */
    keys() {
        let keyArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if (!keyArr.includes(this.keyMap[i][j][0])) {
                        this.keyArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keyArr 
    }
}

const ht = new HashTable()

ht.set('hellow','world')

console.log(ht)