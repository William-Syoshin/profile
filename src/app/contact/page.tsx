"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import NeonBackground from "../components/NeonBackground";
import { useLanguage } from "../components/LanguageProvider";

type ContactError =
  | { code: "emailRequired" | "emailInvalid" | "messageRequired" }
  | { code: "sendFailed"; details?: string };

const ContactPage = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<ContactError | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setSubmitError(null);

    const emailInput = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    let validationError: ContactError | null = null;
    if (!email.trim()) {
      validationError = { code: "emailRequired" };
    } else if (emailInput.validity.typeMismatch) {
      validationError = { code: "emailInvalid" };
    } else if (!message) {
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

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_w8g3x7h", // EmailJSのサービスID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_w0p4xa5", // EmailJSのテンプレートID
        {
          from_email: email,
          message: message,
          to_email: "william236969@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Xq6ye17YZQ0AFtBmX" // EmailJSの公開キー
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setSubmitError({ code: "sendFailed" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setSubmitError({
        code: "sendFailed",
        details: error instanceof Error ? error.message : undefined,
      });
    } finally {
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
      case "sendFailed":
        return `${t("送信に失敗しました", "Your message could not be sent")}${
          submitError.details ? `: ${submitError.details}` : t("。", ".")
        }`;
      default:
        return "";
    }
  })();

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
