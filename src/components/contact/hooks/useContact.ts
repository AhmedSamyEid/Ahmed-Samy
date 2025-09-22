import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
export default function useContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current!, "YOUR_PUBLIC_KEY")
      .then(() => {
        setLoading(false);
        setStatus("✅ تم إرسال رسالتك بنجاح!");
        formRef.current?.reset();
      })
      .catch(() => {
        setLoading(false);
        setStatus("❌ فشل إرسال الرسالة، حاول مرة أخرى.");
      });
  };
  return { formRef, sendEmail, loading, status };
}
