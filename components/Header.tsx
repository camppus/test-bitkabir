"use client";
import logo from "@/assets/images/Logotipo Oficial Tudkabir White Total-06 1.png";
import bars from "@/assets/icons/Frame.png";
import {
  Bell,
  CircleUser,
  Menu,
  MessageCircle,
  Search,
  User,
} from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { X } from "lucide-react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-600 to-cyan-700 relative">
      <header className="text-white px-4 md:px-8 lg:px-20 py-4">
        {/* Topo */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Image src={logo} alt="logo" className="w-36 md:w-auto" />

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            <button className="flex items-center gap-2 text-sm">
              🇦🇴 Português
            </button>

            <span className="rounded-full p-2 gap-2 border border-white/20 flex items-center justify-center">
              <button>
                <MessageCircle size={18} />
              </button>

              <button>
                <Bell size={18} />
              </button>
            </span>

            <button className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center">
              <CircleUser size={18} />
            </button>

            <button className="text-sm">Entrar</button>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-2">
            <Image src={bars} alt="bars" />
            <span>Todas as categorias</span>
          </button>

          <a href="#">Central de Fábrica</a>

          <a href="#">Central de Grossista</a>

          <a href="#">Central de Ajuda</a>
        </div>

        {/* Mobile */}
        <button className="lg:hidden absolute top-4  right-4 opacity-80" onClick={() => setOpenMenu(true)}>
          <Menu size={28} />
        </button>
      </header>

      <div
        onClick={() => setOpenMenu(false)}
        className={`
    fixed inset-0 bg-black/40 z-40
    transition-opacity duration-300

    ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      />

      {/* Menu */}
      <div
        className={`
    fixed
    top-0
    left-0

    h-screen
    w-72

    bg-white
    z-50

    transition-all
    duration-300

    ${openMenu ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="font-bold text-black">TudKaBir</h2>

          <button onClick={() => setOpenMenu(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-gray-700">
          <a href="#">Todas as categorias</a>

          <a href="#">Central de Fábrica</a>

          <a href="#">Central de Grossista</a>

          <a href="#">Central de Ajuda</a>

          <hr />

          <a href="#">Tornar-se Membro</a>

          <a href="#">Cadastrar como Fábrica</a>
        </div>
      </div>

      {/* Espaço para a search bar */}
      <div className="h-24 md:h-20"></div>

      {/* Busca */}
      <div
        className="
      bg-white
      shadow-lg
      px-4
      md:px-8
      py-4
      rounded-xl

      w-[95%]
      md:w-[85%]
      lg:w-[70%]

      absolute
      left-1/2
      -translate-x-1/2
      -bottom-10
    "
      >
        <div
          className="
      flex
      flex-col
      md:flex-row
      gap-3
    "
        >
          <input
            type="text"
            placeholder="O que deseja pesquisar hoje?"
            className="
          flex-1
          outline-none
          text-gray-700
          py-3
        "
          />

          <button
            className="
          bg-gradient-to-r
          from-green-600
          to-cyan-500

          text-white

          px-6
          py-3

          rounded-lg

          flex
          items-center
          justify-center
          gap-2
        "
          >
            <Search size={18} />
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
