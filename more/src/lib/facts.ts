import factsDataRaw from "@/content/facts.json";

export type FactStatus = "draft" | "verified";

export type Fact = {
  value: string;
  status: FactStatus;
  sources: string[];
  updatedAt: string;
};

const factsData = factsDataRaw as unknown as {
  complex: Record<string, Fact>;
  mortgage: Record<string, Fact>;
  prices: Record<string, Fact>;
  contacts: Record<string, Fact>;
};

export function getFact(category: string, key: string): Fact {
  // @ts-ignore
  const fact = factsData[category]?.[key];
  if (!fact) {
    return {
      value: "—",
      status: "draft",
      sources: [],
      updatedAt: new Date().toISOString()
    };
  }
  return fact;
}

export const complexFacts = factsData.complex;
export const contactFacts = factsData.contacts;
export const priceFacts = factsData.prices;
export const mortgageFacts = factsData.mortgage;
