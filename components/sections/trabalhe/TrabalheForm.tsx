"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle, FiUpload } from "react-icons/fi";

const WA_NUMBER = "5511999999999";

const areas = [
  "Personal Trainer",
  "Instrutor de Dança",
  "Fisioterapia",
  "Nutrição",
  "Recepção / Administrativo",
  "Outro",
];

const units = [
  "Rondon",
  "Rui Barbosa",
  "Sete de Setembro",
  "Central / Parque",
  "Todas",
];

export default function TrabalheForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    unidade: "",
    mensagem: "",
    curriculo: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setForm((prev) => ({ ...prev, curriculo: file.name }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Candidatura — Move Academia*\n\n` +
        `*Nome:* ${form.nome}\n` +
        `*E-mail:* ${form.email}\n` +
        `*Telefone:* ${form.telefone}\n` +
        `*Área:* ${form.area}\n` +
        `*Unidade:* ${form.unidade}\n` +
        `*Apresentação:* ${form.mensagem}\n` +
        (form.curriculo ? `*Currículo:* ${form.curriculo}` : "")
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Candidate-se
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal mt-3">
            Envie sua Candidatura
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Preencha o formulário e envie via WhatsApp. Nossa equipe entrará em contato.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1.5">
              Nome completo <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-1.5">
                E-mail <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-1.5">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(XX) 9XXXX-XXXX"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-1.5">
                Área de interesse <span className="text-primary">*</span>
              </label>
              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
              >
                <option value="">Selecione...</option>
                {areas.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-1.5">
                Unidade de preferência
              </label>
              <select
                name="unidade"
                value={form.unidade}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
              >
                <option value="">Selecione...</option>
                {units.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1.5">
              Apresentação / Mensagem
            </label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder="Conte um pouco sobre você, sua experiência e por que quer fazer parte do time Move..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1.5">
              Currículo (PDF ou DOC)
            </label>
            <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-primary transition-colors">
              <FiUpload className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm">
                {form.curriculo || "Clique para selecionar o arquivo"}
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-orange-500 text-white font-bold py-4 rounded-full text-base transition-colors shadow-lg shadow-primary/30 mt-2"
          >
            <FiMessageCircle className="w-5 h-5" />
            Enviar via WhatsApp
          </button>

          <p className="text-center text-gray-400 text-xs">
            Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
