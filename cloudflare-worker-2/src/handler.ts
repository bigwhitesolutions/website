const securityHeaders = {
    'Content-Security-Policy': 'upgrade-insecure-requests',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Xss-Protection': '1; mode=block',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'Permissions-Policy' : "sync-xhr 'none'"
  },
  sanitizeHeaders = {
    Server: '',
  },
  removeHeaders = ['Public-Key-Pins', 'X-Powered-By', 'X-AspNet-Version']

export async function handleRequest(request: Request): Promise<Response> {
  const response = await fetch(request)
  return handleResponse(response)
}

export async function handleResponse(response: Response): Promise<Response> {
  const newHeaders = new Headers(response.headers),
    setHeaders = Object.assign({}, securityHeaders, sanitizeHeaders)

  if (newHeaders.has('Content-Type') && !newHeaders.get('Content-Type')?.includes('text/html')) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    })
  }

  Object.keys(setHeaders).forEach((name) => newHeaders.set(name, setHeaders[name as keyof typeof securityHeaders]))

  removeHeaders.forEach((name) => newHeaders.delete(name))

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  })
}
