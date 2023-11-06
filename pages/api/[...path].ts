// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

type Data = {
  name: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  return new Promise((resolve, reject) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    if (cookies.get('access_token')) {
      req.headers.authorization = `Bearer ${cookies.get(
        'access_token',
      )}`;
    }
    // don't send cookies to API server
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false, // trả kết quả về cho client luôn
    });

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
  //   res.status(200).json({ name: 'PATH - Match all here' });
}
