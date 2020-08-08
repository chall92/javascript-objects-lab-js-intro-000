var obj = { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var obj = {object: key}
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return obj
}
