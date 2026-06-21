"use client";

const countries = [
  { code: "PT", flag: "🇵🇹", label: "Português" },
  { code: "US", flag: "🇺🇸", label: "English" },
  { code: "FR", flag: "🇫🇷", label: "Français" },
];

export default function LanguageSelect() {
  return (
    <select defaultValue="PT" className="flex items-center p-2 gap-2 text-sm">
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.flag} {country.label}
        </option>
      ))}
    </select>
  );
}
