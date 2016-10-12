'use strict'

let models = require('./models');
let Student = models.Student;

Student.create({
  name: "juang wiantoro",
  age: 7,
  email: "juangwiantoro@gmail.com",
  phonenumber: 12345677890
}).catch((err) => {
  console.log("Please Check Your Data");
})
