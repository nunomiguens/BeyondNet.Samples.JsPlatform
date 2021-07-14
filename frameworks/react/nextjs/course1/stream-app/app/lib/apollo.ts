import { useMemo } from "react";
import { ApolloClient, InMemoryCache, NormalizedCacheObject, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function createApolloClient() {
    const authLink = setContext((_,{ headers }) => {
        const token = sessionStorage.getItem('token')
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}`:''
            }
        }
    })

    const httpLink = new HttpLink({ 
        uri: 'http://localhost:8000/graphql',
        credentials: 'include'
    })

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })
}

export function InitializeApollo(initialState: any=null) {
    const _apolloClient = apolloClient ??  createApolloClient()

    if (initialState) {
        _apolloClient.cache.restore(initialState)
    }

    if(typeof window === 'undefined') return _apolloClient //SSR

    if(!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function useApollo(initialState: any) {
    const store = useMemo(() => InitializeApollo(initialState), [initialState])
    return store
}