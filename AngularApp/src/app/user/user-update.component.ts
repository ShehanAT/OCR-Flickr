export class UserUpdate {
    constructor(
      public id: number,
      public username: string,
      public emailAddress: string,
      public fullName: string,
      public age: number
    ){
  
    }
}