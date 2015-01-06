es6-prez
========

An ES6 Presentation for the rest of us

Template strings are neato

```
  getPath(context, identity, ...props) {
    let key = util.findByIdentity(this._model.get(`!${context}`), identity);
    if (!key) { throw new Error('Unable to findByIdentity'); }

    let path = `!${context}.${key}`;
    props.forEach(function(item) {
      // OLD WAY: path += '.' + item;
      path = `${path}.${item}`;
    });

    console.log(path);
    return path;
  }
```
---

Rest Arguments are the new awesome.

```
  getPath(context, identity, ...props) {
    let key = util.findByIdentity(this._model.get(`!${context}`), identity);
    if (!key) { throw new Error('Unable to findByIdentity'); }

    let path = `!${context}.${key}`;
    props.forEach(function(item) {
      path = `${path}.${item}`;
    });

    console.log(path);
    return path;
  }
```
