# TV Message

show Twitter Direct Messages on TV via Raspberry Pi.

## Setup

### Install TV Message

```bash
git clone https://github.com/aktsh/tv-message.git /home/pi/tv-message
```

### Install Node.js and NPM

```bash
sudo apt-get install npm
sudo npm install -g npm
sudo npm install -g n
sudo n latest
```

### Install AquesTalk Pi

Download [AquesTalk Pi](http://www.a-quest.com/products/aquestalkpi.html).
put `aquestalkpi` to `/home/pi/`.

### Install cec-utils

```bash
sudo apt-get install cec-utils
```

## Set account settings

Edit `config.json` and write your account settings.

## Run TV Message

Run this command on GUI.

```bash
cd /home/pi/tv-message
npm install
npm start
```

## License

MIT

