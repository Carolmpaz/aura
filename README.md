# Aura

## 1. Contexto Social

O Brasil enfrenta um cenário de profunda desigualdade socioeconômica de gênero, especialmente entre mães chefes de família. Segundo o Relatório Anual Socioeconômico da Mulher (RASEAM 2025) (Ministério das Mulheres, IBGE, ONU Mulheres), 58,6% dos domicílios chefiados por mulheres sobrevivem com até um salário mínimo, percentual que ultrapassa 70% entre mulheres negras e pardas.

De acordo com o Datafolha (2023):
- 44% das mães solo vivem com até R$ 1.412 por mês, o que as coloca entre as faixas mais vulneráveis da população;  
- 18% estão desempregadas, contra 8% das mães casadas;  
- 69% das mulheres brasileiras são mães, consolidando o papel feminino na estrutura familiar e assistencial do país.

Além disso, o Censo 2022 identificou 2,4 milhões de pessoas com TEA (Transtorno do Espectro Autista) no Brasil, uma parcela da qual grande parte se encontra em famílias com baixa renda e chefiadas por mulheres.  
Essas famílias dependem fortemente de benefícios governamentais como o BPC/LOAS, que exige renda familiar inferior a ¼ do salário mínimo.

---

## 2. Problema

A opacidade institucional e a burocracia informacional dos programas assistenciais criam uma barreira quase intransponível para mães em vulnerabilidade socioeconômica.  
Mesmo com informações públicas, a falta de clareza e centralização impede que elas saibam quais benefícios podem receber, quais documentos precisam apresentar e onde iniciar o processo.

Essas mães enfrentam uma sobrecarga particular:
- Cuidam sozinhas dos filhos neurodivergentes (TEA, TDAH, dislexia etc.);  
- Vivem em moradias precárias ou informais, dificultando a comprovação de residência;  
- Falta de tempo para comparecer a órgãos públicos;  
- Dificuldade de entendimento de termos jurídicos e administrativos (“burocratês”).

Como consequência:
- Muitos benefícios são negados por ausência de documentação correta;  
- Persistem em um ciclo de exclusão econômica e emocional, sendo obrigadas a depender de “boca a boca” e grupos de WhatsApp para informação.

---

## 3. Depoimentos (baseados em estudos etnográficos)

O relato traz a perspectiva de uma mãe de uma criança autista de quatro anos, que enfrenta diariamente os desafios emocionais, burocráticos e institucionais do cuidado. Após tentativas frustradas de obter ajuda pelos canais oficiais de atendimento ao cidadão, ela conseguiu sozinha realizar o processo de cadastro e busca por benefícios, sem apoio direto do poder público.

Seu filho, descrito como amoroso e sensível, apresenta atraso severo na fala e crises frequentes. Com muito esforço, a mãe garantiu uma vaga em uma escola inclusiva, onde havia inicialmente uma professora de apoio individual. Entretanto, esse suporte foi retirado pela instituição, sob a justificativa de que “outros alunos precisam mais”.

A mãe narra episódios de preconceito e descaso, incluindo uma reunião em que a direção escolar a questionou pela ausência de tratamento especializado, insinuando negligência, sem reconhecer os custos e barreiras de acesso aos serviços públicos e terapias. Tal situação gerou sofrimento, insegurança e sensação de exclusão.

Mesmo abalada, ela segue levando o filho à escola, movida pelo desejo de incluí-lo e promover seu desenvolvimento. Sua maior angústia é o futuro: teme o dia em que possa faltar e não haja quem cuide dele com paciência e amor.
O depoimento reflete o cotidiano de milhares de mães brasileiras que vivem a maternidade atípica sem rede de apoio, enfrentando sobreposição de vulnerabilidades, econômica, emocional e institucional, e que, apesar disso, persistem na busca por dignidade e inclusão para seus filhos.

---

## 4. Análise de Mercado e Acesso Digital

**População-alvo conectada:**  
De acordo com o IBGE (PNAD TIC 2024), 96% das mulheres de baixa renda utilizam o WhatsApp diariamente, transformando o aplicativo em principal meio de comunicação comunitária e institucional.

**Demanda latente:**
- O Brasil possui mais de 20 milhões de lares chefiados por mulheres;  
- Cerca de 7 em cada 10 usuárias de programas sociais se informam via grupos digitais;  
- O tempo médio para conseguir o BPC varia entre 90 e 180 dias, segundo o INSS, devido a erros documentais e laudos incompletos.

Esse contexto posiciona a proposta como uma solução inclusiva e de impacto, com alta escalabilidade para Secretarias de Assistência Social, escolas e prefeituras.

---

## 5. Viabilização da Ideia

**Motivação principal:** Simplificar o acesso a direitos sociais via tecnologia acessível.  

**Viabilidade técnica:**  
- Integração pronta entre n8n, WhatsApp Cloud API, OpenAI API e Google Sheets;   
- Escalável para uso com Supabase ou bancos SQL no futuro.

**Viabilidade de impacto:**  
- Reduz erros nos cadastros e perda de benefícios;  
- Gera indicadores valiosos sobre barreiras de acesso (dados anonimizados);  
- Facilita parcerias com ONGs e programas ESG.

**Viabilidade financeira:**  
- Modelo baseado em **patrocínio de ONGs e prefeituras** (plano B2G/ESG);  
- Custo operacional médio mensal: R$ 5.500 – R$ 6.000;  
- CAC estimado (aquisição por lead): R$ 8 – R$ 15;  
- ROI projetado: > 3,5 ×.

---

## 6. Solução

### 6.1 Descrição da Ideia

**Aura** — um chatbot no WhatsApp que age como um advogado digital popular.  
Ele entende o contexto da mãe, lista os benefícios sociais aos quais ela pode ter direito e fornece de maneira empática:
- Documentos necessários;  
- Passo a passo de solicitação;  
- Validação simples dos arquivos enviados;  
- Feedback de completude (“documento completo”, “foto ilegível”, “faltando assinatura”).  

A conversa é humanizada: linguagem acessível, mensagens curtas e possibilidade de áudio.

**Impactos esperados:**
- Aumentar o número de famílias que acessam o BPC e o Bolsa Família sem erro documental;  
- Reduzir o tempo médio da jornada;  
- Melhorar o engajamento cívico e a confiança na rede assistencial.

---

## 7. Arquitetura Técnica

**Fluxo de funcionamento simplificado**

