### 希尔排序

希尔排序其实是一种插入排序的改进版本，它的基本思想是：
1. 将无序序列按照一定增量分成若干个子序列，每个子序列中的元素都按其关键字的大小排序，然后再把有序子序列中的元素按其关键字的大小排序，这样一趟下来，整个无序序列就变成一个有序序列。
2. 对每个子序列，采用相同的增量进行排序，直到增量减到1，即每个子序列只包含一个元素。
3. 对所有的子序列进行排序，这样整个序列就变成一个有序序列。

> 对比插入排序，其实就是先降原始无序序列按照增量（gap = Math.floor(len / 2)）分成若干个子序列，然后对每个子序列进行插入排序，最后再对每个子序列进行插入排序，这样一趟下来，整个无序序列就变成一个有序序列。
各个子序单独进行插入排序，是为了让插入排序的时间复杂度为O(n)，而希尔排序的时间复杂度为O(n^1.3)。


```js
const shellSort = (array) => {
  const len = array.length;

  for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for(let i = gap; i < len; i++) {
      let current = array[i];
      let preIndex = i - gap;

      while(gap >=0 && array[preIndex] > current) {
        array[preIndex + gap] = array[preIndex];   // 将子序中已排好序的元素中大于当前元素（子序列中未排序， i当前指向的元素）的元素往后挪，空出当前元素插入的位置
        preIndex = preIndex - gap;
      }

      array[preIndex + gap] = current;   // 将当前元素（子序列中未排序， i当前指向的元素）插入到已排好序后，筛选处理的索引位置
    }
  }

  return array;
}

const result = shellSort([1, 10, 6, 7, 8, 9, 0]);    //  [1,0,6,7,8,9,10]
```