/* ==========================================================
   ALL YOUR CONTENT LIVES HERE. Everything below is placeholder
   text: replace it with your own, save, refresh the page.
   ========================================================== */
window.SITE = {

  /* How the drawers behave:
       "stack"  all drawers start open. An open drawer hides the drawers below it,
                and closing it reveals them (like a real cabinet).
       "scroll" drawers start closed and open one by one as you scroll down.
     You can also try each one without editing: add ?drawers=stack or ?drawers=scroll
     to the page address. */
  drawerMode: "stack",

  /* Pencil scribbles on the papers (keep it to 5-7 short lines) */
  interests: [
    "level design & flow",
    "game feel / juice",
    "systems that surprise",
    "cozy + weird worlds",
    "watching playtests",
    "UI that feels good"
  ],

  /* Cards in the Works drawer (any number works; 4, 7, 8 all lay out neatly).
     thumb: path to an image, e.g. "assets/projects/my-game.jpg" (16:10 works best).
            Leave it "" to show the drawn placeholder art. */
  projects: [
    {
      title: "Project Title 01",
      role: "Game Designer",
      year: "2026",
      tools: ["Unity", "Figma"],
      thumb: "",
      blurb: "Two or three sentences: what the game is, what problem you were solving, and what you personally designed.",
      links: [
        { label: "Play on itch.io", url: "https://your-name.itch.io/" },
        { label: "Design doc", url: "#" }
      ]
    },
    {
      title: "Project Title 02",
      role: "Level Designer",
      year: "2026",
      tools: ["Unreal Engine", "Miro"],
      thumb: "",
      blurb: "Describe the level or system, the player experience you aimed for, and what playtests taught you.",
      links: [{ label: "Case study", url: "#" }]
    },
    {
      title: "Project Title 03",
      role: "Systems Designer",
      year: "2025",
      tools: ["Unity", "Spreadsheets"],
      thumb: "",
      blurb: "Describe the economy, progression or combat system you designed and how you balanced it.",
      links: [{ label: "Case study", url: "#" }]
    },
    {
      title: "Project Title 04",
      role: "Game Jam Team",
      year: "2025",
      tools: ["Unity", "Blender"],
      thumb: "",
      blurb: "A jam game: the theme, the team size, how many hours you had and what you shipped.",
      links: [{ label: "Play on itch.io", url: "https://your-name.itch.io/" }]
    },
    {
      title: "Project Title 05",
      role: "UI / UX Designer",
      year: "2025",
      tools: ["Figma", "Photoshop"],
      thumb: "",
      blurb: "A menu, HUD or onboarding flow you designed, and how you tested that players understood it.",
      links: [{ label: "Case study", url: "#" }]
    },
    {
      title: "Project Title 06",
      role: "Narrative Designer",
      year: "2024",
      tools: ["Twine", "Miro"],
      thumb: "",
      blurb: "The story structure, the choices you gave the player, and how the writing supports the mechanics.",
      links: [{ label: "Read it", url: "#" }]
    },
    {
      title: "Project Title 07",
      role: "Prototype",
      year: "2024",
      tools: ["Unity", "C#"],
      thumb: "",
      blurb: "A small experiment: the one idea you wanted to test and what you learned from building it.",
      links: [{ label: "Play on itch.io", url: "https://your-name.itch.io/" }]
    }
  ],

  /* The sketchbook (About) */
  about: {
    greeting: "Hi, I'm Radhika.",
    paragraphs: [
      "Write two or three short paragraphs about yourself here: what kind of games you love, how you got into design, and what you are looking for next.",
      "Mention one small, specific detail that is only true of you. It is what people remember."
    ],
    glance: [
      { k: "Based in", v: "Your city" },
      { k: "Focus", v: "Level & systems design" },
      { k: "Tools", v: "Unity, Unreal, Figma" },
      { k: "Open to", v: "Internships, jobs, collabs" }
    ],
    resume: "assets/resume.pdf",
    resumeFileName: "Radhika-Bhojane-Resume.pdf"
  },

  /* The stylus (Skills). level is 1-5. */
  skillsIntro: "Software I use most, and what I use it for.",
  skills: [
    { name: "Unity",         cat: "Engine",   level: 4, note: "Prototyping mechanics, level blockouts and playable builds." },
    { name: "Unreal Engine", cat: "Engine",   level: 3, note: "Level layout and lighting passes." },
    { name: "Blender",       cat: "3D",       level: 3, note: "Props and greybox environments." },
    { name: "Photoshop",     cat: "2D",       level: 4, note: "Concept sketches, UI art and texture touch-ups." },
    { name: "Figma",         cat: "UI / UX",  level: 4, note: "Menu flows, HUD layouts and clickable mockups." },
    { name: "Miro",          cat: "Planning", level: 4, note: "Flowcharts, design maps and player journeys." },
    { name: "C#",            cat: "Code",     level: 3, note: "Gameplay scripting and quick tools." },
    { name: "Git / GitHub",  cat: "Workflow", level: 3, note: "Version control for team projects." }
  ],

  /* The bottom of the cabinet. Remove a line (or set href to "") to hide that button. */
  contact: [
    { id: "email",    label: "Email",        href: "mailto:you@example.com", display: "you@example.com" },
    { id: "linkedin", label: "LinkedIn",     href: "https://www.linkedin.com/in/your-name/" },
    { id: "itch",     label: "itch.io",      href: "https://your-name.itch.io/" },
    { id: "behance",  label: "Behance",      href: "https://www.behance.net/your-name" },
    { id: "resume",   label: "Resume (PDF)", href: "assets/resume.pdf", download: "Radhika-Bhojane-Resume.pdf" }
  ]
};
