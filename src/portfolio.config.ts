export const portfolio = {
  name: "Form Study",
  email: "",
  telegramUrl: "https://t.me/K1ndnes_ss",
  freelanceProfiles: [] as { label: string; url: string }[],
  projects: [
    {
      name: "Fahrschule Ohlberg",
      label: "Live website",
      category: "Driving school website",
      image: "./fahrschule-ohlberg.png",
      alt: "Fahrschule Ohlberg homepage with a blue road illustration and theory lesson times",
      url: "https://dofaminch1k.github.io/Fahrschule-Ohlberg/",
      task: "Help learner drivers in Heilbronn find the right licence class and plan their first visit.",
      solution: "The homepage puts theory lesson times beside the introduction. Visitors can explore licence classes, check prices and find registration details from the main navigation.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "HyperForge",
      label: "Web shop",
      category: "Gaming hardware storefront demo",
      image: "./hyperforge.png",
      alt: "HyperForge storefront showing a green-lit gaming PC above the hardware catalog",
      url: "https://dofaminch1k.github.io/HyperForge/",
      task: "Help shoppers find a ready-built gaming PC or choose parts for their own build.",
      solution: "Shoppers can search the catalog, narrow it by component type and price, and save their picks in a cart that remembers them between visits.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Relay",
      label: "Web app",
      category: "Team project management app",
      image: "./relay.png",
      alt: "Relay homepage with the headline Great work. All in sync. and a workspace registration button",
      url: "https://relay-2fe.pages.dev/",
      task: "Give small teams a shared workspace to organize projects, assign tasks and track deadlines.",
      solution: "Relay brings projects, a Kanban task board, a shared calendar and progress reports together, with Supabase authentication and real-time workspace updates.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"]
    }
  ]
};

