export type DeliveryErrorCode = "sendFailed" | "rateLimited" | "networkError";

export interface EmailJsFailure {
  code: DeliveryErrorCode;
  status?: number;
  text: string;
}

// EmailJS rejects with { status, text }, which is not an Error instance.
export function normalizeEmailJsError(error: unknown): EmailJsFailure {
  let status: number | undefined;
  let text = "Unknown EmailJS error";

  if (typeof error === "string") {
    text = error.trim() || text;
  } else if (error !== null && typeof error === "object") {
    const response = error as { status?: unknown; text?: unknown; message?: unknown };
    if (typeof response.status === "number" && Number.isFinite(response.status)) {
      status = response.status;
    }
    if (typeof response.text === "string" && response.text.trim()) {
      text = response.text;
    } else if (typeof response.message === "string" && response.message.trim()) {
      text = response.message;
    }
  }

  if (status === 429) return { code: "rateLimited", status, text };

  if (
    status === 0 ||
    (status === undefined && /failed to fetch|network\s*(?:error|request failed)|load failed|internet.*disconnected/i.test(text))
  ) {
    return { code: "networkError", status, text };
  }

  return { code: "sendFailed", status, text };
}
