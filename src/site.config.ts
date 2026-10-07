/**
 * site.config.ts — single source of truth for brand, contact and SEO data.
 *
 * Tokens in SCREAMING_SNAKE_CASE are values only the business owner can
 * supply (phone, email, licence, warranty terms). Components check for the
 * token and hide the field instead of rendering a fake value.
 */

const domain = "slcelitewatersoftener.com";

export const PHONE_PLACEHOLDER = "PHONE_NUMBER";
export const EMAIL_PLACEHOLDER = "BUSINESS_EMAIL";

export interface SocialProfile {
  label: string;
  /** Profile URL — leave blank until the profile exists; blank entries are hidden. */
  url: string;
}

export const siteConfig = {
  businessName: "SLC Elite Water Softener",
  shortName: "SLC Elite",
  domain,
  siteUrl: `https://${domain}`,
  city: "Salt Lake City",
  state: "Utah",
  stateAbbr: "UT",
  county: "Salt Lake County",
  primaryKeyword: "water softener salt lake city",

  title: "SLC Elite Water Softener | Water Softener Installation & Systems – Salt Lake City, UT",
  h1: "SLC Elite Water Softener | Water Softener Installation & System Experts",
  metaDescription:
    "SLC Elite Water Softener offers professional water softener installation, repair, and replacement in Salt Lake City, UT. Get a free estimate today. Call now.",

  // Contact — supplied by the business owner
  phoneNumber: PHONE_PLACEHOLDER,
  businessEmail: EMAIL_PLACEHOLDER,
  address: "",

  // Hardness range is an editorial estimate. Verify against the current Salt Lake
  // City Department of Public Utilities water quality report before launch.
  gpgLow: 10,
  gpgHigh: 18,
  gpgLabel: "Hard to Very Hard",

  // Trust facts — render only once the owner confirms them (see WhyChooseUs).
  trust: {
    yearsExperience: "YEARS_EXPERIENCE",
    licenseNumber: "LICENSE_NUMBER",
    warrantyTerms: "WARRANTY_TERMS",
    guarantee: "GUARANTEE_TERMS",
  },

  /** Social profiles — fill each URL as the profile is created; shown in the footer and schema sameAs. */
  socials: [
    { label: "Facebook", url: "" },
    { label: "Instagram", url: "" },
    { label: "X (Twitter)", url: "" },
    { label: "YouTube", url: "" },
    { label: "Pinterest", url: "" },
    { label: "LinkedIn", url: "" },
  ] satisfies SocialProfile[],
};

export type SiteConfig = typeof siteConfig;

export const hasPhone = siteConfig.phoneNumber !== PHONE_PLACEHOLDER;
export const hasEmail = siteConfig.businessEmail !== EMAIL_PLACEHOLDER;
export const activeSocials = siteConfig.socials.filter((s) => s.url);
export const isConfirmed = (value: string) => !/^[A-Z_]+$/.test(value);
