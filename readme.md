# Proxying User Agents

This is a list of user agents (Mail clients) that download images using a proxy,
and not directly from user's device (Making it impossible to detect user's location).

## Usage

```javascript
const isProxying = require("proxying-user-agents")
const userAgent = "insert-mail-client-user-agent-here"
console.log(isProxying(userAgent)) // returns true if it uses proxies to download images
```
