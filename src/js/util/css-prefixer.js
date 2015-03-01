function prefix(property) {
  var capitalizedProperty = property[0].toUpperCase + property.slice(1)
  var styles = Object.keys(document.body.style)

  return ~styles.indexOf(property) && property
      || ~styles.indexOf('Webkit' + capitalizedProperty) && 'Webkit' + capitalizedProperty
      || ~styles.indexOf('Moz'    + capitalizedProperty) && 'Moz   ' + capitalizedProperty
      || ~styles.indexOf('ms'     + capitalizedProperty) && 'ms'     + capitalizedProperty
      || ~styles.indexOf('O'      + capitalizedProperty) && 'O'      + capitalizedProperty
}

module.exports = prefix