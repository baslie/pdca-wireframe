"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function CaseCtaForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", company: "", phone: "", email: "", comment: "" });
    }, 5000);
  };

  const inputBase =
    "w-full px-4 py-3 text-sm rounded-md border border-slate-200 bg-white text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";

  if (submitted) {
    return (
      <section id="case-cta-form" className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Заявка отправлена
          </h2>
          <p className="text-white/60">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="case-cta-form" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Обсудить похожий проект
            </h2>
            <p className="text-white/60 max-w-md">
              Расскажите о вашей задаче — мы предложим подходящее решение на
              основе нашего опыта. Первая консультация бесплатна.
            </p>
          </div>

          {/* Right - form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Имя *"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                className={inputBase}
              />
              <input
                placeholder="Компания"
                value={form.company}
                onChange={(e) =>
                  setForm((p) => ({ ...p, company: e.target.value }))
                }
                className={inputBase}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                type="tel"
                placeholder="Телефон *"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                className={inputBase}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                className={inputBase}
              />
            </div>
            <textarea
              placeholder="Расскажите о задаче"
              rows={3}
              value={form.comment}
              onChange={(e) =>
                setForm((p) => ({ ...p, comment: e.target.value }))
              }
              className={inputBase + " resize-none"}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary-hover transition-colors"
            >
              Отправить заявку
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
