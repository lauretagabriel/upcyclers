// data.js — homepage content for the card collections rendered by app.js.
// Ported verbatim from the design prototype's data.jsx (final state).

// Unsplash fashion image helper. Ids verified to load in the prototype.
const IMG = (id, w = 700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const PH = {
  rack: "1490481651871-ab68de25d43d",
  bags: "1483985988355-763728e1935b",
  milan: "1539109136881-3be0616acf4b",
  pinkcoat: "1485462537746-965f33f7f6a7",
  rack2: "1485968579580-b6d095142e6e",
  plaid: "1495121605193-b116b5b9c5fe",
  denim: "1434389677669-e08b4cac3105",
  poncho: "1469334031218-e382a71b716b",
  yellowbg: "1441984904996-e0b6ba687e04",
  store: "1576566588028-4147f3842f27",
  tee: "1556905055-8f358a7a47b2",
  tulips: "1521572163474-6864f9cf17ab",
  whitetee: "1554568218-0f1715e72254",
  printtee: "1518049362265-d5b2a6467637",
  heels: "1525507119028-ed4c629a60a3",
  bootsflat: "1542295669297-4d352b042bca",
  reddress: "1487412720507-e7ab37603c6f",
  scarf: "1515886657613-9f3515b0c78f",
  yellow: "1503342217505-b0a15ec3261c",
  pinkwall: "1487222477894-8943e31ef7b2",
  leather: "1496747611176-843222e1e57c",
  floral: "1479064555552-3ef4979f8908",
  bootsacc: "1572804013309-59a88b7e92f1",
  reddress2: "1502716119720-b23a93e5fe1b",
};

const DATA = {
  IMG,

  finalists: [
    { rank: 1, title: "Storm-dyed trench, reborn", user: "denimghost", cc: "US", img: PH.plaid, votes: "1,204" },
    { rank: 2, title: "Sashiko field jacket No.3", user: "sashiko.sol", cc: "KR", img: PH.printtee, votes: "1,090" },
    { rank: 3, title: "Patchwork prairie dress", user: "mendmore", cc: "BR", img: PH.reddress, votes: "902" },
    { rank: 4, title: "Boro mended overshirt", user: "boroboro", cc: "JP", img: PH.scarf, votes: "841" },
    { rank: 5, title: "Crochet-spliced knit", user: "remade.atelier", cc: "JP", img: PH.poncho, votes: "770" },
  ],

  products: [
    { title: "Reworked Carhartt chore coat", user: "denimghost", cc: "US", price: "$148", likes: "892", comments: "68", img: PH.denim, cat: "Reworked Vintage" },
    { title: "Hand-dyed silk slip, indigo", user: "boroboro", cc: "JP", price: "$96", likes: "1.2k", comments: "104", img: PH.reddress, cat: "Upcycled" },
    { title: "Patchwork denim maxi", user: "mendmore", cc: "BR", price: "$120", likes: "640", comments: "52", img: PH.floral, cat: "Upcycled" },
    { title: "Cropped quilted liner jacket", user: "off.cut", cc: "GB", price: "$84", likes: "455", comments: "31", img: PH.plaid, cat: "Reworked Vintage" },
    { title: "Deadstock cotton wide trouser", user: "thread.theory", cc: "IN", price: "$72", likes: "388", comments: "24", img: PH.yellow, cat: "Secondhand" },
    { title: "Appliqué cardigan, one-of-one", user: "remade.atelier", cc: "JP", price: "$210", likes: "1.5k", comments: "138", img: PH.poncho, cat: "Upcycled" },
    { title: "Bleach-bloom hoodie", user: "lagos.loom", cc: "NG", price: "$58", likes: "302", comments: "19", img: PH.tee, cat: "Upcycled" },
    { title: "Vintage Levi's 501, restored", user: "vintage.vera", cc: "FR", price: "$135", likes: "710", comments: "57", img: PH.pinkwall, cat: "Reworked Vintage" },
    { title: "Embroidered remnant scarf", user: "sashiko.sol", cc: "KR", price: "$44", likes: "266", comments: "15", img: PH.scarf, cat: "Upcycled" },
    { title: "Excess-stock linen overshirt", user: "off.cut", cc: "GB", price: "$66", likes: "210", comments: "12", img: PH.whitetee, cat: "Secondhand" },
  ],

  posts: [
    { title: "How I turned 4 dead jeans into one coat", user: "denimghost", cc: "US", likes: "6.4k", comments: "312", img: PH.bags },
    { title: "A year of mending, in one wardrobe", user: "boroboro", cc: "JP", likes: "5.1k", comments: "244", img: PH.scarf },
    { title: "Natural dye lab: avocado pits", user: "lagos.loom", cc: "NG", likes: "3.9k", comments: "187", img: PH.yellowbg },
    { title: "Sashiko, but make it a bomber", user: "sashiko.sol", cc: "KR", likes: "4.8k", comments: "221", img: PH.printtee },
    { title: "Thrift-flip: $4 dress → runway", user: "mendmore", cc: "BR", likes: "7.2k", comments: "398", img: PH.reddress2 },
    { title: "Building a zero-waste pattern", user: "thread.theory", cc: "IN", likes: "2.6k", comments: "96", img: PH.store },
    { title: "Crochet the gaps: a tutorial in 6 steps", user: "remade.atelier", cc: "JP", likes: "3.3k", comments: "142", img: PH.poncho },
    { title: "Reworking a charity-shop trench", user: "vintage.vera", cc: "FR", likes: "2.9k", comments: "118", img: PH.pinkcoat },
    { title: "From bedsheet to summer set", user: "off.cut", cc: "GB", likes: "2.2k", comments: "87", img: PH.milan },
    { title: "Patchwork denim, the slow way", user: "denimghost", cc: "US", likes: "3.7k", comments: "156", img: PH.denim },
  ],

  creators: [
    { user: "pepparonnie", cc: "PH", img: PH.yellowbg, name: "Ronnie Cruz", city: "Manila", specialty: "Reconstruction", followers: "12.4k", pieces: 86 },
    { user: "remade.atelier", cc: "JP", img: PH.poncho, name: "Aya Mori", city: "Kyoto", specialty: "Crochet", followers: "28.1k", pieces: 142 },
    { user: "denimghost", cc: "US", img: PH.denim, name: "Marcus Lee", city: "Portland", specialty: "Denim Rework", followers: "41.7k", pieces: 209 },
    { user: "sashiko.sol", cc: "KR", img: PH.printtee, name: "Soo-ah Lim", city: "Seoul", specialty: "Sashiko", followers: "33.5k", pieces: 167 },
    { user: "boroboro", cc: "JP", img: PH.scarf, name: "Haru Tanaka", city: "Osaka", specialty: "Boro Mending", followers: "25.9k", pieces: 118 },
    { user: "vintage.vera", cc: "FR", img: PH.pinkcoat, name: "Vera Dubois", city: "Paris", specialty: "Reworked Vintage", followers: "19.2k", pieces: 94 },
    { user: "off.cut", cc: "GB", img: PH.tee, name: "Jodie Hart", city: "Manchester", specialty: "Zero-Waste", followers: "14.8k", pieces: 73 },
    { user: "lagos.loom", cc: "NG", img: PH.yellow, name: "Ada Okafor", city: "Lagos", specialty: "Natural Dyeing", followers: "22.3k", pieces: 105 },
  ],

  hallOfFame: [
    { title: "Best Denim Upcycler 2026", user: "denimghost", cc: "US", img: PH.denim, award: "Champion" },
    { title: "Global Upcycling 2025", user: "boroboro", cc: "JP", img: PH.scarf, award: "Champion" },
    { title: "Reworked Vintage 2025", user: "vintage.vera", cc: "FR", img: PH.pinkcoat, award: "Champion" },
    { title: "People's Choice 2025", user: "mendmore", cc: "BR", img: PH.reddress, award: "People's Choice" },
    { title: "Technique Master 2024", user: "sashiko.sol", cc: "KR", img: PH.printtee, award: "Champion" },
    { title: "Rising Maker 2024", user: "lagos.loom", cc: "NG", img: PH.yellow, award: "Rising Star" },
  ],
};
