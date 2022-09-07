// EX1
// (function IIFE() {
//   function foo(x) {
//     var y = x * 2;
//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         var obj = [];
//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );
//         return obj;
//       }
//     };
//   }
//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);
//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);
//   setTimeout(() =>{
//     console.log(
//       list1[0] ===
//         list2.reduce((s, v) => s+v, 0)
//     );
//   }, 200);
// })();

// EX2
// var x = 2,
//   fns = [];

// (function() {
//   var x = 5;

//   for (let i = 0; i < x; i++) {
//     fns[i] = () => i;
//   }
// })();

// // DO NOT MODIFY BELOW CODE
// console.log(x * 2 === fns[x * 2]());
// // console must show true

//EX3:
function foo() {
    return 
}
function bar() {
var a1 = [2, 4];
var a2 = [6, 8, 10, 12];
return foo();
}
// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
// true

// Ex4
// function ajax(url, cb) {
//     // fake ajax response:
//  cb({
//  foo: 2,
//   baz: [6, 8, 10],
//     bam: {
//      qux: 12
//      }
//      });
//     }
//      function check(data) {
//      console.log(
//      56 ===
//      data.foo +
//     data.bar +
//     data.baz[0] +
//      data.baz[1] +
//     data.baz[2] +
//     data.bam.qux +
//     data.bam.qam
//     );
// }
// var defaults = {
// foo: 0,
// bar: 4,
// bam: {
// qux: 0,
// qam: 14
//  }
// };
// // YOUR CODE HERE
// function response(...) {
// check(...); // true
// }
// // DO NOT MODIFY
// ajax('http://fun.tld', response);

// Ex5
// function upper(strings, ...values) {
//   return strings.toUpperCase();
// }
// var name = "Nguyen Van A",
//   account = "ANV",
//   classname = "Fresher FrontEnd";
// console.log(
//   `Hello ${upper(name)} (@${upper(account)}), welcome to the ${upper(
//     classname
//   )}!!!` === "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
// );

// ES6-02
// EX3:
// arr= [
//   {
//     id: 1,
//     name: "Dung",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Diu",
//     age: 20,
//   },
//   {
//     id: 3,
//     name: "Ky",
//     age: 20,
//   },
//   {
//     id: 1,
//     name: "Hai",
//     age: 22,
//   },
// ];

// const filteredArr = arr.reduce((pre, cur) => {
//     const x = pre.find((item) => item.id === cur.id);
//     if (!x) {
//       return pre.concat([cur]);
//     } else {
//       return pre;
//     }
//   }, []);
//   console.log(filteredArr);
