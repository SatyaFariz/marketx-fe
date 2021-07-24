import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/',
  components: () => [import('./MainScreen')],
  query: graphql`
    query MainScreenQuery {
      ...MainScreen_data
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([MainScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <MainScreen
            data={data}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk