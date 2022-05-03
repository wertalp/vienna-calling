import IClient from "../models/IClient";


   export const getAllClients = async () : Promise<IClient[]> => {
        const response = await fetch('/clients');
        return await response.json();
    }

  export const addClient = async (client: IClient) => {
        const response = await fetch(`/clients`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({client})
        })
        return await response.json();
    }

