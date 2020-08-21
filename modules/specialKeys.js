define(['jquery'], function($) {

var specialKeys = {};

specialKeys.dictionary = {
  "`": "backquote",
  ";": "semicolon",
  ",": "comma",
  ".": "period",
  "/": "forwardSlash",
  "\\": "backSlash",
  "-": "dash",
  "=": "equal",
  "[": "openBracket",
  "]": "closingBracket"
}

return specialKeys;

});
