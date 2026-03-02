"use client";

import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import type { ContactFormData } from "@/data/types";
import { formInputClass } from "@/lib/utils";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight mb-3">
          Спасибо за обращение!
        </h2>
        <p className="text-sm text-black/50 leading-relaxed">
          Мы свяжемся с вами в течение рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight mb-3">
        Свяжитесь с нами
      </h2>
      <p className="text-sm text-black/50 mb-8">
        Заполните форму — мы свяжемся с вами в течение рабочего дня
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ваше имя *"
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            className={formInputClass}
            required
          />
          <input
            type="tel"
            placeholder="Телефон *"
            value={form.phone}
            onChange={(e) =>
              setForm((f) => ({ ...f, phone: e.target.value }))
            }
            className={formInputClass}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={form.email ?? ""}
          onChange={(e) =>
            setForm((f) => ({ ...f, email: e.target.value }))
          }
          className={formInputClass}
        />
        <textarea
          placeholder="Сообщение"
          value={form.message ?? ""}
          onChange={(e) =>
            setForm((f) => ({ ...f, message: e.target.value }))
          }
          className={`${formInputClass} resize-none`}
          rows={4}
        />
        <button
          type="submit"
          className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-sm hover:bg-primary-hover active:scale-[0.98] transition-all"
        >
          Отправить
          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="text-xs text-black/30">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  );
}
