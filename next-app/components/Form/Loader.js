const Loader = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <rect x="1" y="4" width="6" height="14" opacity="1">
        <animate
          id="spinner_rQ7m"
          begin="0;spinner_2dMV.end-0.25s"
          attributeName="opacity"
          dur="0.75s"
          values="1;.2"
          fill="freeze"
        />
      </rect>
      <rect x="9" y="4" width="6" height="14" opacity=".4">
        <animate
          begin="spinner_rQ7m.begin+0.15s"
          attributeName="opacity"
          dur="0.75s"
          values="1;.2"
          fill="freeze"
        />
      </rect>
      <rect x="17" y="4" width="6" height="14" opacity=".3">
        <animate
          id="spinner_2dMV"
          begin="spinner_rQ7m.begin+0.3s"
          attributeName="opacity"
          dur="0.75s"
          values="1;.2"
          fill="freeze"
        />
      </rect>
    </svg>
  );
};

export default Loader;
