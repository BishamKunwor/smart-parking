// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  changeSlotStatusFromEmpty,
} from "@/backendFunctions/database";
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
    if (reqBody.id !== undefined || reqBody.id !== null) {
      res.status(200).json(changeSlotStatusFromEmpty(reqBody.id) as any);
      return;
    }
  }
  res.status(200).json({
    error: true,
    message: "Failed to update Slot Info.",
  } as any);
}
