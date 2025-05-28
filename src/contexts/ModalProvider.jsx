import React, { createContext, useContext, useState, useCallback } from "react";

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
          <div className="bg-white max-w-1/2 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={hideModal}
            >
              ×
            </button>
            {typeof modalContent === "function" ? modalContent({ hideModal }) : modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};