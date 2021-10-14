import { handleResponse } from '../src/handler'
import makeServiceWorkerEnv from 'service-worker-mock'

declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
  })

  test('handle GET', async () => {

    const response: Response = new Response()

    var result = await handleResponse(response);

    const headers = result.headers;
    expect(headers.get("Strict-Transport-Security")).toEqual("max-age=31536000; includeSubDomains")
    expect(headers.get("Content-Security-Policy")).toEqual("upgrade-insecure-requests")
    expect(headers.get("X-Frame-Options")).toEqual("DENY")
    expect(headers.get("X-Content-Type-Options")).toEqual("nosniff")
    expect(headers.get("Referrer-Policy")).toEqual("no-referrer")
    expect(headers.get("Permissions-Policy")).toEqual("sync-xhr 'none'")
    expect(headers.get("X-Xss-Protection")).toEqual("1; mode=block")
  })
})
