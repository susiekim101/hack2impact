import babypastel from "../assets/colorpalettes/babypastel.png";
import earthy1 from "../assets/colorpalettes/earthy1.png";
import earthy2 from "../assets/colorpalettes/earthy2.png";
import forest from "../assets/colorpalettes/forest.png";
import monogray from "../assets/colorpalettes/monochromaticgray.png";
import monoslate from "../assets/colorpalettes/monochromaticslate.png";
import monobrown from "../assets/colorpalettes/monochromebrown.png";
import ocean1 from "../assets/colorpalettes/ocean1.png";
import ocean2 from "../assets/colorpalettes/ocean2.png";
import peachy from "../assets/colorpalettes/peachypastel.png";
import cotton from "../assets/texture/cotton.png";
import fleece from "../assets/texture/fleece.png";
import microfiber from "../assets/texture/microfiber.png";
import stone from "../assets/texture/stone.png";
import velvet from "../assets/texture/velvet.png";
import wood from "../assets/texture/wood.png";
import woven from "../assets/texture/woven.png";
import colorful from "../assets/decor/colorful.png";
import cozy from "../assets/decor/cozy.png";
import homey from "../assets/decor/homey.png";
import minimal from "../assets/decor/minimal.png";
import nature from "../assets/decor/nature.png";
import clean from "../assets/furniture/clean.png";
import modern from "../assets/furniture/modern.png";
import soft from "../assets/furniture/soft.png";
import vintage from "../assets/furniture/vintage.png";
import natural from "../assets/furniture/wood.png";
import animal from "../assets/patterns/animal.png";
import floral from "../assets/patterns/floral.png";
import plaid from "../assets/patterns/plaid.png";
import polka from "../assets/patterns/polka.png";
import stripe from "../assets/patterns/stripe.png";

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
            image: fleece,
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
        id: "preferredScent",
        type: "multiselect",
        label: "Which scents help you feel calm or at home?",
        options: [
          "Woody 🪵",
          "Earthy 🌎",
          "Herbal 🌿",
          "Gentle Citrus 🍊",
          "Fresh Linen 🛌",
          "Clean Air 🌬️",
          "I'm not sure 😊",
        ],
      },
      {
        id: "scentsDislike",
        type: "multiselect",
        label: "Are there any scents you actively dislike or avoid?",
        options: [
          "Strong floral perfumes 💐",
          "Bleach or chemical cleaners 🧪",
          "Smoke or incense 🔥",
          "Spicy or musky scents 🌶️",
          "Food-based smells (e.g., vanilla, baked goods) 🧁",
          "I’m sensitive to all strong smells 😖",
        ],
      },
      {
        id: "allergies",
        type: "textarea",
        label: "Are you allergic to anything?",
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
          "Bright, fluorescent lighting 🌟",
          "Sudden loud noises 💥",
          "Strong artificial smells 👃",
          "Cluttered or messy spaces 🛠️",
          "Mirrors facing the bed or other sensitive areas 🪞",
          "Not seeing the entrance to the room 🚪",
          "Small, enclosed spaces 🏠",
          "Large, open spaces with no boundaries 🌳",
          "Busy or harsh patterns (e.g., zigzags, checkers) 🏁",
          "Feeling watched (e.g., visible windows, no privacy) 👀",
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
          {
            label: "Soft and cushioned",
            image: soft,
          },
          {
            label: "Clean and simple",
            image: clean,
          },
          {
            label: "Vintage or homey",
            image: vintage,
          },
          {
            label: "Modern and structured",
            image: modern,
          },
          {
            label: "Natural materials",
            image: natural,
          },
        ],
      },
      {
        id: "patterns",
        type: "select",
        label: "What patterns make you feel happiest?",
        options: [
          {
            label: "Stripes",
            image: stripe,
          },
          {
            label: "Polka dots",
            image: polka,
          },
          {
            label: "Floral",
            image: floral,
          },
          {
            label: "Plaid",
            image: plaid,
          },
          {
            label: "Animal Print",
            image: animal,
          },
        ],
      },
      {
        id: "decorStyle",
        type: "select",
        label:
          "Which of the following best describes the kind of decor that feels most comforting to you?",
        options: [
          {
            label: "Minimal and uncluttered",
            image: minimal,
          },
          {
            label: "Warm and cozy",
            image: cozy,
          },
          {
            label: "Lived-in and homey",
            image: homey,
          },
          {
            label: "Nature-inspired",
            image: nature,
          },
          {
            label: "Colorful and expressive",
            image: colorful,
          },
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
