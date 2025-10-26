"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const [showTerms, setShowTerms] = useState(false)
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top Half - Background Image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src="/happy-child-outdoors-natural-light.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[-88%] w-full z-10">
  <h1 className="w-full text-center font-display font-bold tracking-tight text-[#E8F1CD] text-[40vw] leading-none drop-shadow-2xl">
    AURA
  </h1>
</div>

    



      {/* Bottom Half - Solid Color */}
      <div className="relative flex-1 bg-[#E8F1CD] flex items-center justify-center">
        {/* Content */}
        <div className="w-full max-w-md mx-auto px-6 py-12 flex flex-col items-center text-center">
          {/* Main Text - Using Neue Montreal */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3A28] leading-tight text-balance">
              Olá! Aqui, a informação vira força para garantir direitos.
            </h2>

            <button
              onClick={() => setShowTerms(true)}
              className="text-sm text-[#485D43] hover:text-[#2C3A28] underline underline-offset-4 transition-colors font-medium"
            >
              Clique para entender os termos de uso e de privacidade (é simples, de verdade).
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => router.push("/contato")}
            size="lg"
            className="bg-[#485D43] hover:bg-[#3A4A35] text-white px-12 py-6 text-lg rounded-full shadow-lg font-medium"
          >
            Começar
          </Button>
        </div>
      </div>

      {/* Terms Dialog */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold">Termos de Uso e Privacidade</DialogTitle>
            <DialogDescription className="text-base mt-4">É simples, de verdade.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm text-foreground/80">
            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">1. Sobre o AURA</h3>
              <p>
                O AURA é uma plataforma dedicada a transformar informação em força para garantir direitos. Nosso
                objetivo é conectar pessoas com recursos e conhecimento essenciais.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">2. Coleta de Dados</h3>
              <p>
                Coletamos apenas as informações necessárias para entrar em contato com você: nome e número de telefone.
                Esses dados são armazenados de forma segura e nunca serão compartilhados com terceiros sem seu
                consentimento.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">3. Uso das Informações</h3>
              <p>Suas informações serão utilizadas exclusivamente para:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Entrar em contato sobre nossos serviços</li>
                <li>Fornecer informações relevantes sobre direitos</li>
                <li>Melhorar nossa plataforma e atendimento</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">4. Seus Direitos</h3>
              <p>
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento. Entre
                em contato conosco para exercer esses direitos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-foreground mb-2">5. Segurança</h3>
              <p>
                Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não
                autorizado, alteração ou divulgação.
              </p>
            </section>
          </div>

          <div className="mt-6 flex justify-end">
            <Button onClick={() => setShowTerms(false)}>Entendi</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
