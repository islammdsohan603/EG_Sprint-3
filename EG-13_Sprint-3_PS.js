// top k Frequent Elements

var topKFrequent=function(nums,k){

  const frequency=new Map();

  for(let num of nums){
    frequency.set(num,(frequency.get(num)||0));
  }

  const sorted=[...frequency.entries()].sort((a,b)=>b[1]-a[1]);

  return sorted.slice(0,k).map(item=>item[0])

}

console.log(topKFrequent([1,1,1,2,2,3],2))