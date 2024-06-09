// ref: https://mswjs.io/docs/migrations/1.x-to-2.x#requestresponsetextencoder-is-not-defined-jest
const { TextDecoder, TextEncoder } = require("node:util");
Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
});

// ref: https://zenn.dev/hamworks/articles/5da7118371b02b#%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%9D%E3%81%AE4%EF%BC%9Areferenceerror%3A-readablestream-is-not-defined
const { ReadableStream } = require("node:stream/web");
Object.defineProperties(globalThis, {
  ReadableStream: { value: ReadableStream },
});

// ref: https://medium.com/@thochguertel/jest-react-msw-webpack-error-referenceerror-clearimmediate-is-not-defined-eeb16c504c8c
const { clearImmediate } = require("node:timers");
Object.defineProperties(globalThis, {
  clearImmediate: { value: clearImmediate },
});

const { Blob, File } = require("node:buffer");
const { fetch, Headers, FormData, Request, Response } = require("undici");
Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Blob: { value: Blob },
  File: { value: File },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request },
  Response: { value: Response },
});
