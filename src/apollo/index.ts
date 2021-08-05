import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: <string> import.meta.env.VITE_GRAPHQL,
    cache: new InMemoryCache()
})

export default client