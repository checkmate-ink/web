<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Checkmate web app. Here is a summary of all changes made:

## What was set up

- **`instrumentation-client.ts`** — PostHog is initialised on the client side using Next.js 15.3+ instrumentation. Captures unhandled exceptions automatically via `capture_exceptions: true`. Uses a reverse proxy (`/ingest`) to avoid ad-blockers.
- **`next.config.ts`** — Added rewrites to proxy PostHog requests through `/ingest/*` to the EU PostHog endpoints, and set `skipTrailingSlashRedirect: true`.
- **`.env.local`** — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` set securely.

## Events instrumented

| Event                              | Description                                                              | File                                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test_generation_submitted`        | User submitted the quick test generation form on the landing page        | `src/features/landing/screens/landing-screen/parts/hero-section/parts/test-generation-form/index.tsx`                                                                               |
| `test_preset_selected`             | User selected a preset in the test generation form (landing or advanced) | `src/features/landing/screens/landing-screen/parts/hero-section/parts/test-generation-form/index.tsx` + `src/features/tests/screens/test-screen/parts/test-creation-form/index.tsx` |
| `advanced_test_creation_submitted` | User submitted the advanced test creation form on the /tests page        | `src/features/tests/screens/test-screen/parts/test-creation-form/index.tsx`                                                                                                         |
| `test_section_added`               | User added an additional section in the advanced test creation form      | `src/features/tests/screens/test-screen/parts/test-creation-form/index.tsx`                                                                                                         |
| `test_pdf_exported`                | User exported the generated test as a PDF                                | `src/features/tests/parts/test-preview/parts/test-header/index.tsx`                                                                                                                 |
| `test_edit_mode_toggled`           | User switched between preview and edit mode on a generated test          | `src/features/tests/parts/test-preview/parts/test-header/index.tsx`                                                                                                                 |
| `test_question_added`              | User manually added a question to a section in edit mode                 | `src/features/tests/parts/test-preview/parts/section-group/index.tsx`                                                                                                               |
| `marketplace_test_clicked`         | User clicked on a test card in the marketplace section                   | `src/features/landing/screens/landing-screen/parts/marketplace/parts/marketplace-card/index.tsx`                                                                                    |
| `survey_cta_clicked`               | User clicked the survey CTA button in the Help Us section                | `src/features/landing/screens/landing-screen/parts/help-us/index.tsx`                                                                                                               |
| `contact_email_clicked`            | User clicked the email contact link in the Contact Us section            | `src/features/landing/screens/landing-screen/parts/contact-us/index.tsx`                                                                                                            |
| `contact_phone_clicked`            | User clicked the phone contact link in the Contact Us section            | `src/features/landing/screens/landing-screen/parts/contact-us/index.tsx`                                                                                                            |

## Next steps

We've built a dashboard and insights to monitor user behaviour based on the events just instrumented:

- [Analytics basics dashboard](/dashboard/681499)
- [Test generation funnel](/insights/cAkIqUoM) — conversion from form submission to PDF export
- [Test submissions over time](/insights/MqWxpcFP) — landing vs advanced form submissions per day
- [PDF exports over time](/insights/ZRpjJMnu) — test PDF downloads per day
- [Test editing engagement](/insights/F9GqA4mp) — edit mode usage, questions added, sections added
- [Outreach & engagement clicks](/insights/Q38jOsow) — marketplace, survey, and contact clicks

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
