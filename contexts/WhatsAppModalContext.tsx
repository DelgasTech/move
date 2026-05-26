"use client";

import { createContext, useContext, useState } from "react";

interface WhatsAppModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextValue>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WhatsAppModalContext.Provider
      value={{ isOpen, openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  return useContext(WhatsAppModalContext);
}
