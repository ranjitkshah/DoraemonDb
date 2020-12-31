const { Console } = require('console');
const doraemonDb = require('./src/index');

// create db json || args( key: string, value: string, TTL: number )
// ttl (time to leave) for key expiration in seconds
doraemonDb('1','ranjit',5) 

// read db || args (key: string) returns value of key
doraemonDb.read('1')

// has db || args (key: string) returns boolean
doraemonDb.has('1')

// all db || returns all data storage
doraemonDb.all()

//delete db ||  args (key: string) delete value of key
doraemonDb.delete('1')


