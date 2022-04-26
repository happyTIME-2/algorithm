### 选择排序

#### 算法步骤
1. 在未排序序列中找到最小（大）元素，排放到排序序列起始位置
2. 再从未排序的元素中查找最小（大）元素，排放到已排序序列的末尾
3. 重复2步骤，直到所有元素排序完毕。
 
> 关键是找到为排序元素中的最小元素，并排在已排好序列的末尾，`minIndex`用于记录为排序元素中最小元素的索引，并将该最小元素跟未排序元素的第一个元素（`i`对应的值，也就是已排序序列的最后一个值的索引）交换即可

演示：
![image](../assets/images/selectionSort.gif)

```js
const selectSort =( array) => {
   const len= array.length;
   let minIndex = 0, tmp;
   
   for(let i =0; i< len -1 ; i ++) {
      minIndex = i;
      for(let j = i + 1; j < len ; j ++) {
           if (array[j] < array[minIndex ]) {
                   minIndex  = j;
            }
      }

      tmp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = tmp;
   }
  return array;
}

const result = selectSort([3, 5, 2, 1, 9, 6, 2, 10]);    // [1,2,2,3,5,6,9,10]
```