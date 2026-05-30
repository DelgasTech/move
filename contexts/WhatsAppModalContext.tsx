"use client";

import { createContext, useContext, useState } from "react";

interface WhatsAppModalContextValue {
  isOpen: boolean;
  message: string;
  openModal: (message?: string) => void;
  closeModal: () => void;
}

const DEFAULT_MSG = "Olá! Tenho interesse em conhecer os planos da Move Academia.";

const WhatsAppModalContext = createContext<WhatsAppModalContextValue>({
  isOpen: false,
  message: DEFAULT_MSG,
  openModal: () => {},
  closeModal: () => {},
});

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MSG);
  return (
    <WhatsAppModalContext.Provider
      value={{
        isOpen,
        message,
        openModal: (msg) => { setMessage(msg ?? DEFAULT_MSG); setIsOpen(true); },
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  return useContext(WhatsAppModalContext);
}
