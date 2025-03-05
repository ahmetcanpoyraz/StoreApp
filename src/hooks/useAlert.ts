// useAlert.ts
import { useState } from "react";

export const useAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const showAlert = (alertTitle: string, alertMessage: string) => {
    setTitle(alertTitle);
    setMessage(alertMessage);
    setIsVisible(true);
  };

  const hideAlert = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    title,
    message,
    showAlert,
    hideAlert,
  };
};
