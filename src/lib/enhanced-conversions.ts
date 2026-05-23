const SESSION_KEY = "ad_ec_data";

interface EcData {
  email?: string;
  phone: string;
  name: string;
}

function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `+91${digits.slice(1)}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return `+${digits}`;
}

export function setUserData(data: EcData): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const [firstName, ...rest] = data.name.trim().split(/\s+/);
  const lastName = rest.join(" ");
  const userData: Record<string, unknown> = {
    phone_number: toE164(data.phone),
    address: {
      first_name: firstName,
      ...(lastName && { last_name: lastName }),
      country: "IN",
    },
  };
  if (data.email) userData.email = data.email;
  window.gtag("set", "user_data", userData);
}

export function saveForThankYou(data: EcData): void {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage blocked in some privacy modes
  }
}

export function loadAndSetFromThankYou(): void {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return;
    const data = JSON.parse(raw) as EcData;
    setUserData(data);
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore parse/storage errors
  }
}
