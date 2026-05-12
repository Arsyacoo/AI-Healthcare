<!-- CareGuide AI - Home -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CareGuide AI - Your AI Health Assistant</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700;800&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "primary": "#005da7",
                      "on-primary-fixed": "#001c39",
                      "inverse-surface": "#303030",
                      "primary-fixed-dim": "#a4c9ff",
                      "surface-bright": "#fbf9f8",
                      "on-primary-container": "#fdfcff",
                      "on-tertiary": "#ffffff",
                      "inverse-primary": "#a4c9ff",
                      "on-secondary-container": "#00743a",
                      "on-tertiary-container": "#fffbff",
                      "on-tertiary-fixed": "#291800",
                      "surface": "#fbf9f8",
                      "tertiary-fixed": "#ffddb4",
                      "secondary-fixed-dim": "#66dd8b",
                      "surface-variant": "#e4e2e2",
                      "on-error": "#ffffff",
                      "primary-container": "#2976c7",
                      "error": "#ba1a1a",
                      "on-background": "#1b1c1c",
                      "on-tertiary-fixed-variant": "#633f00",
                      "surface-tint": "#0060ac",
                      "surface-container-low": "#f5f3f3",
                      "on-secondary-fixed": "#00210c",
                      "outline": "#717783",
                      "secondary-fixed": "#83fba5",
                      "inverse-on-surface": "#f2f0f0",
                      "on-surface-variant": "#414751",
                      "secondary": "#006d36",
                      "on-primary": "#ffffff",
                      "primary-fixed": "#d4e3ff",
                      "surface-dim": "#dbd9d9",
                      "on-error-container": "#93000a",
                      "on-surface": "#1b1c1c",
                      "surface-container-highest": "#e4e2e2",
                      "on-secondary": "#ffffff",
                      "background": "#fbf9f8",
                      "tertiary-container": "#a06900",
                      "on-secondary-fixed-variant": "#005227",
                      "surface-container-high": "#eae8e7",
                      "outline-variant": "#c1c7d3",
                      "on-primary-fixed-variant": "#004883",
                      "surface-container-lowest": "#ffffff",
                      "tertiary": "#7f5300",
                      "error-container": "#ffdad6",
                      "secondary-container": "#83fba5",
                      "surface-container": "#efeded",
                      "tertiary-fixed-dim": "#ffb953"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "md": "24px",
                      "base": "8px",
                      "margin-desktop": "80px",
                      "lg": "48px",
                      "sm": "12px",
                      "gutter": "24px",
                      "xs": "4px",
                      "margin-mobile": "16px",
                      "xl": "64px"
              },
              "fontFamily": {
                      "headline-lg-mobile": ["Atkinson Hyperlegible Next"],
                      "label-md": ["Source Sans 3"],
                      "headline-md": ["Atkinson Hyperlegible Next"],
                      "body-lg": ["Source Sans 3"],
                      "body-md": ["Source Sans 3"],
                      "button-text": ["Source Sans 3"],
                      "headline-lg": ["Atkinson Hyperlegible Next"]
              },
              "fontSize": {
                      "headline-lg-mobile": ["32px", {"lineHeight": "38px", "fontWeight": "700"}],
                      "label-md": ["16px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                      "headline-md": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                      "body-lg": ["20px", {"lineHeight": "30px", "fontWeight": "400"}],
                      "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                      "button-text": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                      "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
              }
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .active-nav-link {
            border-bottom: 2px solid #005da7;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
<!-- Sidebar (Desktop Only) -->
<aside class="hidden md:flex flex-col fixed left-0 top-0 h-full w-80 bg-surface border-r border-outline-variant py-lg px-md z-40">
<div class="flex items-center gap-base mb-xl">
<span class="text-headline-md font-headline-md text-primary font-bold">CareGuide AI</span>
</div>
<div class="flex flex-col gap-base flex-grow">
<a class="flex items-center gap-md px-md py-sm bg-secondary-container text-on-secondary-container rounded-lg font-bold scale-98 transition-transform duration-150" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-body-md">Home</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
<span class="font-body-md">Symptom Guidance</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span class="font-body-md">AI Chat</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="pill">pill</span>
<span class="font-body-md">Medication Info</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
<span class="font-body-md">Preventive Tips</span>
</a>
</div>
<div class="mt-auto pt-lg border-t border-outline-variant">
<button class="w-full bg-primary text-on-primary font-button-text py-md px-lg rounded-xl hover:shadow-lg active:scale-95 transition-all">
                Get Support
            </button>
</div>
</aside>
<!-- Top App Bar (Mobile & Desktop Header) -->
<header class="fixed top-0 right-0 left-0 md:left-80 z-30 bg-surface shadow-sm">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-7xl mx-auto">
<div class="md:hidden">
<span class="text-headline-md font-headline-md font-bold text-primary">CareGuide AI</span>
</div>
<nav class="hidden md:flex gap-xl">
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Home</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Symptom Guidance</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">AI Chat</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Medication Info</a>
</nav>
<div class="flex items-center gap-md">
<button class="material-symbols-outlined text-on-surface-variant" data-icon="search">search</button>
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined" data-icon="person">person</span>
</div>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="md:ml-80 pt-24 pb-32 md:pb-xl min-h-screen px-margin-mobile md:px-margin-desktop bg-background">
<!-- Hero Section -->
<section class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mb-xl">
<div class="flex flex-col gap-lg">
<h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
                    AI-powered health education assistant for symptom guidance and preventive care
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Empowering you with reliable medical information and proactive wellness strategies. Navigate your health journey with confidence using our intelligent guide.
                </p>
<div class="flex flex-wrap gap-md">
<button class="bg-primary text-on-primary font-button-text py-md px-xl rounded-xl shadow-lg active:scale-95 transition-all">
                        Start Health Check
                    </button>
<button class="bg-surface border-2 border-primary text-primary font-button-text py-md px-xl rounded-xl active:scale-95 transition-all">
                        Learn Health Tips
                    </button>
</div>
<!-- Disclaimer Chip -->
<div class="bg-error-container text-on-error-container px-md py-base rounded-lg flex gap-base items-start max-w-lg">
<span class="material-symbols-outlined text-[20px]" data-icon="warning">warning</span>
<p class="text-sm font-label-md italic">
                        This application provides general health information only and does not replace medical advice.
                    </p>
</div>
</div>
<div class="relative group">
<div class="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
<img alt="AI Health Assistant" class="w-full h-auto rounded-3xl object-cover relative z-10 shadow-2xl transition-transform group-hover:scale-[1.02]" data-alt="A friendly, high-tech AI healthcare assistant visualized as a soft blue glowing orb and holographic interfaces in a clean, minimalist medical office. The lighting is bright and natural, reflecting a professional yet empathetic clinical environment. Soft shadows and a clean aesthetic emphasize trust and advanced technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQOrBYU-bIMKld8Q5_2V1Al6EuaKBoFotDWGaaAMHztqwc9CJE79cuAGizZ8yqv9WmO3HlIlOqCEHnXyQc1UQH5Mdl1x1V5tBzzhm8g5ZqDWqIVPRu-eoqc1c6DJGdY07R5_oiWiNbhadkN92el00mtkDyu3seQiGjrNjJ-64-nwW74aJ__3P6GBo0iB-wukaupZi5D-y9AZb5rRI2QEqLMuqHkvFXM4I1qLUCQI7wW7fT3eosQ-YNEJmoD5JmgLkM3QR0o8OFU3A"/>
<div class="absolute -bottom-6 -right-6 md:-right-12 bg-surface-container-lowest p-md rounded-2xl shadow-xl z-20 max-w-[240px] border border-primary/10">
<div class="flex items-center gap-base mb-xs">
<span class="w-3 h-3 bg-secondary rounded-full"></span>
<span class="font-label-md text-secondary">AI Guide Active</span>
</div>
<p class="text-xs text-on-surface-variant">"How can I help you understand your symptoms today?"</p>
</div>
</div>
</section>
<!-- Feature Bento Grid -->
<section class="max-w-6xl mx-auto py-xl">
<h2 class="font-headline-md text-headline-md text-on-surface mb-xl">Explore Key Services</h2>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
<!-- Symptom Guidance (Large Card) -->
<div class="md:col-span-2 bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(74,144,226,0.08)] border border-primary/5 flex flex-col justify-between min-h-[320px] hover:shadow-xl transition-shadow">
<div class="flex flex-col gap-base">
<div class="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
<span class="material-symbols-outlined" data-icon="medical_services">medical_services</span>
</div>
<h3 class="font-headline-md text-headline-md">Symptom Guidance</h3>
<p class="font-body-md text-on-surface-variant">Input your concerns and receive structured, educational insights based on clinical pathways.</p>
</div>
<div class="flex items-center text-primary font-button-text cursor-pointer mt-md">
                        Explore symptoms <span class="material-symbols-outlined ml-base" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<!-- AI Health Chat -->
<div class="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(74,144,226,0.08)] border border-primary/5 flex flex-col hover:shadow-xl transition-shadow">
<div class="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-md">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
</div>
<h3 class="font-label-md text-lg mb-base">AI Health Chat</h3>
<p class="text-sm text-on-surface-variant mb-xl">24/7 conversational support for health questions and lifestyle advice.</p>
<button class="mt-auto text-secondary font-button-text text-sm flex items-center">
                        Launch Chat <span class="material-symbols-outlined ml-xs text-sm" data-icon="open_in_new">open_in_new</span>
</button>
</div>
<!-- Medication Info -->
<div class="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(74,144,226,0.08)] border border-primary/5 flex flex-col hover:shadow-xl transition-shadow">
<div class="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center mb-md">
<span class="material-symbols-outlined" data-icon="medication">medication</span>
</div>
<h3 class="font-label-md text-lg mb-base">Medication Info</h3>
<p class="text-sm text-on-surface-variant mb-xl">Understand dosage, interactions, and general pharmaceutical guidance.</p>
<button class="mt-auto text-tertiary font-button-text text-sm flex items-center">
                        Search Library <span class="material-symbols-outlined ml-xs text-sm" data-icon="search">search</span>
</button>
</div>
<!-- Preventive Tips (Wide on md/lg) -->
<div class="lg:col-span-2 md:col-span-3 bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(74,144,226,0.08)] border border-primary/5 flex flex-col md:flex-row items-center gap-lg hover:shadow-xl transition-shadow">
<div class="flex flex-col gap-base md:w-2/3">
<div class="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center">
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
</div>
<h3 class="font-headline-md text-headline-md">Preventive Tips</h3>
<p class="font-body-md text-on-surface-variant">Stay ahead of illness with personalized wellness milestones and data-driven preventive suggestions.</p>
</div>
<div class="w-full md:w-1/3">
<div class="h-2 w-full bg-surface-container rounded-full overflow-hidden mb-base">
<div class="bg-secondary h-full w-[75%] rounded-full"></div>
</div>
<p class="text-xs text-secondary font-bold text-center">75% Wellness Goal Reached</p>
</div>
</div>
<!-- AI Insight Card (Glow Effect) -->
<div class="lg:col-span-2 md:col-span-3 bg-surface border-2 border-primary/20 p-md rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-center">
<div class="absolute top-0 right-0 p-base">
<span class="px-base py-xs bg-primary text-on-primary text-[10px] rounded-full uppercase tracking-widest font-bold">AI Insight</span>
</div>
<div class="flex items-start gap-md">
<span class="material-symbols-outlined text-primary text-4xl" data-icon="tips_and_updates">tips_and_updates</span>
<div class="flex flex-col gap-xs">
<p class="font-headline-md text-lg italic text-on-surface">"Regular hydration and 15-minute walks can improve cognitive focus by up to 20% according to recent health studies."</p>
<span class="text-sm text-outline">CareGuide AI Wellness Core</span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-xl px-margin-mobile md:px-margin-desktop text-center mt-xl mb-24 md:mb-0 bg-surface-container-lowest border-t border-outline-variant">
<div class="max-w-7xl mx-auto">
<div class="font-headline-sm text-headline-sm text-primary mb-md">CareGuide AI</div>
<p class="font-body-md text-on-surface-variant mb-lg max-w-2xl mx-auto">
                © 2024 CareGuide AI. For informational purposes only. Seek professional medical advice.
            </p>
<div class="flex justify-center gap-xl">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Disclaimer</a>
</div>
</div>
</footer>
<!-- Bottom Nav Bar (Mobile Only) -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base py-sm bg-surface-container shadow-[0_-4px_20px_rgba(74,144,226,0.08)] md:hidden rounded-t-xl">
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:opacity-80 transition-all scale-98" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-md text-xs">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-all scale-98" href="#">
<span class="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span class="font-label-md text-xs">Symptom</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-all scale-98" href="#">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="font-label-md text-xs">AI Chat</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-all scale-98" href="#">
<span class="material-symbols-outlined" data-icon="medication">medication</span>
<span class="font-label-md text-xs">Meds</span>
</a>
</nav>
<!-- Contextual FAB (Mobile Only) -->
<button class="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-40 active:scale-95 transition-transform">
<span class="material-symbols-outlined" data-icon="emergency_share" style="font-variation-settings: 'FILL' 1;">emergency_share</span>
</button>
</body></html>

<!-- Symptom Guidance -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Symptom Guidance | CareGuide AI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
                  "primary": "#005da7",
                  "on-primary-fixed": "#001c39",
                  "inverse-surface": "#303030",
                  "primary-fixed-dim": "#a4c9ff",
                  "surface-bright": "#fbf9f8",
                  "on-primary-container": "#fdfcff",
                  "on-tertiary": "#ffffff",
                  "inverse-primary": "#a4c9ff",
                  "on-secondary-container": "#00743a",
                  "on-tertiary-container": "#fffbff",
                  "on-tertiary-fixed": "#291800",
                  "surface": "#fbf9f8",
                  "tertiary-fixed": "#ffddb4",
                  "secondary-fixed-dim": "#66dd8b",
                  "surface-variant": "#e4e2e2",
                  "on-error": "#ffffff",
                  "primary-container": "#2976c7",
                  "error": "#ba1a1a",
                  "on-background": "#1b1c1c",
                  "on-tertiary-fixed-variant": "#633f00",
                  "surface-tint": "#0060ac",
                  "surface-container-low": "#f5f3f3",
                  "on-secondary-fixed": "#00210c",
                  "outline": "#717783",
                  "secondary-fixed": "#83fba5",
                  "inverse-on-surface": "#f2f0f0",
                  "on-surface-variant": "#414751",
                  "secondary": "#006d36",
                  "on-primary": "#ffffff",
                  "primary-fixed": "#d4e3ff",
                  "surface-dim": "#dbd9d9",
                  "on-error-container": "#93000a",
                  "on-surface": "#1b1c1c",
                  "surface-container-highest": "#e4e2e2",
                  "on-secondary": "#ffffff",
                  "background": "#fbf9f8",
                  "tertiary-container": "#a06900",
                  "on-secondary-fixed-variant": "#005227",
                  "surface-container-high": "#eae8e7",
                  "outline-variant": "#c1c7d3",
                  "on-primary-fixed-variant": "#004883",
                  "surface-container-lowest": "#ffffff",
                  "tertiary": "#7f5300",
                  "error-container": "#ffdad6",
                  "surface-container": "#efeded",
                  "tertiary-fixed-dim": "#ffb953"
          },
          "borderRadius": {
                  "DEFAULT": "0.25rem",
                  "lg": "0.5rem",
                  "xl": "0.75rem",
                  "full": "9999px"
          },
          "spacing": {
                  "md": "24px",
                  "base": "8px",
                  "margin-desktop": "80px",
                  "lg": "48px",
                  "sm": "12px",
                  "gutter": "24px",
                  "xs": "4px",
                  "margin-mobile": "16px",
                  "xl": "64px"
          },
          "fontFamily": {
                  "headline-lg-mobile": ["Atkinson Hyperlegible Next"],
                  "label-md": ["Source Sans 3"],
                  "headline-md": ["Atkinson Hyperlegible Next"],
                  "body-lg": ["Source Sans 3"],
                  "body-md": ["Source Sans 3"],
                  "button-text": ["Source Sans 3"],
                  "headline-lg": ["Atkinson Hyperlegible Next"]
          },
          "fontSize": {
                  "headline-lg-mobile": ["32px", {"lineHeight": "38px", "fontWeight": "700"}],
                  "label-md": ["16px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                  "headline-md": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                  "body-lg": ["20px", {"lineHeight": "30px", "fontWeight": "400"}],
                  "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                  "button-text": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                  "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
          }
        },
      },
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    .shadow-soft {
      shadow: 0 4px 20px rgba(74, 144, 226, 0.08);
    }
  </style>
</head>
<body class="bg-background text-on-surface font-body-md">
<!-- TopAppBar -->
<header class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 z-50">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-7xl mx-auto">
<div class="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">
        CareGuide AI
      </div>
<nav class="hidden md:flex items-center gap-md">
<a class="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#">Home</a>
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1" href="#">Symptom Guidance</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#">AI Chat</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#">Medication Info</a>
</nav>
<div class="flex items-center gap-base">
<button class="material-symbols-outlined text-primary p-base scale-98 active:scale-95 transition-transform">help</button>
<button class="material-symbols-outlined text-primary p-base scale-98 active:scale-95 transition-transform">account_circle</button>
</div>
</div>
</header>
<main class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
<!-- Emergency Warning Box -->
<div class="mb-lg bg-error-container border-2 border-error text-on-error-container rounded-xl p-md flex flex-col md:flex-row items-start md:items-center gap-md shadow-sm">
<span class="material-symbols-outlined text-[40px] text-error" data-weight="fill" style="font-variation-settings: 'FILL' 1;">emergency_home</span>
<div>
<h2 class="font-headline-md text-headline-md text-error mb-xs">Emergency Warning</h2>
<p class="font-body-md text-body-md">If you are experiencing <strong>chest pain, severe difficulty breathing, sudden weakness/numbness, or loss of consciousness</strong>, call 911 or your local emergency services immediately.</p>
</div>
</div>
<!-- Layout Grid: Form and Results -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
<!-- Symptom Input Form (Bento Style Left Column) -->
<section class="lg:col-span-5 bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(74,144,226,0.08)]">
<h1 class="font-headline-md text-headline-md text-primary mb-md">Check Your Symptoms</h1>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg">Provide details about how you're feeling for personalized guidance.</p>
<form class="space-y-md">
<div class="grid grid-cols-2 gap-base">
<div>
<label class="block font-label-md text-label-md mb-xs">Age</label>
<input class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors" placeholder="Years" type="number"/>
</div>
<div>
<label class="block font-label-md text-label-md mb-xs">Gender (optional)</label>
<select class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors">
<option>Select</option>
<option>Female</option>
<option>Male</option>
<option>Non-binary</option>
</select>
</div>
</div>
<div>
<label class="block font-label-md text-label-md mb-xs">Main symptom</label>
<input class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. Headache, Sore throat" type="text"/>
</div>
<div class="grid grid-cols-2 gap-base">
<div>
<label class="block font-label-md text-label-md mb-xs">Symptom duration</label>
<input class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. 2 days" type="text"/>
</div>
<div>
<label class="block font-label-md text-label-md mb-xs">Severity level</label>
<select class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors">
<option>Mild</option>
<option>Moderate</option>
<option>Severe</option>
</select>
</div>
</div>
<div>
<label class="block font-label-md text-label-md mb-xs">Additional symptoms</label>
<textarea class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors" placeholder="List any other issues..." rows="3"></textarea>
</div>
<div>
<label class="block font-label-md text-label-md mb-xs">Existing health condition (optional)</label>
<input class="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-base focus:border-primary focus:ring-0 transition-colors" placeholder="e.g. Asthma, Diabetes" type="text"/>
</div>
<button class="w-full bg-primary text-on-primary font-button-text text-button-text py-base rounded-full scale-98 active:scale-95 transition-all shadow-md mt-md" type="submit">
            Get Guidance
          </button>
</form>
</section>
<!-- AI Result Card (Glassmorphism / Glow Border Right Column) -->
<section class="lg:col-span-7 space-y-md">
<div class="bg-surface-container-lowest rounded-xl p-md border border-primary-container/30 shadow-[0_4px_24px_rgba(0,93,167,0.1)] relative overflow-hidden">
<!-- AI Guide Header -->
<div class="flex items-center gap-base mb-md text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
<span class="font-label-md text-label-md uppercase tracking-wider">AI Analysis Ready</span>
</div>
<div class="space-y-lg">
<!-- Summary -->
<div class="bg-primary-container/10 p-md rounded-lg">
<h3 class="font-headline-md text-headline-md text-primary mb-xs">Summary</h3>
<p class="font-body-md text-body-md italic text-on-surface-variant">"Based on your report of a mild headache for 2 days, your symptoms appear common but require monitoring."</p>
</div>
<!-- Bento Content Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="bg-surface-container p-md rounded-lg">
<h4 class="font-label-md text-label-md text-primary flex items-center gap-xs mb-base">
<span class="material-symbols-outlined text-[20px]">help_center</span> Possible general causes
                </h4>
<ul class="space-y-xs font-body-md text-body-md list-disc list-inside">
<li>Tension headache</li>
<li>Dehydration</li>
<li>Eye strain</li>
</ul>
</div>
<div class="bg-secondary-container/20 p-md rounded-lg">
<h4 class="font-label-md text-label-md text-secondary flex items-center gap-xs mb-base">
<span class="material-symbols-outlined text-[20px]">favorite</span> Safe self-care suggestions
                </h4>
<ul class="space-y-xs font-body-md text-body-md list-disc list-inside">
<li>Rest in a dark room</li>
<li>Increase water intake</li>
<li>Gentle neck stretches</li>
</ul>
</div>
</div>
<!-- When to see a doctor -->
<div class="border-l-4 border-primary-fixed-dim pl-md">
<h4 class="font-label-md text-label-md text-on-surface mb-base flex items-center gap-xs">
<span class="material-symbols-outlined text-primary">stethoscope</span> When to see a doctor
              </h4>
<p class="font-body-md text-body-md text-on-surface-variant">
                Consult a healthcare provider if the pain worsens, lasts more than 7 days, or does not respond to over-the-counter treatment.
              </p>
</div>
<!-- Medical Image/Visual Placeholder -->
<div class="rounded-xl overflow-hidden mt-lg">
<img alt="Medical professional with tablet" class="w-full h-48 object-cover" data-alt="A professional healthcare provider in a clean, brightly lit modern clinic environment, holding a digital tablet with a subtle glowing interface displaying medical charts. The setting is minimalist with soft blue accents, high-key natural lighting through large windows, and a calming, trustworthy medical aesthetic. The image focuses on the intersection of human care and modern technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCffYxWyh8-1p9JkdlYHuUSfLrGM28zSwMbqW8ZGrVbSZ_9klC49vTebMhgDsS6T0zM9XupNPJVWCm91dLfXwIMOr4mMAwT1SIdeE3JeQrcYWZ4S5gSHLJBjfqz8bgesb9t3VdnnU1qrdr_0iVG2J3lhgy_BC4EJLvlu365bhjwFLC8r2ZJdpJ8GH1mOHInhdiXyfT5TSpo6gxYhwXqzWa-5JWYmxMZzNbZ-tp4qs7kDO7jrOFeyH6yqxXAuk8Kx3XCM87LOlAR-rQ"/>
</div>
</div>
</div>
<!-- Feedback Chip -->
<div class="flex justify-center gap-base">
<span class="bg-secondary-container/30 text-on-secondary-fixed-variant px-md py-xs rounded-full font-label-md text-label-md flex items-center gap-xs">
<span class="material-symbols-outlined text-[18px]">verified_user</span> Helpful Guidance
          </span>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-xl px-margin-mobile md:px-margin-desktop text-center mt-xl mb-24 md:mb-0 bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant">
<div class="max-w-7xl mx-auto">
<div class="font-headline-sm text-headline-sm text-primary mb-md">CareGuide AI</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-md max-w-2xl mx-auto">
        © 2024 CareGuide AI. For informational purposes only. Seek professional medical advice.
      </p>
<div class="flex justify-center gap-md">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Disclaimer</a>
</div>
</div>
</footer>
<!-- BottomNavBar (Mobile Only) -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base py-sm md:hidden bg-surface-container dark:bg-surface-container-high shadow-[0_-4px_20px_rgba(74,144,226,0.08)] rounded-t-xl">
<div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-md text-label-md">Home</span>
</div>
<div class="flex flex-col items-center justify-center bg-primary-container dark:bg-on-primary-fixed-variant text-on-primary-container dark:text-primary-fixed rounded-full px-4 py-1">
<span class="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span class="font-label-md text-label-md">Symptom</span>
</div>
<div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="font-label-md text-label-md">AI Chat</span>
</div>
<div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined" data-icon="medication">medication</span>
<span class="font-label-md text-label-md">Meds</span>
</div>
</nav>
</body></html>

<!-- AI Health Chat -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AI Chat Assistant - CareGuide AI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#005da7",
                    "on-primary-fixed": "#001c39",
                    "inverse-surface": "#303030",
                    "primary-fixed-dim": "#a4c9ff",
                    "surface-bright": "#fbf9f8",
                    "on-primary-container": "#fdfcff",
                    "on-tertiary": "#ffffff",
                    "inverse-primary": "#a4c9ff",
                    "on-secondary-container": "#00743a",
                    "on-tertiary-container": "#fffbff",
                    "on-tertiary-fixed": "#291800",
                    "surface": "#fbf9f8",
                    "tertiary-fixed": "#ffddb4",
                    "secondary-fixed-dim": "#66dd8b",
                    "surface-variant": "#e4e2e2",
                    "on-error": "#ffffff",
                    "primary-container": "#2976c7",
                    "error": "#ba1a1a",
                    "on-background": "#1b1c1c",
                    "on-tertiary-fixed-variant": "#633f00",
                    "surface-tint": "#0060ac",
                    "surface-container-low": "#f5f3f3",
                    "on-secondary-fixed": "#00210c",
                    "outline": "#717783",
                    "secondary-fixed": "#83fba5",
                    "inverse-on-surface": "#f2f0f0",
                    "on-surface-variant": "#414751",
                    "secondary": "#006d36",
                    "on-primary": "#ffffff",
                    "primary-fixed": "#d4e3ff",
                    "surface-dim": "#dbd9d9",
                    "on-error-container": "#93000a",
                    "on-surface": "#1b1c1c",
                    "surface-container-highest": "#e4e2e2",
                    "on-secondary": "#ffffff",
                    "background": "#fbf9f8",
                    "tertiary-container": "#a06900",
                    "on-secondary-fixed-variant": "#005227",
                    "surface-container-high": "#eae8e7",
                    "outline-variant": "#c1c7d3",
                    "on-primary-fixed-variant": "#004883",
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#7f5300",
                    "error-container": "#ffdad6",
                    "secondary-container": "#83fba5",
                    "surface-container": "#efeded",
                    "tertiary-fixed-dim": "#ffb953"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "24px",
                    "base": "8px",
                    "margin-desktop": "80px",
                    "lg": "48px",
                    "sm": "12px",
                    "gutter": "24px",
                    "xs": "4px",
                    "margin-mobile": "16px",
                    "xl": "64px"
            },
            "fontFamily": {
                    "headline-lg-mobile": ["Atkinson Hyperlegible Next"],
                    "label-md": ["Source Sans 3"],
                    "headline-md": ["Atkinson Hyperlegible Next"],
                    "body-lg": ["Source Sans 3"],
                    "body-md": ["Source Sans 3"],
                    "button-text": ["Source Sans 3"],
                    "headline-lg": ["Atkinson Hyperlegible Next"]
            },
            "fontSize": {
                    "headline-lg-mobile": ["32px", {"lineHeight": "38px", "fontWeight": "700"}],
                    "label-md": ["16px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                    "headline-md": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "body-lg": ["20px", {"lineHeight": "30px", "fontWeight": "400"}],
                    "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "button-text": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #fbf9f8;
            color: #1b1c1c;
            font-family: 'Source Sans 3', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .chat-container-height {
            height: calc(100vh - 180px);
        }
        @media (min-width: 768px) {
            .chat-container-height {
                height: calc(100vh - 120px);
            }
        }
    </style>
</head>
<body class="bg-surface overflow-hidden">
<!-- Desktop SideNav -->
<aside class="hidden md:flex flex-col h-full py-lg px-md fixed left-0 top-0 w-80 bg-surface border-r border-outline-variant shadow-md z-40">
<div class="mb-xl">
<h1 class="text-headline-md font-headline-md text-primary font-bold">CareGuide AI</h1>
<p class="text-on-surface-variant font-body-md">Your Health Assistant</p>
</div>
<nav class="flex-1 space-y-base">
<a class="flex items-center gap-base p-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
                Home
            </a>
<a class="flex items-center gap-base p-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md" href="#">
<span class="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
                Symptom Guidance
            </a>
<a class="flex items-center gap-base p-base bg-secondary-container text-on-secondary-container rounded-lg font-bold font-body-md" href="#">
<span class="material-symbols-outlined" data-icon="smart_toy" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
                AI Chat
            </a>
<a class="flex items-center gap-base p-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md" href="#">
<span class="material-symbols-outlined" data-icon="pill">pill</span>
                Medication Info
            </a>
<a class="flex items-center gap-base p-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md" href="#">
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
                Preventive Tips
            </a>
<a class="flex items-center gap-base p-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md" href="#">
<span class="material-symbols-outlined" data-icon="gavel">gavel</span>
                Disclaimer
            </a>
</nav>
<div class="mt-auto pt-lg">
<div class="flex items-center gap-base mb-md">
<img alt="CareGuide User Profile" class="w-10 h-10 rounded-full object-cover" data-alt="A clean, professional headshot of a friendly individual for a healthcare application profile. The lighting is bright and optimistic, set against a soft, neutral studio background. The style is modern, high-resolution photography with a warm and trustworthy atmosphere, reflecting the human-centered modernist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC_CULC_pP960ElH_9FOITlRhr_qTetOdBGo4eLHyQjPSqihrx2qPoIlFGlM_sbLBfc7-0t54O68Ln2Z0j_bCvahdNzbgfxRfpy6VOHU89OA2RgFrqcBwGSMz9PW5Bcvd5EMhKte1bXpHVF9U01AtuTl6asTXekfttQ1vqA5zHDtY50zkfWR2WeAyw9a5ZE97mvRRFpWNtYjxU9JFAOM9vt_UD4rNdcfZ8jjKD4AAhvH11M7AwZE2eNHLWnfIUzYNXdlneDfAffZ0"/>
<div>
<p class="text-label-md font-bold text-on-surface">Alex Johnson</p>
<p class="text-xs text-on-surface-variant">Premium Member</p>
</div>
</div>
<button class="w-full py-base px-md bg-primary text-on-primary font-button-text text-button-text rounded-lg scale-98 active:scale-95 transition-transform">
                Get Support
            </button>
</div>
</aside>
<!-- Mobile Header -->
<header class="md:hidden flex justify-between items-center w-full px-margin-mobile py-base bg-surface shadow-sm sticky top-0 z-50">
<span class="text-headline-md font-headline-md font-bold text-primary">CareGuide AI</span>
<div class="flex gap-base">
<span class="material-symbols-outlined text-primary p-xs" data-icon="search">search</span>
<span class="material-symbols-outlined text-primary p-xs" data-icon="account_circle">account_circle</span>
</div>
</header>
<!-- Main Content Canvas -->
<main class="md:ml-80 h-screen flex flex-col relative">
<!-- Chat Header -->
<div class="px-margin-mobile md:px-margin-desktop py-md border-b border-outline-variant bg-surface-container-lowest flex items-center justify-between">
<div class="flex items-center gap-base">
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined" data-icon="smart_toy" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
</div>
<div>
<h2 class="font-headline-md text-headline-md text-on-surface leading-tight">AI Health Assistant</h2>
<div class="flex items-center gap-xs">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xs text-on-surface-variant font-label-md">Active &amp; Secure</span>
</div>
</div>
</div>
<div class="flex gap-sm">
<button class="p-base rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="history">history</span>
</button>
<button class="p-base rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
<!-- Chat History Area -->
<div class="flex-1 overflow-y-auto px-margin-mobile md:px-margin-desktop py-lg space-y-xl scroll-smooth">
<!-- AI Welcome Message -->
<div class="flex gap-md max-w-3xl">
<div class="w-8 h-8 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined text-sm" data-icon="smart_toy" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
</div>
<div class="space-y-base">
<div class="bg-surface-container-low p-md rounded-xl rounded-tl-none shadow-sm border border-outline-variant/30">
<p class="font-body-md text-body-md text-on-surface">Hello Alex. I'm your CareGuide AI assistant. I can help you understand symptoms, provide medication information, or offer general health tips. What's on your mind today?</p>
</div>
<div class="flex flex-wrap gap-base">
<button class="px-md py-xs bg-secondary-container/20 text-on-secondary-container border border-secondary/20 rounded-full text-label-md font-label-md hover:bg-secondary-container/40 transition-colors">
                            Check a symptom
                        </button>
<button class="px-md py-xs bg-secondary-container/20 text-on-secondary-container border border-secondary/20 rounded-full text-label-md font-label-md hover:bg-secondary-container/40 transition-colors">
                            Medication side effects
                        </button>
</div>
</div>
</div>
<!-- User Message -->
<div class="flex gap-md max-w-3xl ml-auto flex-row-reverse">
<div class="w-8 h-8 rounded-full bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined text-sm" data-icon="person">person</span>
</div>
<div class="bg-primary text-on-primary p-md rounded-xl rounded-tr-none shadow-md">
<p class="font-body-md text-body-md">I've been feeling a slight pressure in my chest when climbing stairs lately. Should I be concerned?</p>
</div>
</div>
<!-- AI Response -->
<div class="flex gap-md max-w-3xl">
<div class="w-8 h-8 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined text-sm" data-icon="smart_toy" style="font-variation-settings: 'FILL' 1;">smart_toy</span>
</div>
<div class="space-y-base w-full">
<!-- AI "Guide" Card with Glowing Border -->
<div class="bg-surface-container-lowest p-md rounded-xl rounded-tl-none border-2 border-primary-fixed-dim shadow-[0_4px_20px_rgba(74,144,226,0.08)]">
<p class="font-body-md text-body-md text-on-surface mb-md">Chest pressure during physical exertion, like climbing stairs, is a symptom that requires medical evaluation. This could be related to several conditions, some of which may be serious.</p>
<div class="bg-surface-container-low p-md rounded-lg space-y-base border-l-4 border-primary">
<p class="font-label-md text-label-md text-primary uppercase tracking-wider">Next Steps:</p>
<ul class="space-y-xs list-none">
<li class="flex items-start gap-xs">
<span class="material-symbols-outlined text-secondary text-base" data-icon="check_circle">check_circle</span>
<span class="text-body-md">Schedule an appointment with your primary care physician soon.</span>
</li>
<li class="flex items-start gap-xs">
<span class="material-symbols-outlined text-secondary text-base" data-icon="check_circle">check_circle</span>
<span class="text-body-md">Note when the pressure starts and how long it lasts.</span>
</li>
<li class="flex items-start gap-xs">
<span class="material-symbols-outlined text-error text-base" data-icon="warning">warning</span>
<span class="text-body-md font-bold">If you experience severe pain, shortness of breath, or sweating, seek emergency care immediately.</span>
</li>
</ul>
</div>
</div>
<span class="text-xs text-on-surface-variant italic px-xs">CareGuide AI Insight • Just now</span>
</div>
</div>
<!-- Suggestion Chip Group (Asymmetric Layout) -->
<div class="flex flex-wrap gap-base justify-center md:justify-start max-w-3xl md:ml-12 pt-base">
<div class="flex gap-base overflow-x-auto no-scrollbar py-base">
<div class="flex-shrink-0 px-md py-base bg-surface-container rounded-xl border border-outline-variant cursor-pointer hover:border-primary transition-all group">
<span class="text-label-md text-on-surface group-hover:text-primary transition-colors">Heart health clinics nearby</span>
</div>
<div class="flex-shrink-0 px-md py-base bg-surface-container rounded-xl border border-outline-variant cursor-pointer hover:border-primary transition-all group">
<span class="text-label-md text-on-surface group-hover:text-primary transition-colors">Log this symptom</span>
</div>
</div>
</div>
</div>
<!-- Input Section -->
<div class="px-margin-mobile md:px-margin-desktop py-lg bg-surface border-t border-outline-variant/30">
<div class="max-w-4xl mx-auto space-y-md">
<div class="relative group">
<textarea class="w-full bg-surface-container-low border-2 border-outline-variant rounded-xl p-md pr-xl focus:border-primary focus:ring-0 text-body-md font-body-md transition-all resize-none shadow-sm" placeholder="Ask about symptoms, health tips, or general medication information..." rows="1"></textarea>
<button class="absolute right-md bottom-base mb-xs p-base bg-primary text-on-primary rounded-full hover:opacity-90 transition-all scale-98 active:scale-95 shadow-md">
<span class="material-symbols-outlined" data-icon="send">send</span>
</button>
<div class="absolute left-md -top-base bg-surface px-base text-xs font-label-md text-primary opacity-0 group-focus-within:opacity-100 transition-opacity">
                        Secure AI Consultation
                    </div>
</div>
<div class="text-center">
<p class="text-xs text-on-surface-variant font-body-md opacity-80 leading-relaxed max-w-2xl mx-auto">
                        CareGuide AI provides informational guidance and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
                    </p>
</div>
</div>
</div>
</main>
<!-- Bottom Mobile Nav -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base py-sm md:hidden bg-surface-container shadow-[0_-4px_20px_rgba(74,144,226,0.08)] rounded-t-xl">
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="text-label-md font-label-md">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span class="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span class="text-label-md font-label-md">Symptom</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1" href="#">
<span class="material-symbols-outlined" data-icon="chat" style="font-variation-settings: 'FILL' 1;">chat</span>
<span class="text-label-md font-label-md">AI Chat</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1" href="#">
<span class="material-symbols-outlined" data-icon="medication">medication</span>
<span class="text-label-md font-label-md">Meds</span>
</a>
</nav>
<!-- Background Decorative Element (Subtle depth) -->
<div class="fixed top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-fixed/10 to-transparent -z-10 pointer-events-none"></div>
</body></html>

<!-- Preventive Tips & Disclaimer -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Preventive Health Tips - CareGuide AI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#005da7",
                    "on-primary-fixed": "#001c39",
                    "inverse-surface": "#303030",
                    "primary-fixed-dim": "#a4c9ff",
                    "surface-bright": "#fbf9f8",
                    "on-primary-container": "#fdfcff",
                    "on-tertiary": "#ffffff",
                    "inverse-primary": "#a4c9ff",
                    "on-secondary-container": "#00743a",
                    "on-tertiary-container": "#fffbff",
                    "on-tertiary-fixed": "#291800",
                    "surface": "#fbf9f8",
                    "tertiary-fixed": "#ffddb4",
                    "secondary-fixed-dim": "#66dd8b",
                    "surface-variant": "#e4e2e2",
                    "on-error": "#ffffff",
                    "primary-container": "#2976c7",
                    "error": "#ba1a1a",
                    "on-background": "#1b1c1c",
                    "on-tertiary-fixed-variant": "#633f00",
                    "surface-tint": "#0060ac",
                    "surface-container-low": "#f5f3f3",
                    "on-secondary-fixed": "#00210c",
                    "outline": "#717783",
                    "secondary-fixed": "#83fba5",
                    "inverse-on-surface": "#f2f0f0",
                    "on-surface-variant": "#414751",
                    "secondary": "#006d36",
                    "on-primary": "#ffffff",
                    "primary-fixed": "#d4e3ff",
                    "surface-dim": "#dbd9d9",
                    "on-error-container": "#93000a",
                    "on-surface": "#1b1c1c",
                    "surface-container-highest": "#e4e2e2",
                    "on-secondary": "#ffffff",
                    "background": "#fbf9f8",
                    "tertiary-container": "#a06900",
                    "on-secondary-fixed-variant": "#005227",
                    "surface-container-high": "#eae8e7",
                    "outline-variant": "#c1c7d3",
                    "on-primary-fixed-variant": "#004883",
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#7f5300",
                    "error-container": "#ffdad6",
                    "secondary-container": "#83fba5",
                    "surface-container": "#efeded",
                    "tertiary-fixed-dim": "#ffb953"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "24px",
                    "base": "8px",
                    "margin-desktop": "800px",
                    "lg": "48px",
                    "sm": "12px",
                    "gutter": "24px",
                    "xs": "4px",
                    "margin-mobile": "16px",
                    "xl": "64px"
            },
            "fontFamily": {
                    "headline-lg-mobile": ["Atkinson Hyperlegible Next"],
                    "label-md": ["Source Sans 3"],
                    "headline-md": ["Atkinson Hyperlegible Next"],
                    "body-lg": ["Source Sans 3"],
                    "body-md": ["Source Sans 3"],
                    "button-text": ["Source Sans 3"],
                    "headline-lg": ["Atkinson Hyperlegible Next"]
            },
            "fontSize": {
                    "headline-lg-mobile": ["32px", {"lineHeight": "38px", "fontWeight": "700"}],
                    "label-md": ["16px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                    "headline-md": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "body-lg": ["20px", {"lineHeight": "30px", "fontWeight": "400"}],
                    "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "button-text": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .ai-guide-card {
            border: 1px solid rgba(0, 93, 167, 0.2);
            box-shadow: 0 4px 20px rgba(74, 144, 226, 0.08);
        }
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md">
<!-- TopAppBar Shell -->
<header class="bg-surface shadow-sm sticky top-0 z-40 w-full">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-32 py-base max-w-7xl mx-auto">
<div class="flex items-center gap-base">
<span class="text-headline-md font-headline-md font-bold text-primary">CareGuide AI</span>
</div>
<nav class="hidden md:flex items-center gap-md">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Home</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Symptom Guidance</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">AI Chat</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Medication Info</a>
</nav>
<div class="flex items-center gap-sm">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary p-2">search</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary p-2">help</button>
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">JD</div>
</div>
</div>
</header>
<div class="flex max-w-7xl mx-auto min-h-screen">
<!-- SideNavBar Shell -->
<aside class="hidden md:flex flex-col h-full py-lg px-md bg-surface border-r border-outline-variant w-80 shrink-0 sticky top-[72px]">
<div class="mb-lg">
<h2 class="text-headline-md font-headline-md text-primary">CareGuide AI</h2>
<p class="text-body-md text-on-surface-variant">Your Health Assistant</p>
</div>
<nav class="space-y-base flex-grow">
<a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-body-md">Home</span>
</a>
<a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">health_and_safety</span>
<span class="font-body-md">Symptom Guidance</span>
</a>
<a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span class="font-body-md">AI Chat</span>
</a>
<a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">pill</span>
<span class="font-body-md">Medication Info</span>
</a>
<a class="flex items-center gap-base px-md py-sm bg-secondary-container text-on-secondary-container rounded-lg font-bold" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
<span class="font-body-md">Preventive Tips</span>
</a>
<a class="flex items-center gap-base px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#disclaimer">
<span class="material-symbols-outlined">gavel</span>
<span class="font-body-md">Disclaimer</span>
</a>
</nav>
<div class="mt-xl">
<button class="w-full bg-primary text-on-primary py-md px-lg rounded-xl font-button-text active:scale-95 transition-transform">Get Support</button>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-grow px-margin-mobile md:px-lg py-xl">
<!-- Hero Header Section -->
<section class="mb-xl">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-base">Preventive Health Tips</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Proactive care is the foundation of long-term wellness. Explore evidence-based habits and routine guidance supported by CareGuide AI.</p>
</section>
<!-- Bento Grid Tips Section -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
<!-- Healthy Lifestyle (Large Featured Card) -->
<div class="md:col-span-8 bg-surface-container-lowest p-md rounded-xl ai-guide-card relative overflow-hidden group">
<div class="relative z-10">
<div class="flex items-center gap-base mb-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">self_improvement</span>
<span class="text-label-md text-primary font-label-md uppercase tracking-wider">Foundation</span>
</div>
<h3 class="text-headline-md font-headline-md mb-base">Healthy Lifestyle Habits</h3>
<p class="text-body-md text-on-surface-variant mb-md max-w-md">Consistency in small actions—like staying hydrated, limiting processed sugars, and regular activity—builds the resilient body of tomorrow. Focus on sustainable changes rather than perfection.</p>
<div class="flex flex-wrap gap-xs">
<span class="bg-secondary/10 text-secondary px-base py-xs rounded-full text-sm font-semibold">Hydration</span>
<span class="bg-secondary/10 text-secondary px-base py-xs rounded-full text-sm font-semibold">Sun Safety</span>
<span class="bg-secondary/10 text-secondary px-base py-xs rounded-full text-sm font-semibold">Social Ties</span>
</div>
</div>
<img alt="Healthy Lifestyle" class="absolute top-0 right-0 h-full w-1/3 object-cover opacity-20 group-hover:opacity-30 transition-opacity hidden md:block" data-alt="A serene, sun-drenched wellness studio with a yoga mat and a clear glass of water on a light oak floor. The atmosphere is peaceful and airy, with soft shadows and a soft blue and white color palette that emphasizes clarity and healthy living in a high-key light mode environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKaXW-sqhcZnz1u_nRUBcwRMkgrwpIhEkAPeGrH7l-EaNgXIfv5xBYyrXZCDyAjpguV1VCPKjlnd3HxxsDEmYbucRiclPBPzFk69LuLmW5C9AKJA4Q62ptqRYT4xeVWkFWVPdJpUcRnHGsXH9QfqwjwCyw5mIuAF06evVyBjAQdQT_gu6HLSEqvoIgCQhxkeUT_qM_q2eMLEtRwInLSzOVFKAjSJ-AIwgQenJeTgGcLrIF8o6jxfNH-xIhgLI--DLMlkTTKLfc_cI"/>
</div>
<!-- Sleep Health (Square Card) -->
<div class="md:col-span-4 bg-surface-container-lowest p-md rounded-xl ai-guide-card">
<div class="flex items-center gap-base mb-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">bedtime</span>
<span class="text-label-md text-primary font-label-md uppercase tracking-wider">Recovery</span>
</div>
<h3 class="text-headline-md font-headline-md mb-base">Sleep Health</h3>
<p class="text-body-md text-on-surface-variant">Quality sleep is non-negotiable. Aim for 7-9 hours of consistent rest to regulate hormones and cognitive function.</p>
</div>
<!-- Flu and Cough Prevention (Small Card) -->
<div class="md:col-span-4 bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant">
<div class="flex items-center gap-base mb-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">coronavirus</span>
<span class="text-label-md text-secondary font-label-md uppercase tracking-wider">Immunity</span>
</div>
<h3 class="text-body-lg font-bold mb-base">Flu &amp; Cough Prevention</h3>
<p class="text-body-md text-on-surface-variant">Prioritize seasonal vaccinations, frequent hand-washing, and maintaining a humid environment during winter months.</p>
</div>
<!-- Nutrition (Vertical Wide Card) -->
<div class="md:col-span-4 bg-surface-container-lowest p-md rounded-xl ai-guide-card">
<div class="flex items-center gap-base mb-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">restaurant</span>
<span class="text-label-md text-primary font-label-md uppercase tracking-wider">Fuel</span>
</div>
<h3 class="text-headline-md font-headline-md mb-base">Smart Nutrition</h3>
<p class="text-body-md text-on-surface-variant mb-md">Color your plate with various vegetables and lean proteins. Fiber is your best friend for digestive health.</p>
<div class="h-2 bg-surface-container rounded-full mt-base">
<div class="h-full bg-secondary w-3/4 rounded-full"></div>
</div>
<p class="text-xs mt-xs text-on-surface-variant italic">Daily Fiber Progress Goal: 25g+</p>
</div>
<!-- Exercise (Small Card) -->
<div class="md:col-span-4 bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant">
<div class="flex items-center gap-base mb-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">fitness_center</span>
<span class="text-label-md text-secondary font-label-md uppercase tracking-wider">Movement</span>
</div>
<h3 class="text-body-lg font-bold mb-base">Exercise Routine</h3>
<p class="text-body-md text-on-surface-variant">150 minutes of moderate activity weekly reduces cardiovascular risks significantly. Even a daily 20-minute walk counts.</p>
</div>
<!-- Mental Wellness (Medium Card) -->
<div class="md:col-span-6 bg-surface-container-lowest p-md rounded-xl ai-guide-card flex flex-col justify-between">
<div>
<div class="flex items-center gap-base mb-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">psychology</span>
<span class="text-label-md text-primary font-label-md uppercase tracking-wider">Mind</span>
</div>
<h3 class="text-headline-md font-headline-md mb-base">Mental Wellness</h3>
<p class="text-body-md text-on-surface-variant">Practice mindfulness and set digital boundaries. Stress management is as critical as physical exercise for longevity.</p>
</div>
<div class="mt-md p-base bg-primary/5 rounded-lg border border-primary/10">
<p class="text-sm font-semibold text-primary italic">AI Insight: "Users who practice 5 minutes of daily meditation report 30% lower anxiety levels."</p>
</div>
</div>
<!-- Routine Checker (Medium Card) -->
<div class="md:col-span-6 bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant bg-slate-wash">
<h3 class="text-body-lg font-bold mb-md">Routine Quick-Check</h3>
<ul class="space-y-sm">
<li class="flex items-center gap-base">
<span class="material-symbols-outlined text-secondary">check_circle</span>
<span class="text-body-md">Daily hydration (2L+)</span>
</li>
<li class="flex items-center gap-base">
<span class="material-symbols-outlined text-outline">radio_button_unchecked</span>
<span class="text-body-md">Screen break every 60 mins</span>
</li>
<li class="flex items-center gap-base">
<span class="material-symbols-outlined text-outline">radio_button_unchecked</span>
<span class="text-body-md">7-hour sleep window scheduled</span>
</li>
</ul>
</div>
</div>
<!-- About & Disclaimer Section -->
<section class="mt-xl pt-xl border-t border-outline-variant" id="disclaimer">
<div class="max-w-3xl">
<h2 class="font-headline-md text-headline-md text-on-surface mb-md">About CareGuide AI Education</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
                        CareGuide AI is an advanced educational assistant designed to democratize health information. By leveraging large language models trained on medical literature, we provide simplified, accessible guidance for common symptoms and preventive care. Our goal is to empower users with the vocabulary and knowledge needed to have more productive conversations with their medical providers.
                    </p>
<div class="bg-error-container/30 border-l-4 border-error p-md rounded-r-lg">
<div class="flex items-center gap-base mb-base">
<span class="material-symbols-outlined text-error">warning</span>
<h3 class="font-bold text-error text-body-lg">Important Disclaimer</h3>
</div>
<p class="font-body-md text-on-error-container font-semibold italic">
                            This app does not provide diagnosis, treatment, prescription, or emergency medical service. Always consult a healthcare professional for medical concerns.
                        </p>
</div>
</div>
</section>
</main>
</div>
<!-- Footer Shell -->
<footer class="w-full py-xl px-margin-mobile md:px-margin-desktop text-center mt-xl mb-24 md:mb-0 bg-surface-container-lowest border-t border-outline-variant">
<div class="max-w-7xl mx-auto">
<h4 class="font-headline-sm text-headline-sm text-primary mb-md">CareGuide AI</h4>
<div class="flex justify-center gap-lg mb-md">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Terms of Service</a>
<a class="text-primary underline font-body-md" href="#disclaimer">Disclaimer</a>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                © 2024 CareGuide AI. For informational purposes only. Seek professional medical advice.
            </p>
</div>
</footer>
<!-- BottomNavBar Shell (Mobile Only) -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base py-sm md:hidden bg-surface-container shadow-[0_-4px_20px_rgba(74,144,226,0.08)] rounded-t-xl">
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:opacity-80 transition-all" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-label-md font-label-md">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:opacity-80 transition-all" href="#">
<span class="material-symbols-outlined">medical_services</span>
<span class="text-label-md font-label-md">Symptom</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:opacity-80 transition-all" href="#">
<span class="material-symbols-outlined">chat</span>
<span class="text-label-md font-label-md">AI Chat</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:opacity-80 transition-all" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
<span class="text-label-md font-label-md">Tips</span>
</a>
</nav>
</body></html>

<!-- Medication Information -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#005da7",
                    "on-primary-fixed": "#001c39",
                    "inverse-surface": "#303030",
                    "primary-fixed-dim": "#a4c9ff",
                    "surface-bright": "#fbf9f8",
                    "on-primary-container": "#fdfcff",
                    "on-tertiary": "#ffffff",
                    "inverse-primary": "#a4c9ff",
                    "on-secondary-container": "#00743a",
                    "on-tertiary-container": "#fffbff",
                    "on-tertiary-fixed": "#291800",
                    "surface": "#fbf9f8",
                    "tertiary-fixed": "#ffddb4",
                    "secondary-fixed-dim": "#66dd8b",
                    "surface-variant": "#e4e2e2",
                    "on-error": "#ffffff",
                    "primary-container": "#2976c7",
                    "error": "#ba1a1a",
                    "on-background": "#1b1c1c",
                    "on-tertiary-fixed-variant": "#633f00",
                    "surface-tint": "#0060ac",
                    "surface-container-low": "#f5f3f3",
                    "on-secondary-fixed": "#00210c",
                    "outline": "#717783",
                    "secondary-fixed": "#83fba5",
                    "inverse-on-surface": "#f2f0f0",
                    "on-surface-variant": "#414751",
                    "secondary": "#006d36",
                    "on-primary": "#ffffff",
                    "primary-fixed": "#d4e3ff",
                    "surface-dim": "#dbd9d9",
                    "on-error-container": "#93000a",
                    "on-surface": "#1b1c1c",
                    "surface-container-highest": "#e4e2e2",
                    "on-secondary": "#ffffff",
                    "background": "#fbf9f8",
                    "tertiary-container": "#a06900",
                    "on-secondary-fixed-variant": "#005227",
                    "surface-container-high": "#eae8e7",
                    "outline-variant": "#c1c7d3",
                    "on-primary-fixed-variant": "#004883",
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#7f5300",
                    "error-container": "#ffdad6",
                    "secondary-container": "#83fba5",
                    "surface-container": "#efeded",
                    "tertiary-fixed-dim": "#ffb953"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "24px",
                    "base": "8px",
                    "margin-desktop": "80px",
                    "lg": "48px",
                    "sm": "12px",
                    "gutter": "24px",
                    "xs": "4px",
                    "margin-mobile": "16px",
                    "xl": "64px"
            },
            "fontFamily": {
                    "headline-lg-mobile": ["Atkinson Hyperlegible Next"],
                    "label-md": ["Source Sans 3"],
                    "headline-md": ["Atkinson Hyperlegible Next"],
                    "body-lg": ["Source Sans 3"],
                    "body-md": ["Source Sans 3"],
                    "button-text": ["Source Sans 3"],
                    "headline-lg": ["Atkinson Hyperlegible Next"]
            },
            "fontSize": {
                    "headline-lg-mobile": ["32px", {"lineHeight": "38px", "fontWeight": "700"}],
                    "label-md": ["16px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                    "headline-md": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                    "body-lg": ["20px", {"lineHeight": "30px", "fontWeight": "400"}],
                    "body-md": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "button-text": ["18px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .ai-glow {
            border: 1px solid #005da7;
            box-shadow: 0 0 15px rgba(0, 93, 167, 0.1);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
<!-- TopAppBar -->
<header class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 z-40 sticky">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-7xl mx-auto">
<div class="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">CareGuide AI</div>
<nav class="hidden md:flex items-center gap-md">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Home</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Symptom Guidance</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">AI Chat</a>
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Medication Info</a>
</nav>
<div class="flex items-center gap-base">
<button class="material-symbols-outlined p-base text-on-surface-variant hover:bg-surface-variant rounded-full transition-all">help</button>
<button class="material-symbols-outlined p-base text-on-surface-variant hover:bg-surface-variant rounded-full transition-all">account_circle</button>
</div>
</div>
</header>
<div class="flex max-w-7xl mx-auto min-h-screen">
<!-- SideNavBar (Desktop Only) -->
<aside class="hidden md:flex flex-col h-full py-lg px-md bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline docked full-height left-0 w-80 shrink-0">
<div class="mb-xl px-base">
<div class="flex items-center gap-sm mb-base">
<img class="w-12 h-12 rounded-full object-cover" data-alt="A professional close-up portrait of a friendly healthcare user in a brightly lit modern office environment. The image has a clean, minimalist light-mode aesthetic with soft blue and slate tones in the background. High-key natural lighting creates a warm and approachable feeling, reflecting a human-centered healthcare brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEB6M_XyatWzogqR0x5Qf2eSS5E_Ur312ZcTh_GHH4AZ87ZrSfdyIpxCwz85sXYwqRr7vRToUcACMq77TnDCO3BgYo0OB5MUeh8fZtvt_-rjKcuSmhvCpePuAcuJdwGXdaqcpc3nd51emeu3838dC5akDKf-bY7v9PSxFfaqqG-1cc-2z76tuEjpHOwksZsGPS9nYTYkHS6Jm9mc4KUu_LvioxdWeLDULqg6Rgzt5MNplUkp53b5Gh_D_Yqkszsd8QBrVxyqxyCro"/>
<div>
<p class="font-headline-md text-body-md font-bold text-primary">CareGuide AI</p>
<p class="text-on-surface-variant text-sm">Your Health Assistant</p>
</div>
</div>
</div>
<nav class="flex flex-col gap-xs flex-grow">
<a class="flex items-center gap-base px-md py-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-body-md">Home</span>
</a>
<a class="flex items-center gap-base px-md py-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">health_and_safety</span>
<span class="font-body-md">Symptom Guidance</span>
</a>
<a class="flex items-center gap-base px-md py-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">smart_toy</span>
<span class="font-body-md">AI Chat</span>
</a>
<a class="flex items-center gap-base px-md py-base bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-lg font-bold" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">pill</span>
<span class="font-body-md">Medication Info</span>
</a>
<a class="flex items-center gap-base px-md py-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">favorite</span>
<span class="font-body-md">Preventive Tips</span>
</a>
<a class="flex items-center gap-base px-md py-base text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined">gavel</span>
<span class="font-body-md">Disclaimer</span>
</a>
</nav>
<div class="mt-auto px-base">
<button class="w-full bg-primary text-on-primary font-button-text py-sm rounded-xl shadow-lg hover:scale-98 active:scale-95 transition-transform">Get Support</button>
</div>
</aside>
<!-- Main Content -->
<main class="flex-grow w-full px-margin-mobile md:px-lg py-lg md:py-xl bg-surface-bright">
<header class="mb-xl">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-base">Medication Information</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Search for medications to understand their general use, side effects, and safety considerations. Always consult with a healthcare professional before starting or changing medications.</p>
</header>
<!-- Search Section -->
<section class="mb-xl">
<div class="relative max-w-3xl">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-xl pr-md py-md bg-surface-container-lowest border-2 border-outline-variant focus:border-primary focus:ring-0 rounded-xl font-body-md shadow-sm transition-colors outline-none" placeholder="Enter medication name (e.g., Ibuprofen, Lisinopril)" type="text"/>
</div>
<div class="flex flex-wrap gap-base mt-md">
<span class="text-on-surface-variant text-sm font-label-md">Popular:</span>
<button class="bg-secondary-container/10 text-secondary border border-secondary/20 px-sm py-1 rounded-full text-sm font-label-md hover:bg-secondary-container transition-colors">Acetaminophen</button>
<button class="bg-secondary-container/10 text-secondary border border-secondary/20 px-sm py-1 rounded-full text-sm font-label-md hover:bg-secondary-container transition-colors">Amoxicillin</button>
<button class="bg-secondary-container/10 text-secondary border border-secondary/20 px-sm py-1 rounded-full text-sm font-label-md hover:bg-secondary-container transition-colors">Metformin</button>
</div>
</section>
<!-- Results Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Main Info Card (General Use) -->
<div class="md:col-span-8 bg-surface-container-lowest p-md md:p-lg rounded-xl shadow-[0_4px_20px_rgba(74,144,226,0.08)] ai-glow relative overflow-hidden">
<div class="flex items-start justify-between mb-md">
<div>
<span class="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-base py-1 rounded-full mb-base inline-block">AI Insight</span>
<h2 class="font-headline-md text-headline-md text-on-surface">General Use: Ibuprofen</h2>
</div>
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">info</span>
</div>
<p class="font-body-md text-on-surface-variant mb-md">
                        Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used primarily for relieving pain, reducing inflammation, and lowering fever. It works by blocking the production of certain natural substances in your body that cause inflammation.
                    </p>
<ul class="space-y-base mb-md">
<li class="flex items-center gap-base text-on-surface-variant">
<span class="material-symbols-outlined text-secondary text-base">check_circle</span>
                            Relief from mild to moderate pain (headaches, toothaches, muscle aches)
                        </li>
<li class="flex items-center gap-base text-on-surface-variant">
<span class="material-symbols-outlined text-secondary text-base">check_circle</span>
                            Reduction of swelling and inflammation from minor injuries
                        </li>
<li class="flex items-center gap-base text-on-surface-variant">
<span class="material-symbols-outlined text-secondary text-base">check_circle</span>
                            Temporary reduction of fever
                        </li>
</ul>
<div class="bg-surface-container-low p-md rounded-lg border-l-4 border-primary">
<p class="text-sm font-bold text-primary mb-1 uppercase tracking-tight">Important Note</p>
<p class="text-sm text-on-surface-variant italic">Individual responses to medication vary. This information describes typical usage and should not replace clinical diagnosis.</p>
</div>
</div>
<!-- Safety Warnings -->
<div class="md:col-span-4 bg-error-container/20 p-md md:p-lg rounded-xl border border-error/20 flex flex-col">
<div class="flex items-center gap-sm mb-md text-error">
<span class="material-symbols-outlined">warning</span>
<h3 class="font-headline-md text-body-lg font-bold">Safety Warnings</h3>
</div>
<div class="space-y-md flex-grow">
<div>
<p class="font-bold text-on-surface text-sm mb-1">Kidney &amp; Stomach Health</p>
<p class="text-sm text-on-surface-variant">NSAIDs may increase the risk of serious stomach bleeding or kidney complications, especially in older adults.</p>
</div>
<div>
<p class="font-bold text-on-surface text-sm mb-1">Cardiovascular Risk</p>
<p class="text-sm text-on-surface-variant">Long-term use may increase the risk of heart attack or stroke for some individuals.</p>
</div>
<div>
<p class="font-bold text-on-surface text-sm mb-1">Allergic Reactions</p>
<p class="text-sm text-on-surface-variant">Seek immediate help if you experience hives, facial swelling, or difficulty breathing.</p>
</div>
</div>
</div>
<!-- Common Side Effects -->
<div class="md:col-span-6 bg-surface-container-lowest p-md md:p-lg rounded-xl shadow-[0_4px_20px_rgba(74,144,226,0.08)]">
<div class="flex items-center gap-sm mb-md">
<span class="material-symbols-outlined text-tertiary">monitor_heart</span>
<h3 class="font-headline-md text-body-lg font-bold">Common Side Effects</h3>
</div>
<div class="grid grid-cols-2 gap-sm">
<div class="p-sm bg-surface-container rounded-lg text-center">
<p class="text-on-surface font-bold">Nausea</p>
<p class="text-xs text-on-surface-variant">Very Common</p>
</div>
<div class="p-sm bg-surface-container rounded-lg text-center">
<p class="text-on-surface font-bold">Dizziness</p>
<p class="text-xs text-on-surface-variant">Common</p>
</div>
<div class="p-sm bg-surface-container rounded-lg text-center">
<p class="text-on-surface font-bold">Heartburn</p>
<p class="text-xs text-on-surface-variant">Common</p>
</div>
<div class="p-sm bg-surface-container rounded-lg text-center">
<p class="text-on-surface font-bold">Drowsiness</p>
<p class="text-xs text-on-surface-variant">Less Common</p>
</div>
</div>
<p class="mt-md text-sm text-on-surface-variant italic">If these symptoms persist or worsen, contact your provider immediately.</p>
</div>
<!-- Ask a Doctor CTA -->
<div class="md:col-span-6 bg-primary-container p-md md:p-lg rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-center">
<div class="relative z-10 text-on-primary-container">
<h3 class="font-headline-md text-headline-md mb-base">Consult a Professional</h3>
<p class="font-body-md mb-md opacity-90">Every body is different. For specific dosage plans or if you take multiple medications, a professional consultation is mandatory.</p>
<div class="flex gap-base">
<button class="bg-surface-container-lowest text-primary px-lg py-sm rounded-xl font-button-text shadow-md hover:scale-98 transition-all flex items-center gap-sm">
<span class="material-symbols-outlined">call</span>
                                Talk to a Nurse
                            </button>
<button class="border border-surface-container-lowest text-surface-container-lowest px-lg py-sm rounded-xl font-button-text hover:bg-white/10 transition-all">
                                Find a Clinic
                            </button>
</div>
</div>
<div class="absolute -right-12 -bottom-12 opacity-10">
<span class="material-symbols-outlined text-[180px]">medical_information</span>
</div>
</div>
</section>
<!-- Visual Guide Section -->
<section class="mt-xl grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="relative h-64 rounded-xl overflow-hidden shadow-lg group">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A clean, organized medicine cabinet with amber glass bottles and white labels, arranged on minimalist glass shelves. The lighting is soft and natural, emphasizing a sterile but warm residential bathroom setting with light blue wall accents. Professional photography style focusing on pharmaceutical organization and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZg17wTA9h5X2CTM9YJIoRE-LQw2Xt6iX3zHZKnvHhkQL9d9ILRKSPAn9l4uJ79hciLLyHasEAxp7s53fo6XmWbnzgHPu6z4I8op2_5Q-cnWaB6grBDgnrygPpOLdRfce_FfPKnwTyIv4V6piIGjfDmAWY8NYGfShGxHArvK0dr-aS7NWbccLBTTL223EykFDFjNr8ZaArvaUr-RQLZPH5wPhJdYBtrirrcVmTRI9-LboM7p9PiPashLxGmAalGUPYC0ifZwmpV6I"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 to-transparent flex flex-col justify-end p-md">
<p class="text-on-primary font-bold">Safe Storage Tips</p>
<p class="text-on-primary/80 text-xs">Maintain efficacy through proper environment.</p>
</div>
</div>
<div class="relative h-64 rounded-xl overflow-hidden shadow-lg group">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A female doctor in a white coat calmly discussing medication with an elderly patient in a bright, modern medical office. Large windows let in soft daylight, highlighting the empathetic interaction. The room features minimalist wooden furniture and a calming palette of soft greens and whites. Cinematic and high-quality aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1bvybddH_y5pAJvDqAHhROSWCuBcgDIfIVaJew9pY5q2QEk2E0rbet-TWO4bMIfyrpRbtOdqTan7T5YfMdmBuEDC9ChOv9g0J1xaFytxMr7If-cfbeqZT4VwxxgESanX2EPOO3yiwd1Ob37aGIBNfUMc7BlNpQM5b9jed9wPUUQA7s7OqO_EggD1ZbOo3C-ykEZ3Uvv5_mGKwyNHXtya1GnxHEgf4gu-tnJh9IQYjvlTrW3V8pgCrYv9wKgHmKc0rogTEdDdgjuo"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 to-transparent flex flex-col justify-end p-md">
<p class="text-on-primary font-bold">Professional Guidance</p>
<p class="text-on-primary/80 text-xs">Why face-to-face consults are vital.</p>
</div>
</div>
<div class="relative h-64 rounded-xl overflow-hidden shadow-lg group">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A futuristic but accessible representation of AI in healthcare, showing a digital tablet with clean medical data visualizations resting on a pristine white desk. The surrounding space is filled with soft natural light, indoor plants, and a minimalist tech-organic aesthetic. Deep blue and soft white colors dominate the scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0k8zd1NDz-NN0VNNkaMo92COvMeXyXg-1HhyZufTrRhTcW9I5lHdITsPHFTezmvpywXkj_xDfWlf1x46QoRqOOGLGQY5KKtS5L7jnCbeo4J2L5N2ttGTL9hmHaxsmJbSkPYIsUuSEEHVuLPZOfc9DNWHxpJEMe16uFw_5rfPLLLFPwzS2bp6SXzp_RNUvDVYpTdJZNDGtOD6PBMNuBgFQGwEdYrEziMyQigxCFdJKmk_WpQQt_mkX7qKbdiDbxY6_3i1IES5mY1M"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 to-transparent flex flex-col justify-end p-md">
<p class="text-on-primary font-bold">AI Data Analysis</p>
<p class="text-on-primary/80 text-xs">How we aggregate clinical safety info.</p>
</div>
</div>
</section>
</main>
</div>
<!-- Footer -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant w-full py-xl px-margin-mobile md:px-margin-desktop text-center mt-xl mb-24 md:mb-0">
<div class="max-w-7xl mx-auto">
<div class="font-headline-sm text-headline-sm text-primary mb-md">CareGuide AI</div>
<div class="flex flex-wrap justify-center gap-md mb-lg">
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-body-md text-primary underline" href="#">Disclaimer</a>
</div>
<p class="font-body-md text-on-surface-variant max-w-3xl mx-auto">© 2024 CareGuide AI. For informational purposes only. This tool does not provide medical advice, diagnosis, or treatment. Seek professional medical advice for any health-related concerns.</p>
</div>
</footer>
<!-- BottomNavBar (Mobile Only) -->
<nav class="fixed bottom-0 left-0 w-full z-50 bg-surface-container dark:bg-surface-container-high shadow-[0_-4px_20px_rgba(74,144,226,0.08)] flex justify-around items-center px-base py-sm md:hidden rounded-t-xl">
<button class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-all active:opacity-80">
<span class="material-symbols-outlined">home</span>
<span class="text-xs font-label-md">Home</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-all active:opacity-80">
<span class="material-symbols-outlined">medical_services</span>
<span class="text-xs font-label-md">Symptom</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-all active:opacity-80">
<span class="material-symbols-outlined">chat</span>
<span class="text-xs font-label-md">AI Chat</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 scale-98 active:opacity-80 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">medication</span>
<span class="text-xs font-label-md">Meds</span>
</button>
</nav>
</body></html>