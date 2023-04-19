// import { ApolloClient, InMemoryCache } from "@apollo/client";


// export const client = new ApolloClient({
//   uri: process.env.REACT_APP_API_GATEWAY_URL,
//   cache: new InMemoryCache(),
// });


import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'


const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_GATEWAY_URL })
const token =localStorage.getItem("token")
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      Authorization: token || null,
      ...headers
    }
  }))

  // return forward(operation)
  // Modify data
  return forward(operation).map((response:any) => {
    // Global unauthorize error display from success meta response
    // const path = Object.keys(response.data)
    // const metaData = response?.data[path[0]]?.meta
    
    return response
  })
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // if (graphQLErrors) {
  //   graphQLErrors.forEach(({ message }) => {
  //     toast.error(message)
  //   })
  // }
  // if (networkError?.statusCode=== MESSAGE_CODE.NOT_FOUND) toast.error(networkError.message)
  // if (networkError?.statusCode === MESSAGE_CODE.UNAUTHORIZED) sessionExpired()
  // if (networkError?.statusCode === MESSAGE_CODE.INTERNAL_SERVER_ERROR) window.location.replace(ROUTES.page500)
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, errorLink, httpLink])
})


