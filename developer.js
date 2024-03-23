import { Client } from "discord-rpc";
import chalk from 'chalk';

const client = new Client({ transport: 'ipc' });
client.on('ready', () => {
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
      details: "Closed beta process coming soon!",
      assets: {
        large_image: "2",
        large_text: "Flgo Theme Project",
        small_image: "3",
        small_text: "Flgo"
      },
      buttons: [
        { label: "Github", url: "https://github.com/FlgoTheme/Flgo-Hosting-Theme" },
        { label: "İnstagram", url: "https://github.com/FlgoTheme" }
      ]
    }
  });
});
console.log(chalk.whiteBright('Profil Aktif'));
client.login({ clientId: "1163461029716566129" }).catch(console.error);
