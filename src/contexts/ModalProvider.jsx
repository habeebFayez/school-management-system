import React, { createContext, useContext, useState, useCallback } from "react";
import { X } from "lucide-react"

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const showModal = useCallback((content) => setModalContent(() => content), []);
  const hideModal = useCallback(() => setModalContent(null), []);

  
  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white max-w-full rounded-lg shadow-lg p-6 py-8 relative">
            <button
              className="absolute w-10 h-10 items-center right-0 top-0 text-gray-600 hover:text-gray-400 "
              onClick={hideModal}
            >
              <X className="w-6 h-6 " />
            </button>
            {typeof modalContent === "function" ? modalContent({ hideModal }) : modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};