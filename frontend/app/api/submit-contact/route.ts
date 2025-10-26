import { NextResponse } from "next/server"
import { saveUserToDatabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { nome, telefone } = await request.json()

    // Validate input
    if (!nome || !telefone) {
      return NextResponse.json({ error: "Nome e telefone são obrigatórios" }, { status: 400 })
    }

    // Save to Supabase database
    const result = await saveUserToDatabase(nome, telefone)
    
    console.log("User saved successfully:", result)

    return NextResponse.json({ 
      success: true, 
      message: "Dados salvos com sucesso",
      data: result 
    })
  } catch (error) {
    console.error("Error submitting contact:", error)
    return NextResponse.json({ 
      error: "Erro ao processar solicitação",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
}
