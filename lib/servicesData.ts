export interface ServiceDetail {
  slug: string;
  icon: string;
  gradient: string;
  title: { pl: string; en: string };
  subtitle: { pl: string; en: string };
  description: { pl: string[]; en: string[] };
  benefits: { pl: string[]; en: string[] };
  useCases: { pl: string[]; en: string[] };
  technologies: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "automatyzacja-procesow",
    icon: "⚡",
    gradient: "from-amber-500 to-orange-500",
    title: { pl: "Automatyzacja procesów", en: "Process Automation" },
    subtitle: {
      pl: "Eliminujemy powtarzalne zadania i optymalizujemy przepływ pracy",
      en: "We eliminate repetitive tasks and optimize workflow",
    },
    description: {
      pl: [
        "Automatyzacja procesów biznesowych to jeden z najskuteczniejszych sposobów na uwolnienie zasobów ludzkich od monotonnych, powtarzalnych czynności. Analizujemy każdy etap Waszych procesów operacyjnych i identyfikujemy miejsca, gdzie wdrożenie automatyzacji przyniesie największe korzyści.",
        "Nasze rozwiązania obejmują zarówno proste automatyzacje jednoetapowe - jak automatyczne wysyłanie raportów czy powiadomień - jak i złożone, wieloetapowe workflow łączące dziesiątki systemów i angażujące modele AI do podejmowania decyzji w czasie rzeczywistym.",
        "Efekty wdrożeń są mierzalne od pierwszych tygodni: redukcja czasu realizacji procesów nawet o 80%, eliminacja błędów ludzkich, a przede wszystkim - uwolnienie zespołu do pracy wymagającej kreatywności i relacji z klientami.",
      ],
      en: [
        "Business process automation is one of the most effective ways to free human resources from monotonous, repetitive tasks. We analyze every stage of your operational processes and identify where automation will bring the greatest benefits.",
        "Our solutions range from simple single-step automations - like automatic report sending or notifications - to complex, multi-step workflows connecting dozens of systems and engaging AI models for real-time decision making.",
        "Implementation results are measurable from the first weeks: up to 80% reduction in process completion time, elimination of human errors, and above all - freeing your team for work that requires creativity and customer relationships.",
      ],
    },
    benefits: {
      pl: [
        "Redukcja czasu realizacji procesów nawet o 80%",
        "Eliminacja błędów wynikających z czynnika ludzkiego",
        "Praca automatyzacji 24/7 bez przerw i urlopów",
        "Skalowanie operacji bez proporcjonalnego wzrostu zatrudnienia",
        "Pełna audytowalność i logowanie każdego kroku procesu",
        "Szybki zwrot z inwestycji - zazwyczaj w ciągu 2-4 miesięcy",
      ],
      en: [
        "Up to 80% reduction in process completion time",
        "Elimination of errors from human factors",
        "Automation works 24/7 without breaks or vacations",
        "Scale operations without proportional headcount growth",
        "Full auditability and logging of every process step",
        "Fast ROI - typically within 2-4 months",
      ],
    },
    useCases: {
      pl: [
        "Automatyczne generowanie i wysyłanie faktur oraz raportów",
        "Przetwarzanie zamówień i aktualizacja stanów magazynowych",
        "Onboarding nowych pracowników lub klientów",
        "Monitoring danych i automatyczne alerty przy anomaliach",
        "Archiwizacja dokumentów i zarządzanie obiegiem dokumentów",
      ],
      en: [
        "Automatic invoice generation and sending of reports",
        "Order processing and inventory updates",
        "Onboarding new employees or clients",
        "Data monitoring and automatic alerts on anomalies",
        "Document archiving and document workflow management",
      ],
    },
    technologies: ["n8n", "Make.com", "Power Automate", "Python", "REST API"],
  },
  {
    slug: "integracje-systemow",
    icon: "🔗",
    gradient: "from-indigo-500 to-blue-500",
    title: { pl: "Integracje systemów", en: "System Integrations" },
    subtitle: {
      pl: "Łączymy Wasze narzędzia w jeden spójny ekosystem",
      en: "We connect your tools into one coherent ecosystem",
    },
    description: {
      pl: [
        "Większość firm korzysta z dziesiątek różnych systemów - CRM, ERP, platforma e-commerce, narzędzia marketingowe, systemy HR, komunikatory. Problem w tym, że każdy z tych systemów działa w izolacji, co wymusza ręczne przepisywanie danych między systemami, prowadzi do błędów i dezaktualizacji informacji.",
        "Tworzymy integracje, które sprawiają, że wszystkie Wasze systemy rozmawiają ze sobą w czasie rzeczywistym. Zmiana w CRM automatycznie aktualizuje dane w systemie fakturowania. Nowe zamówienie z e-commerce trafia od razu do magazynu i systemu wysyłki. Lead z kampanii reklamowej od razu pojawia się w CRM z pełną historią interakcji.",
        "Budujemy zarówno integracje point-to-point między konkretnymi systemami, jak i centralne hubby danych, które stają się sercem ekosystemu informatycznego firmy.",
      ],
      en: [
        "Most companies use dozens of different systems - CRM, ERP, e-commerce platforms, marketing tools, HR systems, communication tools. The problem is that each system operates in isolation, requiring manual data entry between systems, leading to errors and outdated information.",
        "We create integrations that make all your systems talk to each other in real time. A change in CRM automatically updates billing data. A new e-commerce order immediately reaches the warehouse and shipping system. A lead from an ad campaign immediately appears in CRM with full interaction history.",
        "We build both point-to-point integrations between specific systems and central data hubs that become the heart of a company's IT ecosystem.",
      ],
    },
    benefits: {
      pl: [
        "Eliminacja ręcznego przepisywania danych między systemami",
        "Spójność danych w czasie rzeczywistym we wszystkich systemach",
        "Redukcja błędów wynikających z wielokrotnego wprowadzania danych",
        "Oszczędność czasu zespołu - brak potrzeby logowania się do wielu systemów",
        "Pełny widok klienta w jednym miejscu (360° customer view)",
        "Łatwe dodawanie nowych systemów do ekosystemu",
      ],
      en: [
        "Elimination of manual data re-entry between systems",
        "Real-time data consistency across all systems",
        "Reduction of errors from multiple data entries",
        "Team time savings - no need to log into multiple systems",
        "Complete customer view in one place (360° customer view)",
        "Easy addition of new systems to the ecosystem",
      ],
    },
    useCases: {
      pl: [
        "Integracja CRM (HubSpot/Salesforce) z systemem ERP",
        "Synchronizacja e-commerce (Shopify/WooCommerce) z magazynem i księgowością",
        "Integracja systemu HR z Active Directory i narzędziami komunikacyjnymi",
        "Centralizacja leadów z wielu źródeł (formularz, reklamy, social media)",
        "Automatyczna synchronizacja kalendarzy i zadań między narzędziami",
      ],
      en: [
        "CRM (HubSpot/Salesforce) integration with ERP system",
        "E-commerce (Shopify/WooCommerce) sync with warehouse and accounting",
        "HR system integration with Active Directory and communication tools",
        "Centralizing leads from multiple sources (form, ads, social media)",
        "Automatic calendar and task synchronization between tools",
      ],
    },
    technologies: ["REST API", "GraphQL", "Webhooks", "n8n", "OAuth 2.0", "Zapier"],
  },
  {
    slug: "chatboty-ai",
    icon: "💬",
    gradient: "from-violet-500 to-purple-600",
    title: { pl: "Chatboty & Asystenci AI", en: "AI Chatbots & Assistants" },
    subtitle: {
      pl: "Inteligentni asystenci obsługujący klientów i pracowników 24/7",
      en: "Intelligent assistants serving customers and employees 24/7",
    },
    description: {
      pl: [
        "Nowoczesne chatboty AI to coś zupełnie innego od prostych botów sprzed kilku lat. Oparte na modelach językowych (GPT-4o, Claude, Gemini) potrafią prowadzić naturalne rozmowy, rozumieć kontekst, odpowiadać na złożone pytania i wykonywać akcje w imieniu użytkownika.",
        "Budujemy asystentów dopasowanych do specyfiki Waszego biznesu - z dostępem do Waszej bazy wiedzy, dokumentacji, historii klientów i systemów wewnętrznych. Asystent wie, jakie produkty oferujecie, zna Waszą politykę cenową i może samodzielnie obsłużyć reklamację, złożyć zamówienie czy umówić spotkanie.",
        "Wdrażamy asystentów na stronach www, w Slacku, MS Teams, WhatsApp i własnych aplikacjach. Każdy asystent jest w pełni konfigurowalny pod względem tonu komunikacji, zakresu działania i warunków przekierowania do człowieka.",
      ],
      en: [
        "Modern AI chatbots are completely different from the simple bots of a few years ago. Based on language models (GPT-4o, Claude, Gemini), they can hold natural conversations, understand context, answer complex questions and perform actions on behalf of the user.",
        "We build assistants tailored to your business specifics - with access to your knowledge base, documentation, customer history and internal systems. The assistant knows what products you offer, knows your pricing policy, and can independently handle a complaint, place an order or schedule a meeting.",
        "We deploy assistants on websites, in Slack, MS Teams, WhatsApp and custom applications. Each assistant is fully configurable in terms of communication tone, scope of operation and conditions for escalation to a human.",
      ],
    },
    benefits: {
      pl: [
        "Obsługa klientów przez całą dobę bez dodatkowych kosztów",
        "Natychmiastowe odpowiedzi na powtarzające się pytania",
        "Zbieranie danych o potrzebach klientów w ustrukturyzowany sposób",
        "Odciążenie zespołu obsługi klienta od rutynowych zapytań",
        "Personalizacja odpowiedzi w oparciu o historię klienta",
        "Wielojęzyczność bez dodatkowych kosztów",
      ],
      en: [
        "Customer service around the clock without additional costs",
        "Instant responses to repetitive questions",
        "Collecting customer need data in a structured way",
        "Relieving customer service team from routine queries",
        "Personalized responses based on customer history",
        "Multilingualism without additional costs",
      ],
    },
    useCases: {
      pl: [
        "Asystent obsługi klienta na stronie e-commerce",
        "Wewnętrzny asystent HR odpowiadający na pytania pracowników",
        "Bot kwalifikujący leady i umawiający spotkania",
        "Asystent techniczny pomagający w rozwiązywaniu problemów",
        "Chatbot onboardingowy dla nowych klientów lub pracowników",
      ],
      en: [
        "Customer service assistant on e-commerce website",
        "Internal HR assistant answering employee questions",
        "Lead qualification bot scheduling meetings",
        "Technical assistant helping with problem solving",
        "Onboarding chatbot for new customers or employees",
      ],
    },
    technologies: ["OpenAI GPT-4o", "Claude Anthropic", "LangChain", "Pinecone", "Slack API", "WhatsApp API"],
  },
  {
    slug: "analiza-danych",
    icon: "📊",
    gradient: "from-cyan-500 to-teal-500",
    title: { pl: "Analiza danych z AI", en: "AI Data Analysis" },
    subtitle: {
      pl: "Automatyczne raporty, predykcje i wgląd w dane w czasie rzeczywistym",
      en: "Automated reports, predictions and real-time data insights",
    },
    description: {
      pl: [
        "Większość firm posiada ogromne ilości danych rozsianych po dziesiątkach systemów - ale zaledwie ułamek tych danych jest faktycznie wykorzystywany do podejmowania decyzji. Powód? Brak czasu, brak narzędzi lub brak kompetencji do przetwarzania danych na skalę.",
        "Wdrażamy rozwiązania, które automatycznie zbierają dane z wszystkich Waszych źródeł, przetwarzają je z użyciem modeli AI i dostarczają gotowe insighty bezpośrednio do skrzynki mailowej zarządu lub dashboardu. Codziennie rano - raport z poprzedniego dnia. W czasie rzeczywistym - alert o anomalii w sprzedaży.",
        "Budujemy też systemy predykcyjne: prognozowanie popytu, wykrywanie churnu, scoring leadów. Modele AI uczą się na Waszych historycznych danych i z czasem stają się coraz trafniejsze.",
      ],
      en: [
        "Most companies have enormous amounts of data scattered across dozens of systems - but only a fraction of this data is actually used for decision making. The reason? Lack of time, tools or competencies to process data at scale.",
        "We implement solutions that automatically collect data from all your sources, process it using AI models and deliver ready insights directly to management's inbox or dashboard. Every morning - a report from the previous day. In real time - an alert about a sales anomaly.",
        "We also build predictive systems: demand forecasting, churn detection, lead scoring. AI models learn from your historical data and become more accurate over time.",
      ],
    },
    benefits: {
      pl: [
        "Automatyczne raporty bez angażowania analityka",
        "Decyzje oparte na danych, nie intuicji",
        "Wykrywanie anomalii i trendów w czasie rzeczywistym",
        "Prognozowanie wyników na podstawie danych historycznych",
        "Jednolity dashboard łączący dane z wielu źródeł",
        "Redukcja czasu przygotowania raportów o 90%",
      ],
      en: [
        "Automatic reports without involving an analyst",
        "Data-driven decisions, not gut feelings",
        "Real-time anomaly and trend detection",
        "Results forecasting based on historical data",
        "Unified dashboard combining data from multiple sources",
        "90% reduction in report preparation time",
      ],
    },
    useCases: {
      pl: [
        "Codzienny raport sprzedażowy wysyłany automatycznie do zarządu",
        "System wykrywania churnu dla platform SaaS",
        "Prognozowanie zapotrzebowania na produkty w e-commerce",
        "Analiza sentymentu opinii klientów",
        "Dashboard KPI w czasie rzeczywistym dla e-commerce",
      ],
      en: [
        "Daily sales report sent automatically to management",
        "Churn detection system for SaaS platforms",
        "Demand forecasting for e-commerce products",
        "Customer review sentiment analysis",
        "Real-time KPI dashboard for e-commerce",
      ],
    },
    technologies: ["Python", "Pandas", "OpenAI", "Airtable", "Google Sheets API", "Supabase"],
  },
  {
    slug: "automatyzacja-marketingu",
    icon: "📧",
    gradient: "from-pink-500 to-rose-500",
    title: { pl: "Automatyzacja marketingu", en: "Marketing Automation" },
    subtitle: {
      pl: "Personalizowane kampanie i nurturing leadów napędzany przez AI",
      en: "Personalized campaigns and AI-driven lead nurturing",
    },
    description: {
      pl: [
        "Marketing automation przestał być domeną tylko dużych korporacji. Dziś nawet małe firmy mogą automatyzować komunikację z klientami na poziomie niedostępnym wcześniej - dzięki AI, które personalizuje każdą wiadomość w oparciu o zachowanie i profil odbiorcy.",
        "Budujemy systemy, które automatycznie segmentują bazę kontaktów, dobierają optymalny czas wysyłki, personalizują treść emaili i SMS-ów, prowadzą leady przez lejek sprzedażowy i informują handlowca, gdy lead jest gotowy do rozmowy.",
        "Integrujemy się z popularnymi platformami (Mailchimp, ActiveCampaign, HubSpot, Klaviyo) lub budujemy własne rozwiązania oparte na n8n i Make.com, które dają pełną kontrolę i brak limitów licencyjnych.",
      ],
      en: [
        "Marketing automation is no longer just for large corporations. Today even small companies can automate customer communication at a level previously unavailable - thanks to AI that personalizes every message based on recipient behavior and profile.",
        "We build systems that automatically segment contact databases, select optimal send times, personalize email and SMS content, guide leads through the sales funnel and inform sales reps when a lead is ready to talk.",
        "We integrate with popular platforms (Mailchimp, ActiveCampaign, HubSpot, Klaviyo) or build custom solutions based on n8n and Make.com, giving full control and no licensing limits.",
      ],
    },
    benefits: {
      pl: [
        "Komunikacja z klientem w odpowiednim momencie, automatycznie",
        "Wyższe konwersje dzięki personalizacji treści przez AI",
        "Brak przeoczonego leadu - każdy jest prowadzony przez lejek",
        "Oszczędność czasu działu marketingu na manualnych kampaniach",
        "Mierzalny ROI z każdej automatyzacji marketingowej",
        "A/B testy przeprowadzane automatycznie przez AI",
      ],
      en: [
        "Customer communication at the right moment, automatically",
        "Higher conversions thanks to AI content personalization",
        "No missed leads - every one is guided through the funnel",
        "Marketing team time savings on manual campaigns",
        "Measurable ROI from every marketing automation",
        "A/B tests conducted automatically by AI",
      ],
    },
    useCases: {
      pl: [
        "Sekwencja onboardingowa dla nowych klientów SaaS",
        "Automatyczne follow-upy po złożeniu oferty",
        "Kampania odzyskiwania porzuconych koszyków w e-commerce",
        "Newsletter personalizowany pod profil czytelnika",
        "Automatyczny scoring i kwalifikacja leadów z reklam",
      ],
      en: [
        "Onboarding sequence for new SaaS customers",
        "Automatic follow-ups after submitting a proposal",
        "Abandoned cart recovery campaign in e-commerce",
        "Newsletter personalized to reader profile",
        "Automatic scoring and qualification of leads from ads",
      ],
    },
    technologies: ["Make.com", "n8n", "Mailchimp API", "ActiveCampaign", "OpenAI", "HubSpot"],
  },
  {
    slug: "optymalizacja-workflow",
    icon: "🔄",
    gradient: "from-emerald-500 to-green-500",
    title: { pl: "Optymalizacja workflow", en: "Workflow Optimization" },
    subtitle: {
      pl: "Audyt i redesign procesów biznesowych z wykorzystaniem AI",
      en: "Audit and redesign of business processes using AI",
    },
    description: {
      pl: [
        "Przed wdrożeniem jakiejkolwiek automatyzacji warto zadać pytanie: czy automatyzujemy właściwy proces? Czasem proces jest po prostu źle zaprojektowany i jego automatyzacja tylko utrwali problem. Dlatego każde nasze wdrożenie zaczynamy od audytu.",
        "Mapujemy aktualne procesy, identyfikujemy wąskie gardła, zbędne kroki i miejsca, gdzie tracony jest czas. Następnie projektujemy zoptymalizowany workflow - często jeszcze przed automatyzacją sam redesign procesu przynosi znaczące oszczędności.",
        "Korzystamy z narzędzi AI do analizy logów, ticketów i historycznych danych, aby obiektywnie wskazać, gdzie czas jest marnowany. Dostarczamy pełną dokumentację procesu i czytelne mapy przepływów dla całego zespołu.",
      ],
      en: [
        "Before implementing any automation, it's worth asking: are we automating the right process? Sometimes a process is simply poorly designed and automating it will only cement the problem. That's why we start every implementation with an audit.",
        "We map current processes, identify bottlenecks, unnecessary steps and places where time is lost. Then we design an optimized workflow - often the process redesign alone brings significant savings even before automation.",
        "We use AI tools to analyze logs, tickets and historical data to objectively identify where time is wasted. We deliver full process documentation and clear flow maps for the entire team.",
      ],
    },
    benefits: {
      pl: [
        "Obiektywna diagnoza wąskich gardeł w procesach",
        "Redukcja zbędnych kroków i decyzji w workflow",
        "Pełna dokumentacja procesów jako efekt uboczny",
        "Szybsze wdrożenie późniejszych automatyzacji",
        "Większa spójność działania zespołu",
        "Podstawa do dalszego skalowania operacji",
      ],
      en: [
        "Objective diagnosis of bottlenecks in processes",
        "Reduction of unnecessary steps and decisions in workflow",
        "Full process documentation as a side effect",
        "Faster implementation of subsequent automations",
        "Greater team operational consistency",
        "Foundation for further scaling of operations",
      ],
    },
    useCases: {
      pl: [
        "Audyt procesu obsługi zamówień w firmie handlowej",
        "Redesign procesu onboardingu klienta w agencji",
        "Optymalizacja procesu rekrutacji z użyciem AI",
        "Mapowanie i uproszczenie przepływu dokumentów w firmie prawniczej",
        "Audyt procesu wsparcia technicznego i projektowanie chatbota AI",
      ],
      en: [
        "Order fulfillment process audit for a trading company",
        "Client onboarding process redesign for an agency",
        "AI-powered recruitment process optimization",
        "Document flow mapping and simplification for a law firm",
        "Technical support process audit and AI chatbot design",
      ],
    },
    technologies: ["n8n", "Notion", "Miro", "Python", "OpenAI", "Make.com"],
  },
];
