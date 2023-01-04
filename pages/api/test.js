import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import {google} from 'googleapis';
import {authenticate} from '@google-cloud/local-auth';

export default async function handler(req, res){

const SCOPES = ['https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/spreadsheets.readonly'
];

const TOKEN_PATH = path.join(process.cwd(), '/data/token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), '/data/credentials.json');
console.log("tokenpath",TOKEN_PATH);
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    console.log("ran loadSavedCredentialsIfExist");
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  console.log("ran saveCreds");
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  console.log("ran auth");
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  console.log("ran authenticate");
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function listMajors(auth) {
  console.log("ran majors");
  const sheets = google.sheets({version: 'v4', auth});
  const reso = await sheets.spreadsheets.values.append({
    spreadsheetId: '10WP5SE1VivUlgFMDBhDcPSGXxIEJXafoeJ471AZbWBc',
    range: 'A1',
    includeValuesInResponse: true,
    insertDataOption: "INSERT_ROWS",
    valueInputOption: "RAW",
    resource: {
      values: [
        [
          "helo2",
          "append2"
        ]
      ]
    }
  });
  console.log("res", reso);
}

authorize().then(listMajors).catch(console.error);
res.json({soka: "ha"});
}