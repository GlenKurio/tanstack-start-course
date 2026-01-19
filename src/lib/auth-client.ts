import { createAuthClient } from 'better-auth/react'
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: 'http://localhost:3000',
})

// export const sessionQueryOptions = queryOptions({
//   queryKey: ['session'],
//   queryFn: async () => {
//     const { data, error } = await authClient.getSession()
//     if (error) throw error
//     return data
//   },
//   staleTime: 1000 * 60 * 3, // 5 minutes
// })
