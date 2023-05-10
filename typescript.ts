let hello = 'Hello World';

console.log(hello);

if (hello === 'Hello World') {
    console.log('true');
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}


type TUser = {
    name:string,
    age:number,
    local:string
}

type TUser2 = {
    name:string,
    age:number,
    local:string,
    gender:string
}


type TUserFull = TUser | TUser2

const user: TUserFull = {
    name: 'John',
    age: 30,
    local: 'New York',
}

const user2: TUserFull = {
    name: 'John',
    local: 'New York',
    age: 30,
    gender: 'male'
}
