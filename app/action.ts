"use server"

import axios from "axios";
import { Result } from "./page";

export async function getResult(){
    const root = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
    const request = await axios({
        method: "GET",
        url: `${root}/data/results.json`
    })
    const response = request.data.election as Result;
    return response;
}