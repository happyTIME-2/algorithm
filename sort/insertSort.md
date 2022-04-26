### 插入排序

#### 算法步骤：
1.将第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是无序序列。
2.从头到尾依次扫描无序序列，将扫描到的每个元素插入有序序列的适当位置。

> 插入排序的基本思想是：每次从无序序列中取出一个元素，在有序序列中从后向前扫描，找到相应位置并插入。这里跟选择排序的不同在于，选择排序是每次都选择最小的元素，而插入排序是每次都插入到有序序列中的适当位置。


#### 演示：
![image](../assets/images/insertionSort.gif)

```js
const insertionSort = (array) => {
  const len = array.length;
  let preIndex, current;

  for(let i = 0; i< len; i++>) {
    current = array[i];
    preIndex = i - 1;

    while(preIndex >=0 && array[preIndex] > current) {
      array[preIndex + 1 ] = array[preIndex];   // 将比当前元素大的元素后移一位
      preIndex--;
    }

    array[preIndex + 1]= current;    // 因为在while循环中最后一步执行了-1操作，所以筛选好的待插入元素放在preIndex+1位置
  }

  return array;
}

const result = insertionSort([1, 10, 6, 7, 8, 9, 0]);    //  [1,0,6,7,8,9,10]
