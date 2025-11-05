export function sanitizeInput(value: string): string {
  if (!value) return ""
  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/on\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/on\w+\s*=\s*'[^']*'/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/(javascript:|data:)/gi, "")
    .replace(/[{}<>]/g, "")
    .trim()
}


