class Sort {
    static mergeSort(arr,field,order){
        let len = arr.length;
        if(len<=1) return arr;
        let mid = Math.floor(len/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid,len);
        if(order==="i"){
          return Sort.mergeIncrease(
              Sort.mergeSort(left,field,"i"),
              Sort.mergeSort(right,field,"i"),field
            );
        }
        else if(order==="d") {
          return Sort.mergeDecrease(
              Sort.mergeSort(left,field,"d"),
              Sort.mergeSort(right,field,"d"),field
            );
        }
        
      }
      static mergeIncrease(leftArr,rightArr,field){
          const lLen = leftArr.length;
          const rLen = rightArr.length;
          let i=0,j=0;
          let merged = [];
          while(i<lLen&&j<rLen){
              
              if(leftArr[i][field]<rightArr[j][field]){
                  merged.push(leftArr[i]);
                  i++;
              }
             else {
                  merged.push(rightArr[j]);
                  j++;
              }
          }
          return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
      }
      static mergeDecrease(leftArr,rightArr,field){
          const lLen = leftArr.length;
          const rLen = rightArr.length;
          let i=0,j=0;
          let merged = [];
          while(i<lLen&&j<rLen){
              if(leftArr[i][field]>rightArr[j][field]){
                  merged.push(leftArr[i]);
                  i++;
              }
             else {
                  merged.push(rightArr[j]);
                  j++;
              }
          }
          return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
      }
}

export default Sort;