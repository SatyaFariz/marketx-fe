export default (text, options) => {
  const allowNegative = options?.allowNegative
  const precision = options?.precision || 0
  const removeLeadingZeroes = options?.removeLeadingZeroes
  
  if (!text || typeof text !== 'string') {
    return ""
  }
  // Remove non numeric and non .- chars
  text = allowNegative ? text.replace(/[^\d.-]/g, '') : text.replace(/[^\d.]/g, '')
  // Remove extra periods ('.', only one, at most left allowed in the string)
  let splitText = text.split('.')
  text = splitText.shift() + (splitText.length ? '.' + splitText[0].slice(0, precision) : '')
  // Remove .
  if(precision === 0) {
    text = text.replace(/\./g, '')
  }
  // Remove '-' signs if there is more than one, or if it is not most left char
  for (var i = allowNegative ? 0 : 1; i < text.length; i++)
  {
      if(!allowNegative)
        break
        
      var char = text.substr(i,1)
      if(char == '-')
      {
          text = text.substr(0,i) + text.substr(i+1)
          // decrement value to avoid skipping character
          i--
      }
  }
  // Remove leading zeros
  if(removeLeadingZeroes)
    text = text.replace(/^(-)?0+(?=\d)/,'$1') //?=\d is a positive lookahead, which matches any digit 0-9

  return text
}