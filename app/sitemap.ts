import type { MetadataRoute } from "next";

const BASE = "https://welcomeworksgroup.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/integrated-hr-payroll",
    "/payroll-services",
    "/hr-training",
    "/admissions-support",
    "/admissions-support/faq",
    "/why-welcomeworks",
    "/industries",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/accessibility",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
