const current_users = ['admin', 'Majid', 'sajid', 'wajid', 'Momin'];
const new_users = ['momin', 'faizan', 'fajar', 'tehzeeb', 'majid'];

const lowercased = current_users.map(name => name.toLowerCase());

console.log(lowercased);

new_users.forEach((user) => {
    if(lowercased.includes(user.toLowerCase())){
        console.log(`The username (${user}) is already been taken `);
    } else{
        console.log('username is available...');
    }
})