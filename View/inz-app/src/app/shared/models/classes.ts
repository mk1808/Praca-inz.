export class User{
    id:number;
    name:string;
    username:string; 
    login:string;   
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
    hours:OpeningHours;
    image:Image[];
    latitude;
    longitude;
}

export class Trip{
    id:number;
    city:string;
    country:string;
    description:string;
    name:string;
    region:string;
    status:string;
    street:string;
    user:User;
    duration:number;
    schedule:Schedule;
    positionsInTrip:PositionInTrip[];
}

export class Schedule{
    id:number;
    start:Date;
    end:Date;
    positionsInSchedule:PositionInSchedule[];
}

export class PositionInTrip{
    id:number;
    trip:Trip;
    place:Place;
}

export class PositionInSchedule{
    id:number;
    startDay;
    endDay;
    startTime;
    endTime;
    positionInTrip:PositionInTrip;
}

export class OpeningHours{
    mon:boolean;
    tue:boolean;
	wed:boolean;
	thu:boolean;
	fri:boolean;
	sat:boolean;
	sun:boolean;
	monOpen:string;
	monClose:string;
	tueOpen:string;
	tueClose:string;
	wedOpen:string;
	wedClose:string;
	thuOpen:string;
	thuClose:string;
	friOpen:string;
	friClose:string;
	satOpen:string;
	satClose:string;
	sunOpen:string;
	sunClose:string;
}

export class Image{
   id;
    image:string;
}