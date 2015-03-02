function prefix(property) {
  var capitalizedProperty = property[0].toUpperCase() + property.slice(1)
  var styles = Object.keys(document.body.style)

  return ~styles.indexOf(property) && property
      || ~styles.indexOf('webkit' + capitalizedProperty) && 'webkit' + capitalizedProperty
      || ~styles.indexOf('moz'    + capitalizedProperty) && 'moz   ' + capitalizedProperty
      || ~styles.indexOf('ms'     + capitalizedProperty) && 'ms'     + capitalizedProperty
      || ~styles.indexOf('O'      + capitalizedProperty) && 'O'      + capitalizedProperty
}

module.exports = prefix