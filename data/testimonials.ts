// ============================================================================
// Client testimonials / reviews
//
// IMPORTANT — APPROVAL POLICY:
// A review is ONLY shown on the website when its `approved` flag is set to true.
// Reviews must be approved by WelcomeWorks Group Inc. before publishing. To
// publish a review, add it below (or edit an existing entry) and set
// `approved: true`. Anything left as `approved: false` stays hidden.
//
// The two entries below are examples/templates to show the expected format.
// They are set to `approved: false`, so they do NOT appear on the site until
// a real, approved review replaces them and is flipped to `approved: true`.
// ============================================================================

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  location?: string;
  rating?: number; // 1–5
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Example review text. Replace this with a real, approved client quote before publishing.",
    name: "Client Name",
    role: "Owner",
    company: "Business Name",
    location: "Ontario",
    rating: 5,
    approved: false, // <- set to true only once approved by WelcomeWorks
  },
  {
    quote:
      "Another example placeholder. Only approved reviews are ever displayed on the website.",
    name: "Client Name",
    role: "Manager",
    company: "Business Name",
    location: "Ontario",
    rating: 5,
    approved: false,
  },
];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
