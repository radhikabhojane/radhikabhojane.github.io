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
    "Game Narrative",
    "Visual Design",
    "systems that surprise",
    "cozy + weird worlds",
    "level design & flow",
    "game feel / juice",
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
      /* Project 6: live-ops event concept for Coin Master (Design Management course, group of 3) */
      title: "Piggy's Minefield Scan",
      role: "Live-Ops Event Concept",
      year: "",
      tools: [],
      thumb: "assets/projects/minefield-scan/thumb.jpg",
      cover: "assets/projects/minefield-scan/cover.jpg",
      thumbPos: "50% 22%",
      blurb: "A daily risk-and-reward mini-game event for Coin Master, designed to make veteran players stay a little longer in each session. Every spin earns a Scanner Point; spend it to uncover a tile and hope for a reward, not a mine.",
      links: [],
      sections: [
        { title: "Overview",
          text: [
            "A daily risk-and-reward mini-game event for Coin Master, built to re-engage veteran players in short, high-frequency sessions.",
            "Every spin of Coin Master's slot earns a Scanner Point. Players spend those points to uncover tiles on a Minesweeper-style grid, hoping to find rewards and not a mine."
          ],
          facts: [
            { k: "Type", v: "Live-ops event concept" },
            { k: "Game", v: "Coin Master" },
            { k: "Course", v: "Design Management" },
            { k: "Team", v: "Group project, 3 members" },
            { k: "Platform", v: "Web prototype" },
            { k: "Event type", v: "Daily / time-boxed mini-game" },
            { k: "Owner", v: "Live Ops / Game Design" },
            { k: "AI disclosure", v: "This prototype uses AI-generated art, and AI tools were used to assist with its coding." }
          ] },

        { title: "Play the prototype",
          embed: { src: "prototypes/minefield-scanner/index.html", title: "Minefield Scanner playable prototype", note: "It is recommended to play this prototype on a mobile device." },
          blocks: [
            { heading: "How to play", bullets: [
              "Tap SPIN until you pass 4,000 stars; the event icon appears on the right.",
              "Open the event, start, and pick a sector on the map.",
              "Each tile costs 1 Scanner Point. Green: no mine nearby. Red: a mine is close. Yellow: a mine and a reward are both close.",
              "Find every reward before you hit a mine." ] }
          ] },

        { title: "Goal",
          facts: [
            { k: "Avg. session length (D30+)", v: "4.0 → 5.5 min" },
            { k: "Target uplift", v: "+37.5%" },
            { k: "Measurement window", v: "3 weeks" }
          ],
          text: ["Raise average session length for players past Day 30 from 4.0 to 5.5 minutes over a three-week window, without reducing their existing session frequency of 7.6 sessions a day. Success is a longer, more deliberate visit per session, not more visits: the event should give veterans a reason to linger, not a reason to open the app more often."] },

        { title: "Target players",
          facts: [
            { k: "Who", v: "Veteran players (31+ days): 31% of daily active users, about 174,000 players a day" },
            { k: "Current behaviour", v: "7.6 sessions a day averaging 4.0 minutes each (about 30 minutes a day in total, taken in very small bites)" },
            { k: "Typical D30 economy", v: "Earning roughly 1,000–3,000 stars on average (Google Play statistics)" }
          ] },

        { title: "Player fantasy",
          bullets: ["\"I hope I find the right rewards.\"", "\"I hope I don't click on a bomb tile.\""],
          text: ["The tension is deliberately simple and readable at a glance: every tap is a small bet. The fantasy leans on anticipation (what's under the tile?) and loss aversion (don't lose the run), which is what makes short 30–60 second sessions still feel charged."] },

        { title: "Core loop",
          loop: {
            center: "Clear a level to reach a bigger grid",
            steps: [
              { title: "Spin", text: "The player spins the slot in Coin Master's main loop (existing core loop, no changes)" },
              { title: "Earn", text: "Every spin awards 1 Scanner Point, the event currency, whatever the slot result" },
              { title: "Scan", text: "Spend 1 Scanner Point to reveal one tile on the current grid" },
              { title: "Resolve", text: "Safe tile: a reward (spins, gold, pet food, chest). Mine: the run ends and the level restarts" },
              { title: "Progress", text: "Clearing all safe tiles on a level moves the player to the next, larger grid" }
            ]
          } },

        { title: "Entry & exit",
          facts: [
            { k: "Entry", v: "The event unlocks at 4,000 stars, a threshold set just above the typical D30 range (1,000–3,000 stars), so it reads as an achievable, near-term milestone rather than a distant one. On crossing it, an intro screen announces the mini-game and hands the player into Level 1." },
            { k: "Exit", v: "The event runs on a 24-hour timer with 6 levels: two 4×4 grids, two 5×5 grids and two 6×6 grids. Completing all 6 levels within the window clears the event. On completion (or when the timer runs out) the player enters a 24-hour cooldown before the event can trigger again." }
          ] },

        { title: "Levels & rewards",
          facts: [
            { k: "Level 1", v: "4×4 grid · 16 tiles · 2 mines · 1 Scanner Point per tile · Reward: 5 spins" },
            { k: "Level 2", v: "4×4 grid · 16 tiles · 3 mines · 1 Scanner Point per tile · Reward: 10 spins" },
            { k: "Level 3", v: "5×5 grid · 25 tiles · 4 mines · 1 Scanner Point per tile · Rewards: 10 spins ×1, 15 spins ×2" },
            { k: "Level 4", v: "5×5 grid · 25 tiles · 5 mines · 1 Scanner Point per tile · Rewards: 10 spins ×2, 15 spins ×3" },
            { k: "Level 5", v: "6×6 grid · 36 tiles · 6 mines · 1 Scanner Point per tile · Rewards: 15 spins ×3, 25 spins ×3" },
            { k: "Level 6", v: "6×6 grid · 36 tiles · 7 mines · 1 Scanner Point per tile · Rewards: 15 spins ×3, 25 spins ×4" }
          ],
          text: ["Mine counts are a proposed starting point, tuned so difficulty scales roughly in line with grid size, at about 12–19% of tiles. That is steep enough to keep the \"pinch\" meaningful without making early levels punishing for new participants. They are the first thing to A/B test."],
          blocks: [
            { heading: "Progression rules", bullets: [
              "Progress is level-based: clearing a grid advances the player, and hitting a mine restarts only the current level. Cleared levels are never lost.",
              "Scanner Points are earned only by spinning the slot (1 per spin), tying the mini-game directly back to Coin Master's core loop.",
              "A run's outcome is visible at a glance: safe tiles show their rewards immediately, so players always know their risk before the next tap.",
              "The event UI shows a live 24-hour countdown and the current level, keeping urgency visible without needing push notifications." ] }
          ] },

        { title: "Monetizing Pinch",
          text: ["There is no direct monetisation inside the mini-game: no offer to buy Scanner Points outright. Instead, the pinch is routed back through the core game. The only way to get more Scanner Points is to spend more energy spinning the slot, so a player who wants to push further into the event faster has to buy energy in the main shop. This keeps the mini-game feeling fair and skill/luck-driven, while still connecting event engagement to the existing energy-purchase funnel."],
          blocks: [
            { heading: "Levers to tune", facts: [
              { k: "Reward scaling", v: "How spin rewards on the ladder scale against the core loop's energy economy, so the event feels rewarding but not inflationary" },
              { k: "Cooldown length", v: "Adjustable between 24 and 72 hours, depending on observed session length and re-entry data" },
              { k: "Difficulty", v: "The number of mines per level (see the table above): the main lever for pacing and perceived risk" }
            ] }
          ] },

        { title: "Screen flow",
          text: ["The UI specification covers the key screens in the player's journey, element by element, for the prototyping team."],
          figures: [
            { src: "prototypes/minefield-scanner/assets/event_poster.jpg", alt: "Event poster announcing Treasure Scan with the pig mascot as a soldier", caption: "Event announcement" },
            { src: "prototypes/minefield-scanner/assets/tutorial_screen.jpg", alt: "Entry screen explaining how to scan tiles, with a Start button", caption: "Entry screen" },
            { src: "prototypes/minefield-scanner/assets/level_map.jpg", alt: "Map of six sectors connected by a dashed path, each marked by a treasure chest", caption: "Level selection" }
          ], figLayout: "grid",
          blocks: [
            { heading: "1. Main game screen", text: ["The existing Coin Master main screen gets one addition: a new icon button that is the way into the mini-game."], facts: [
              { k: "Placement", v: "A new icon button on the right-side vertical toolbar, below the existing event icons" },
              { k: "Glow state", v: "The icon glows whenever the player has 1 or more unused Scanner Points, signalling there's a session to spend" },
              { k: "Idle state", v: "The icon sits dim when the Scanner Point balance is 0" },
              { k: "Point acquisition", v: "Every Spin earns +1 Scanner Point, whatever the slot result" },
              { k: "Tap behaviour", v: "Tapping the icon opens the Entry Screen the first time, and goes straight to Level Selection or the Game Event screen after that" }
            ] },
            { heading: "2. Entry screen", text: ["A themed intro screen shown the first time a player enters the event (or once per event window)."], facts: [
              { k: "Theme", v: "Military throughout, with a minimal background in the same art style as the base game" },
              { k: "Mascot", v: "The Coin Master pig re-skinned in a military uniform (scout/soldier framing)" },
              { k: "Background", v: "Military but uncluttered, so it doesn't compete with the mascot or the button" },
              { k: "CTA", v: "A single Start button, the primary action, leading to Level Selection" },
              { k: "Art style", v: "Must match the existing game's illustration style, with no mismatch against core Coin Master art" }
            ] },
            { heading: "3. Level selection screen", text: ["Laid out like an \"Explore\" map from another mobile game, used purely as a layout and interaction reference."], facts: [
              { k: "Theme per level", v: "The same military theme, but each level re-skinned as a different battleground (desert outpost, snowy front, jungle base)" },
              { k: "Selection", v: "The player can tap any unlocked level to enter it directly" },
              { k: "Locking", v: "Levels unlock in order: only the next level is available, and later levels look locked (dimmed, padlock or fog-of-war)" },
              { k: "Progress path", v: "A dashed route links the level nodes to reinforce the order" }
            ] },
            { heading: "4. Game event screen (core gameplay)", text: [
              "The main gameplay surface: the Minesweeper-style deduction board. The first time, a short interactive tutorial explains tile tap → clue → deduction → reward or mine before the player's first real attempt.",
              "The layout follows an existing Coin Master event board, reusing its placement conventions so the screen feels native to the game."
            ], facts: [
              { k: "Info button (top left)", v: "Opens a rules/help overlay explaining the clue system" },
              { k: "Close button (top right)", v: "Exits to the main game screen; the level in progress is kept" },
              { k: "Goal banner (top centre)", v: "States the level's win condition and shows the milestone reward" },
              { k: "Reward milestones (right)", v: "Icon markers along the progress bar for the rewards ahead" },
              { k: "Progress bar (below banner)", v: "Progress towards the level's rewards (e.g. \"3/7\") plus the current level label" },
              { k: "Game board (centre)", v: "The tile grid, re-themed with military icons (sandbags, dog tags, compass); grows from 4×4 to 6×6 by level" },
              { k: "Scanner balance (bottom right)", v: "The remaining Scanner Points: the \"energy\" for revealing tiles" },
              { k: "Bank / chest (bottom left)", v: "Access to rewards banked in the current session" }
            ] },
            { heading: "5. Rewards & end states", facts: [
              { k: "Level win pop-up", v: "When the player finds the reward tile: a pop-up sums up the rewards with a Next Level button, and a small celebration plays on the winning tile" },
              { k: "Tile reveal feedback", v: "Any neutral tile: a small animation confirms the tap and reveals the clue" },
              { k: "Loss pop-up", v: "When the player taps a mine: the mascot appears covered in black soot, with a Retry button to restart the level" },
              { k: "Milestone calendar", v: "An optional day-by-day reward calendar pattern, for a possible longer future event" },
              { k: "Out of Scanner Points", v: "When the balance runs out mid-level: a pop-up sends the player back to spin the slot for more points" },
              { k: "Tone", v: "The loss state should read as light and comic (a soot-covered mascot), not punishing, in keeping with Coin Master's casual tone" }
            ],
              figLayout: "grid", figures: [
                { src: "prototypes/minefield-scanner/assets/win_popup.png", alt: "Level complete pop-up with the rewards won and a Next button", caption: "Level complete" },
                { src: "prototypes/minefield-scanner/assets/lost_popup.png", alt: "Lost pop-up with the pig covered in soot and Retry and Map buttons", caption: "Hit a mine" },
                { src: "prototypes/minefield-scanner/assets/spin_popup.png", alt: "Out of Scanner Points pop-up with a Spin button", caption: "Out of Scanner Points" }
              ] }
          ] },

        { title: "Art direction",
          text: ["Military-themed, starring the Coin Master piggy as a battlefield scout on a minefield. Tile art should read instantly as safe or dangerous (sandbags, dog tags, ration crates vs. mines), so the core tension is clear without text. The structural inspiration is Minesweeper (Windows XP) and its tile-reveal risk."],
          bullets: [
            "Approachable, casual and bright: even in the military re-skin, avoid a dark or gritty tone that breaks from Coin Master's warmth.",
            "Clear gameplay feedback: icons and effects should read instantly, matching the existing game's clarity.",
            "Reward icons follow the chest and reward language already used in Coin Master, without inventing a new style.",
            "The soldier piggy follows the mascot's costume formula (Viking, leprechaun, tank rider): recognisable pig face + themed outfit + a signature prop.",
            "The top bar, bottom action button and side icon rail match the main screen exactly, so the mini-game never feels like a separate, bolted-on app."
          ],
          blocks: [
            { heading: "UI examples", figLayout: "pair", figures: [
              { src: "assets/projects/minefield-scan/ui-logo.png", alt: "Treasure Scan event logo with binoculars, a map, coins and a shovel", caption: "Event logo" },
              { src: "assets/projects/minefield-scan/ui-tiles.png", alt: "Green, yellow and red cracked stone tiles", caption: "Clue tiles: safe, risky, danger" },
              { src: "assets/projects/minefield-scan/ui-chests.png", alt: "Three treasure chests: chained, closed and open", caption: "Level nodes: locked, current, cleared" },
              { src: "assets/projects/minefield-scan/ui-mine-rewards.png", alt: "A green grenade mine beside two blue spin-reward capsules marked 10 and 25", caption: "A mine and spin rewards" }
            ] }
          ] },

        { title: "Measuring success",
          facts: [
            { k: "Primary", v: "Average session length for the D31+ segment over a 3-week rolling window (target 4.0 → 5.5 min)" },
            { k: "Guardrail", v: "Sessions per day for the same segment must not drop below 7.6" },
            { k: "Secondary", v: "Completion rate per level (to find where the difficulty curve breaks) and energy-purchase conversion during active event windows" },
            { k: "Open question", v: "Should uncleared levels carry over into the next daily event, or reset? Carry-over may protect low-frequency veterans from feeling penalised for short sessions." }
          ] }
      ]
    },
    {
      /* Project 7: Design Project 1 (from dabba_express.pptx) */
      title: "Dabba Express",
      role: "2D Casual Game",
      year: "",
      duration: "6 weeks",
      tools: [],
      thumb: "assets/projects/dabba-express/final-game.jpg",
      thumbPos: "50% 30%",
      blurb: "A 2D casual sorting game inspired by Mumbai's dabbawala system, where players quickly sort incoming dabbas into the right delivery crates under time pressure, with a trolley-based unloading system that adds realism and flow.",
      links: [],
      sections: [
        { title: "Overview",
          text: ["A 2D casual sorting game inspired by Mumbai's dabbawala system, where players quickly organise incoming dabbas into the correct delivery crates under time pressure. The game features a trolley-based unloading system, adding a sense of realism and flow."],
          facts: [
            { k: "Duration", v: "6 weeks" },
            { k: "Module", v: "Design Project 1" },
            { k: "Brief", v: "Design a 2D casual game rooted in the Indian context, with at least 5 minutes of engaging gameplay, without relying on existing formats." },
            { k: "Genre", v: "2D casual sorting game" },
            { k: "Platform", v: "PC, played with the mouse (drag and drop)" },
            { k: "Target audience", v: "PC gamers who like casual, cozy games; achiever-type players; players who like casual strategy games" }
          ] },

        { title: "Gameplay",
          youtube: { url: "https://www.youtube.com/watch?v=22dWtSywGbU", title: "Dabba Express gameplay video" } },

        { title: "Design brief",
          text: [
            "The brief was to design a 2D casual game with a minimum of 5 minutes of gameplay, set in the Indian context. The project explores player behaviour, everyday contexts and cultural environments to find insights and create original casual play experiences.",
            "The project emphasised:"
          ],
          bullets: [
            "Understanding how people play in everyday situations",
            "Studying behaviour, context and motivations",
            "Designing systems that emerge from these observations"
          ],
          blocks: [
            { heading: "Design process", flow: ["Research", "Insights", "Concept", "Prototype", "Playtesting", "Iteration"] }
          ] },

        { title: "Understanding casual play",
          text: ["Casual games are deeply embedded in everyday life and are often played in short, in-between moments."],
          blocks: [
            { heading: "When people play", bullets: ["Waiting during commutes", "Taking short breaks between tasks", "Passing time when bored"] },
            { heading: "What casual games are like", bullets: ["Easy to learn and quick to start", "Low in cognitive load", "Designed for short, repeatable sessions"],
              text: ["They are less about mastery and more about accessibility and habit."] },
            { heading: "PC casual players", facts: [
              { k: "Sessions", v: "Slightly longer (5–20 minutes), but still low commitment" },
              { k: "What they enjoy", v: "Relaxing, cozy, non-competitive games, with mouse-based interactions like dragging, sorting and organising" },
              { k: "What they value", v: "Clear visuals and satisfying feedback" },
              { k: "How they play", v: "While multitasking (music, videos, background activity), to unwind rather than to compete" },
              { k: "Popular experiences", v: "Sorting and organising games, simulation-lite or management games, puzzle-based interactions" }
            ],
              figures: [{ src: "assets/projects/dabba-express/casual-games.jpg", alt: "A strip of screenshots from popular casual sorting, puzzle and management games", caption: "Casual game references" }], figLayout: "stack" }
          ] },

        { title: "Research insights",
          blocks: [
            { heading: "Players prefer", bullets: ["Low-effort interactions that don't need intense focus", "Quick entry and exit from gameplay", "Repetitive but satisfying actions"] },
            { heading: "Motivations", bullets: ["Passing time", "Relaxation and stress relief", "Habitual engagement"] },
            { heading: "Common frustrations", bullets: ["Overly complex systems", "Poor visual clarity"] },
            { heading: "What players said", bullets: ["Stress relief: \"Just want to pass time\"", "\"Don't want to think too much\"", "\"Play with friends/family\"", "\"Winning feels good\""] },
            { heading: "Opportunity space",
              text: ["Based on these insights, there was an opportunity to design a system that:"],
              bullets: [
                "Supports short, repeatable gameplay loops",
                "Gives players control over how fast or slow they play",
                "Builds engagement through simple but evolving mechanics",
                "Connects to familiar, real-world behaviours" ] },
            { text: ["This led to exploring systems that combine simplicity with decision-making under constraints."] }
          ] },

        { title: "Concept ideation",
          facts: [
            { k: "Exploration", v: "Everyday Indian systems, sorting and organising tasks, routine workflows, time-based activities" },
            { k: "Identified patterns", v: "Flow of objects and movement, decision-making under time pressure, repetitive but engaging actions, simple systems with high efficiency" },
            { k: "Gameplay possibilities", v: "Sorting mechanics, drag-and-drop interaction, controlled pacing, increasing constraints" },
            { k: "Direction", v: "A dabbawala-inspired sorting system: a real-world coding system, time-bound delivery logic, and flow + sorting + constraints" }
          ],
          figures: [
            { src: "assets/projects/dabba-express/ideation-1.jpg", alt: "Notes on a mechanics-driven rhythm game idea" },
            { src: "assets/projects/dabba-express/ideation-2.jpg", alt: "Sketches of a dabbawala sorting system with parts A, B and C" },
            { src: "assets/projects/dabba-express/ideation-3.jpg", alt: "Level-by-level notes for pick-up, segregation and delivery" },
            { src: "assets/projects/dabba-express/ideation-4.jpg", alt: "Mind map of what makes a casual game" }
          ] },

        { title: "Dabbawala system study",
          text: ["A highly efficient lunch delivery system in Mumbai that uses a simple, non-digital colour-coded system to move meals across the city within strict time limits."],
          figures: [{ src: "assets/projects/dabba-express/dabbawala-banner.jpg", alt: "Illustrated banner of Mumbai with the Dabbawala logo and Chhatrapati Shivaji Terminus", caption: "" }], figLayout: "stack",
          blocks: [
            { heading: "Key characteristics", bullets: ["Colour-coded identification system", "Multi-step sorting and distribution", "Operates under strict time deadlines", "Extremely high accuracy and reliability"] },
            { heading: "Coding system", facts: [
              { k: "Abbreviations", v: "Pickup location" },
              { k: "Colours / symbols", v: "Origin area" },
              { k: "Numbers", v: "Destination station" },
              { k: "Letters / codes", v: "Final delivery details" }
            ] },
            { heading: "Design takeaways", bullets: ["Simple coding enables quick recognition", "Sorting happens across multiple stages", "Continuous flow under time pressure", "The system works through human coordination"] }
          ] },

        { title: "Game concept",
          bullets: [
            "Dabbas arrive in a continuous flow from a trolley, which the player controls by clicking a button",
            "The player drags and drops them into the correct crates",
            "Each crate accepts only one type of dabba",
            "Each crate has limited capacity",
            "The player must sort all the dabbas before time runs out"
          ],
          figures: [{ src: "assets/projects/dabba-express/concept-visuals.jpg", alt: "The dabbawala on his bicycle, a red VP-3 crate with a matching dabba, and a trolley loaded with coded dabbas", caption: "" }], figLayout: "stack" },

        { title: "Core game loop",
          text: ["The core loop is designed to be simple and repeatable."],
          loop: {
            center: "Repeat",
            steps: [
              { title: "Observe", text: "Watch the incoming dabbas" },
              { title: "Advance", text: "Move the flow forward when needed" },
              { title: "Pick", text: "Pick up a dabba" },
              { title: "Decide", text: "Work out the correct crate from its code" },
              { title: "Drop", text: "Drop the dabba into the crate" },
              { title: "Feedback", text: "Get an immediate response" }
            ]
          },
          blocks: [
            { heading: "Player actions", facts: [
              { k: "Drag & drop", v: "Pick dabbas and place them into the correct crates" },
              { k: "Manual flow control (key mechanic)", v: "The player taps the dabbawala (the cycle button) to advance the dabbas. Movement happens in steps, not automatically." }
            ] }
          ] },

        { title: "Level design & progression",
          facts: [
            { k: "Level 1: Introduction", v: "Sort dabbas into 3 crates · 3 dabba types · the button controls the flow" },
            { k: "Level 2: Flow + interruption", v: "Dynamic crates (a new crate appears when one fills) · a traffic signal is introduced: red blocks the flow, green allows it" },
            { k: "Level 3: Multi-tasking", v: "5 crates in total (3 visible at a time) · multiple traffic signals · more coordination" },
            { k: "Level 4: Rush hour", v: "The flow is temporarily disabled (5–8 seconds) · the player must wait and manage timing · builds pressure using existing systems" },
            { k: "Level 5: Lock & unlock", v: "Some dabbas are locked · unlock them by completing a column · adds planning and strategy" }
          ],
          blocks: [
            { heading: "Progression strategy: difficulty scales through", bullets: [
              "More crates, which increase complexity",
              "Restricted input (signals, rush hour), which reduces control",
              "Locked elements, which add strategy",
              "Time pressure, which increases urgency" ] }
          ] },

        { title: "Moodboard",
          figures: [{ src: "assets/projects/dabba-express/moodboard.jpg", alt: "Moodboard of dabbawalas on bicycles, dabbas on carts, colourful Indian illustration and Mumbai street scenes" }], figLayout: "stack" },

        { title: "Design explorations",
          figures: [{ src: "assets/projects/dabba-express/design-explorations.jpg", alt: "Pen sketches of a dabbawala, level-1 screen layouts with the cycle button, conveyor belt and sorting crates, and a dabba" }], figLayout: "stack" },

        { title: "Assets",
          figures: [
            { src: "assets/projects/dabba-express/assets.jpg", alt: "Game assets: colour-coded crates (D-11, TNA-20, AD-1, BD-5, VP-3, BVI-12, MLD-11), the dabbawala on his bicycle, a traffic signal, sound and pause buttons, coded dabbas, the sun, clouds and the trolley", caption: "Crates, dabbas, the dabbawala, UI buttons and the trolley" },
            { src: "assets/projects/dabba-express/cycle-frames.jpg", alt: "Ten animation frames of the dabbawala pedalling his bicycle", caption: "Cycling animation frames" }
          ], figLayout: "stack",
          blocks: [
            { heading: "Cycling animation", figMax: 420, figLayout: "stack", figures: [
              { src: "assets/projects/dabba-express/cycling.gif", alt: "Looping animation of the dabbawala pedalling his bicycle" }
            ] }
          ] },

        { title: "Playtesting",
          figures: [
            { src: "assets/projects/dabba-express/playtest-1.jpg", alt: "A player trying the game on a laptop", caption: "" },
            { src: "assets/projects/dabba-express/playtest-2.jpg", alt: "Another player sorting dabbas on a laptop in the studio", caption: "" }
          ], figLayout: "pair", figMax: 460,
          blocks: [
            { heading: "Feedback", bullets: [
              "Add feedback UI: \"Delivered\", \"Amazing\", etc.",
              "The colours of the codes are confusing and not very visible",
              "The delivery part needs to be more visible, clear and deliberate",
              "Onboarding: show what to do, step by step",
              "Increase the time in levels 1 and 2",
              "The tags on the dabbas overlap, which makes the codes hard to read",
              "Add money as a reward, or a score or star system",
              "The background behind the cycle doesn't feel like India or Mumbai",
              "A level map with a star system would increase replayability" ] }
          ] },

        { title: "Challenges & learnings",
          blocks: [
            { heading: "Challenges", bullets: [
              "Translating a real-world system like the dabbawala network into a simple, intuitive gameplay mechanic.",
              "Balancing simplicity with engagement: the game had to stay easy to understand while remaining interesting over time.",
              "Designing clear visual communication, especially for the colour coding and sorting logic, which took multiple iterations.",
              "Managing difficulty progression without overwhelming the player, particularly in early levels.",
              "Making the flow-control mechanic feel meaningful rather than confusing, which needed careful tuning and playtesting." ] },
            { heading: "Learnings", bullets: [
              "How to derive game mechanics from real-world systems instead of starting with predefined ideas.",
              "The importance of clarity in casual games, where small usability issues can affect the whole experience.",
              "Iteration through playtesting is essential to refine mechanics, pacing and player understanding.",
              "Simplicity in design takes deliberate decisions and careful balancing of systems.",
              "How player behaviour can directly inform gameplay design." ] }
          ] }
      ]
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
    greeting: "Hi, I'm Radhika,",
    paragraphs: [
      "a designer with a background in Graphic Design and a growing passion for game design. I’m fascinated by how visuals, stories, and interactions come together to create meaningful experiences.",
      "I’m particularly interested in narrative and game design, exploring how gameplay mechanics, level design, and environmental storytelling can bring worlds to life. I enjoy creating experiences that spark curiosity, encourage exploration, and leave players with something to feel and remember.",
      "When I’m not designing, you’ll find me sketching, exploring art and films, or collecting little details from everyday life that might inspire worlds and games."
    ],
    /* how many paragraphs go on the left page; the rest continue on the right */
    leftPage: 2,
    resume: "assets/resume.pdf",
    resumeFileName: "Radhika-Bhojane-Resume.pdf",
    signoff: "thanks for stopping by!"
  },

  /* The stylus (Skills). level is 1-5. */
  skillsIntro: "Software I use most, and what I use it for.",
  skills: [
    { name: "Unity",            cat: "Engine",       level: 3, note: "Prototyping mechanics and building playable levels." },
    { name: "Blender",          cat: "3D",           level: 2, note: "Simple 3D models and props." },
    { name: "Figma",            cat: "UI / UX",      level: 3, note: "Menu flows, HUD layouts and clickable mockups." },
    { name: "Photoshop",        cat: "2D",           level: 4, note: "Concept art, UI art and image editing." },
    { name: "Illustrator",      cat: "Vector",       level: 4, note: "Icons, logos and vector illustration." },
    { name: "Adobe Substance",  cat: "3D texturing", level: 2, note: "Texturing 3D assets." },
    { name: "Microsoft Office", cat: "Documents",    level: 3, note: "Design documents, spreadsheets and presentations." },
    { name: "Procreate",        cat: "Illustration", level: 4, note: "Sketching, concept art and character design." }
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
