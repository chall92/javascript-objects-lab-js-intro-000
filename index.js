function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newObject = object[key]
  return newObject
  delete newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
