document.addEventListener('DOMContentLoaded', function(){

    
    function hashMap(){
        let size = 16
        let buckets = new Array(size).fill(null)
        
        function hash(key) {
            let hashCode = 0;
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
            let result = hash(key)

        }

    }
















































})