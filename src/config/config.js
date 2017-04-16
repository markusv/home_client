export default {
  serverUrl: 'http://127.0.0.1:9333',
  wsServerUrl: 'http://127.0.0.1:8080',
  clientWsUrl: process.env.NODE_ENV === 'production' ? 'ws://192.168.10.164:3000/': 'ws://localhost:3000/ws' //eslint-disable-line no-process-env
};
