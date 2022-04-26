### 快速排序
快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

#### 算法步骤
- 从序列中跳出一个元素，作为基准（pivot）
- 重新排序序列，所有比基准值小的放在基准的左边，比基准值大的放在基准的右边（相同的数可以到任一边）。循环结束后，基准就处于序列的中间，这个称为分区（partition）操作。
- 递归地（recursive）把小于基准元素的子序列和大于基准元素的子序列排序


```js
const quickSort = (array, left, right) => {
  const len = array.length;
  var partitionIndex,
      left = typeof left != 'number' ? 0 : left,   // 有传入left值，且有效则取left值，否则left设置为0，序列最左边
      right = typeof right != 'number' ? len - 1 : right; // 有传入right值，且有效则取right值，否则left设置为0，序列最左边

  if (left < right) {
    partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
}

const swap = (array, i, j) => {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

const partition = (array, left, right) => {
  let tmp , pivot;
  let i = left, j;
  pivot = array[Math.floor(Math.randon() * right)];


  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;                 // 理解为计数器，计算比基准值小（大）的数量，相当于指向排序好的子序的下一个值
  
  for(let i = index; i<= right; i++) {
    if(array[i] > array[pivot]) {
      swap(array, i, index);     // 将小于（大于）基准值的放到一起
      index++                    // index指向上一步排序好的子序的后一个值，用于后续将基准归位时使用
    }
  }

  swap(array, pivot, index - 1)   // 将基准值放置在所有小于（大于）基准的子序列的最后（最前）

  return index -1;      //返回当前基准所在的位置
}

// 该分段方式配合下方公众号讲解能更高效理解
const partition1 = (array, left, right) => {
  let tmp , pivot;
  let i = left, j;
  pivot = array[right];   // 选一个基准值

  for(j = left; j < right; j++) {
    if(array[j] < pivot) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right)   

  return i;
}

// 双向扫描
const partition1 = (array, left, right) => {
  let pivot = array[left],
      i = left+1, j = right;

  while(true) {
    while(i <=j && array[i] <= pivot) i++;
    while(i <=j && array[j] >= pivot) j--;
    if(i >=j) break;

    swap(array, i, j);
  }

  swap(array, left, j);

  return j;
}

const result = quickSort([1, 10, 6, 7, 8, 9, 0]); 
```

帮助有效理解算法：[【漫画】不要再问我快速排序了](https://mp.weixin.qq.com/s?__biz=Mzg2NzA4MTkxNQ==&mid=2247485191&idx=1&sn=45a43bd77495566db53b419ae82136f5&source=41#wechat_redirect)