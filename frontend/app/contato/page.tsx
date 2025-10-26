"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function ContatoPage() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome || !telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, telefone }),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar dados")
      }

      toast({
        title: "Dados enviados!",
        description: "Entraremos em contato em breve.",
      })

      setNome("")
      setTelefone("")
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar seus dados. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }
    return value
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top Half - Background Image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src="/happy-child-outdoors-natural-light.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[-90.5%] w-full z-10">
  <h1 className="w-full text-center font-display font-bold tracking-tight text-[#485D43] text-[40vw] leading-none drop-shadow-2xl">
    AURA
  </h1>
</div>

      {/* Bottom Half - Solid Color with Form */}
      <div className="relative flex-1 bg-[#485D43] flex items-center justify-center">
        {/* Content */}
        <div className="w-full max-w-sm mx-auto px-12 py-12 flex flex-col items-center">
          {/* Form Card */}
          <div className="w-full space-y-8">
          <h2 className="text-2xl md:text-3xl font-sans text-white text-center leading-tight text-balance">
  Olá! Informe os seus dados, para contato.
</h2>


            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white text-base">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Caroline Moraes"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="bg-[#E8F1CD] border-0 text-[#2C3A28] placeholder:text-[#485D43]/60 h-12 rounded-full px-6"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-white text-base">
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 96814-3162"
                  value={telefone}
                  onChange={(e) => setTelefone(formatPhone(e.target.value))}
                  className="bg-[#E8F1CD] border-0 text-[#2C3A28] placeholder:text-[#485D43]/60 h-12 rounded-full px-6"
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-48 mx-auto bg-[#E8F1CD] hover:bg-[#D5E0B8] text-[#2C3A28] px-12 py-6 text-lg rounded-full shadow-lg flex items-center justify-center gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Enviar
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
