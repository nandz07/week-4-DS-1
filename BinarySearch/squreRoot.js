function squreRoot(n){
    if(n==0 || n==1){
        return n
    }
    let start=1
    let end=n

    while(start<=end){
        mid=Math.floor((start+end)/2)

        if(mid*mid==n){
            return mid
        }
        
        else if(mid*mid<n){
            start=mid+1
            ans=mid
        }
        else{
            end=mid-1
        }
    }
    return ans
}

let res=squreRoot(25)
console.log(res);