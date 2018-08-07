// function solution(line) {
//   // 在此处理单行数据
//   let arr = line.split(' ')
//   let res = parseInt(arr[0],arr[1]).toString(arr[2])
//   // 返回处理后的结果
//   return res
// }
//
// let a = solution("31 10 16")
// console.log(a)



function sol(line) {
  let a = line.split(',')
  let str1 = a[0]
  let str2 = a[1]

  let arr =[2, 1, 5, 4, 3, 7, 6, 10, 9, 8]

  let r1 = []
  for(var i=str1.length-1;i>=0;i--){
    r1.push(str1[i])
  }


  let r2 = []
  for (var i=0;i<arr.length;i++){
    r2.push(r1[ arr[i]-1])
  }
  for(var j=i;j<str1.length;j++){
    r2.push(str1[j])
  }
  console.log(r2.join(''))
  console.log(str2)
  return r2.join('') === str2 ? "YES" : "NO"
}
var a = sol('GUJYETEEQHGOTCZSSCFIBQYVRWQQJCVPTRBEAKKUIYXMPNRIZJBJKQXDDWWZGVRWLABIUINAUOGTUMRF,GTGRVGAANILHIJCMFNUHIASQUVKTTZOQJMMTPFYXEQCHIWLVPAPRRPHVLZXKRZOGDDNIVYFRXBOEAWNM')
console.log(a)