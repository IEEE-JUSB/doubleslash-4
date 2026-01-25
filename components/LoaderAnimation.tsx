import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RetroLoader: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [dots, setDots] = useState('');
  const [tetrisBlocks, setTetrisBlocks] = useState<Array<{id: number, left: number, rotation: number}>>([]);

  const messages = [
    'STARTING SYSTEM',
    'INITIALIZING',
    'LOADING MODULES',
    'CHECKING RESOURCES',
    'PREPARING INTERFACE',
    'ALMOST READY'
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 1500);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  // Tetris block spawner
  useEffect(() => {
    const spawnBlock = () => {
      const newBlock = {
        id: Date.now(),
        left: Math.random() * 80,
        rotation: Math.floor(Math.random() * 4) * 90
      };
      setTetrisBlocks(prev => [...prev, newBlock]);
      
      // Remove block after animation
      setTimeout(() => {
        setTetrisBlocks(prev => prev.filter(block => block.id !== newBlock.id));
      }, 5000);
    };

    const interval = setInterval(spawnBlock, 400);
    return () => clearInterval(interval);
  }, []);

  const tetrisShapes = [
    // I-block
    <div className="flex">
      <div className="w-4 h-4 bg-[#FFAF00] border border-[#FFD089]"></div>
      <div className="w-4 h-4 bg-[#FFAF00] border border-[#FFD089]"></div>
      <div className="w-4 h-4 bg-[#FFAF00] border border-[#FFD089]"></div>
      <div className="w-4 h-4 bg-[#FFAF00] border border-[#FFD089]"></div>
    </div>,
    // L-block
    <div>
      <div className="flex">
        <div className="w-4 h-4 bg-[#FFF7DB] border border-[#FFD089]"></div>
        <div className="w-4 h-4 bg-[#FFF7DB] border border-[#FFD089]"></div>
        <div className="w-4 h-4 bg-[#FFF7DB] border border-[#FFD089]"></div>
      </div>
      <div className="flex">
        <div className="w-4 h-4 bg-[#FFF7DB] border border-[#FFD089]"></div>
      </div>
    </div>,
    // T-block
    <div>
      <div className="flex">
        <div className="w-4 h-4 bg-[#891D08] border border-[#FFD089]"></div>
        <div className="w-4 h-4 bg-[#891D08] border border-[#FFD089]"></div>
        <div className="w-4 h-4 bg-[#891D08] border border-[#FFD089]"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-4 h-4 bg-[#891D08] border border-[#FFD089]"></div>
      </div>
    </div>,
    // Square
    <div>
      <div className="flex">
        <div className="w-4 h-4 bg-[#FF7054] border border-[#FFD089]"></div>
        <div className="w-4 h-4 bg-[#FF7054] border border-[#FFD089]"></div>
      </div>
      <div className="flex">
        <div className="w-4 h-4 bg-[#FF7054] border border-[#FFD089]"></div>
        <div className="w-4 h-4 bg-[#FF7054] border border-[#FFD089]"></div>
      </div>
    </div>
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap');
       
        
        /* Tetris falling animation */
        @keyframes tetris-fall {
          0% {
            transform: translateY(-100px) rotate(var(--rotation));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(var(--rotation));
            opacity: 0;
          }
        }
        
        .tetris-block {
          animation: tetris-fall 3s linear forwards;
        }
        
        /* Original loader animation */
        @keyframes loader {
          0% {
            transform: translateX(-30px);
          }
          100% {
            transform: translateX(150px);
          }
        }
        
        .loader-animate {
          animation: loader 2s infinite linear;
        }
        
        /* Glow animations */
        @keyframes glow-pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(237, 139, 64, 0.6)) brightness(1);
          }
          50% { 
            filter: drop-shadow(0 0 20px rgba(237, 139, 64, 1)) brightness(1.2);
          }
        }
        
        @keyframes glow-orange-pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 10px rgba(255, 208, 137, 0.6)) brightness(1);
          }
          50% { 
            filter: drop-shadow(0 0 25px rgba(255, 208, 137, 1)) brightness(1.2);
          }
        }
        
        @keyframes text-flicker {
          0%, 100% { opacity: 1; text-shadow: 0 0 10px rgba(237, 139, 64, 0.8); }
          10% { opacity: 0.9; text-shadow: 0 0 8px rgba(237, 139, 64, 0.6); }
          20% { opacity: 1; text-shadow: 0 0 12px rgba(237, 139, 64, 1); }
          30% { opacity: 0.95; text-shadow: 0 0 10px rgba(237, 139, 64, 0.8); }
        }
        
        @keyframes terminal-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        .glow-orange {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .glow-yellow {
          animation: glow-orange-pulse 3s ease-in-out infinite;
        }
        
        .text-flicker {
          animation: text-flicker 4s infinite;
        }
        
        .terminal-cursor {
          animation: terminal-blink 1s infinite;
        }
        
        .retro-font {
          font-family: 'VT323', monospace;
        }
        
        .mono-font {
          font-family: 'Share Tech Mono', monospace;
        }
        
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {tetrisBlocks.map((block, index) => (
          <div
            key={block.id}
            className="tetris-block absolute opacity-30"
            style={{
              left: `${block.left}%`,
              top: '-100px',
              '--rotation': `${block.rotation}deg`
            } as React.CSSProperties}
          >
            {tetrisShapes[index % tetrisShapes.length]}
          </div>
        ))}
      </div>
      
      
      <div className="relative text-center max-w-[90vw] px-5 z-10">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-center min-h-[50px] md:min-h-[70px] my-3 md:my-4">
            <Image 
              src='/logos/ieee-jusb-logo.png' 
              alt="IEEE JUSB" 
              width={1490}
              height={752}
              className="max-w-[100px] md:max-w-[140px] lg:max-w-[180px] h-auto glow-orange"
              priority
            />
          </div>
          
          <div className="my-4 md:my-6">
            <p className="retro-font text-base md:text-xl lg:text-2xl font-light tracking-[3px] md:tracking-[5px] lg:tracking-[7px] text-[#ED8B40] m-0 text-flicker">
              PRESENTS
            </p>
          </div>
          
          <div className="flex items-center justify-center min-h-[50px] md:min-h-[70px] my-3 md:my-4">
            <Image
              src='/logos/DoubleSlash_FullLogo.png' 
              alt="DoubleSlash 4.0" 
              width={500}
              height={500}
              className="max-w-[130px] md:max-w-[180px] lg:max-w-60 h-auto glow-yellow"
              priority
            />
          </div>
        </div>
        
        <div className="mb-6 md:mb-8 h-10 md:h-[50px] flex items-center justify-center">
          <p className="mono-font text-xs md:text-sm lg:text-base text-[#FFD089] tracking-[1px] md:tracking-[2px]"
             style={{ textShadow: '0 0 8px rgba(255, 208, 137, 0.7)' }}>
            {messages[currentMessage]}{dots}
            <span className="terminal-cursor inline-block w-2 h-3.5 md:h-4 bg-[#ED8B40] ml-1"
                  style={{ boxShadow: '0 0 8px rgba(237, 139, 64, 0.8)' }}></span>
          </p>
        </div>
        
        <div className="w-[150px] h-2.5 border-2 border-[#b2b2b2] rounded-[7px] mx-auto overflow-hidden mb-3 bg-black/70"
             style={{ padding: '2px 1px', fontSize: 0 }}>
          <div className="loader-animate inline-block w-[9px] h-full mr-0.5"
               style={{
                 background: 'linear-gradient(to bottom, #2838c7 0%, #5979ef 17%, #869ef3 32%, #869ef3 45%, #5979ef 59%, #2838c7 100%)'
               }}>
          </div>
          <div className="loader-animate inline-block w-[9px] h-full mr-0.5"
               style={{
                 background: 'linear-gradient(to bottom, #2838c7 0%, #5979ef 17%, #869ef3 32%, #869ef3 45%, #5979ef 59%, #2838c7 100%)'
               }}>
          </div>
          <div className="loader-animate inline-block w-[9px] h-full"
               style={{
                 background: 'linear-gradient(to bottom, #2838c7 0%, #5979ef 17%, #869ef3 32%, #869ef3 45%, #5979ef 59%, #2838c7 100%)'
               }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroLoader;