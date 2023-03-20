import axios from "axios";

export default async function FetchAPI(num) {
    const rawData = await axios.get(`https://give-me-users-forever.vercel.app/api/users/${num}/next`);
    return rawData;
}