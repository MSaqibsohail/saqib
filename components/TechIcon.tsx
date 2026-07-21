import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = '', size = 24 }: TechIconProps) {
  const normName = name.toLowerCase().trim();

  // Color schemas & custom SVGs for high-quality representation
  switch (normName) {
    case 'flutter':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6395 0L0 23.6395L7.20239 30.8419L38.0442 0H23.6395ZM23.6395 14.3982L9.23964 28.7981L16.442 36.0005L38.0442 14.3982H23.6395ZM23.6395 28.7964L16.4385 36L23.6395 43.2018H38.0442L30.8419 36L38.0442 28.7964H23.6395Z" fill="#02569B" />
          <path d="M16.4385 36L23.6395 28.7964H38.0442L30.8419 36L38.0442 43.2018H23.6395L16.4385 36Z" fill="#13B9FD" />
          <path d="M23.6395 28.7964L16.4385 36L23.6395 43.2018H30.8419L38.0442 36L30.8419 28.7964H23.6395Z" fill="#54C5F8" />
        </svg>
      );
    case 'dart':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1 2.3c-.3-.3-.7-.3-1 0L1.7 11.7c-.3.3-.3.8 0 1.1l5.4 5.4c.3.3.8.3 1.1 0l9.4-9.4c.3-.3.3-.8 0-1.1L12.1 2.3z" fill="#00B4AB" />
          <path d="M22.3 8.3c-.3-.3-.8-.3-1.1 0l-3.6 3.6 4.7 4.7c.3.3.3.8 0 1.1l-5.4 5.4c-.3.3-.8.3-1.1 0l-3.6-3.6 3.6-3.6c.3-.3.3-.8 0-1.1L12.3 11c-.3-.3-.8-.3-1.1 0l-3.6 3.6-2.2-2.2c-.3-.3-.3-.8 0-1.1l9.4-9.4c.3-.3.8-.3 1.1 0l6.5 6.5c.3.2.3.7 0 1z" fill="#005A9C" />
          <path d="M17.6 11.9l-3.6 3.6c-.3.3-.3.8 0 1.1l3.6 3.6c.3.3.8.3 1.1 0l3.6-3.6c.3-.3.3-.8 0-1.1l-3.6-3.6c-.3-.3-.8-.3-1.1 0z" fill="#00D2C4" />
        </svg>
      );
    case 'python':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.895 2.012c-2.176.02-4.137.19-5.184.66C5.03 3.42 4.9 4.393 4.9 5.567v2.247H9.52V8.45H2.7c-1.18 0-2.17.472-2.527 1.57-.39 1.196-.436 2.457-.436 3.738 0 1.32.062 2.593.473 3.738.307.854 1.107 1.488 2.227 1.542h1.696v-2.385c0-1.396.84-2.616 2.115-2.99 1.345-.395 2.766-.395 4.112 0 1.054.31 1.765 1.173 1.765 2.27v3.107h1.697c1.173 0 1.848-.564 2.21-1.57.382-1.066.471-2.316.471-3.68 0-1.29-.071-2.548-.445-3.627-.336-.97-1.12-1.543-2.236-1.543H14.48v-.636h4.62V5.567c0-1.173-.243-2.146-1.92-2.894-1.282-.572-3.11-.682-5.285-.66zM8.88 4.293a.684.684 0 110 1.37.684.684 0 010-1.37z" fill="#3776AB" />
          <path d="M12.105 21.988c2.176-.02 4.137-.19 5.184-.66 1.68-.748 1.81-1.72 1.81-2.895v-2.246H14.48v-.637h6.82c1.18 0 2.17-.472 2.527-1.57.39-1.196.436-2.457.436-3.738 0-1.32-.062-2.593-.473-3.738-.307-.854-1.107-1.488-2.227-1.542h-1.696v2.385c0 1.396-.84 2.616-2.115 2.99-1.345.395-2.766.395-4.112 0-1.054-.31-1.765-1.173-1.765-2.27V5.992H9.953c-1.173 0-1.848.564-2.21 1.57-.382 1.066-.471 2.316-.471 3.68 0 1.29.071 2.548.445 3.627.336.97 1.12 1.543 2.236 1.543h1.697v.636H5.03v2.247c0 1.173.243 2.146 1.92 2.894 1.282.572 3.11.682 5.285.66zM15.12 19.707a.684.684 0 110-1.37.684.684 0 010 1.37z" fill="#FFE873" />
        </svg>
      );
    case 'azure':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.4 19.2L11 8.8l3.6 6.8L5.4 19.2zm8.5-12l4.5 9h5.5l-7.2-12.2c-.3-.5-.9-.8-1.5-.8h-7.1L13.9 7.2z" fill="#0078D4" />
        </svg>
      );
    case 'sql server':
    case 'sql':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 3.57 2 5.5v13c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5v-13C22 3.57 17.52 2 12 2zm0 2c4.42 0 8 1.12 8 2.5S16.42 9 12 9s-8-1.12-8-2.5S7.58 4 12 4zM4 9.87c1.86.88 4.74 1.43 8 1.43s6.14-.55 8-1.43V12c0 1.38-3.58 2.5-8 2.5s-8-1.12-8-2.5V9.87zm0 4.87c1.86.88 4.74 1.43 8 1.43s6.14-.55 8-1.43v2.13c0 1.38-3.58 2.5-8 2.5s-8-1.12-8-2.5v-2.13z" fill="#CC292B" />
        </svg>
      );
    case 'sqlite':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.5 2 2 4 2 6.5v11C2 20 6.5 22 12 22s10-2 10-4.5v-11C22 4 17.5 2 12 2zm8 4.5c0 1.2-3.2 2.5-8 2.5S4 7.7 4 6.5 7.2 4 12 4s8 1.3 8 2.5z" fill="#003B57" />
          <path d="M12 11c-4.8 0-8-1.3-8-2.5v3c0 1.2 3.2 2.5 8 2.5s8-1.3 8-2.5v-3c0 1.2-3.2 2.5-8 2.5z" fill="#0F80CC" />
          <path d="M12 16c-4.8 0-8-1.3-8-2.5v3c0 1.2 3.2 2.5 8 2.5s8-1.3 8-2.5v-3c0 1.2-3.2 2.5-8 2.5z" fill="#41BDF7" />
        </svg>
      );
    case 'git':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3 11.5L12.5.7C12.1.3 11.4.3 11 .7L8.8 2.9l3.2 3.2c.7-.2 1.6 0 2.2.6.7.7.7 1.8.1 2.5L16.8 12c.7.2 1.2.9 1.2 1.7 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.7.4-1.4 1.1-1.7v-2.7l-2.2-2.2v5.7c.6.3 1.1 1 1.1 1.7 0 1.1-.9 2-2 2s-2-.9-2-2c0-.7.4-1.4 1.1-1.7V6.9c-.7-.3-1.1-1-1.1-1.7 0-.7.4-1.4 1.1-1.7L8.7 8.7c-.3.3-.3.8 0 1.1l10.8 10.8c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1.1 0-1.5v-5.2z" fill="#F05032" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case 'firebase':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.877 8.35L2.1 18.17a.64.64 0 00.99.71L12 12.35l-8.123-4z" fill="#FFC24C" />
          <path d="M12.012 12.349L3.89 8.35a.65.65 0 01.12-1.2l9.08-4.96a.65.65 0 01.76.08l-1.838 10.079z" fill="#FFA611" />
          <path d="M12 12.35l8.123 6.53a.64.64 0 00.99-.71l-1.777-9.82L12 12.35z" fill="#F47C06" />
          <path d="M12.012 12.349L21.9 8.35a.65.65 0 00-.12-1.2L12.7 2.19a.65.65 0 00-.76.08l.072 10.079z" fill="#DD2C00" />
        </svg>
      );
    case 'html':
    case 'html5':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 2h21l-1.9 19.1L12 23.5l-8.6-2.4L1.5 2z" fill="#E34F26" />
          <path d="M12 3.7v18l6.8-1.9 1.5-14.8H12z" fill="#F16529" />
          <path d="M12 11.2H8.8l-.2-2.4H12V6.4H6.2l.6 7h5.2v-2.2zm0 4.8l-3.3-.9-.2-2.1H6.3l.4 4.5 5.3 1.5v-3z" fill="#EBEBEB" />
          <path d="M12 11.2h3.3l-.3 3.6-3 1-.1 2.2 5.3-1.5.5-5.9c.1-1-.8-1.6-1.7-1.6H12v2.2zm0-4.8h5.7l.1-1.9c0-.2-.1-.3-.3-.3H12v2.2z" fill="#FFF" />
        </svg>
      );
    case 'css':
    case 'css3':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 2h21l-1.9 19.1L12 23.5l-8.6-2.4L1.5 2z" fill="#1572B6" />
          <path d="M12 3.7v18l6.8-1.9 1.5-14.8H12z" fill="#33A9DC" />
          <path d="M12 11.2H8.8l-.2-2.4H12V6.4H6.2l.6 7h5.2v-2.2zm0 4.8l-3.3-.9-.2-2.1H6.3l.4 4.5 5.3 1.5v-3z" fill="#EBEBEB" />
          <path d="M12 11.2h3.3l-.3 3.6-3 1-.1 2.2 5.3-1.5.5-5.9c.1-1-.8-1.6-1.7-1.6H12v2.2zm0-4.8h5.7l.1-1.9c0-.2-.1-.3-.3-.3H12v2.2z" fill="#FFF" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M18.7 18.5c-.7.5-1.6.8-2.5.8-1.8 0-2.8-1-2.8-2.6v-.2h1.6v.3c0 .8.4 1.2 1.2 1.2.6 0 1-.3 1-.8 0-.5-.3-.7-.9-1l-.8-.3c-1.5-.5-2.2-1.2-2.2-2.5 0-1.5 1.1-2.4 2.7-2.4.9 0 1.7.3 2.2.7l-.6 1.2c-.4-.3-1-.5-1.6-.5-.7 0-1.1.3-1.1.8 0 .4.3.6.9.9l.7.3c1.6.6 2.3 1.2 2.3 2.6 0 1.5-1.1 2.5-2.8 2.5zM11.5 18.5c-.5.4-1.2.7-2 .7-1.7 0-2.6-1-2.6-2.5v-.3h1.6v.3c0 .8.4 1.1 1 .1.6 0 .9-.3.9-.9v-5.2h1.7v5.2c0 1.8-1 2.6-2.6 2.6z" fill="#000" />
        </svg>
      );
    case '.net':
    case 'c#':
    case 'csharp':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#512BD4" />
          <path d="M7.5 10c-.5 0-.8.4-.8.8v2.4c0 .5.4.8.8.8h3c.5 0 .8-.4.8-.8v-2.4c0-.5-.4-.8-.8-.8H7.5zm.8 2.5v-.9h1.4v.9H8.3zm6.2-2.5v1.2H16v1.2h-1.5v1.6H13v-1.6H11.5v-1.2H13v-1.2h1.5z" fill="#FFF" />
        </svg>
      );
    case 'machine learning':
    case 'ml':
    case 'scikit-learn':
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" fill="#13B9FD" stroke="none" />
          <circle cx="5" cy="12" r="2.5" fill="#02569B" stroke="none" />
          <circle cx="19" cy="12" r="2.5" fill="#02569B" stroke="none" />
          <circle cx="12" cy="19" r="2.5" fill="#54C5F8" stroke="none" />
          <line x1="12" y1="7.5" x2="5" y2="9.5" className="stroke-slate-400" />
          <line x1="12" y1="7.5" x2="19" y2="9.5" className="stroke-slate-400" />
          <line x1="5" y1="14.5" x2="12" y2="16.5" className="stroke-slate-400" />
          <line x1="19" y1="14.5" x2="12" y2="16.5" className="stroke-slate-400" />
          <line x1="12" y1="7.5" x2="12" y2="16.5" className="stroke-slate-400 animate-pulse" />
        </svg>
      );
    default:
      // Generic code / database visual representer
      return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
