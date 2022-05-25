## The toolbox api app

- consume content from the https://echo-serv.tbxnet.com/v1
- model content
- send to the client

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/DarioGaleano/toolbox-test-api.git
cd toolbox-test-api
```

```bash
npm install or yarn
```

## Steps to start the project

set a file `.env` and inject your credentials so it looks like this

```
TOOLBOX_API = https://echo-serv.tbxnet.com/v1
TOOLBOX_TOKEN = aSuperSecretKey
```

To start the express server, run the following

```bash
npm run start:dev
```

Final Step:

Open [http://localhost:3000](http://localhost:3000) to see the project running.
