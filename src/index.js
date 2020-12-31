var fs = require('fs');
const root = typeof global !== "undefined" ? global : self;
const storagePrefix = "doraemonDb";
const objectPrototype = Object.prototype;


let storage = (root[storagePrefix] = {});


function doraemonDb(key, value, TTL) {
  const { length: argsLength } = arguments;
  if (argsLength < 2) {
    return "add proper key & value";
  } else {
    if (key in storage) {
      return "key already exist";
    } else {
      //TTL(time to leave)
      TTL = TTL ? (TTL*1000) + new Date().getTime() : null;
      storage[key] = { value, TTL };
      fs.writeFile("data.json", doraemonDb.toString(), function(err, result) {
        if(err) console.log('error', err);
    });
    }
  }
}

doraemonDb.read = (data) => {
  let currTime = new Date().getTime();
  if (!!storage[data].TTL && currTime > storage[data].TTL) {
    delete storage[data];
    return "key expired";
  } else {
    return storage[data];
  }
};

doraemonDb.all = () => {
  return storage;
};

doraemonDb.init = (data) => {
  if (objectPrototype.toString.call(data) !== "[object Object]") {
    throw new TypeError("Incorrect data");
  }

  storage = root[storagePrefix] = data;
};

doraemonDb.has = (key) => objectPrototype.hasOwnProperty.call(storage, key);

doraemonDb.delete = function () {
  if (arguments.length === 0) {
    storage = root[storagePrefix] = {};
  } else {
    [].forEach.call(arguments, (key) => {
      delete storage[key];
    });
  }
};



doraemonDb.toString = () => JSON.stringify(storage);


module.exports = doraemonDb;
