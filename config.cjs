// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUcwZVBrYXhwTWcwM3Btd0UzTGVOQk1tY0VKaEhpLzVvR09SbFdOMWMxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakg2R0xlTDRzcDVkSXRaQzBObkJxSlhCNm9IR1QrOEVxekYvZmIvSWN6bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UG0yTWhtNGFHcFMxUk00K3BzNk5zVmNSaU41cEJZcFlZTGg3d2VZRWtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3aUVQZHhoVGFLTXM0d1R2NWFhMGhJZ1Ixa3lXYUtHbkpvOFVTUTRWMmo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMcjRoTU9KUTU2T25vUFB6YnRCcGtUaUllTXJkbExITW91RjljbW81bFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpiZlpKNWpnSTJUcGthTThkNmJNdTNBSTc2R0w1dXJ6bnNrOVV1dE81elU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElKY0VGZDc5MTd0QjdEMFpWb2xORmZxQ0MwRmEzdms4bEZ4N2RNVkwzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDhKemVVS1pUY1VUUXQwdEgvZ09ueVgvVWVwWHBzbitOdGxXZEpyWVV5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZhMUNLemZkYmRZQTdJY3lxT2F3bCtFazY3OVhHMGJpR3IyRjAxaFNvMm1tYUxhYUJxeFBHY25pMnkxbllPTEFuR1ZMaVlONnRJeXBrSVVncWVaSERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJ6MzFNSFBnbFg0YVl5Rmx4RU5LVlhQdDVvMy9NeEhOTGhmSDl1blpxMGRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRSGxZZnowYlMwcVN1WGhGdmRhWTlBIiwicGhvbmVJZCI6IjIyNDQ3MDAwLTc4OTItNDU3Yi04MWZkLWIxZTc4YmFjMzZjNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuRklhQ2Uwem1UZk1xL1VLeTh1SWFvTjFaM0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTndGSjZHS1NRMW56bG8weGF2N1pPMk1BdndBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1ZWlk0QUZWIiwibWUiOnsiaWQiOiI5MTgyMDcwNzUzMjM6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi77yo77yl77yy77yv77yi77yp77yu77ylIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV2c2MWNRaXZpQ3VBWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQZkgvcEZxS1VNWXdpYVMraVkva3dxY0xkOWs0ODFPcDNyalZKMmtUSWgwPSIsImFjY291bnRTaWduYXR1cmUiOiJGWFlSZjdKSUREMDBlazJuV3ZsMW1qQ2MydTNrVG5paWhqZDVJdjgwOHMwUWFkMy90QUQ2dHN2NDR3Z0IrV3VueTFjczk0bW1WOThlKzFlUzNXRUNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNFB6U3NKMWRjWlR6K05yRmVPQVlXSllXKytYcjJlOFY0eXRZM1IwbEVFSndQMG5QMmhQY2tvZysrbVNYYURiM1d5c3lkS0FqK0gwU1NGMTJEREpDQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTgyMDcwNzUzMjM6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDN4LzZSYWlsREdNSW1rdm9tUDVNS25DM2ZaT1BOVHFkNjQxU2RwRXlJZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODEwMTM5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJUG0ifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©ＳＵＢＡＲＵ",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "919614477116",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
