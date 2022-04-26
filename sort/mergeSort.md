### 归并排序

归并排序是建立再归并操作上的一种有效的排序算法。该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完整的有序序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并到一个有序表，称为2-路归并。

#### 算法步骤
- 把长度为n的序列分成两个长度为n/2的子序列
- 对这两个子序列分别采用归并排序
- 将两个排序好的子序列合并成一个最终的排序序列

> 使用到递归,合并两个子序列的时候，使用一个中转空间来合并排序，通过比较子序列中第一个元素大小，将子序中通过shift()弹出第一个元素，放进中转序列，最终返回排序后的有序序列，最终将两个分割后排好序的子序列合并。

演示：
![images](../assets/images/mergeSort.gif)

```js
const merge = (left, right) => {
  let result = [];

  while(left.length > 0 && right.length > 0) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());

  return result;
}

const mergeSort = (arr) => {
  let len = arr.length;
  if(len < 2) return arr;

  const middle = Math.floor(len / 2);
  let left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const result = mergeSort([3, 5, 2, 1, 9, 6, 2, 10]); 
```