const reviwToDetailUser = (array) => {
  const arr = [];
  let arr2 = [];
  for (let i = 1; i <= 5; i++) arr.push(array?.filter((x) => x === i).length);
  arr2 = arr?.map((num) =>
    ((num * 100) / arr?.reduce((a, b) => a + b, 0)).toFixed(0)
  );
  const avg = array?.reduce((a, b) => a + b, 0) / array?.length || 0;
  arr2.push(avg.toFixed(0));
  return [arr, arr2];
};

export default reviwToDetailUser;

// inputDatabase:
//   [{ userId:1, rating: 1},
//    { userId:4, rating: 3 },
//    { userId:8, rating: 5 }]

// array = [5, 5, 2, 3, 1, 4, 4, 4]
// *array of ratings -> out: arr[0]=1's, arr[1]=2's, ..., arr[5]=average*/

// out: [2, 2, 1, 3, 2, avg ]
