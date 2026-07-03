"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import type { Dictionary } from "@/lib/i18n/translations";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type SubmitStatus = "idle" | "loading" | "success" | "error";

type FieldErrorCode = "required" | "invalid";
type FieldErrors = Partial<Record<"name" | "email" | "message", FieldErrorCode>>;

const initialValues = { name: "", email: "", message: "" };

function fieldErrorMessage(
  field: "name" | "email" | "message",
  code: FieldErrorCode,
  errors: Dictionary["contact"]["errors"]
): string {
  if (field === "email" && code === "invalid") return errors.emailInvalid;
  if (field === "name") return errors.nameRequired;
  if (field === "message") return errors.messageRequired;
  return errors.emailInvalid;
}

export function Contact() {
  const { t } = useLocale();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [hasFormError, setHasFormError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setHasFormError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        const errors: FieldErrors = data.errors ?? {};
        setFieldErrors(errors);
        setHasFormError(Object.keys(errors).length === 0);
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setHasFormError(true);
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/80">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setValues((v) => ({ ...v, name: event.target.value }))}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              {fieldErrors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-red-400">
                  {fieldErrorMessage("name", fieldErrors.name, t.contact.errors)}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/80">
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setValues((v) => ({ ...v, email: event.target.value }))}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              {fieldErrors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-400">
                  {fieldErrorMessage("email", fieldErrors.email, t.contact.errors)}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/80">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(event) => setValues((v) => ({ ...v, message: event.target.value }))}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              {fieldErrors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-400">
                  {fieldErrorMessage("message", fieldErrors.message, t.contact.errors)}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" variant="primary" disabled={status === "loading"}>
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {status === "loading" ? t.contact.submitting : t.contact.submit}
              </Button>

              {status === "success" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400" role="status">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  {t.contact.success}
                </span>
              )}

              {status === "error" && hasFormError && (
                <span className="inline-flex items-center gap-1.5 text-sm text-red-400" role="alert">
                  <AlertCircle className="h-4 w-4" aria-hidden="true" />
                  {t.contact.errors.generic}
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
