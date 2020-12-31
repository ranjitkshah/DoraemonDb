# doraemondb
 
<img src="https://img.shields.io/npm/v/doraemondb">

doraemondb is npm package meant for key-value storage in form of JSON and also has expiration property for keys.

## Features
- storing key-value data in form of JSON object
- expiration time for keys ( time to leave property )


## installation

Install doraemondb

```
npm i doraemondb
```


Create a new local storage instance or global instance for browser storage

## usage

- create db instance

`const doraemonDb = require('doraemondb');`
 
- create db json || args( key: string, value: string, TTL: number )
- ttl (time to leave) for key expiration in seconds or by default it is null ( doesn't check for expiration )

`doraemonDb('1','ranjit',5)` 

- read db || args (key: string) returns value of key

`doraemonDb.read('1')`

- has db || args (key: string) returns boolean

`doraemonDb.has('1')`

- all db || returns all data storage

`doraemonDb.all()`

- delete db ||  args (key: string) delete value of key

`doraemonDb.delete('1')`


<a href="https://www.npmjs.com/package/doraemondb">link</a>
