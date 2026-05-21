export type Lang = "pl" | "en";

export const translations = {
  pl: {
    nav: {
      services: "Usługi",
      about: "O mnie",
      howItWorks: "Jak działam",
      technologies: "Technologie",
      contact: "Kontakt",
      cta: "Porozmawiajmy",
    },
    hero: {
      badge: "AI Automation Expert",
      title: "Automatyzuj z AI.",
      titleAccent: "Działaj szybciej.",
      subtitle:
        "Projektuję inteligentne automatyzacje, które uwalniają Twój czas, eliminują błędy i skalują Twój biznes — bez zatrudniania dodatkowych ludzi.",
      cta1: "Umów konsultację",
      cta2: "Zobacz usługi",
      stats: [
        { value: "10×", label: "szybsze procesy" },
        { value: "80%", label: "mniej manualnej pracy" },
        { value: "24/7", label: "działanie automatyzacji" },
      ],
    },
    services: {
      title: "Co automatyzuję",
      subtitle: "Kompleksowe rozwiązania AI dla Twojego biznesu",
      items: [
        {
          icon: "⚡",
          gradient: "from-amber-500 to-orange-500",
          title: "Automatyzacja procesów",
          description:
            "Eliminuję powtarzalne zadania i optymalizuję przepływ pracy. Oszczędzasz czas, redukujesz koszty i minimalizujesz błędy.",
        },
        {
          icon: "🔗",
          gradient: "from-indigo-500 to-blue-500",
          title: "Integracje systemów",
          description:
            "Łączę CRM, ERP, e-commerce i narzędzia marketingowe w jeden spójny ekosystem wymieniający dane w czasie rzeczywistym.",
        },
        {
          icon: "💬",
          gradient: "from-violet-500 to-purple-600",
          title: "Chatboty & Asystenci AI",
          description:
            "Buduję inteligentnych asystentów obsługujących klientów i pracowników 24/7, rozumiejących kontekst i uczących się z każdej rozmowy.",
        },
        {
          icon: "📊",
          gradient: "from-cyan-500 to-teal-500",
          title: "Analiza danych z AI",
          description:
            "Automatyczne raporty, predykcje trendów i wgląd w dane biznesowe w czasie rzeczywistym — bez udziału analityka.",
        },
        {
          icon: "📧",
          gradient: "from-pink-500 to-rose-500",
          title: "Automatyzacja marketingu",
          description:
            "Personalizowane kampanie, automatyczne follow-upy i nurturing leadów z AI, który dobiera treść do każdego odbiorcy.",
        },
        {
          icon: "🔄",
          gradient: "from-emerald-500 to-green-500",
          title: "Optymalizacja workflow",
          description:
            "Audyt i redesign procesów biznesowych z wykorzystaniem najnowszych narzędzi AI. Od mapy procesu do działającego rozwiązania.",
        },
      ],
    },
    about: {
      badge: "O mnie",
      title: "Łączę biznes",
      titleAccent: "z mocą AI",
      description:
        "Jestem specjalistą od automatyzacji AI z doświadczeniem we wdrażaniu inteligentnych rozwiązań dla firm różnej wielkości. Pomagam przedsiębiorcom i zespołom odzyskać czas, który tracą na powtarzalne, manualne zadania.",
      description2:
        "Moje podejście łączy głęboką wiedzę techniczną z rozumieniem biznesu — nie wdrażam technologii dla samej technologii, lecz rozwiązania realnie wpływające na wyniki i efektywność organizacji.",
      points: [
        "Indywidualne podejście i analiza procesów",
        "Dobór optymalnych narzędzi do każdego przypadku",
        "Pełne wdrożenie, testy i szkolenie zespołu",
        "Wsparcie techniczne po wdrożeniu",
      ],
      imageAlt: "Rafał Breński — AI Automation Expert",
    },
    howItWorks: {
      title: "Jak działam",
      subtitle: "Prosty, sprawdzony proces — od pomysłu do działającej automatyzacji",
      steps: [
        {
          number: "01",
          icon: "🔍",
          title: "Analiza",
          description:
            "Bezpłatna konsultacja, podczas której mapujemy Twoje procesy i identyfikujemy największe możliwości automatyzacji. Zero zobowiązań.",
        },
        {
          number: "02",
          icon: "🎨",
          title: "Projekt",
          description:
            "Projektuję architekturę rozwiązania, dobierając optymalne narzędzia i technologie. Otrzymujesz plan z szacowanymi oszczędnościami.",
        },
        {
          number: "03",
          icon: "⚙️",
          title: "Wdrożenie",
          description:
            "Buduję i testuję automatyzacje, zapewniając pełną integrację z Twoimi istniejącymi systemami. Szybkie sprinty, bieżący feedback.",
        },
        {
          number: "04",
          icon: "🚀",
          title: "Wsparcie",
          description:
            "Szkolenie zespołu, dokumentacja i ciągła optymalizacja. Monitoruję działanie automatyzacji i jestem dostępny po wdrożeniu.",
        },
      ],
    },
    technologies: {
      title: "Technologie",
      subtitle: "Najlepsze narzędzia AI i automatyzacji",
      categories: [
        {
          name: "Automatyzacja",
          tools: ["n8n", "Make.com", "Zapier", "Power Automate"],
        },
        {
          name: "Modele AI",
          tools: ["OpenAI GPT-4o", "Claude Anthropic", "Google Gemini", "Llama 3"],
        },
        {
          name: "Integracje",
          tools: ["REST API", "Webhooks", "GraphQL", "OAuth 2.0"],
        },
        {
          name: "Bazy danych",
          tools: ["Airtable", "Notion", "Supabase", "PostgreSQL"],
        },
        {
          name: "Komunikacja",
          tools: ["Slack", "MS Teams", "Email", "WhatsApp API"],
        },
        {
          name: "Programowanie",
          tools: ["Python", "Node.js", "TypeScript", "FastAPI"],
        },
      ],
    },
    contact: {
      badge: "Kontakt",
      title: "Zacznijmy",
      titleAccent: "współpracę",
      subtitle:
        "Umów bezpłatną konsultację i dowiedz się, jak AI może zoptymalizować Twój biznes. Odpowiadam w ciągu 24 godzin.",
      form: {
        name: "Imię i nazwisko",
        email: "Adres email",
        company: "Firma (opcjonalnie)",
        message: "Opisz swój projekt lub wyzwanie biznesowe",
        send: "Wyślij wiadomość",
        sending: "Wysyłam...",
        success: "Wiadomość wysłana! Odezwę się wkrótce.",
        error: "Coś poszło nie tak. Napisz bezpośrednio na email.",
      },
      info: {
        email: "hello@sprintpmc.com",
        location: "Polska — praca zdalna",
        available: "Dostępny do nowych projektów",
      },
    },
    footer: {
      tagline: "Automatyzacje AI dla ambitnych firm.",
      links: ["Usługi", "O mnie", "Jak działam", "Technologie", "Kontakt"],
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },

  en: {
    nav: {
      services: "Services",
      about: "About",
      howItWorks: "How it works",
      technologies: "Technologies",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge: "AI Automation Expert",
      title: "Automate with AI.",
      titleAccent: "Move faster.",
      subtitle:
        "I design intelligent automations that free your time, eliminate errors, and scale your business — without hiring additional people.",
      cta1: "Book a consultation",
      cta2: "See services",
      stats: [
        { value: "10×", label: "faster processes" },
        { value: "80%", label: "less manual work" },
        { value: "24/7", label: "automation uptime" },
      ],
    },
    services: {
      title: "What I automate",
      subtitle: "Comprehensive AI solutions for your business",
      items: [
        {
          icon: "⚡",
          gradient: "from-amber-500 to-orange-500",
          title: "Process Automation",
          description:
            "I eliminate repetitive tasks and optimize workflow. You save time, reduce costs, and minimize errors across your organization.",
        },
        {
          icon: "🔗",
          gradient: "from-indigo-500 to-blue-500",
          title: "System Integrations",
          description:
            "I connect CRM, ERP, e-commerce, and marketing tools into one coherent ecosystem exchanging data in real time.",
        },
        {
          icon: "💬",
          gradient: "from-violet-500 to-purple-600",
          title: "AI Chatbots & Assistants",
          description:
            "I build intelligent assistants serving customers and employees 24/7, understanding context and learning from every conversation.",
        },
        {
          icon: "📊",
          gradient: "from-cyan-500 to-teal-500",
          title: "AI Data Analysis",
          description:
            "Automated reports, trend predictions, and real-time business data insights — no analyst required.",
        },
        {
          icon: "📧",
          gradient: "from-pink-500 to-rose-500",
          title: "Marketing Automation",
          description:
            "Personalized campaigns, automated follow-ups, and AI-powered lead nurturing that tailors content to every recipient.",
        },
        {
          icon: "🔄",
          gradient: "from-emerald-500 to-green-500",
          title: "Workflow Optimization",
          description:
            "Audit and redesign of business processes using the latest AI tools. From process map to working solution.",
        },
      ],
    },
    about: {
      badge: "About me",
      title: "Bridging business",
      titleAccent: "with AI power",
      description:
        "I'm an AI automation specialist with experience implementing intelligent solutions for companies of all sizes. I help entrepreneurs and teams reclaim the time they lose to repetitive, manual tasks.",
      description2:
        "My approach combines deep technical knowledge with business understanding — I don't implement technology for its own sake, but solutions that genuinely impact results and organizational efficiency.",
      points: [
        "Individual approach and process analysis",
        "Selecting optimal tools for each use case",
        "Full implementation, testing and team training",
        "Technical support after deployment",
      ],
      imageAlt: "Rafał Breński — AI Automation Expert",
    },
    howItWorks: {
      title: "How I work",
      subtitle: "A simple, proven process — from idea to working automation",
      steps: [
        {
          number: "01",
          icon: "🔍",
          title: "Analysis",
          description:
            "Free consultation where we map your processes and identify the biggest automation opportunities. Zero commitment required.",
        },
        {
          number: "02",
          icon: "🎨",
          title: "Design",
          description:
            "I design the solution architecture, selecting optimal tools and technologies. You receive a plan with estimated savings.",
        },
        {
          number: "03",
          icon: "⚙️",
          title: "Implementation",
          description:
            "I build and test automations, ensuring full integration with your existing systems. Fast sprints, continuous feedback.",
        },
        {
          number: "04",
          icon: "🚀",
          title: "Support",
          description:
            "Team training, documentation, and continuous optimization. I monitor automations and remain available after deployment.",
        },
      ],
    },
    technologies: {
      title: "Technologies",
      subtitle: "Best AI and automation tools",
      categories: [
        {
          name: "Automation",
          tools: ["n8n", "Make.com", "Zapier", "Power Automate"],
        },
        {
          name: "AI Models",
          tools: ["OpenAI GPT-4o", "Claude Anthropic", "Google Gemini", "Llama 3"],
        },
        {
          name: "Integrations",
          tools: ["REST API", "Webhooks", "GraphQL", "OAuth 2.0"],
        },
        {
          name: "Databases",
          tools: ["Airtable", "Notion", "Supabase", "PostgreSQL"],
        },
        {
          name: "Communication",
          tools: ["Slack", "MS Teams", "Email", "WhatsApp API"],
        },
        {
          name: "Programming",
          tools: ["Python", "Node.js", "TypeScript", "FastAPI"],
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Let's start",
      titleAccent: "working together",
      subtitle:
        "Book a free consultation and discover how AI can optimize your business. I respond within 24 hours.",
      form: {
        name: "Full name",
        email: "Email address",
        company: "Company (optional)",
        message: "Describe your project or business challenge",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Please email directly.",
      },
      info: {
        email: "hello@sprintpmc.com",
        location: "Poland — remote work",
        available: "Available for new projects",
      },
    },
    footer: {
      tagline: "AI automations for ambitious companies.",
      links: ["Services", "About", "How it works", "Technologies", "Contact"],
      rights: "All rights reserved.",
    },
  },
} as const;

export type Translations = typeof translations.pl;
