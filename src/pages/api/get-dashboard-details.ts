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
  res.status(200).json(getSlotDetails() as any);
}
