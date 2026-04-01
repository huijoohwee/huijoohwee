declare const process:
  | {
      env?: Record<string, string | undefined>
      versions?: { node?: string }
    }
  | undefined
