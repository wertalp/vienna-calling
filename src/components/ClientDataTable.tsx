import IClient from "../models/IClient";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";

type AppProps = {
    clients: Array<IClient>
};

export const ClientDataTable = ( {clients}: any): JSX.Element => {

    const columns1 = [
        {
            dataField: "id",
            text: "Client ID",
            sort: true
        },
        {
            dataField: "name",
            text: "Product Name",
            sort: true
        },
        {
            dataField: "firstName",
            text: "Product Price in $"
        },
        {
            dataField: "lastName",
            text: "Product Price in $"
        },

        {
            dataField: "email",
            text: "Product Price in $"
        },
        {
            dataField: "password",
            text: "Product Price in $"
        }
    ];

    const columns = [
        { key: "id", name: "ID" },
        { key: "name", name: "KUNDE" },
        { key: "firstName", name: "VORNAME" },
        { key: "lastName", name: "NACHNAME" },
        { key: "email", name: "EMAIL-Kunde" },
        { key: "password", name: "PASSWORD" }
    ];


    const rows = clients ;


    return (
        <div>
            <ReactDataGrid
                columns={columns}
                rows={rows}
            />
        </div>
    );
}