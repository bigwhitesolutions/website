import { unstable_dev } from "wrangler";
import type { UnstableDevWorker } from "wrangler";
import { describe, expect, it, beforeAll, afterAll } from "vitest";

describe("Worker", () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev("src/index.ts", {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it("should have the correct headers", async () => {
		const resp = await worker.fetch();

		if (resp) {
			const headers = resp.headers;
			expect(headers.get("Strict-Transport-Security")).toEqual("max-age=31536000; includeSubDomains")
			expect(headers.get("Content-Security-Policy")).toEqual("upgrade-insecure-requests")
			expect(headers.get("X-Frame-Options")).toEqual("DENY")
			expect(headers.get("X-Content-Type-Options")).toEqual("nosniff")
			expect(headers.get("Referrer-Policy")).toEqual("no-referrer")
			expect(headers.get("Permissions-Policy")).toEqual("sync-xhr 'none'")
			expect(headers.get("X-Xss-Protection")).toEqual("1; mode=block")
		}
	});
});
