"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NeonBackground from "../components/NeonBackground";
import { useLanguage } from "../components/LanguageProvider";
import { normalizeEmailJsError, type DeliveryErrorCode } from "./emailjs-error";

const CONTACT_EMAIL = "william236969@gmail.com";

type ContactError =
  | { code: "emailRequired" | "emailInvalid" | "messageRequired" }
  | { code: DeliveryErrorCode };

const ContactPage = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<ContactError | null>(null);
  const submissionInFlight = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionInFlight.current) return;
    setSubmitStatus("idle");
    setSubmitError(null);

    const emailInput = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    let validationError: ContactError | null = null;
    if (!email.trim()) {
      validationError = { code: "emailRequired" };
    } else if (emailInput.validity.typeMismatch) {
      validationError = { code: "emailInvalid" };
    } else if (!message.trim()) {
      validationError = { code: "messageRequired" };
    }
    if (validationError) {
      setSubmitError(validationError);
      setSubmitStatus("error");
      const invalidInput = e.currentTarget.elements.namedItem(
        validationError.code === "messageRequired" ? "message" : "email"
      ) as HTMLInputElement | HTMLTextAreaElement;
      invalidInput.focus();
      return;
    }

    submissionInFlight.current = true;
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_w8g3x7h", // EmailJSのサービスID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_w0p4xa5", // EmailJSのテンプレートID
        {
          from_email: email,
          message: message,
          to_email: CONTACT_EMAIL,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Xq6ye17YZQ0AFtBmX" // EmailJSの公開キー
      );

      if (result.status !== 200) throw result;
      setSubmitStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      const failure = normalizeEmailJsError(error);
      console.error(`EmailJS send failed (status ${failure.status ?? "unknown"}): ${failure.text}`);
      setSubmitStatus("error");
      setSubmitError({ code: failure.code });
    } finally {
      submissionInFlight.current = false;
      setIsSubmitting(false);
    }
  };

  const errorMessage = (() => {
    switch (submitError?.code) {
      case "emailRequired":
        return t("メールアドレスを入力してください。", "Please enter your email address.");
      case "emailInvalid":
        return t("正しいメールアドレスを入力してください。", "Please enter a valid email address.");
      case "messageRequired":
        return t("メッセージを入力してください。", "Please enter a message.");
      case "rateLimited":
        return t(
          "送信回数の制限により送れませんでした。時間をおいて再度お試しいただくか、メールでご連絡ください。",
          "The form has reached its sending limit. Please try again later or contact me by email."
        );
      case "networkError":
        return t(
          "通信エラーのため、送信の完了を確認できませんでした。接続を確認して再度お試しいただくか、メールでご連絡ください。",
          "There was a connection problem, so it’s unclear whether your message was sent. Please check your connection and try again, or contact me by email."
        );
      case "sendFailed":
        return t(
          "フォームから送信できませんでした。時間をおいて再度お試しいただくか、メールでご連絡ください。",
          "Your message couldn’t be sent through the form. Please try again later or contact me by email."
        );
      default:
        return "";
    }
  })();

  const hasDeliveryError = submitError?.code === "sendFailed" ||
    submitError?.code === "rateLimited" || submitError?.code === "networkError";
  const fallbackMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    t("ポートフォリオからのお問い合わせ", "Portfolio inquiry")
  )}&body=${encodeURIComponent(`${t("返信先", "Reply to")}: ${email}\n\n${message}`)}`;

  return (
    <>
      <NeonBackground />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {t("お問い合わせ", "Contact")}
            </h1>
            <p className="mt-2 text-gray-300">
              {t(
                "ご質問やご相談がございましたら、お気軽にお問い合わせください。",
                "Have a question or something you'd like to discuss? Feel free to get in touch."
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {t("メールアドレス", "Email address")}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={submitError?.code === "emailRequired" || submitError?.code === "emailInvalid"}
                aria-describedby={submitError?.code === "emailRequired" || submitError?.code === "emailInvalid" ? "contact-error" : undefined}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {t("メッセージ", "Message")}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-invalid={submitError?.code === "messageRequired"}
                aria-describedby={submitError?.code === "messageRequired" ? "contact-error" : undefined}
                rows={6}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder={t("お問い合わせ内容を入力してください...", "Write your message here...")}
              />
            </div>

            {submitStatus === "success" && (
              <div role="status" className="p-4 bg-green-900 border border-green-500 rounded-md">
                <p className="text-green-300">
                  {t("お問い合わせを送信しました。ありがとうございます。", "Your message has been sent. Thank you!")}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div id="contact-error" role="alert" className="p-4 bg-red-900 border border-red-500 rounded-md">
                <p className="text-red-300">{errorMessage}</p>
                {hasDeliveryError && (
                  <div className="mt-3 space-y-2">
                    <a
                      href={fallbackMailto}
                      className="inline-block rounded-md border border-red-300 px-3 py-2 font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      {t("メールアプリを開く", "Open email app")}
                    </a>
                    <p className="text-sm text-red-100">
                      {t(
                        "入力内容を引き継いでメールアプリを開きます。内容を確認し、メールアプリ側で送信してください。",
                        "This opens your email app with your message filled in. Review it and send it from there."
                      )}
                    </p>
                    <p className="text-sm text-red-100 break-all">
                      {t("宛先：", "To: ")}{CONTACT_EMAIL}
                    </p>
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? t("送信中...", "Sending...") : t("送信する", "Send message")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
