const execSync = require('child_process').execSync;
const Twit = require('twit');
const config = require('../config.json'); // load account settings

const twitter = new Twit(config);
const stream = twitter.stream('user');

console.log('launch');

stream.on('direct_message', data => {
  const message = data.direct_message;
  // through own message
  if (message.sender.screen_name === config.user_id) return;

  const sender = message.sender.name;

  console.log('--------------------------------------------------');
  console.log(new Date().toLocaleString());
  console.log(`sender: ${sender}`);
  // console.log(message.sender.id_str); // show sender id
  console.log(message.text);
  console.log('--------------------------------------------------');

  try {
    // change TV channels to Raspberry Pi
    execSync('echo "as 0" | cec-client -s');
    // play notification sound (put wave file to the path below)
    // if mp3, replace 'aplay' to 'mpg321' and 'sudo apt-get install mpg321'
    // execSync('aplay /home/pi/tv-message/notification.wav');
    // talk recieved message
    execSync(`/home/pi/aquestalkpi/AquesTalkPi "${message.text} from ${sender}" | aplay`);
  } catch (e) {
    // console.log(e);
  }

  // reply
  const reply = {
    user_id: message.sender_id_str,
    text: `success: ${message.text}`,
  };
  twitter.post('direct_messages/new', reply);
});

