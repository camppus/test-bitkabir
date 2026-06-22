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
import bellImg from "@/assets/images/Mensagem e notificações.png";
import { useState } from "react";
import { X } from "lucide-react";
import LanguageSelect from "./LanguageSelect";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex flex-col bg-linear-230 from-[#002879] to-[#1976D2] relative">
      <header className="text-white px-4 md:px-8 lg:px-20 py-4">
      
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Image src={logo} alt="logo" className="w-36 md:w-auto" />

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <LanguageSelect />
            <Image
              src={bellImg}
              alt="bellImg"
              className="h-7 w-20 opacity-80"
            />
            <button className="w-8 h-7 rounded-full opacity-80 border border-white/40 flex items-center justify-center">
              <User className="" size={16} />
            </button>
            <button className="text-sm">Entrar</button>
          </div>
        </div>
        
        <div className="hidden lg:px-4 lg:flex justify-between my-4 items-center gap-8">
          <span className="flex gap-5">
            <button className="flex items-center gap-2">
              <Image src={bars} alt="bars" />
              <span>Todas as categorias</span>
            </button>

            <a href="#">Central de Fábrica</a>

            <a href="#">Central de Grossista</a>

            <a href="#">Central de Ajuda</a>
          </span>

          <span className="flex gap-5 ">
            <a href="#">Tornar-se Membro</a>
            <a href="#">Cadastrar como Fabrica</a>
          </span>
        </div>

        
        <button
          className="lg:hidden absolute top-4  right-4 opacity-80"
          onClick={() => setOpenMenu(true)}
        >
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

      
      <div className="h-25 md:h-20"></div>

      
      <div
        className="
      bg-white
      shadow-lg
      px-5
      md:px-5
      py-6
      rounded-xl

      w-[95%]
      md:w-[85%]
      lg:w-[90%]


      absolute
      left-1/2
      -translate-x-1/2
      lg:-bottom-15
      mt-40
    "
      >
        <div>
          <p className="text-gray-600">Área de pesquisa</p>
        </div>
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
          text-gray-700 placeholder:text-sm
          py-3
        "
          />
          <button
            className="

            bg-linear-100
          from-[#5FC099]
          to-[#4294D0]

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
