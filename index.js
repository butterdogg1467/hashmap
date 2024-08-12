document.addEventListener('DOMContentLoaded', function(){

    
    function hashMap(){
        let size = 16
        let buckets = new Array(size).fill(null)
        
        function hash(key) {
            let hashCode = 0
            let modHashCode = 0
           
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = primeNumber * hashCode + key.charCodeAt(i);
                modHashCode = hashCode % size
            }
     
            return modHashCode;
        } 

        
        function set(key, value){
            let index = hash(key)
            if (buckets[index] === null) {
                buckets[index] = []
                let keyValuePair = {key: key, value: value}
                buckets[index].push(keyValuePair)
                console.log({buckets})
            } else {
                let keyValuePair = {key: key, value: value}
                for (let i = 0; i < buckets[index].length; i++) {
                    if (buckets[index][i].key === keyValuePair.key){
                        buckets[index][i].value = keyValuePair.value
                        console.log({buckets})
                        return
                    }
                }
                buckets[index].push(keyValuePair)
                console.log({buckets})
            }

        }

        function get(key){
            let index = hash(key)
            if (buckets[index] !== null) {
                for (let i = 0; i < buckets.length; i++) {
                    if (key === buckets[index][i].key) {
                        console.log('True ' + buckets[index][i].value)
                        return
                    }
                }
            } else {
                console.log('False')
            }
        }

        function has(key){
            let index = hash(key)
            if (buckets[index] !== null) {
                for (let i = 0; i < buckets.length; i++) {
                    if (key === buckets[index][i].key) {
                        console.log('True ')
                        return
                    }
                }
            } else {
                console.log('False')
            }
        }

        

        return {
            hash,
            set,
            get,
            has,
        }

    }

    let test = new hashMap()

    test.set('test', 2)
    test.set('test2', 3)

    test.get('test')
    test.get('test1')

    test.has('test')
    test.has('test1')
















































})