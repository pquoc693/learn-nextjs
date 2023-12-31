// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
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
  if (req.method !== 'POST') {
    return res.status(404).json({ name: 'method not supported' });
  }
  return new Promise((resolve, reject) => {
    // don't send cookies to API server
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (
      proxyRes,
      req,
      res,
    ) => {
      let body = '';
      proxyRes.on('data', function (chunk) {
        body += chunk;
      });
      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);
          //   console.log(
          //     'res from proxied server:',
          //     accessToken,
          //     expiredAt,
          //   );
          //Convert token to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development',
          });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse)
            .status(200)
            .json({ message: 'login successfully' });
          // res.end('success');

          resolve(true);
        } catch (err) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: 'something went wrong' });
        }
      });
    };

    proxy.once('proxyRes', handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
  //   res.status(200).json({ name: 'PATH - Match all here' });
}
