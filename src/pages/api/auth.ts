import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "WWW-authenticate",
    'Basic realm="Access to the site", charset="UTF-8"'
  );
  res.statusCode = 401;
  res.end(`Auth Required.`);
}
