import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <div>

    </div>
  )
}

export default createFragmentContainer(Component, {
  pivotField: graphql`
    fragment EditPivotFieldModal_pivotField on PivotField {
        id,
        emptyErrorMessage,
        helperText,
        attribute {
          id,
          name
        },
        options {
          id,
          label,
          desc,
          isDefault
        }
    }
  `
})