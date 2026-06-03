import React, { useEffect, useRef } from 'react';

const CONFIG = [
  { speed: 30, opacity: 0.3, height: 12, width: 800 },
  { speed: 50, opacity: 0.6, height: 12, width: 800 },
  { speed: 20, opacity: 1, height: 6, width: 400 },
];

const updateWave = (waveElements: NodeListOf<Element>, index: number) => {
  for (const key of Object.keys(CONFIG[index])) {
    (waveElements[index] as HTMLElement).style.setProperty(
      `--${key}`,
      CONFIG[index][key as keyof typeof CONFIG[0]].toString()
    );
  }
};

export function WaveSeparator() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const WAVES = containerRef.current.querySelectorAll('.wave');
    WAVES.forEach((_, index) => updateWave(WAVES, index));

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
      .wave {
        animation: wave calc(var(--speed, 0) * 1s) infinite linear;
        background-image: url("https://assets.codepen.io/605876/wave--infinite.svg");
        background-size: 50% 100%;
        bottom: -5%;
        height: calc(var(--height, 0) * 1vh);
        left: 0;
        opacity: var(--opacity);
        position: absolute;
        right: 0;
        width: calc(var(--width, 0) * 1vw);
      }
      @keyframes wave {
        to {
          transform: translate(-50%, 0);
        }
      }
      .wave:nth-of-type(1) {
        --height: ${CONFIG[0].height};
        --opacity: ${CONFIG[0].opacity};
        --speed: ${CONFIG[0].speed};
        --width: ${CONFIG[0].width};
      }
      .wave:nth-of-type(2) {
        --height: ${CONFIG[1].height};
        --opacity: ${CONFIG[1].opacity};
        --speed: ${CONFIG[1].speed};
        --width: ${CONFIG[1].width};
      }
      .wave:nth-of-type(3) {
        --height: ${CONFIG[2].height};
        --opacity: ${CONFIG[2].opacity};
        --speed: ${CONFIG[2].speed};
        --width: ${CONFIG[2].width};
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-24 overflow-hidden bg-gradient-to-b from-transparent to-transparent"
    >
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
    </div>
  );
}