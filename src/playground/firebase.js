// firebase.initializeApp(config);

// const database = firebase.database();

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//   });

//   console.log(expenses);
// });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Coffee",
//   amount: 100,
//   note: "",
//   createdAt: 100000293
// });

// database.ref("notes/-L9cIc_NL3TNwasbbIIw").update({
//   body: "buy food"
// });

// database.ref("notes").push({
//   title: "Couse Topics",
//   body: "React native"
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   e => {
//     console.log("An error occured", e);
//   }
// );

// setTimeout(() => {
//   database.ref("job/title").set("Sr Software Engineer");
// }, 5000);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database
//   .ref()
//   .set({
//     name: "Andy Su",
//     age: 21,
//     stressLevel: 6,
//     job: {
//       title: "Software Engineer",
//       company: "Flipp"
//     },
//     location: {
//       city: "New York",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Removed isSingle.");
//   })
//   .catch(e => {
//     console.log("Removal failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });
