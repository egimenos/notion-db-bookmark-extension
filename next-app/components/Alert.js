import { useState } from "react";

const Alert = ({ title, message, type = "info" }) => {
  const [isShow, setIsShow] = useState(true);

  const dynamicStyles = {
    success: {
      "bg-100": "bg-green-100",
      "border-400": "border-green-800",
      "text-700": "text-green-700",
      "text-500": "text-green-500",
    },
    error: {
      "bg-100": "bg-red-100",
      "border-400": "border-red-400",
      "text-700": "text-red-700",
      "text-500": "text-red-500",
    },
    info: {
      "bg-100": "bg-blue-100",
      "border-400": "border-blue-400",
      "text-700": "text-blue-700",
      "text-500": "text-blue-500",
    },
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div
      className={`${dynamicStyles[type]["bg-100"]} border text-lg ${
        dynamicStyles[type]["border-400"]
      } ${dynamicStyles[type]["text-700"]} px-2 py-1 rounded relative ${
        isShow || "hidden"
      }`}
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="text-md block sm:inline">{message}</span>

      <span className="absolute top-0 bottom-0 right-0 px-2 py-1">
        <button onClick={handleClose}>
          <svg
            className={`fill-current h-6 w-6 ${dynamicStyles[type]["text-500"]}`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Alert;
