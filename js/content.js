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
      /* Project 1: level design (from chor_bandar.pptx) */
      title: "Chor Bandar",
      role: "Level Design",
      year: "",
      duration: "2 weeks",
      tools: ["Unity", "Gemini", "ChatGPT"],
      thumb: "assets/projects/chor-bandar/scene-start.jpg",
      thumbPos: "50% 5%",
      blurb: "A casual stealth-arcade platformer set in Indian urban streets. You play a mischievous monkey stealing fruit for its babies while dodging vendors and aunties. The brief was to design two levels for a game; I set them in an Indian context.",
      links: [],
      sections: [
        { title: "Overview",
          /* paste the game's itch.io page link into url here and in Gameplay below; the button shows once it has a link */
          links: [{ label: "Play on itch.io", url: "" }],
          text: [
            "Chor Bandar is a playful stealth-arcade game set in Indian urban environments, where the player controls a mischievous monkey stealing fruits while avoiding humans. The core experience revolves around timing, observation and quick movement, combined with a humorous story of feeding baby monkeys."
          ],
          facts: [
            { k: "Duration", v: "2 weeks" },
            { k: "Design brief", v: "Design two levels for a game. I chose to set both in everyday Indian surroundings: a street fruit market and an apartment block." },
            { k: "Focus", v: "Level design" },
            { k: "Genre", v: "Casual / stealth-arcade platformer" },
            { k: "Target audience", v: "Casual players" },
            { k: "Software", v: "Unity, Gemini, ChatGPT" },
            { k: "AI disclosure", v: "AI was used for the background art and for coding." }
          ] },

        { title: "Gameplay",
          links: [{ label: "Play on itch.io", url: "" }],
          youtube: { url: "https://www.youtube.com/watch?v=8F53y0WHdxU", title: "Chor Bandar gameplay video" } },

        { title: "Goal & tone",
          text: ["The player must collect and deliver the fruits the baby monkeys ask for, while avoiding detection and collisions with people."],
          bullets: [
            "Light-hearted and humorous",
            "Mischief-driven gameplay",
            "Tension through stealth and avoidance",
            "Rewarding through successful delivery loops"
          ] },

        { title: "Core gameplay loop",
          loop: {
            center: "Repeat until the goal is met",
            steps: [
              { title: "Receive request", text: "The baby monkeys show which fruit they want" },
              { title: "Plan movement", text: "Watch the vendors' and aunties' patterns" },
              { title: "Navigate", text: "Jump, climb and move across the level" },
              { title: "Steal fruit", text: "Grab it from a stall or a home" },
              { title: "Return & deliver", text: "Bring back the right fruit for points" },
              { title: "Avoid danger", text: "Escape before losing all 3 lives" }
            ]
          } },

        { title: "Rules & mechanics",
          blocks: [
            { heading: "Game rules", bullets: [
              "The player starts each level with 3 lives.",
              "Each collision with an NPC costs 1 life.",
              "Losing all lives restarts the level.",
              "The player must deliver a set number of correct fruits to complete the level." ] },
            { heading: "Who does what", facts: [
              { k: "Monkey", v: "Walks sideways, jumps, climbs and grabs fruit" },
              { k: "Vendor", v: "Patrols sideways along his cart and sells fruit to customers" },
              { k: "Customers", v: "Walk sideways and buy fruit" },
              { k: "Aunty (level 2)", v: "Patrols her balcony sideways and disappears inside the house for a few seconds" }
            ] }
          ] },

        { title: "The two levels",
          blocks: [
            { heading: "Level 1: the fruit market",
              text: ["A street market with three fruit carts. Vendors patrol their carts and customers walk past, so the player has to time each grab. An electric pole leads up to the rooftops, where the baby monkeys wait. Deliver 5 fruits to win."],
              figures: [{ src: "assets/projects/chor-bandar/level-1.jpg", alt: "Level 1: a street with three fruit carts, vendors and customers, an electric pole, and baby monkeys on a rooftop asking for grapes", caption: "Level 1: the fruit market" }], figLayout: "stack" },
            { heading: "Level 2: the apartment balconies",
              text: ["Two apartment buildings with fruit on every balcony. Aunties patrol the balconies and pop back inside, so the player has to read their rhythm. Pipes and electric wires connect the buildings for climbing and crossing. Deliver 8 fruits to win."],
              figures: [{ src: "assets/projects/chor-bandar/level-2.jpg", alt: "Level 2: two apartment buildings with aunties on the balconies, fruit baskets, pipes and wires, and the monkey climbing a pipe", caption: "Level 2: the apartment balconies" }], figLayout: "stack" }
          ] },

        { title: "Scenes",
          figures: [
            { src: "assets/projects/chor-bandar/scene-start.jpg", alt: "Start screen with the Chor Bandar logo, a Start button and the WASD and Space keys", caption: "Start scene" },
            { src: "assets/projects/chor-bandar/scene-try-again.jpg", alt: "Try Again screen with a sad monkey holding an empty basket and a Retry button", caption: "Try again scene" },
            { src: "assets/projects/chor-bandar/scene-win.jpg", alt: "You Won screen with happy monkeys, a basket of fruit and a Start Again button", caption: "Win scene" }
          ], figLayout: "row" },

        { title: "Design process",
          steps: [
            { title: "Brief", text: "Design two levels for a game." },
            { title: "Setting", text: "Took the brief into an Indian context: monkeys stealing fruit from street markets and balconies is an everyday, funny sight." },
            { title: "Core loop & rules", text: "Defined the request, steal and deliver loop, the 3 lives, and how the monkey, vendors, customers and aunties move." },
            { title: "Level layouts", text: "Level 1 on the ground in a fruit market, with vendors to time around. Level 2 goes vertical across two apartment buildings, adding climbing and the aunties' appear-and-disappear pattern." },
            { title: "Build in Unity", text: "Built both levels and the start, try again and win scenes, using AI for the background art and the code." },
            { title: "Play & review", text: "Played through both levels to see what worked and what to improve." }
          ] },

        { title: "Learnings",
          bullets: [
            "The level breakdown could be more gradual, introducing one new idea at a time.",
            "There is a jump when the new environment is introduced: level 2 changes the setting, the layout and the threat all at once.",
            "Visually alerting the player when the vendor runs up behind them and shoos them could be clearer.",
            "On collision, the fruit could drop to the floor, so the player sees what they lost and can try to grab it back.",
            "NPC patterns need to be readable before they become a threat, so that getting caught feels fair rather than random.",
            "Where the delivery point sits shapes every route: putting the baby monkeys up high turns each delivery into a climb and sets the pace of the level."
          ] },

        { title: "Next steps",
          bullets: [
            "A short bridge level between the market and the apartments would introduce climbing and the aunty one at a time, smoothing the jump between the two environments.",
            "Warning cues, like a \"!\" and a sound when a vendor turns to chase, or a door animation before an aunty steps out, would let players react before they are caught.",
            "Dropping the fruit on collision, with a few seconds to pick it back up, would make each hit easy to read and give the player a chance to recover.",
            "A third level could bring both settings together: a market at street level with balconies above it.",
            "Playtesting with casual players would show how patrol speeds, the timer and the number of fruits per level should be tuned."
          ] }
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
      /* Project 4: board game (from Killer_Buzz_boardgame.pptx; pictures cropped as on the slides) */
      title: "Killer Buzz",
      role: "Board Game Design",
      year: "",
      duration: "4 weeks",
      tools: [],
      thumb: "assets/projects/killer-buzz/board-hero.jpg",
      blurb: "A two-player strategy board game where each player controls a Honeybee and a Hornet. You collect flowers with your bee and use your hornet to sabotage your opponent, so every turn asks the same question: collect or attack?",
      links: [],
      sections: [
        { title: "Overview",
          text: [
            "Killer Buzz is a two-player strategic board game where each player controls a Honeybee and a Hornet.",
            "The goal is to collect flowers while using your hornet to sabotage your opponent. Every turn demands tactical choices: whether to advance your bee toward sweet success or unleash your hornet's sting to disrupt the rival hive."
          ],
          facts: [
            { k: "Duration", v: "4 weeks" },
            { k: "Players", v: "2" },
            { k: "Age", v: "10+" },
            { k: "Play time", v: "20–30 minutes" },
            { k: "Core idea", v: "A tense balance between creation and destruction: collect or attack?" },
            { k: "Target audience", v: "Casual players, families and friends who enjoy quick, competitive strategy games; people who like chess-like tactics with short play sessions; and design, ecology and nature enthusiasts, thanks to its theme." }
          ] },

        { title: "Components",
          facts: [
            { k: "Game board (1)", v: "Hexagonal, 18\" side, with paths, a central hub, teleport spots and bee hives on opposite sides" },
            { k: "Honeybee tokens (2)", v: "Pawns with blue and red markings" },
            { k: "Hornet tokens (2)", v: "Pawns with blue and red markings" },
            { k: "Flower tokens (15)", v: "Small MDF flower-shaped punch-out discs" },
            { k: "Dice (2)", v: "Standard D6 dice" },
            { k: "Rulebook (1)", v: "A4 folded reference sheet" }
          ],
          figures: [
            { src: "assets/projects/killer-buzz/board-hero.jpg", alt: "The finished wooden hexagonal board with pink flower tokens, wooden pawns on the yellow hives and the red central hexagon", caption: "The finished board" },
            { src: "assets/projects/killer-buzz/components.jpg", alt: "Top view of the board with labels pointing to the honeybee, hornet, flower, teleportation spots, board and dice", caption: "Honeybee, hornet, flowers, teleport spots and dice" }
          ], figLayout: "pair" },

        { title: "Rules",
          blocks: [
            { heading: "Goal", text: ["Collect 8 flowers before your opponent, or strategically sting and steal to get ahead."] },
            { heading: "Turn structure",
              text: ["Each player gets two moves per turn. For each move, the player must choose:"],
              bullets: ["Which character to move: Honeybee or Hornet", "How many dice to roll: 1 die or 2 dice", "You cannot move the same character twice in one turn."] },
            { heading: "Honeybee", bullets: ["Moves according to the number rolled.", "Can land on flowers to collect them.", "Can teleport when landing on a teleport tile.", "Cannot attack."] },
            { heading: "Hornet", bullets: ["Moves according to the number rolled.", "Can sting the honeybee when close enough.", "Cannot collect flowers.", "Cannot use teleport spots."] },
            { heading: "Teleport mechanic (Honeybee only)",
              text: ["If a Honeybee lands on a teleport space, roll one die. The bee teleports to the flower or spot labelled with the number rolled. Teleportation adds unpredictability, but can help escape danger."] },
            { heading: "Flowers & safe zones", bullets: [
              "Flower tiles are safe zones for Honeybees.",
              "Hornets cannot sting or kill honeybees standing on flowers.",
              "If a hornet reaches a flower before the honeybee, that flower can't be collected for the rest of that round." ] },
            { heading: "Conflict & stinging", facts: [
              { k: "Stinging distance", v: "If the hornet is within 3 spaces of a honeybee, it gets one extra dice roll and must roll a 3 to sting. If it fails, the hornet stays in place." },
              { k: "When a sting happens", v: "The opponent's honeybee returns to its hive (starting point), and the stinging player takes half of the opponent's flower tokens. If the number is odd, round up (5 flowers: take 3)." }
            ] }
          ] },

        { title: "How to play",
          text: ["Board setup: the honeybees start at the two opposite yellow hives and the hornets at the central red hexagon. Flowers are placed on the yellow dots."],
          figures: [{ src: "assets/projects/killer-buzz/setup.jpg", alt: "Top view of the board set up with pawns on the hives and the centre, flowers on the paths and two dice", caption: "Board setup" }],
          figLayout: "pair",
          blocks: [
            { heading: "A round, step by step", figLayout: "grid", figures: [
              { src: "assets/projects/killer-buzz/play-1.jpg", alt: "A hand holding two wooden dice next to the board", caption: "1. Player 1 rolls both dice" },
              { src: "assets/projects/killer-buzz/play-2.jpg", alt: "A hand moving a honeybee pawn along the path", caption: "2. Move the honeybee by the number on the dice" },
              { src: "assets/projects/killer-buzz/play-3.jpg", alt: "A hand holding two dice beside the board", caption: "3. Player 1 rolls both dice again for the hornet" },
              { src: "assets/projects/killer-buzz/play-4.jpg", alt: "A finger pushing a hornet pawn across the board", caption: "4. Move the hornet by the number on the dice" },
              { src: "assets/projects/killer-buzz/play-5.jpg", alt: "Two dice rolled onto the table beside the board", caption: "5. Player 2 rolls both dice" },
              { src: "assets/projects/killer-buzz/play-6.jpg", alt: "Two hornet pawns on the red central hexagon surrounded by flowers", caption: "6. Player 2 moves their hornet and honeybee the same way" },
              { src: "assets/projects/killer-buzz/play-7.jpg", alt: "A hand picking up a flower token from the board", caption: "7. A honeybee that lands on a flower collects it" },
              { src: "assets/projects/killer-buzz/play-8.jpg", alt: "A honeybee pawn on its yellow hive with hornets in the distance", caption: "8. A stung bee goes back to its hive and gives up half its flowers" }
            ] }
          ] },

        { title: "Gameplay",
          youtube: { url: "https://www.youtube.com/watch?v=09TsFmhYT1o", title: "Killer Buzz gameplay video" } },

        { title: "Design process",
          text: [
            "Ideation → prototype → playtesting → changes and a high-fidelity prototype.",
            "The process began with exploring the idea of conflict in nature, particularly between honeybees and hornets. I researched their behaviours, territorial instincts and ecological roles to shape a meaningful play narrative.",
            "I started with mind mapping and sketching early concepts, experimenting with how both species could coexist and compete within the same system. Through iterations, I focused on balancing strategy and chance, so that both characters had distinct advantages and constraints.",
            "Multiple paper prototypes were tested to refine mechanics such as movement, resource collection (flowers) and conflict resolution. Playtesting helped simplify complex rules and create tension points, especially when the hornet nears the honeybee."
          ] },

        { title: "Prototyping",
          blocks: [
            { heading: "First prototype", figLayout: "stack", figures: [
              { src: "assets/projects/killer-buzz/proto-1.jpg", alt: "Drawing of a vine-path board with pink flowers and a honey pot, beside drawn hornet and bee pawns and two dice" }
            ] },
            { heading: "Second prototype", figLayout: "pair", figures: [
              { src: "assets/projects/killer-buzz/proto-2-tablet.jpg", alt: "The hexagonal board drawn on a tablet, with a hand moving a piece" },
              { src: "assets/projects/killer-buzz/proto-2-board.jpg", alt: "Digital drawing of the hexagonal board with vine paths and an orange centre" }
            ] },
            { heading: "Final low-fidelity prototype", figLayout: "grid", figures: [
              { src: "assets/projects/killer-buzz/proto-3-board.jpg", alt: "A hand-drawn paper hexagonal board with paper bee pawns, being played" },
              { src: "assets/projects/killer-buzz/proto-3-tokens-1.jpg", alt: "Paper hornet and bee pawns labelled A and B" },
              { src: "assets/projects/killer-buzz/proto-3-tokens-2.jpg", alt: "Four paper pawns, two hornets and two bees" }
            ] }
          ] },

        { title: "Playtesting",
          text: ["The game was playtested with different players across multiple rounds to observe player interactions and improve game balance."],
          figures: [
            { src: "assets/projects/killer-buzz/test-paper.jpg", alt: "The paper prototype mid-game with bee pawns and flower cut-outs" },
            { src: "assets/projects/killer-buzz/test-players.jpg", alt: "Two players leaning over the paper board during a playtest" },
            { src: "assets/projects/killer-buzz/test-close.jpg", alt: "A player moving a pawn on the paper board, with a dice app on a phone" },
            { src: "assets/projects/killer-buzz/test-tablet.jpg", alt: "The digital version of the board being tested on a tablet" }
          ] },

        { title: "Making the board",
          text: ["The final board was laser-cut and engraved in MDF."],
          figures: [
            { src: "assets/projects/killer-buzz/build-1.jpg", alt: "Close-up of an engraved MDF path with a flower token" },
            { src: "assets/projects/killer-buzz/build-laser.jpg", alt: "The laser cutter engraving the board's paths" },
            { src: "assets/projects/killer-buzz/build-2.jpg", alt: "Wooden pawns standing on the engraved MDF board" },
            { src: "assets/projects/killer-buzz/build-final.jpg", alt: "Top view of the finished, unpainted MDF board with pawns, flowers and dice" },
            { src: "assets/projects/killer-buzz/build-3.jpg", alt: "The unpainted board from an angle, with dice and pawns" },
            { src: "assets/projects/killer-buzz/build-4.jpg", alt: "Pawns in the centre of the unpainted board" }
          ] },

        { title: "Learnings",
          bullets: [
            "How small changes in rules or starting positions affect balance and fairness.",
            "How playtesting reveals both mechanical issues and player emotions.",
            "The need for clear, consistent rules to keep gameplay enjoyable.",
            "How cooperative and competitive elements shape player dynamics and strategy.",
            "Experimenting with mechanics like teleportation and risk–reward to blend chance with strategy.",
            "Stronger skills in iterative design, balancing, and using player feedback to refine the game."
          ] }
      ]
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
