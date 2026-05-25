const SESSION_KEY = "ad_ec_data";

export interface EcData {
  email?: string;
  phone: string;
  name: string;
  state?: string;
}

function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `+91${digits.slice(1)}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return `+${digits}`;
}

export function buildUserData(data: EcData): Record<string, unknown> {
  const [firstName, ...rest] = data.name.trim().split(/\s+/);
  const lastName = rest.join(" ");
  const address: Record<string, unknown> = {
    first_name: firstName,
    ...(lastName && { last_name: lastName }),
    country: "IN",
    ...(data.state && data.state !== "Other" && { region: data.state }),
  };
  const userData: Record<string, unknown> = {
    phone_number: toE164(data.phone),
    address,
  };
  if (data.email) userData.email = data.email;
  return userData;
}

export function setUserData(data: EcData): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("set", "user_data", buildUserData(data));
}

export function saveForThankYou(data: EcData): void {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage blocked in some privacy modes
  }
}

export function loadAndSetFromThankYou(): EcData | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as EcData;
    setUserData(data);
    sessionStorage.removeItem(SESSION_KEY);
    return data;
  } catch {
    // ignore parse/storage errors
    return null;
  }
}
