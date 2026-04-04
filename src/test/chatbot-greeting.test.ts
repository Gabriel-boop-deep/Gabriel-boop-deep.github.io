import { describe, it, expect } from "vitest";
import { getGreetingResponse } from "@/lib/chatGreeting";

describe("getGreetingResponse", () => {
  it("returns a greeting response for 'oi'", () => {
    expect(getGreetingResponse("oi")).not.toBeNull();
  });

  it("returns a greeting response for 'Oi!'", () => {
    expect(getGreetingResponse("Oi!")).not.toBeNull();
  });

  it("returns a greeting response for 'olá'", () => {
    expect(getGreetingResponse("olá")).not.toBeNull();
  });

  it("returns a greeting response for 'hello'", () => {
    expect(getGreetingResponse("hello")).not.toBeNull();
  });

  it("returns a greeting response for 'hi'", () => {
    expect(getGreetingResponse("hi")).not.toBeNull();
  });

  it("returns a greeting response for 'bom dia'", () => {
    expect(getGreetingResponse("bom dia")).not.toBeNull();
  });

  it("returns null for non-greeting messages", () => {
    expect(getGreetingResponse("Quanto custa um site?")).toBeNull();
  });

  it("returns null for empty-like non-greeting input", () => {
    expect(getGreetingResponse("quero um orçamento")).toBeNull();
  });
});
