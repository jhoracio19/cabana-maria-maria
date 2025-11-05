import { describe, it, expect } from "vitest"
import { sanitizeInput } from "../utils/sanitizeInput"

describe("sanitizeInput", () => {
  const payloads = [
    "<script>alert(1)</script>",
    "<img src=x onerror=alert(1)>",
    "javascript:alert('xss')",
    "<svg onload=alert(1)>",
    "{constructor.constructor('alert(1)')()}",
  ]

  it("debe eliminar etiquetas, eventos y javascript", () => {
    payloads.forEach((p) => {
      const clean = sanitizeInput(p)
      expect(clean).not.toMatch(/<|>|script|onerror|javascript:|svg/i)
    })
  })
})


