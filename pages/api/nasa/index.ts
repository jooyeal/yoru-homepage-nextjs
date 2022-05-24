import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {}

const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=";
export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await axios.get(
      `${BASE_URL}${process.env.NASA_API_KEY}&count=10`
    );
    const datas = response.data;
    const info = datas.filter((data: any) => data.url.includes("apod"));
    res.status(200).json({ info });
  } catch (err) {
    res.status(500).json({ err });
  }
}
