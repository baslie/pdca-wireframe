"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { leadFormDirections } from "@/data/home";
import { formInputClass } from "@/lib/utils";

export function CtaFormBlock() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    direction: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", company: "", direction: "" });
    }, 5000);
  };

  if (submitted) {
    return (
      <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black mb-3 tracking-tight">
            Заявка отправлена
          </h2>
          <p className="text-sm text-black/50">
            Мы свяжемся с вами в течение рабочего дня
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black mb-3 tracking-tight">
            Получите консультацию эксперта
          </h2>
          <p className="text-sm text-black/50">
            Подберём программу и вышлем предложение в течение рабочего дня
          </p>
        </div>

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
            type="text"
            placeholder="Компания"
            value={form.company}
            onChange={(e) =>
              setForm((f) => ({ ...f, company: e.target.value }))
            }
            className={formInputClass}
          />
          <select
            value={form.direction}
            onChange={(e) =>
              setForm((f) => ({ ...f, direction: e.target.value }))
            }
            className={formInputClass}
          >
            <option value="">Интересующее направление</option>
            {leadFormDirections.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white font-semibold text-sm rounded-sm hover:bg-primary-hover active:scale-[0.99] transition-all"
          >
            Отправить заявку
          </button>
          <p className="text-xs text-center text-black/30">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </section>
  );
}
