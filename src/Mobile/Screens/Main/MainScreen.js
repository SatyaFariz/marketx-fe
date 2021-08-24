import '../../../App.css'
import ExploreTab from './ExploreTab/ExploreTab'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

function App(props) {
  const { categories, featuredProducts, me } = props.data
  return (
    <>
      {categories && featuredProducts &&
      <ExploreTab 
        categories={categories}
        featuredProducts={featuredProducts}
        me={me}
      />
      }

    </>
  )
}

export default createFragmentContainer(App, {
  data: graphql`
    fragment MainScreen_data on Query {
      me {
        id,
        ...BottomNav_me,
        ...ExploreTab_me,
        ...AccountTab_me
      }
      categories {
        id,
        ...ExploreTab_categories
      },
      featuredProducts {
        id,
        ...ExploreTab_featuredProducts
      }
    }
  `
});
