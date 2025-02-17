const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    console.log('Connected to MongoDB');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);

User.insertMany([
    { name: 'Chay', age: 45, email: 'chai@g.com' },
    { name: 'Sam', age: 12, email: 'sam@g.com' },
    { name: 'amelia', age: 75, email: 'amelia@g.com' }
]).then((res) => console.log(res)).catch(err => console.log(err));

// const user1 = new User({
//     name: 'Rishi Guptha',
//     age: 30,
//     email: 'james@g.com'
// });

// user1.save().then(() => console.log('User saved successfully')).catch(err => console.log(err));
