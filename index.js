document.addEventListener('DOMContentLoaded', function(){

    
    function hashMap(){
        let size = 16
        let buckets = new Array(size).fill(null)
        let numElements = 0
        
        function hash(key) {
            let hashCode = 0
            let modHashCode = 0
           
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = primeNumber * hashCode + key.charCodeAt(i);
                modHashCode = hashCode % size
            }
            console.log({size})
            return modHashCode;
        } 
        
        function set(key, value){
            if (numElements / size > 0.75) {
                let newSize = size * 2
                let newBuckets = Array(newSize).fill(null)
                size = newSize

                for (let i = 0; i < buckets.length; i++) {
                    if (buckets[i] !== null) {
                        for (let k = 0; k < buckets[i].length; k++) {
                                let oldKey = buckets[i][k].key
                                let oldValue = buckets[i][k].value
                                let newIndex = hash(oldKey)
                                let newKeyValuePair = {key: oldKey, value: oldValue}

                                if (newBuckets[newIndex] === null) {
                                    newBuckets[newIndex] = []
                                }
                                newBuckets[newIndex].push(newKeyValuePair)
                            
                        }
                    }
                }
                buckets = newBuckets
            }
            let index = hash(key)
            if (buckets[index] === null) {
                buckets[index] = []
                let keyValuePair = {key: key, value: value}
                buckets[index].push(keyValuePair)
                numElements = numElements + 1
            } else {
                let keyValuePair = {key: key, value: value}
                for (let i = 0; i < buckets[index].length; i++) {
                    if (buckets[index][i].key === keyValuePair.key){
                        buckets[index][i].value = keyValuePair.value
                        return
                    }
                }
                buckets[index].push(keyValuePair)
            }
            console.log({buckets})

        }

        function get(key){
            let index = hash(key)
            if (buckets[index] !== null) {
                for (let i = 0; i < buckets[index].length; i++) {
                    if (key === buckets[index][i].key) {
                        console.log('True ' + buckets[index][i].value)
                        return
                    }
                }
            } else {
                console.log('False')
                return false
            }
        }

        function has(key){
            let index = hash(key)
            if (buckets[index] !== null) {
                for (let i = 0; i < buckets[index].length; i++) {
                    if (key === buckets[index][i].key) {
                        console.log('True ')
                        return
                    }
                }
            } else {
                console.log('False')
                return false
            }
        }

        function remove(key) {
            let index = hash(key)
            if (buckets[index] !== null) {
                for (let i = 0; i < buckets[index].length; i++) {
                    if (key === buckets[index][i].key) {
                        buckets[index].splice(i, 1)
                        numElements = numElements - 1
                        return      
                    }
                }
            } else {
                console.log('False')
            }
        }

        function length(){
            let count = 0
                for (let i = 0; i < buckets.length; i++) {
                    if (buckets[i] !== null) {
                        count += buckets[i].length
                    } 
                    
                }
            console.log(count)
            return count
        }

        function clear(){
            let index = 0
                for (let i = 0; i < buckets.length; i++) {
                    buckets[index] = null
                    index += 1
                    numElements = 0
                }
            return 
        }

        function keys(){
            let keysArray = []
            for (let i = 0; i < buckets.length; i++) {
                if (buckets[i] !== null){
                    for (let k = 0; k < buckets[i].length; k++) {
                        if (buckets[i][k] !== null) {
                            keysArray.push(buckets[i][k].key)
                        }
                    }
                } 
            }
            console.log(keysArray)
            return
        }

        function values(){
            let valuesArray = []
            for (let i = 0; i < buckets.length; i++) {
                if (buckets[i] !== null){
                    for (let k = 0; k < buckets[i].length; k++) {
                        if (buckets[i][k] !== null) {
                            valuesArray.push(buckets[i][k].value)
                        }
                    }
                } 
            }
            console.log(valuesArray)
            return
        }

        function entries(){
            let keyValueArray = []
            let tempArray = []
            for (let i = 0; i < buckets.length; i++) {
                if (buckets[i] !== null){
                    for (let k = 0; k < buckets[i].length; k++) {
                        if (buckets[i][k] !== null) {
                            tempArray.push(buckets[i][k].key)
                            tempArray.push(buckets[i][k].value)
                            keyValueArray.push(tempArray)
                            tempArray = []
                        }
                    }
                } 
            }
            console.log(keyValueArray)
            return
        }


        return {
            hash,
            set,
            get,
            has,
            remove,
            length,
            clear,
            keys,
            values,
            entries,
        }

    }
    

    let test = new hashMap()
    
    
    test.set('apple', 'red')
    test.set('banana', 'yellow')
    test.set('carrot', 'orange')
    test.set('dog', 'brown')
    test.set('elephant', 'gray')
    test.set('frog', 'green')
    test.set('grape', 'purple')
    test.set('hat', 'black')
    test.set('ice cream', 'white')
    test.set('jacket', 'blue')
    test.set('kite', 'pink')
    test.set('lion', 'golden')
    test.set('moon', 'silver')
    test.set('sun', 'gold')

    test.length()

    // test.clear()
    
    // test.keys()

    // test.values()

    // test.entries()

    // test.remove('elephant')

    // test.entries()
















































})