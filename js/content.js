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
      /* Project 2: visual design (narrative, world building, character design) */
      title: "The little Tide",
      role: "Narrative, World & Character Design",
      year: "",
      duration: "3 weeks",
      tools: [],
      thumb: "assets/projects/koli-fish-market/env-stall.jpg",
      blurb: "A cozy life-simulator about a Koli fisherwoman on the Konkan coast. Each day she buys fish at the dockyard, looks after her two children and sells at the market, while the sea and the markets get harder to predict. I designed the narrative, the three environments and the main character.",
      links: [],
      sections: [
        { title: "Overview",
          text: ["Set in a coastal Koli community, the game follows a mother selling fish to support her two children as the ocean and the markets grow increasingly unpredictable. Through daily choices and resource management, players move through the bustling fish market, buying and selling fish to gradually upgrade her stall."],
          facts: [
            { k: "Duration", v: "3 weeks" },
            { k: "Genre", v: "Cozy life simulator" },
            { k: "Theme", v: "Resilience" },
            { k: "Core mechanics", v: "Resource management, economy" },
            { k: "Goal", v: "Buy and sell fish" },
            { k: "Conflict", v: "A changing climate affects which fish are available" },
            { k: "Environments", v: "Fish market, dockyard, her home near the coast" },
            { k: "Player experience", v: "A cozy, casual game about managing the economy and resources despite the challenges, growing the business, and experiencing how the Koli community and fisherman culture work together." }
          ],
          figures: [{ src: "assets/projects/koli-fish-market/env-stall.jpg", alt: "Top-down illustration of the fish stall with the day's catch laid out", caption: "Environment 2, the fish stall" }], figLayout: "stack" },

        { title: "Moodboard",
          text: ["References for the look and life of the Konkan coast: green hill villages, traditional houses, fish markets, the harbour, and bold flat market illustration."],
          figures: [
            { src: "assets/projects/koli-fish-market/mood-1.jpg", alt: "Green hills and rice terraces with red-roofed houses" },
            { src: "assets/projects/koli-fish-market/mood-2.jpg", alt: "Fish laid out in baskets at a market" },
            { src: "assets/projects/koli-fish-market/mood-3.jpg", alt: "Top-down view of a colourful market under umbrellas" },
            { src: "assets/projects/koli-fish-market/mood-4.jpg", alt: "A boat on the water in front of palm trees" },
            { src: "assets/projects/koli-fish-market/mood-5.jpg", alt: "A traditional house with a tiled roof" },
            { src: "assets/projects/koli-fish-market/mood-6.jpg", alt: "Crates of fresh fish at a dock" },
            { src: "assets/projects/koli-fish-market/mood-7.jpg", alt: "A bold illustration of a market seller" },
            { src: "assets/projects/koli-fish-market/mood-8.jpg", alt: "Women selling at a market stall" },
            { src: "assets/projects/koli-fish-market/mood-9.jpg", alt: "Fish being sorted at the dockyard" }
          ] },

        { title: "Narrative",
          text: ["The game is one day told in five scenes. When the day ends, the next one begins."],
          steps: [
            { title: "Introduction", text: "Early morning. The woman gets ready to buy fish at the dockyard and cycles there." },
            { title: "Dockyard", text: "She parks her cycle and visits different wholesale sellers to buy different kinds of fish. Once she has everything, she cycles back home." },
            { title: "Home", text: "She parks her bike, leaves the fish bags on the veranda and goes in. She wakes her kids and starts preparing food, then goes out to feed the cattle and chickens. When the kids are ready she drops them at the bus or auto stop, picks up the bags and her stall essentials, and heads to the market." },
            { title: "Fish market", text: "She sets up her stall and waits for customers. When someone comes, she cleans or chops the fish and hands it over." },
            { title: "Going back home", text: "At the end of the day she goes home, and another day starts." }
          ] },

        { title: "Daily tasks & encounters",
          text: ["Her day is ten small tasks, and every route is full of people she can meet along the way. These everyday interactions are what make the community feel alive."],
          blocks: [
            { heading: "Tasks to complete", bullets: [
              "Cycle to the dockyard", "Buy the fish she needs", "Go back home",
              "Prepare food and get the kids ready for school", "Feed the cattle and chickens", "Drop the kids at the bus stop",
              "Cycle to the fish market", "Park the cycle and set up the stall", "Sell fish", "Pack everything and go back home" ] },
            { heading: "Who she meets", facts: [
              { k: "Home to dockyard", v: "Milkman, newspaper boy, a far neighbour, a fisherman, other Koli women" },
              { k: "Dockyard to home", v: "An old woman making rangoli, a farmer going to feed his cattle, a neighbour asking after the kids" },
              { k: "Home to bus or auto stop", v: "Other kids and their moms and dads, the neighbour aaji (grandmother)" },
              { k: "Bus or auto stop to home", v: "A vegetable vendor on the way to the market" },
              { k: "Home to fish market", v: "Her friends, a shepherd, villagers" },
              { k: "Fish market", v: "Other sellers and customers" }
            ] }
          ] },

        { title: "World building",
          text: ["Each place started as a rough sketch, became a to-scale layout, and then turned into the final top-down illustration."],
          blocks: [
            { heading: "Environment explorations", figures: [
              { src: "assets/projects/koli-fish-market/plan-sketch-1.jpg", alt: "Hand-drawn map sketch of the coast and dockyard" },
              { src: "assets/projects/koli-fish-market/plan-sketch-2.jpg", alt: "Hand-drawn sketch of the fish stall layout" },
              { src: "assets/projects/koli-fish-market/plan-1.jpg", alt: "Line layout of the house interior" },
              { src: "assets/projects/koli-fish-market/plan-2.jpg", alt: "Line layout of the fish stall" },
              { src: "assets/projects/koli-fish-market/plan-3.jpg", alt: "Line layout of the house and yard" },
              { src: "assets/projects/koli-fish-market/plan-4.jpg", alt: "Line layout of the dockyard" }
            ] },
            { heading: "Environment 1: House", figures: [{ src: "assets/projects/koli-fish-market/env-house.jpg", alt: "Top-down illustration of the house with a bicycle parked outside", caption: "Her home near the coast" }], figLayout: "stack" },
            { heading: "Environment 2: Fish stall", figures: [{ src: "assets/projects/koli-fish-market/env-stall.jpg", alt: "Top-down illustration of the fish stall", caption: "Where the day's fish are sold" }], figLayout: "stack" },
            { heading: "Environment 3: Dockyard", figures: [{ src: "assets/projects/koli-fish-market/env-dockyard.jpg", alt: "Top-down illustration of the dockyard with crates of fish and the sea", caption: "Where the fish are bought each morning" }], figLayout: "stack" }
          ] },

        { title: "Character: Savitri",
          text: ["Savitri Kadam is a 35-year-old Koli fisherwoman from Ratnagiri. She looks strong and is sharp in business, but she carries a loss that the sea keeps bringing back."],
          blocks: [
            { heading: "Profile", facts: [
              { k: "Name", v: "Savitri Kadam" },
              { k: "Age", v: "35" },
              { k: "Community", v: "Koli (Konkan region, Maharashtra)" },
              { k: "Location", v: "Ratnagiri, coastal Maharashtra" },
              { k: "Background", v: "Born and raised in Bajarpeeth, a small village near Ratnagiri, and moved to Ratnagiri city after marriage. Her husband, Vikrant Kadam, was a fisherman. She lost him about a year and a half ago in a high-tide accident at sea." },
              { k: "Family", v: "A single mother raising two children alone: her elder daughter Sarika and her younger son Shreyas (Bittu)." },
              { k: "Work", v: "A fisherwoman who sells fish and seafood at a busy local market every morning." },
              { k: "Look", v: "Tall, slim and energetic" }
            ] },
            { heading: "Personality & story", facts: [
              { k: "Personality", v: "Outgoing and sharp in business, and well connected with the other fisherwomen. She relies on community and friendship to get by." },
              { k: "Emotional side", v: "She carries unresolved grief from her husband's death, and is especially affected when the sea turns rough." },
              { k: "Outside vs inside", v: "She appears strong outwardly while dealing with stress and uncertainty inside." },
              { k: "Challenges", v: "Financial pressure as the only provider; an unpredictable sea and market; balancing grief with daily survival." },
              { k: "Dream", v: "To open her own Konkani restaurant." }
            ] },
            { heading: "Character explorations", figures: [
              { src: "assets/projects/koli-fish-market/char-sketch-1.jpg", alt: "Ink sketch of a woman carrying a fish basket" },
              { src: "assets/projects/koli-fish-market/char-sketch-2.jpg", alt: "Sketchbook page of costume and pose studies" },
              { src: "assets/projects/koli-fish-market/char-sketch-3.jpg", alt: "Sketchbook page of full-body figure studies" },
              { src: "assets/projects/koli-fish-market/char-sketch-4.jpg", alt: "Sketchbook page of character proportion studies" },
              { src: "assets/projects/koli-fish-market/char-sketch-5.jpg", alt: "Sketchbook page of figure studies" },
              { src: "assets/projects/koli-fish-market/char-sketch-6.jpg", alt: "Colour pencil sketch of the character with a face study" }
            ] },
            { heading: "Final design & turnaround", figLayout: "side", figures: [
              { src: "assets/projects/koli-fish-market/char-final.jpg", alt: "Final colour design of Savitri in a pink saree", caption: "Final design" },
              { src: "assets/projects/koli-fish-market/char-turnaround.jpg", alt: "Line turnaround of Savitri from the front, side and back", caption: "Turnaround" }
            ] },
            { heading: "Walk cycle",
              video: { src: "assets/projects/koli-fish-market/walkcycle.mp4", poster: "assets/projects/koli-fish-market/walkcycle-poster.jpg", alt: "Animated walk cycle of Savitri" },
              figures: [
                { src: "assets/projects/koli-fish-market/walk-strip-1.jpg", alt: "Walk cycle drawings, first pass" },
                { src: "assets/projects/koli-fish-market/walk-strip-2.jpg", alt: "Walk cycle drawings, second pass" }
              ], figLayout: "stack" }
          ] },

        { title: "Challenges & learnings",
          blocks: [
            { heading: "Challenges", bullets: [
              "Keeping a consistent visual style and a cohesive design language across the whole project",
              "Balancing aesthetics with clear storytelling and function",
              "Simplifying visuals without losing important detail or emotional impact",
              "Managing iterations and feedback in limited time" ] },
            { heading: "Learnings", bullets: [
              "How visual design strengthens storytelling and the player experience",
              "A better understanding of composition, colour and visual hierarchy",
              "Stronger skills in making cohesive, emotionally engaging visuals",
              "More confidence in refining ideas through experimentation and feedback" ] }
          ] }
      ]
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

  /* What opens when someone clicks a project card: a write-up with a clickable section list.
     Every project uses these sections unless it has its own "sections" array (copy this
     shape into a project to customise it). Tokens {blurb} {role} {tools} fill themselves in.
       text:    paragraphs      bullets: short list      art: true shows placeholder art
       image:   "assets/projects/xyz.jpg" shows your own picture under the text            */
  projectSections: [
    { title: "Overview", text: ["{blurb}"], art: true },
    { title: "My role", text: ["I worked as {role}, using {tools}. Say what you owned from start to finish."],
      bullets: ["Something you designed end to end", "Something you tested or balanced", "Something you shipped or documented"] },
    { title: "Goals & pillars", text: ["What was the player supposed to feel? State the two or three design pillars that every decision was checked against."],
      bullets: ["Pillar one: a short sentence", "Pillar two: a short sentence", "Pillar three: a short sentence"] },
    { title: "Design process", text: ["Walk through how it came together: early sketches, the first prototype, what you cut and why. Screenshots, flowcharts and level maps work well here."], art: true },
    { title: "Playtesting & iteration", text: ["Who tested it, what surprised you, and what you changed because of it."],
      bullets: ["Finding: what players actually did", "Change: what you did about it", "Result: how the next test went"] },
    { title: "Outcome", text: ["What shipped, what you would do differently, and what you learned."] }
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
