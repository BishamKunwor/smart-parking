// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { bookSlot, getSlotDetails } from "@/backendFunctions/database";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.body) {
    const reqBody = JSON.parse(req.body);
    if (reqBody.name || reqBody.phone) {
      res.status(200).json(bookSlot("Bisham", "9817843217") as any);
      return;
    }
  }
  res.status(200).json({
    error: true,
    message: "Cannot find user Information.",
  } as any);
}
