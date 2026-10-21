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
      /* Project 3: stop motion game trailer (group project) */
      title: "St. Marks Street",
      role: "Stop Motion Game Trailer",
      year: "",
      duration: "3 weeks",
      tools: [],
      thumb: "assets/projects/st-marks-street/set-finished.jpg",
      thumbPos: "50% 35%",
      blurb: "A stop motion trailer for a game called St. Marks Street. As a team of five, we wrote the story, storyboarded every shot, built a miniature set and props, made the puppet by hand and shot it frame by frame in a dark room.",
      links: [],
      sections: [
        { title: "Overview",
          text: ["This is the trailer for St. Marks Street, a game with a dark, tense story. It is made entirely in stop motion: every movement on screen is a real puppet, moved by hand a tiny bit at a time and photographed."],
          facts: [
            { k: "Duration", v: "3 weeks" },
            { k: "Team", v: "Group project, 5 members" },
            { k: "Design brief", v: "Create a stop motion trailer for a game. We first wrote the narrative for the game and its trailer, then storyboarded it, built the set, props and puppet by hand, and shot it." },
            { k: "Format", v: "Stop motion animation" }
          ] },

        { title: "Trailer",
          youtube: { url: "https://www.youtube.com/watch?v=FPnXwiPxqvA", title: "St. Marks Street stop motion game trailer" } },

        { title: "My role",
          text: ["I worked across almost every stage of the production. I helped build the narrative for the game and the trailer, and worked on the storyboard that planned each shot. I made the puppet and built props for the set, then handled the camera work and the shoot. Alongside this I looked after art direction, keeping the colours, lighting and the look of the set, props and puppet consistent with the dark, tense mood of the story."] },

        { title: "The story",
          text: ["On a stormy night, a man at home talks on the phone while he cooks. Lightning strikes and the lights go out. As he feels around in the dark for his phone, a shadow moves past the window, a cat screeches outside and someone knocks on the door. He opens it slowly to an empty porch under a flickering light, and finds his cat lying dead. The trailer cuts to the game's title."] },

        { title: "Storyboard",
          text: ["Each frame plans a shot of the trailer: what we see, how the camera moves, and the sounds that build the tension."],
          figures: [
            { src: "assets/projects/st-marks-street/storyboard-1.jpg", alt: "Storyboard frames 1 to 12: the house at night, the phone call, cooking, the lights going out and a shadow at the window", caption: "Frames 1–12" },
            { src: "assets/projects/st-marks-street/storyboard-2.jpg", alt: "Storyboard frames 13 to 19: opening the door, the empty porch, a flickering light, the dead cat and the game title", caption: "Frames 13–19" }
          ], figLayout: "stack" },

        { title: "Character design",
          text: ["The main character, drawn from the front, side and back so the puppet could be built to match from every angle."],
          figures: [{ src: "assets/projects/st-marks-street/character-design.jpg", alt: "Line drawing turnaround of the main character from the front, three-quarter, side and back, with face sketches", caption: "Character turnaround" }],
          figLayout: "stack" },

        { title: "Process",
          steps: [
            { title: "Narrative", text: "We started by writing the story of the game and of its trailer, so every later decision had a clear direction." },
            { title: "Storyboard", text: "We drew every shot of the trailer, with its camera angle and movement, so we knew exactly what to build and what to shoot." },
            { title: "Set & props", text: "We built a miniature house to scale: the living room, the kitchen and the front gate, along with the furniture and small props that fill them." },
            { title: "Character design", text: "We designed the main character and drew him from every side, as a guide for building the puppet." },
            { title: "Puppet making", text: "The puppet has a wire skeleton so it can hold any pose. We bulked the body out with sponge and masking tape, sculpted the head and hands in clay, and stitched its clothes by hand." },
            { title: "Shooting", text: "The story happens in the dark, so we shot in a dark room. We set the camera manually and raised the ISO (how sensitive the camera is to light) so it could pick up the dim scene. Between each photo the puppet was moved very slightly; played one after another, the photos make it move." }
          ] },

        { title: "Process work",
          blocks: [
            { heading: "Building the set", figLayout: "collage", figures: [
              { src: "assets/projects/st-marks-street/set-finished.jpg", alt: "The finished living room set with a yellow wall, a red sofa, a kitchen and the puppet sitting on the sofa", span: [4, 4] },
              { src: "assets/projects/st-marks-street/set-1.jpg", alt: "Early cardboard walls and furniture of the set on a table", span: [2, 4] },
              { src: "assets/projects/st-marks-street/set-team.jpg", alt: "Two team members making props at a table", span: [3, 3] },
              { src: "assets/projects/st-marks-street/set-2.jpg", alt: "The unpainted set with walls, kitchen counter, sofa and table", span: [3, 3] },
              { src: "assets/projects/st-marks-street/set-exterior.jpg", alt: "The front of the house with a brick wall, a black gate and a door", span: [2, 3] },
              { src: "assets/projects/st-marks-street/set-finished-2.jpg", alt: "The painted set from the front, with the TV, sofa and kitchen", span: [2, 3] },
              { src: "assets/projects/st-marks-street/set-finished-3.jpg", alt: "The finished set with the puppet lying on the sofa", span: [2, 3] }
            ] },
            { heading: "Making the puppet", figLayout: "collage", figures: [
              { src: "assets/projects/st-marks-street/puppet-head.jpg", alt: "Sculpting the details of the puppet's clay face with a tool", span: [4, 4] },
              { src: "assets/projects/st-marks-street/puppet-armature.jpg", alt: "The puppet's wire and tape body lying on the sofa before it was dressed", span: [2, 4] },
              { src: "assets/projects/st-marks-street/puppet-dressed.jpg", alt: "The puppet in its stitched shirt and trousers, before its hair was added", span: [2, 4] },
              { src: "assets/projects/st-marks-street/puppet-1.jpg", alt: "Close-up of the finished puppet lying on the red sofa with a black cat", span: [2, 4] },
              { src: "assets/projects/st-marks-street/puppet-2.jpg", alt: "The finished puppet sitting on the sofa", span: [2, 4] }
            ] },
            { heading: "Shooting in the dark", figLayout: "collage", figures: [
              { src: "assets/projects/st-marks-street/shoot-1.jpg", alt: "The set lit only by small lamps in a dark room", span: [4, 4] },
              { src: "assets/projects/st-marks-street/shoot-2.jpg", alt: "The camera and a light set up in front of the set in the dark", span: [2, 4] },
              { src: "assets/projects/st-marks-street/shoot-4.jpg", alt: "Shooting the doorstep scene from above, with the camera screen showing the shot", span: [2, 4] },
              { src: "assets/projects/st-marks-street/shoot-3.jpg", alt: "The camera framing the living room set, with its screen showing the shot", span: [4, 4] }
            ] }
          ] }
      ]
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
      /* Project 5: mobile game for the Dainik Bhaskar Game Jam (from Chatak_GDD _DB_GameJam.pptx) */
      title: "Chatak!",
      role: "Game Jam",
      year: "",
      duration: "1 week",
      tools: [],
      thumb: "assets/projects/chatak/chatak-cover.webp",
      thumbPos: "50% 18%",
      blurb: "Survive the night shift. Zap till dawn. A mobile arcade survival game made for the Dainik Bhaskar Game Jam: a tired office worker, an empty office at midnight, and an electric mosquito bat to last until 6 AM.",
      links: [],
      sections: [
        { title: "Overview",
          links: [{ label: "Play on itch.io", url: "https://radhika9.itch.io/chatak" }],
          text: [
            "It's 11:58 PM. The deadline is tomorrow. The office is empty, the AC is off, and the mosquitoes have found you.",
            "You play a tired office employee working late on a huge office floor. Armed only with an electric mosquito bat, you have to survive the night until the sun comes up at 6 AM. The mosquitoes get bolder as the night goes on, and they are at their worst just before dawn. Each level is a different floor of the building, and each floor is harder than the one below."
          ],
          facts: [
            { k: "Duration", v: "1 week" },
            { k: "Event", v: "Dainik Bhaskar Game Jam" },
            { k: "Brief", v: "Design a mobile-first game with mass appeal for Indian audiences: easy to learn, rewarding to master, and able to become a healthy daily habit." },
            { k: "Genre", v: "Top-down arcade survival / action" },
            { k: "Platform", v: "Mobile-first (Android); web prototype for the jam" },
            { k: "Audience", v: "Indian players aged 22–44 in Tier 2–3 cities, office workers" },
            { k: "Hook", v: "Every Indian has fought mosquitoes with an electric bat at night" },
            { k: "Controls", v: "One-thumb movement joystick + one swing button" },
            { k: "Level length", v: "3–5 minutes; every level is one night, 12 AM → 6 AM" },
            { k: "Levels", v: "20 planned, 4 in the prototype" },
            { k: "AI disclosure", v: "Use of AI was encouraged to build the game and for visuals." }
          ] },

        { title: "Gameplay",
          links: [{ label: "Play on itch.io", url: "https://radhika9.itch.io/chatak" }],
          /* paste the YouTube link into url once the gameplay video is recorded */
          youtube: { url: "", title: "Chatak! gameplay video" } },

        { title: "Design pillars",
          facts: [
            { k: "Relatable", v: "Late-night office life" },
            { k: "Satisfying", v: "The chatak of a clean zap" },
            { k: "Tense", v: "The battery is always running out" }
          ] },

        { title: "Core loop",
          loop: {
            center: "Reach 6 AM before the itch bar fills",
            steps: [
              { title: "Move", text: "Run around the floor with the joystick" },
              { title: "Zap", text: "Tap swing; it auto-aims at the nearest mosquito" },
              { title: "Manage", text: "Each swing costs battery; empty means overheat" },
              { title: "Collect", text: "Grab power-ups before they disappear" },
              { title: "Survive", text: "Make it through the night's waves" }
            ]
          },
          blocks: [{ text: ["Moment-to-moment tension: swing too much and the bat overheats when you need it most. During overheat you can only run, dodge, and swat with a newspaper if you picked one up."] }] },

        { title: "Controls & HUD",
          facts: [
            { k: "Left thumb: joystick", v: "A floating joystick anywhere on the left half of the screen. Movement speed is constant." },
            { k: "Right thumb: swing", v: "Tap to swing. It auto-aims at the nearest mosquito within a 100° arc. When the bat is overheated and you have a newspaper, it becomes SWAT." },
            { k: "HUD", v: "Itch bar with star marks at 50% and 75%, night clock (12 AM → 6 AM), battery %, kills, plus fullscreen and pause buttons. Off-screen arrows point to swarms." }
          ],
          figures: [{ src: "assets/projects/chatak/controls-hud.png", alt: "Phone screen mock-up: itch bar at 24%, clock at 3:42 AM, battery at 64%, two mosquitoes, the player, a joystick on the left and a yellow zap button on the right", caption: "Controls and HUD layout" }],
          figLayout: "stack" },

        { title: "Win, lose & stars",
          facts: [
            { k: "Win", v: "The night clock reaches 6:00 AM before your itch bar fills up." },
            { k: "Lose", v: "The itch bar reaches 100%. There are no lives: every bite counts. Levels 10+ have a 3 AM checkpoint." }
          ],
          blocks: [
            { heading: "Stars: itch at dawn + kill target", facts: [
              { k: "★★★", v: "Itch under 50% at dawn" },
              { k: "★★", v: "Itch 50–74% at dawn" },
              { k: "★", v: "Itch 75% or more at dawn" }
            ], text: ["Missing the floor's kill target costs one star (minimum 1). Stars unlock floors."] }
          ] },

        { title: "Electric bat: battery & overheat",
          facts: [
            { k: "Starting charge", v: "100%" },
            { k: "Swing that hits", v: "−6%" },
            { k: "Swing that misses", v: "−10%" },
            { k: "Passive recharge", v: "+3% per second" }
          ],
          blocks: [
            { heading: "Overheat (battery hits 0%)", bullets: [
              "The bat is locked while it recharges from 0 to 100%: 8 s on Level 1, up to 12 s on Level 10+.",
              "Have a newspaper? It comes out automatically, and the zap button becomes SWAT.",
              "The newspaper is weak: 2 swats to kill even a regular mosquito.",
              "Battery packs can't be picked up while overheated." ] },
            { heading: "Why this design", text: ["Passive recharge means players never need to hoard charge. Missed swings cost more, so careful aim is rewarded and button-mashing is punished. Overheat is short enough to be tense, not boring."] }
          ] },

        { title: "Health: one itch bar, no lives",
          facts: [
            { k: "Bite", v: "0.4 s of contact is a bite: +12% itch (+20% from a fat mosquito)" },
            { k: "Soothe", v: "Itch slowly drops (−1.5% per second) after 4 s without a bite" },
            { k: "Itch full", v: "At 100% itch the night is over. Game over." },
            { k: "Stars", v: "Itch at dawn sets the stars: under 50% ★★★, under 75% ★★" }
          ],
          text: ["Why one bar: with lives, dodging alone kept players safe. Now every bite counts twice, toward game over and against the star rating, so players have to zap, not just run."] },

        { title: "Mosquito types",
          facts: [
            { k: "Regular", v: "Wanders, then homes in on the player. 1 zap (2 swats), normal speed. From Level 1." },
            { k: "Striped (fast)", v: "Darts in quick zig-zags, harder to aim at. 1 zap (2 swats), fast. From Level 2." },
            { k: "Fat (tank)", v: "Slow and full of blood; a bite adds 20% itch. 2 zaps (4 swats), slow. From Level 3." },
            { k: "Swarm cluster", v: "A group of 5–6 moving together. 1 zap each, normal speed. From Level 4." },
            { k: "Dawn Queen (mini-boss)", v: "Arrives in the last 30 s of a level, spawns babies and needs 6 hits. Slow. From Level 8 (full game)." }
          ],
          text: ["Readability rule: mosquitoes are drawn larger than life with a soft glow and shadow, so they are visible on small, low-brightness screens. The whine sound helps but is never required."] },

        { title: "Power-ups",
          facts: [
            { k: "Battery pack", v: "+30% charge. Rare (1–2 per floor) and can't be grabbed while overheated. From Floor 1." },
            { k: "Newspaper", v: "Kept until the bat overheats, then swat until it recharges. 2 swats per kill. From Floor 1." },
            { k: "Mosquito coil", v: "A 10 s smoke zone where it's picked up; slows and kills mosquitoes. From Floor 2." },
            { k: "Durmos", v: "Repellent cream: 8 s of no bites (\"dur\" means far away). From Floor 3." },
            { k: "Power bank", v: "Full 100% charge and ends overheat instantly. Rare. From Floor 4." },
            { k: "UV killer", v: "Fixed in one corner. Activate once: it pulls every mosquito toward it for 8 s and zaps them. From Level 5." }
          ],
          blocks: [
            { heading: "Spawn rules", steps: [
              { title: "Fixed schedule", text: "Each floor has hand-placed drop times, with one new power-up type per floor." },
              { title: "Timed drops", text: "A power-up appears at a random spot away from the player and glows for 6 s." },
              { title: "Second chance", text: "If missed, it reappears 5 s later somewhere else, visible for only 4 s." },
              { title: "Last chance", text: "One final reappearance for 3 s. Missed three times, it's gone for this level." }
            ] },
            { heading: "Why", bullets: [
              "Players can't \"store\" power-ups by ignoring them, because each miss shortens the window.",
              "Drops keep the player moving across the floor, which stops corner camping.",
              "Batteries are rare, so overheats stay a real threat and dodging matters.",
              "An arrow at the screen edge points to any power-up that is off-screen." ] }
          ] },

        { title: "Hazards & night events",
          facts: [
            { k: "Power cut", v: "Lights go out for 10 s. Only window light and the bat's glow remain, mosquitoes show only as glowing dots, and the bat stops recharging. Lights flicker 2 s before as a warning." },
            { k: "AC trips off", v: "The office heats up and mosquitoes move 25% faster for about 20 s (one wave). A red thermometer icon shows on the HUD while it lasts." },
            { k: "Security guard round", v: "A friendly event. The night guard walks a fixed path with a spray can for 12 s and clears mosquitoes near him. Lead swarms into his path for easy kills." }
          ],
          text: ["Hazards stack. Each floor keeps every hazard from earlier floors and adds one: the guard on Level 2, the AC on Level 3 and the power cut on Level 4. Each has a 2 s warning and never starts in the final 30 s dawn rush."] },

        { title: "Levels & difficulty",
          blocks: [
            { heading: "Difficulty curve: waves that peak at dawn",
              figures: [{ src: "assets/projects/chatak/difficulty-curve.png", alt: "Line chart of mosquito pressure from 12 AM to 6 AM: levels 1–9 rise steadily to 90, levels 10+ rise and fall in waves and peak at 100 at dawn", caption: "Mosquito pressure over one night (0–100)" }],
              figLayout: "stack",
              facts: [
                { k: "Early levels", v: "Pressure rises steadily all night and peaks in the dawn rush. Easy to learn." },
                { k: "Later levels", v: "Waves rise and fall, giving breathers to recharge and collect drops. Each peak is higher than the last." },
                { k: "Dawn rush", v: "The final 30 s of every level is the hardest moment, matching the theme." }
              ] },
            { heading: "Prototype levels (4 floors)", facts: [
              { k: "1 · Open Workspace", v: "2:00 · rising waves + dawn · regular mosquitoes · 1 battery, 1 newspaper · no hazards · kill target 25 · 8 s overheat" },
              { k: "2 · Cabins & Meeting Rooms", v: "2:30 · 2 waves + dawn · + striped · 1 battery, 1 newspaper, + coil · guard · kill target 35 · 9 s overheat" },
              { k: "3 · Pantry & Server Room", v: "3:00 · 2 waves + dawn · + fat · 1 battery, 2 newspapers, 1 coil, + Durmos · guard + AC · kill target 45 · 10 s overheat" },
              { k: "4 · Top Floor (Boss's Wing)", v: "3:30 · 3 waves + dawn · + swarms · 2 batteries, 2 newspapers, 1 coil, 1 Durmos, + power bank · guard + AC + power cut · kill target 60 · 10 s overheat" }
            ], text: ["\"+\" marks what is new on that floor. Length is real playing time for 12 AM → 6 AM. The UV killer arrives from Level 5."] },
            { heading: "Night schedule: when drops and hazards happen",
              figures: [{ src: "assets/projects/chatak/night-schedule.png", alt: "Timelines for the four prototype floors showing when the newspaper, battery, coil, Durmos and power bank drop, and when the guard, AC-off and power-cut events happen, each ending in a 30 second dawn rush", caption: "The orange end of each track is the 30 s dawn rush, with no hazards" }],
              figLayout: "stack" },
            { heading: "Full game progression (20 levels)", facts: [
              { k: "Levels 1–4: Learn", v: "2–3.5 min. One new power-up and one new hazard per floor." },
              { k: "Levels 5–9: Pressure", v: "3.5–4 min. Mixed mosquito types. UV killer from Level 5, Dawn Queen from Level 8." },
              { k: "Levels 10–15: Waves", v: "4–5 min. 4–5 rising and falling waves. 3 AM checkpoint. 12 s overheat." },
              { k: "Levels 16–20: Mastery", v: "5 min. Highest wave peaks. All hazards stack, up to 3 newspapers and 2 UV killers." }
            ], text: ["Every mechanic, once introduced, stays in all later floors. Scaling levers: real length, wave count, mosquito types, max mosquitoes on screen, overheat time, hazards and the power-up budget. Floors reuse 4 layouts, so new levels are cheap."] }
          ] },

        { title: "Art & audio direction",
          blocks: [
            { heading: "Art", bullets: [
              "2D top-down, flat shapes, bold outlines. Readable on 5\" screens.",
              "Night palette: deep indigo floors, warm desk lamps, zap yellow.",
              "The sky through the windows shifts from black to dawn orange as the clock runs.",
              "Indian office details: chai cups, files, plants, water cooler, ID cards." ] },
            { heading: "Audio", bullets: [
              "The \"chatak\" zap is the hero sound: crisp, satisfying, with slight pitch variation.",
              "The mosquito whine gets louder as they get closer.",
              "Ambient: ceiling fan hum, distant traffic, a clock ticking near dawn.",
              "Every sound has a visual cue, since many players play muted." ] }
          ] }
      ]
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
