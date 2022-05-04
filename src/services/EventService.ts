import IEvent from "../models/IEvent";


export const getAllEvents = async () : Promise<IEvent[]> => {
    const response = await fetch('/events');
    return await response.json();
}

export const addEvent = async (event: IEvent) => {
    const response = await fetch(`/clients`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({event})
    })
    return await response.json();
}
