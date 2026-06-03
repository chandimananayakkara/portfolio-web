import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';

export function WaveSeparator() {
  const { isDark } = useTheme();

  useEffect(() => {
    const waveColor = isDark 
      ? 'linear-gradient(180deg, rgba(96, 165, 250, 0.6), rgba(96, 165, 250, 0.2))'
      : 'linear-gradient(180deg, rgba(37, 99, 235, 0.6), rgba(37, 99, 235, 0.2))';

    // Remove old style if exists
    const oldStyle = document.getElementById('wave-separator-styles');
    if (oldStyle) oldStyle.remove();

    // Create and inject styles
    const style = document.createElement('style');
    style.id = 'wave-separator-styles';
    style.textContent = `
      .wave-separator-container {
        width: 100%;
        position: relative;
        z-index: 20;
        background: transparent;
        display: flex;
        justify-content: center;
        overflow: visible;
      }

      .sea {
        display: flex;
        gap: 2;
        filter: drop-shadow(0 -7px 10px rgba(255, 255, 255, 0.3)) blur(1px) contrast(3);
        align-items: flex-end;
        height:30px;
        width: 100%;
      }

      .wave {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: center;
        overflow: visible;
      }

      .wave_graphic {
        width: 8px;
        height: 20px;
        background: ${waveColor};
        border-radius: 2px;
      }

      .wave_fade {
        animation: fade 1400ms ease-in-out infinite alternate;
      }

      .wave_skew {
        animation: skew 2000ms ease-in-out infinite alternate;
      }

      .wave_translate {
        animation: translate 2000ms ease-in-out infinite alternate;
      }

      ${Array.from({ length: 100 }, (_, i) => {
        const delay = i * -20;
        return `
          .wave:nth-child(${i + 1}) .wave_fade {
            animation-delay: ${delay}ms;
          }
          .wave:nth-child(${i + 1}) .wave_skew {
            animation-delay: ${delay}ms;
          }
          .wave:nth-child(${i + 1}) .wave_translate {
            animation-delay: ${delay - 1000}ms;
          }
        `;
      }).join('')}

      @keyframes fade {
        0% {
          opacity: 0.05;
        }
        5% {
          opacity: 0.05;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes skew {
        0% {
          transform: skewY(-17.5deg);
        }
        100% {
          transform: skewY(17.5deg);
        }
      }

      @keyframes translate {
        0% {
          transform: translateY(50px);
        }
        100% {
          transform: translateY(-50px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style) document.head.removeChild(style);
    };
  }, [isDark]);

  return (
    <div className="wave-separator-container my-8 py-4">
      <div className="sea">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="wave">
            <div className="wave_fade">
              <div className="wave_translate">
                <div className="wave_skew">
                  <div className="wave_graphic" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}