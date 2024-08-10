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
     
            console.log(modHashCode)
            return modHashCode;
        } 

        
        function set(key, value){
            let index = hash(key)
            if (buckets[index] === null) {
                buckets[index] = []
                let keyValuePair = {key: key, value: value}
                buckets[index].push(keyValuePair)
                console.log(buckets)
            } else {
                let keyValuePair = {key: key, value: value}
                for (let i = 0; i < buckets[index].length; i++) {
                    if (buckets[index][i].key === keyValuePair.key){
                        buckets[index][i].value = keyValuePair
                        console.log(buckets)
                    } else {
                        buckets[index][i].push(keyValuePair)
                        console.log(buckets)
                    }
                }
            }

        }

        return {
            hash,
            set,
        }

    }















































})