export * from "../site.config";
export { siteConfig as site } from "../site.config";

/** Phone number as a tel: href, digits only. */
export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "").replace(/^1/, "")}`;
