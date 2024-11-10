"use server"

import axios from "axios";
import { Result } from "./page";

export async function getResult(){
    const request = await axios({
        method: "GET",
        url: "/data/results.json"
    })
    const response = request.data.election as Result;
    return response;
}