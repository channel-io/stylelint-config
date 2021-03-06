"use strict"

module.exports = {
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-recess-order",
  ],
  "syntax": "scss",
  "rules": {
    "selector-type-case": null,
    "value-keyword-case": null,
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "declaration-colon-newline-after": null,
    "selector-type-no-unknown": [true, {
      "ignore": ["custom-elements", "default-namespace"],
    }],
    "no-eol-whitespace": [true, {
      "ignore": ["empty-lines"],
    }],
  },
}
