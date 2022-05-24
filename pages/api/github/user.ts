// https://api.github.com/users/jooyeal/repos
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {}

export default async function asynchandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await axios.get(
      "https://api.github.com/users/jooyeal/repos"
    );
    res.status(200).json({ user: response.data });
  } catch (err) {
    res.status(500).json({ err });
  }
}
