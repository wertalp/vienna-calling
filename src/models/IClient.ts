import IEvent from "./IEvent";

export default interface IClient {
    id? : any | null,
    name  : string,
    firstName : string,
    lastName  : string,
    email     : string ,
    password  : string ,
    events ?  : IEvent[] | null

}