export class User{
    id:number;
    name:string;
    username:string;    
    email:string;
    password:string;
    role:number|string;
    sex:number;
    city:string;
    country:string;
    age:number;
}

export class Place{
    id:number;
    category:string;
    city:string;
    country:string;
    description:string;
    name:string;
    number:number;
    phoneNumber:string;
    region:string;
    status:string;
    street:string;
    website:string;
    user:User;
}