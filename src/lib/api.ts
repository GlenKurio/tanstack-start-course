import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from './auth'
import { queryOptions } from '@tanstack/react-query'

const fetchSession = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders()

  const session = await auth.api.getSession({
    headers,
  })

  return session
})

export const sessionQueryOptions = queryOptions({
  queryKey: ['session'],
  queryFn: fetchSession,
  staleTime: 5 * 60 * 1000, // 5 minutes (adjust as needed)
})
