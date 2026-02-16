export const LAST_VISITED_ORGANIZATION_COOKIE = "notra_last_organization";

export const GITHUB_URL_PATTERNS = [
  /^https?:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?$/i,
  /^git@github\.com:([^/]+)\/([^/]+?)(?:\.git)?$/i,
  /^([^/]+)\/([^/]+)$/,
] as const;

export const RESERVED_ORGANIZATION_SLUGS = [
  "api",
  "auth",
  "login",
  "signup",
  "onboarding",
  "dashboard",
  "settings",
  "admin",
  "help",
  "support",
  "docs",
  "blog",
  "about",
  "terms",
  "privacy",
  "contact",
] as const;

export const FEATURES = {
  TEAM_MEMBERS: "team_members",
  AI_CREDITS: "ai_credits",
  WORKFLOWS: "workflows",
  INTEGRATIONS: "integrations",
  LOG_RETENTION_7_DAYS: "log_retention_7_days",
  LOG_RETENTION_30_DAYS: "log_retention_30_days",
} as const;

export type FeatureId = (typeof FEATURES)[keyof typeof FEATURES];
