"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import NeonBackground from "../components/NeonBackground";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

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
        setErrorMessage("送信に失敗しました");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      if (error instanceof Error) {
        setErrorMessage(`送信に失敗しました: ${error.message}`);
      } else {
        setErrorMessage("送信に失敗しました");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NeonBackground />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              お問い合わせ
            </h1>
            <p className="mt-2 text-gray-300">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="お問い合わせ内容を入力してください..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-900 border border-green-500 rounded-md">
                <p className="text-green-300">
                  お問い合わせを送信しました。ありがとうございます。
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-900 border border-red-500 rounded-md">
                <p className="text-red-300">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
