import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  // console.log('----------');
  // console.log('child_removed');
  // console.log(snapshot.key, snapshot.val());
  // console.log('----------');
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  // console.log('----------');
  // console.log('child_changed');
  // console.log(snapshot.key, snapshot.val());
  // console.log('----------');
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  // console.log('----------');
  // console.log('child_added');
  // console.log(snapshot.key, snapshot.val());
  // console.log('----------');
});

////////////////////////////////////

// database.ref().set({
//   name: 'Andrii King',
//   age: 30,
//   isSingle: true,
//   stressLevel: 2,
//   job: {
//     title: 'Dvornik',
//     company: 'UkrEnergo'
//   },
//   location: {
//     city: 'Kyiv',
//     country: 'Ukraine'
//   }
// }).then(() => {
//   console.log('1', 'Data is saved');
// }).catch((e) => {
//   console.log('1', 'error', e);
// });
//
// database.ref('age').set(34);
// database.ref('location/city').set('Praha');
// database.ref('attributes').set({
//   height: 194,
//   weight: 105
// }).then(() => {
//   console.log('2', 'Data is saved');
// }).catch((e) => {
//   console.log('2', 'error', e);
// });

// database.ref('age')
//   .remove()
//   .then(() => {
//     console.log('3', 'Data is removed');
//   })
//   .catch((e) => {
//     console.log('3 error', e);
//   });

// .set(null) - тоже самое что remove
// database.ref('isSingle').set(null);

// database.ref().update({
//   name: 'Pidor',
//   location: {
//     city: 'New City' // если так делать, все содержимое объекта location заменится на city: 'New City'
//   }
// });

// database.ref().update({
//   job: 'Logist',
//   'location/city': 'Boston 2' // так заменит ничего не ломая
// });

// database.ref().update({
//   stressLevel: 10,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref() // фечим дату
//   .once('value') // once - один раз
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref()
//   .on('value', (snapshot) => { // on - постоянно обновляем
//     console.log(snapshot.val());
//   });
//
// database.ref('notes').push({ // если делать так, то для каждого раза генерится идентификатор
//   title: '111',
//   body: '222'
// });

// database.ref().remove();

// database.ref('expenses').push({
//   description: 'dsdfsd fsd',
//   note: 'fdg rt',
//   amount: 120,
//   createdAt: 124325345324
// });
//
// database.ref('expenses').push({
//   description: 'ghfhgf fg',
//   note: 'aaaaa rt',
//   amount: 666,
//   createdAt: 12432345324
// });
//
// database.ref('expenses').push({
//   description: 'bbbbbbb',
//   note: 'cccc fdg rt',
//   amount: 300,
//   createdAt: 4325345324
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

database.ref('expenses')
  .on('value', (snapshot) => { // on - постоянно обновляем
    // console.log(snapshot.val());
    // const expenses = [];
    // snapshot.forEach((childSnapshot) => {
    //   expenses.push({
    //     id: childSnapshot.key,
    //     ...childSnapshot.val()
    //   });
    // });
    // console.log(expenses);
  });







// .ref().set() - перезаписывает все
// .ref('age').set(34) - перезапишет значение age
// .ref('location/city').set('Praha') - перезапишет вложенное значение
//  апдейтим
// database.ref().update({
//   stressLevel: 10,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().once() - раз
// database.ref().on() - подписываемся на изменения
// database.ref().off() - отписываемся
// НЕ ПОДДЕРЖИВАЕТ МАССИВЫ



