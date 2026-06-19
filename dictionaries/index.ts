import type { Dictionary } from "./id";

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (locale === "en") {
    const mod = await import("./en");
    return mod.default;
  }
  const mod = await import("./id");
  return mod.default;
}

export type { Dictionary };
