## Refugees Connect & Grow Together
![alt text](https://github.com/SakshiDangi/refugee-support/blob/main/public/Flowchart.jpg)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# refugee-support
https://youtu.be/DU-VjefeqsA

### **Inspiration**  
Tahsin, a 22-year-old Rohingya refugee, fled Myanmar with his family, leaving behind everything he knew. Displaced and isolated, he struggled to access education but refused to give up. With sheer determination, Tahsin taught himself programming using borrowed devices and free online resources. Over time, he became a skilled developer and began mentoring others in his community, proving that technology could transform lives.
Inspired by Tahsin’s journey, Refugee Connect was created to empower refugees worldwide. The platform offers three core tools:
Translation Tool: Breaks language barriers with real-time AI-powered translation.
AI Chat Assistant: Provides 24/7 guidance on asylum processes, jobs, and local resources.
Job Search Engine: Matches refugees with employers based on skills and preferences.

Built with cutting-edge technologies like Next.js, OpenAI, and Gemini AI, Refugee Connect is a lifeline for refugees, helping them rebuild their lives with dignity and hope.

### **How We Built It**  
**Tech Stack**:  
| Layer               | Next.js Implementation          |  
|---------------------|----------------------------------|  
| **Frontend**        | App Router, React Server Components, Shadcn UI |  
| **APIs**            | Route Handlers (/api/translate, /api/chat) |  
| **AI Integration**  | Open AI API, Gemini AI  |  
| **Data**            | Vercel postgress |  

**Key Code Implementation**:  

Real-time translation API  
export async function POST(req: Request) {
  const { text } = await req.json();
  const translated = await tarjimly.translate(text);
  return NextResponse.json({ translated });
}

### **Part 1: Key Functionalities**
1. **Translation Tool**:
   - Multilingual text translation for breaking language barriers.
   - Real-time translation powered by OpenAI or Google Translate API.
   - Support for key languages spoken by refugees (e.g., Arabic, English, French).

2. **ChatGPT Assistance**:
   - AI-powered chatbot for answering refugee-specific queries.
   - Provides legal, healthcare, and educational information.
   - Context-aware responses tailored to refugee needs.

3. **Job Search Platform**:
   - Job listings with filtering by location, type (full-time, part-time, contract).
   - Recommendations based on skills and preferences.
   - Integration with AI for resume matching and job suggestions.

### **Part 2: Tech Stack**
1. **Frontend**:
   - **Next.js**: Fast rendering and routing.
   - **Tailwind CSS**: Responsive and modern UI design.
   - **React**: Component-based architecture.

2. **Backend**:
   - **Node.js**: Server-side logic.
   - **Prisma ORM**: Database interaction (PostgreSQL or MongoDB).
   - **Next.js API Routes**: For serverless functions.

3. **AI Integration**:
   - **OpenAI API**: ChatGPT and translation services.
   - **Google Translate API**: Alternative translation tool.
   - **Vercel AI SDK**: Streaming responses for real-time chat.


### **Part 3: Implementation Phases**
1. **Phase 1: Core Features**
   - Build translation tool with OpenAI/Google Translate API.
   - Develop ChatGPT-powered chatbot with refugee-specific prompts.

2. **Phase 2: Job Search Platform**
   - Create job posting and search functionalities.
   - Implement AI-powered job recommendations.

3. **Phase 3: Optimization & Deployment**
   - Optimize performance (SSR/ISR in Next.js).
   - Deploy on Vercel for scalability.


### **Challenges**  
- **CORS Configuration**: Solving Next.js cross-origin issues in `next.config.js`  
- **Arabic RTL Support**: Implementing `direction: rtl` CSS logic without breaking layouts  
- **Offline-First**: Overcoming Next.js hydration issues with local storage caching  

### **What We Learned**  
-Next.js for responsive design and fast rendering.
-OpenAI for chat assistance and translation tools.
- Edge Runtime limitations for AI models requiring >50MB memory  
- Refugee communities prefer WhatsApp integration over native apps  

### **What's Next**  
- **WhatsApp Bot Migration**: Using Twilio API for message forwarding  
- **Predictive Analytics**: Integration with UNHCR’s ProGres v4 database  
- **Hardware Kits**: Raspberry Pi mesh networks for offline sync  
- **Education Portal**: Next.js 14’s Partial Prerendering for course modules  
  [Presentation](presentation.pdf)
