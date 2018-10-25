## {{ name }}
----------------------------
author: {{ author }} <br>
description: {{ author }}

## 1. 在package.json里面增加script指令

```

    "online": "pm2 start pm2.json --env production --no-daemon",
    "online-test": "pm2 start pm2.json --env test --no-daemon",

```