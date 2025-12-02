const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFmTXlCbVM0QjRjajNQV285aVRVb1NDZFdjR2Y5Sis1aGw3cFRUdnFFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzRKVVk1L3RlUy9obkRMQitYTzhGRG9QcHBaVzlPeEdMQllrb2NxR3Zuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT2diU2NHTE11eWFBVVRWd0JMZDBIOUxIZ3dWNUg5Um1NaiswbzJGaDFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZk5EUU5jNUljUWNPWkwzUXlESjRFN2hEM3ZSbTFSZWdMMWR6VHp5SVg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHdTlGY3F2SXRCSXJHTHI1azM4Z0pscCtCa3RiWVB1cGtnZTZCUjFWMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbUQzQ09keXZTMGE5Y1MrVkhTcGJDNFVRNjhNeEFObFJ0Qk9GV0JOdzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0N2S1JoZmx6Y0VYa3k1TVd3c1NBa3FZQ1NhcGR5OEl3N3NSSXYxY09XQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnhsVHhxazNZaFZHemZFMTRWaldlTitJOHJHZTRXWkZoa0lWNlg3b0pBST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJETGdxY1NaRGNvYkozTm0zRWphUTRqZXhQL3dabW51Ulh5c256dEZ3cUJaR1lzQXZuSkwybnFMNXE3bzFNbzJCNzBYbWZPckFySlh4N1V0bUZEb0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJLN3N3UEZMNjJwdEc4UUR3RnBycldLbVN2ajQwUlBjTW5ZR3hBNnR1MzIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0ODM5NDE2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUIwMzEwRDI0MzFBREY3NjZBRTRENzM1RTEwQjhERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY0NTMxNjE5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNDgzOTQxNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU3MjgxOTJDMTM2QTA0NjREREJBNDY0RDg5MzY2NEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDUzMTYxOX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiOTIzMjQ4Mzk0MTY3OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsb25lIiwibGlkIjoiMjc4OTIwMzc3NzU0Mzg6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcXkrSThHRUkyN3Nza0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSSkRHakp3TkQrUktTZjE1T0FMSHAwS1VDc1duZU1XUWhnUVNuTzFkWnhrPSIsImFjY291bnRTaWduYXR1cmUiOiJDdllmbUExVE0vYWwvdlJHcmYvZmZHUW12NFpjaE5uQUIyZmVlZVJZMlVKZ094aU95VHJKbzZ0aFVyUXJjbStVMi9LcnVCS0g2T2picE5HOUM3TjNDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic215ajZNWitsWnJYdElUL1lLa20yR0pYKzNwWCszeTFSdFdjNFdDU1FmZnRhZFlIMnZIeVp1QXpxUUh6d2tnN24wdzVBMjVicUZOOGpHWis2NHI4QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNDgzOTQxNjc6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVNReG95Y0RRL2tTa245ZVRnQ3g2ZENsQXJGcDNqRmtJWUVFcHp0WFdjWiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0NTMxNjExLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRThhIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY RAHEEL 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ibb.co/wZgR2GJ2",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAHEEL-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAHEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923248394167",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*RAHEEL-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEL-MD ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/wZgR2GJ2",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923248394167",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
