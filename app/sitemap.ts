import type { MetadataRoute } from "next";

const BASE = "https://welcomeworksgroup.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/integrated-hr-payroll",
    "/payroll-services",
    "/admissions-support",
    "/why-welcomeworks",
    "/industries",
    "/about",
    "/faq",
    "/contact",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
