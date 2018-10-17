import kebab from 'lodash.kebabcase'
import camel from 'lodash.camelcase'
import snake from 'lodash.snakecase'

const langTransforms = { kebab, camel, snake }
const isValidOption = opt => opt && typeof opt === 'string'
const validTranform = opt => Object.keys(langTransforms).indexOf(opt) > -1

function checkValidOptions(state) {
  let attribute = 'data-qa'
  let format = 'kebab'

  if (isValidOption(state.opts.attribute)) {
    attribute = state.opts.attribute
  }

  if (isValidOption(state.opts.format) && validTranform(state.opts.format)) {
    format = state.opts.format
  }

  return {
    attribute,
    format: langTransforms[format]
  }
}

export default checkValidOptions
