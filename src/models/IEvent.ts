import ICompany from './ICompany' ;
import IClient from './IClient' ;
export default interface IEvent {
    id?    : any | null,
    title  : string,
    description  : string,
    contactName  : string,
    booking_date  : string ,
    action_time  : string ,
    action_date  : string ,
    client   : IClient  ,
    company  : ICompany ,
    plz     : string ,
    street  : string ,
    city    : string ,
    branche : string,
    status : string
}