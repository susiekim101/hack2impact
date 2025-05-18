import babypastel from "../assets/colorPalettes/babypastel.png";
import earthy1 from "../assets/colorPalettes/earthy1.png";
import earthy2 from "../assets/colorPalettes/earthy2.png";
import forest from "../assets/colorPalettes/forest.png";
import monogray from "../assets/colorPalettes/monochromaticgray.png";
import monoslate from "../assets/colorPalettes/monochromaticslate.png";
import monobrown from "../assets/colorPalettes/monochromebrown.png";
import ocean1 from "../assets/colorPalettes/ocean1.png";
import ocean2 from "../assets/colorPalettes/ocean2.png";
import peachy from "../assets/colorPalettes/peachypastel.png";

const questions = [
  {
    section: "Basic Information",
    questions: [
      { id: "firstName", type: "text", label: "First Name", style: "small" },
      { id: "lastName", type: "text", label: "Last Name", style: "small" },
      { id: "phone", type: "text", label: "Phone Number", style: "small" },
      { id: "email", type: "email", label: "Email", style: "small" },
      { id: "birthdate", type: "date", label: "Birthdate", style: "small" },
      {
        id: "gender",
        type: "select",
        label: "Gender",
        style: "small",
        options: ["Male", "Female", "Non-binary", "Prefer not to say"],
      },
      {
        id: "ethnicity",
        type: "multiselect",
        label:
          "Which of the following ethnicities/races do you identify with? (Select all that apply)",
        style: "large",
        options: [
          "Latinx/Hispanic",
          "Black/African American",
          "Pacific Islander",
          "Asian",
          "Caucasian",
          "Indigenous/Native American",
          "Other",
        ],
      },
      {
        id: "household",
        type: "select",
        label: "How many people are in your household?",
        style: "large",
        options: ["1", "2", "3", "4+"],
      },
      {
        id: "disabilities",
        type: "textarea",
        label: "Do you have any disabilities?",
        style: "large",
      },
    ],
  },

  {
    section: "Preferences",
    questions: [
      {
        id: "colorPalettes",
        type: "multiselect",
        label: "Which color palettes make you feel most at ease?",
        options: [
          {
            label: "Baby pastel pink and blue",
            image: babypastel,
          },
          {
            label: "Pastel earthy brown and green",
            image: earthy1,
          },
          {
            label: "Earthy brown and green",
            image: earthy2,
          },
          {
            label: "Forest green and dirt brown",
            image: forest,
          },
          {
            label: "Monochromatic shades of gray",
            image: monogray,
          },
          {
            label: "Monochromatic shades of slate blue",
            image: monoslate,
          },
          {
            label: "Monochromatic shades of brown",
            image: monobrown,
          },
          {
            label: "Light ocean blue",
            image: ocean1,
          },
          {
            label: "Bright ocean blues and green",
            image: ocean2,
          },
          {
            label: "Pink and orange pastel ",
            image: peachy,
          },
        ],
      },
      {
        id: "textures",
        type: "multiselect",
        label: "Which textures make you feel most comfortable?",
        options: [
          {
            label: "cotton",
            image: cotton,
          },
          { 
            label: "fleece", 
            image: fleece 
          },
          {
            label: "microfiber",
            image: microfiber,
          },
          {
            label: "stone",
            image: stone,
          },
          {
            label: "velvet",
            image: velvet,
          },
          {
            label: "wood",
            image: wood,
          },
          {
            label: "woven",
            image: woven,
          },
        ],
      },
      {
        id: "scentsLike",
        type: "multiselect",
        label: "Which scents help you feel calm or at home?",
        options: [
          {
            label: "Woody",
            image:
              "https://plus.unsplash.com/premium_photo-1700670284018-17d39357f45c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZHklMjBzY2VudHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            label: "Earthy",
            image:
              "https://images.unsplash.com/photo-1597691306883-ac4e882e7cc4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlydHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            label: "Herbal",
            image:
              "https://plus.unsplash.com/premium_photo-1663036948705-7dee4d33c07a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVyYmFsfGVufDB8fDB8fHww",
          },
          {
            label: "Gentle Citrus",
            image:
              "https://images.unsplash.com/photo-1546548970-71785318a17b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0cnVzfGVufDB8fDB8fHww",
          },
          {
            label: "Fresh Linen / Clean Air",
            image:
              "https://media.istockphoto.com/id/186849019/photo/clothesline.jpg?s=612x612&w=0&k=20&c=tbGGGTL8IEGyhKTlnQ4LAPa-NUG9EsR9gpeS6G7cHVk=",
          },
          {
            label: "Prefer unscented spaces",
          },
          {
            label: "I’m not sure",
          },
        ],
      },
      {
        id: "scentsDislike",
        type: "multiselect",
        label: "Are there any scents you actively dislike or avoid?",
        options: [
          {
            label: "Strong floral perfumes",
            image:
              "https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.jpg?s=612x612&w=0&k=20&c=eBnRobwsk2w_9MqM6bnXukIia5j-ayuMS0PeB6GHN0E=",
          },
          {
            label: "Bleach or chemical cleaners",
            image:
              "https://media.istockphoto.com/id/478482323/photo/cleaning-product-plastic-container-for-house-clean.jpg?s=612x612&w=0&k=20&c=fsG7e9lRa2IDiY52gau9FMDea5vUTzQ5o15HQLi2XgY=",
          },
          {
            label: "Smoke or incense",
            image:
              "https://media.istockphoto.com/id/484581084/photo/incense-stick-aromatherapy.jpg?s=612x612&w=0&k=20&c=2-WjxmWc8VmiO5f85zwAGtZEON8dqH_mKlEabt8DlnY=",
          },
          {
            label: "Spicy or musky scents",
            image:
              "https://plus.unsplash.com/premium_photo-1670537994805-815a97fb5bae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVza3klMjBzY2VudHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            label: "Food-based smells (e.g., vanilla, baked goods)",
            image:
              "https://media.istockphoto.com/id/645542956/photo/french-pastry.jpg?s=612x612&w=0&k=20&c=JE4QgqBdtvMqdMvUPRqvnw-hIfftwtSV8qSoPygF0Qk=",
          },
          {
            label: "I’m sensitive to all strong smells",
          },
        ],
      },
      {
        id: "allergies",
        type: "textarea",
        label: "Are you allergic to anything? (free response)",
      },
    ],
  },

  {
    section: "Sensory Triggers",
    questions: [
      {
        id: "sensoryTriggers",
        type: "multiselect",
        label:
          "Please check anything that can make you feel uneasy or overwhelmed",
        options: [
          "Bright, fluorescent lighting",
          "Sudden loud noises",
          "Strong artificial smells",
          "Cluttered or messy spaces",
          "Mirrors facing the bed or other sensitive areas",
          "Not seeing the entrance to the room",
          "Small, enclosed spaces",
          "Large, open spaces with no boundaries",
          "Busy or harsh patterns (e.g., zigzags, checkers)",
          "Feeling watched (e.g., visible windows, no privacy)",
        ],
      },
    ],
  },

  {
    section: "Layout & Safety",
    questions: [
      {
        id: "layoutSafety",
        type: "select",
        label: "When you think of your ideal space, what layout feels safest?",
        options: [
          "Open layout with clear sightlines to the door",
          "Defined rooms with doors and clear boundaries",
          "A mix of open and private areas with a personal corner",
          "I’m not sure",
        ],
      },
      {
        id: "controlOfSpace",
        type: "select",
        label: "What helps you feel in control of your space?",
        options: [
          "Locks on doors",
          "A defined personal/private area",
          "Ability to rearrange furniture",
          "Very simple/minimal setup",
          "I’m not sure",
        ],
      },
      {
        id: "lightingPreference",
        type: "select",
        label: "What kind of lighting feels best to you?",
        options: [
          "Bright natural light",
          "Dim, soft light (lamps, warm tones)",
          "I like being able to control it (dimmers, curtains)",
          "I prefer low light during the day",
          "I’m not sure",
        ],
      },
      {
        id: "relaxingSounds",
        type: "select",
        label: "What sounds help you relax?",
        options: [
          "Silence",
          "Nature sounds (e.g., rain, birds)",
          "Music or white noise",
          "Having a TV or radio on in the background",
          "Loud noises stress me out",
        ],
      },
    ],
  },

  {
    section: "Furniture & Decor Preferences",
    questions: [
      {
        id: "furnitureStyle",
        type: "select",
        label: "Which furniture style feels most comforting to you?",
        options: [
          "Soft and cushioned (e.g., overstuffed sofas, plush armchairs)",
          "Clean and simple (e.g., minimal designs with smooth surfaces)",
          "Vintage or homey (e.g., cozy, mismatched pieces that feel lived-in)",
          "Modern and structured (e.g., sleek lines, neutral tones)",
          "Natural materials (e.g., wooden furniture, woven details)",
          "I’m not sure",
        ],
      },
      {
        id: "patterns",
        type: "select",
        label: "What patterns make you feel happiest?",
        options: ["Stripes", "Polka dots", "Floral", "Plaid", "Animal Print"],
      },
      {
        id: "decorStyle",
        type: "select",
        label:
          "Which of the following best describes the kind of decor that feels most comforting to you?",
        options: [
          "Minimal and uncluttered (few items, lots of open space)",
          "Warm and cozy (pillows, blankets, warm lighting)",
          "Lived-in and homey (personal items, books, framed photos)",
          "Nature-inspired (plants, wood, landscape art)",
          "Colorful and expressive (art, vibrant textiles, handmade items)",
          "I’m not sure",
        ],
      },
      {
        id: "culturalItems",
        type: "multiselect",
        label:
          "Are there any cultural, spiritual, or religious items that make a space feel more like home to you?",
        options: [
          "Religious or spiritual symbols (e.g., cross, altar, prayer items)",
          "Cultural fabrics or patterns (e.g., woven rugs, tapestries)",
          "Family photos or heirlooms",
          "Art or imagery from my cultural background",
          "Plants or nature elements",
          "None / I prefer not to include these",
        ],
      },
      {
        id: "wallDecor",
        type: "select",
        label: "What types of wall decorations do you feel most at ease with?",
        options: [
          "Calming art (landscapes, nature scenes, soft colors)",
          "Personal photos or photo collages",
          "Blank or mostly empty walls",
          "Inspirational quotes or affirmations",
          "Colorful, expressive art (abstract, cultural, or handmade)",
          "I’m not sure",
        ],
      },
      {
        id: "pets",
        type: "text",
        label: "Do you have any pets? If yes, what pets do you have?",
      },
    ],
  },
];

export default questions;
