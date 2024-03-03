// importUsers.js
const fs = require('fs');
const mongoose = require('mongoose');
const User = require('./models/user'); // Ellenőrizd az elérési utat

mongoose.connect('mongodb://localhost/my_database').then(() => {
  console.log('Sikeresen csatlakozva az adatbázishoz');
  importUsersFromJson();
}).catch(err => {
  console.error('Adatbázis csatlakozási hiba:', err);
});


function importUsersFromJson() {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Hiba történt a fájl beolvasása során:', err);
      return;
    }
    const users = JSON.parse(data);
    User.insertMany(users)
        .then(() => console.log('Az összes felhasználó sikeresen hozzáadva.'))
        .catch(err => console.error('Hiba történt a felhasználók hozzáadása során:', err));
  });
}


/*mongoose.connect('mongodb://localhost/my_database')
.then(async() => {
  console.log('Sikeresen csatlakozva az adatbázishoz');
    
  try{
    const users = await User.find({});
    await User.insertMany(users);
    const existingEmail = existingUsers.map(user => user.email);

    const newUsers = usersData.filter(newUser => !existingEmail.includes(newUser.email));


    if (users.length > 0) {
      await User.insertMany(users)
        .then(() => {
          console.log('Új felhasználók sikeresen hozzáadva az adatbázishoz');
        })
      .catch(err => {
        console.error('Hiba történt az új felhasználók hozzáadása közben:', err);
      });
    } else {
      console.log('Nincsenek új felhasználók');
    }
  }
    catch(err){
      console.error('Hiba történt a fájl beolvasása során:', err);
  } finally{
    mongoose.connection.close();
  }
  }catch(err){
    console.error('Hiba történt a fájl beolvasása során:', err);
  } finally{
    mongoose.connection.close();
  }
}).catch(err => {
  console.error('Adatbázis csatlakozási hiba:', err);
});
*/