import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

import { createServer } from "https";
import { readFileSync } from "fs";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

const httpsOptions = {
  key: readFileSync('./tools/keytmp.pem'),
  cert: readFileSync('./tools/cert.pem'),
  passphrase: 'ArApp101'
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

const server = createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port);
  open(`https://localhost:${port}`);
});
