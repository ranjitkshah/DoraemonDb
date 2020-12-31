var fs = require('fs');
const root = typeof global !== "undefined" ? global : self;
const storagePrefix = "doraemonDb";
const objectPrototype = Object.prototype;


let storage = (root[storagePrefix] = {});

function SData(key, value, TTL) {
  const { length: argsLength } = arguments;
  if (argsLength < 2) {
    return "add proper key & value";
  } else {
    if (key in storage) {
      return "key already exist";
    } else {
      //TTL(time to leave)
      TTL = TTL ? TTL + new Date().getTime() : null;
      storage[key] = { value, TTL };
      fs.writeFile("thing.json", SData.toString(), function(err, result) {
        if(err) console.log('error', err);
    });
    }
  }
}

SData.read = (data) => {
  let currTime = new Date().getTime();
  if (!storage[data].TTL && TTL > currTime) {
    delete storage[data];
    return "key expired";
  } else {
    return storage[data];
  }
};

SData.all = () => {
  return storage;
};

SData.init = (data) => {
  if (objectPrototype.toString.call(data) !== "[object Object]") {
    throw new TypeError("Incorrect data");
  }

  storage = root[storagePrefix] = data;
};

SData.has = (key) => objectPrototype.hasOwnProperty.call(storage, key);

SData.delete = function () {
  SData.file();
  if (arguments.length === 0) {
    storage = root[storagePrefix] = {};
  } else {
    [].forEach.call(arguments, (key) => {
      delete storage[key];
    });
  }
};



SData.toString = () => JSON.stringify(storage);


module.exports = SData;
