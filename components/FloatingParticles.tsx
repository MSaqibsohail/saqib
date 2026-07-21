'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || 600;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
        // Distribute randomly initially
        this.y = Math.random() * (canvas?.height || 600);
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 20;
        this.size = Math.random() * 2 + 1; // 1px to 3px
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -(Math.random() * 0.5 + 0.2); // Slowly floating upwards
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap horizontal edges
        if (canvas && (this.x < 0 || this.x > canvas.width)) {
          this.speedX = -this.speedX;
        }

        // Reset if float past the top
        if (this.y < 0) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Dynamic colors based on light/dark theme
        const color = theme === 'dark' ? '2, 86, 155' : '19, 185, 253';
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  );
}
