"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

export function HeroSection() {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-900 to-transparent opacity-70" />
      <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
          AI-Native Specification for UIs
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-center text-blue-100">
          Standardize UI components and Design Systems for the future
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-300 group"
          >
            <Link
              href="/examples"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              Explore Examples
            </Link>
          </Button>
          <Button
            asChild
            className="bg-white text-black hover:bg-white/90 transition-colors duration-300 group"
          >
            <Link
              href="/spec"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              View Specification{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
