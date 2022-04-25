### 冒泡排序

#### 算法步骤
1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

> 两层for循环，外层变量+1，内层for循环跑完一遍，找到为排序元素中最大（小）元素，放置在序列末尾（起始）位置，继续处理未排序的序列元素，直到所有元素处理完毕

演示：
![image](../assets/images/bubbleSort.gif)

```js
const bubbleSort = (array) => {
  let len = array.length;
  for(let i = 0; i < len -1 ; i ++) {
    for(let j =1; j < len -1; j++) {
      if (array[j] > array[j + 1]) {
          let tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;
      }
  }
 }

 return array;
}

const result = bubbleSort([1, 10, 6, 7, 8, 9, 0]);    //  [1,0,6,7,8,9,10]
```