
import { OptionGroup, HumanEngineState } from './types';
import { simpleOpt } from './data_helpers';

// A. Corporate & Elite
const grpProfCorp: OptionGroup = {
  groupNameCN: "商务与精英", groupNameEN: "Corporate & Elite",
  options: [
    simpleOpt("job_ceo", "CEO/霸总", "CEO", "CEO, Business Executive, Power Suit, Luxury Watch, High-rise Office background"),
    simpleOpt("job_banker", "银行家/华尔街", "Banker", "Wall Street Banker, Pinstripe Suit, Suspenders, Cigar, Greed"),
    simpleOpt("job_lawyer", "律师", "Lawyer", "Professional Lawyer, Sharp Suit, Holding Briefcase, Courtroom setting"),
    simpleOpt("job_detective", "侦探", "Detective", "Private Detective, Trench Coat, Fedora Hat, Smoking, Film Noir vibe"),
    simpleOpt("job_politician", "政客", "Politician", "Politician, Formal wear, American Flag pin, Speaking at podium"),
    simpleOpt("job_secretary", "秘书", "Secretary", "Secretary, Pencil Skirt, Blouse, Glasses, Holding clipboard"),
    simpleOpt("job_architect", "建筑师", "Architect", "Architect, Black Turtleneck, Holding Blueprints, Creative professional"),
    simpleOpt("job_professor", "教授", "Professor", "University Professor, Tweed Jacket, Elbow patches, Chalkboard background"),
    simpleOpt("job_journalist", "记者", "Journalist", "Journalist, Press Pass, Holding Microphone, Camera crew"),
  ]
};

// B. Blue Collar & Service
const grpProfLabor: OptionGroup = {
  groupNameCN: "蓝领与服务", groupNameEN: "Blue Collar & Service",
  options: [
    simpleOpt("job_mech", "机械师", "Mechanic", "Mechanic, Coveralls, Grease stains, Holding Wrench, Garage background"),
    simpleOpt("job_const", "建筑工", "Construction Worker", "Construction Worker, High-vis vest, Hard Hat, Safety gear"),
    simpleOpt("job_chef", "厨师", "Chef", "Head Chef, Chef's Whites uniform, Apron, Toque hat, Kitchen fire"),
    simpleOpt("job_waiter", "服务员", "Waiter/Waitress", "Waiter/Waitress, Uniform with Apron, Holding Tray with drinks"),
    simpleOpt("job_driver", "卡车司机", "Truck Driver", "Truck Driver, Flannel shirt, Mesh Cap, Truck cab interior"),
    simpleOpt("job_farmer", "农夫", "Farmer", "Farmer, Overalls, Straw Hat, Pitchfork, Rural field"),
    simpleOpt("job_miner", "矿工", "Miner", "Miner, Headlamp, Coal dust on face, Pickaxe, Underground"),
    simpleOpt("job_cleaner", "清洁工", "Cleaner", "Janitor, Jumpsuit, Mop and Bucket, Keys on belt"),
    simpleOpt("job_butcher", "屠夫", "Butcher", "Butcher, Blood-stained Apron, Cleaver, Meat market"),
    simpleOpt("job_fire", "消防员", "Firefighter", "Firefighter, Fire Turnout Gear, Helmet, Soot on face, Holding Axe"),
  ]
};

// C. Medical & Science
const grpProfMed: OptionGroup = {
  groupNameCN: "医疗与科研", groupNameEN: "Medical & Science",
  options: [
    simpleOpt("job_doctor", "医生", "Doctor", "Doctor, White Coat, Stethoscope around neck, Hospital setting"),
    simpleOpt("job_surgeon", "外科医生", "Surgeon", "Surgeon, Blue Scrubs, Surgical Mask, Surgical Cap, Operating Theater"),
    simpleOpt("job_nurse", "护士", "Nurse", "Nurse, Medical Scrubs or Uniform, Clipboard, Caring expression"),
    simpleOpt("job_scientist", "科学家", "Scientist", "Mad Scientist, Lab Coat, Goggles, Holding Test Tube, Bubbling liquid"),
    simpleOpt("job_astro", "宇航员", "Astronaut", "Astronaut, NASA Space Suit, Helmet reflection, Zero gravity"),
    simpleOpt("job_hacker", "黑客/极客", "Hacker", "Computer Hacker, Hoodie, Dark room, Multiple Monitors, Matrix code"),
    simpleOpt("job_engineer", "工程师", "Engineer", "Engineer, Safety Helmet, Blueprint, Industrial background"),
    simpleOpt("job_biologist", "生物学家", "Biologist", "Biologist, Field Gear, Exploring Jungle, Magnifying glass"),
  ]
};

// D. Law & Military
const grpProfLaw: OptionGroup = {
  groupNameCN: "军警与执法", groupNameEN: "Law & Military",
  options: [
    simpleOpt("job_police", "警察", "Police Officer", "Police Officer, Police Uniform, Badge, Utility Belt, Cap"),
    simpleOpt("job_swat", "特警/SWAT", "SWAT", "SWAT Team Member, Tactical Gear, Helmet, Vest, Rifle"),
    simpleOpt("job_soldier", "士兵", "Soldier", "Soldier, Military Camouflage, Combat Helmet, War torn background"),
    simpleOpt("job_sniper", "狙击手", "Sniper", "Sniper, Ghillie Suit, Long Range Rifle, Camouflage"),
    simpleOpt("job_spy", "间谍/特工", "Spy", "Secret Agent, Tuxedo or Tactical Turtleneck, Silenced Pistol"),
    simpleOpt("job_pilot", "飞行员", "Pilot", "Fighter Pilot, Flight Suit, G-Suit, Aviator Helmet, Oxygen mask"),
    simpleOpt("job_guard", "皇家卫兵", "Royal Guard", "Royal Guard, Red Uniform, Bearskin Hat, Stoic"),
    simpleOpt("job_yakuza", "黑帮/极道", "Yakuza", "Yakuza Member, Suit with open shirt, Tattoos visible, Sunglasses"),
  ]
};

// E. Art & Performance
const grpProfArt: OptionGroup = {
  groupNameCN: "艺术与表演", groupNameEN: "Art & Performance",
  options: [
    simpleOpt("job_painter", "画家", "Painter", "Artist Painter, Paint-splattered Overalls, Holding Palette and Brush"),
    simpleOpt("job_rockstar", "摇滚巨星", "Rockstar", "Rockstar, Leather pants, Electric Guitar, Long hair, Stage lights"),
    simpleOpt("job_ballet", "芭蕾舞者", "Ballerina", "Ballerina, Tutu dress, Pointe shoes, Graceful pose, Stage"),
    simpleOpt("job_clown", "小丑", "Clown", "Circus Clown, Colorful makeup, Red Nose, Ruffled collar"),
    simpleOpt("job_mime", "默剧演员", "Mime", "Mime Artist, Striped shirt, White face paint, Beret, Invisible box"),
    simpleOpt("job_dj", "DJ", "DJ", "Club DJ, Headphones around neck, Mixing deck, Laser lights"),
    simpleOpt("job_model", "超模", "Model", "Fashion Model, High Fashion Outfit, Runway walk, Flash photography"),
    simpleOpt("job_director", "导演", "Director", "Film Director, Holding Megaphone, Wearing Cap, Film Set"),
    simpleOpt("job_geisha", "艺伎", "Geisha", "Traditional Geisha, Kimono, White Makeup, Heavy Hair Ornaments, Pipe"),
  ]
};

// F. Sports & Action
const grpProfSport: OptionGroup = {
  groupNameCN: "竞技与运动", groupNameEN: "Sports & Action",
  options: [
    simpleOpt("job_boxer", "拳击手", "Boxer", "Boxer, Boxing Gloves, Shorts, Sweat, Bruised face, Ring"),
    simpleOpt("job_racer", "赛车手", "Racer", "F1 Driver, Racing Suit, Helmet under arm, Pit lane background"),
    simpleOpt("job_diver", "潜水员", "Diver", "Scuba Diver, Wetsuit, Oxygen Tank, Diving Mask, Underwater"),
    simpleOpt("job_samurai_s", "武士(现代)", "Samurai", "Samurai, Traditional Armor, Katana, Topknot hair"),
    simpleOpt("job_ninja_s", "忍者(现代)", "Ninja", "Ninja, Black Shinobi Shozoku, Mask, Katana on back"),
    simpleOpt("job_cowboy_s", "牛仔(现代)", "Cowboy", "Cowboy, Stetson Hat, Leather Vest, Revolver, Lasso"),
    simpleOpt("job_knight_s", "骑士(现代)", "Knight", "Medieval Knight, Shining Plate Armor, Sword, Heraldry"),
    simpleOpt("job_viking_s", "维京(现代)", "Viking", "Viking Warrior, Fur and Leather, War Paint, Axe and Shield"),
  ]
};

// G. Fantasy & Supernatural (General)
const grpProfFanGen: OptionGroup = {
  groupNameCN: "奇幻与超凡", groupNameEN: "Fantasy & Supernatural",
  options: [
    simpleOpt("job_wizard", "法师/巫师", "Wizard", "Wizard, Robes with stars, Pointy Hat, Magic Staff, Glowing orb"),
    simpleOpt("job_witch", "女巫", "Witch", "Witch, Black Dress, Broomstick, Cauldron, Black Cat"),
    simpleOpt("job_priest", "牧师/神父", "Priest", "Catholic Priest, Cassock, White Collar, Holding Bible, Rosary"),
    simpleOpt("job_monk", "僧侣/武僧", "Monk", "Shaolin Monk, Orange Robes, Bald head, Prayer beads, Kung Fu pose"),
    simpleOpt("job_nun", "修女", "Nun", "Nun, Habit and Veil, Cross necklace, Praying"),
    simpleOpt("job_druid", "德鲁伊", "Druid", "Druid, Wearing Animal Pelts and Leaves, Antler headdress, Staff"),
    simpleOpt("job_necro", "死灵法师", "Necromancer", "Necromancer, Tattered Black Robes, Bone Jewelry, Green Ghostly Fire, Skulls"),
    simpleOpt("job_hunt", "怪物猎人", "Monster Hunter", "Monster Hunter, Leather Trench Coat, Crossbow, Hat, Van Helsing style"),
  ]
};

// H. Outlaw & Underground
const grpProfOutlaw: OptionGroup = {
  groupNameCN: "非法与边缘", groupNameEN: "Outlaw & Underground",
  options: [
    simpleOpt("job_thief", "小偷/盗贼", "Thief", "Cat Burglar, Tight black clothes, Balaclava mask, Bag of loot"),
    simpleOpt("job_pirate", "海盗", "Pirate", "Pirate Captain, Tricorn Hat, Eye Patch, Parrot, Hook hand"),
    simpleOpt("job_gang", "帮派分子", "Gangster", "Street Gangster, Hooded, Bandana mask, Tattoos, Graffiti background"),
    simpleOpt("job_assassin", "刺客", "Assassin", "Assassin, Hooded Cloak, Hidden Blade, Shadowy"),
    simpleOpt("job_beggar", "流浪汉", "Beggar", "Homeless Beggar, Tattered rags, Dirty face, Cardboard sign"),
    simpleOpt("job_cult", "邪教徒", "Cultist", "Cultist, Red Robes, Hood covering face, Dagger, Ritual"),
    simpleOpt("job_runner", "赛博黑客", "Edgerunner", "Cyberpunk Edgerunner, Tech jacket, Glowing implants, Weapon"),
  ]
};

// G1. Oriental Wuxia & Xianxia
const grpProfEast: OptionGroup = {
  groupNameCN: "东方武侠与仙侠", groupNameEN: "Oriental Wuxia & Xianxia",
  options: [
    simpleOpt("job_swordsman", "剑客/侠客", "Swordsman", "Chinese Swordsman, Wuxia Style, Hanfu Robes, Holding Jian (Sword), Bamboo Hat (Douli), Wind blowing"),
    simpleOpt("job_cultivator", "修仙者", "Cultivator", "Xianxia Cultivator, Flowing White Robes, Floating Flying Swords, Ethereal Aura, Long Hair"),
    simpleOpt("job_general_cn", "古代将军", "General", "Ancient Chinese General, Ming/Tang Dynasty Armor, Scale Mail, Red Cape, Holding Spear"),
    simpleOpt("job_empress", "皇后/太后", "Empress", "Chinese Empress, Phoenix Crown, Golden Hairpin, Luxurious Silk Hanfu, Long Nails"),
    simpleOpt("job_scholar", "书生/秀才", "Scholar", "Chinese Scholar, Ancient Student, Robes, Holding Scroll or Fan, Bamboo Forest background"),
    simpleOpt("job_taoist", "道士", "Taoist", "Taoist Priest, Bagua Robes, Holding Fly-whisk (Fuchen), Wooden Sword, Talisman"),
    simpleOpt("job_monk_cn", "武僧", "Shaolin Monk", "Shaolin Monk, Orange Robes, Bald Head, Prayer Beads, Kung Fu Stance, Staff"),
    simpleOpt("job_assassin_cn", "刺客/死士", "Assassin", "Chinese Assassin, Black Night Clothing, Face Mask, Hidden Blade, Roof top"),
    simpleOpt("job_eunuch", "东厂/太监", "Eunuch", "Eunuch Official, Embroidered Python Robe, Black Hat, Sinister expression"),
    simpleOpt("job_beggar_k", "丐帮/游侠", "Beggar Hero", "Beggar Sect Hero, Tattered Clothes, Holding Gourd of Wine, Green Dog Stick"),
    simpleOpt("job_fox", "狐妖/妖女", "Fox Spirit", "Fox Spirit Humanoid, Huli Jing, Seductive Hanfu, Nine Tails visible, Makeup"),
  ]
};

// G2. Japanese Tradition
const grpProfJp: OptionGroup = {
  groupNameCN: "日本传统与神话", groupNameEN: "Japanese Tradition",
  options: [
    simpleOpt("job_samurai_jp", "武士/浪人", "Samurai/Ronin", "Samurai, Ronin, Traditional Armor (O-Yoroi), Katana on hip, Topknot"),
    simpleOpt("job_ninja_jp", "忍者", "Ninja", "Ninja, Shinobi, Black Shozoku outfit, Face Mask, Throwing Stars (Shuriken)"),
    simpleOpt("job_geisha_jp", "艺伎/花魁", "Oiran/Geisha", "Oiran / Geisha, Elaborate Kimono, White Face Makeup, Heavy Hair Ornaments, Pipe"),
    simpleOpt("job_miko", "巫女", "Miko", "Miko Shrine Maiden, Red Hakama pants, White Kimono top, Holding Gohei wand"),
    simpleOpt("job_onmyoji", "阴阳师", "Onmyoji", "Onmyoji, Heian Period Robes, Tall Hat (Eboshi), Paper Talisman (Ofuda), Pentagram"),
    simpleOpt("job_sohei", "僧兵", "Sohei", "Sohei Warrior Monk, White Cowl, Robes, Holding Naginata (Glaive)"),
    simpleOpt("job_yokai", "妖怪/鬼", "Yokai/Oni", "Humanoid Yokai, Oni Mask, Tiger skin loincloth, Iron Club (Kanabo)"),
    simpleOpt("job_school_jp", "不良少年", "Yankee", "Japanese Delinquent (Yankee), School Uniform (Gakuran), Pompadour hair, Bat"),
  ]
};

// G3. Western High Fantasy
const grpProfHighFan: OptionGroup = {
  groupNameCN: "西方奇幻 (D&D)", groupNameEN: "Western High Fantasy",
  options: [
    simpleOpt("job_paladin", "圣骑士", "Paladin", "Paladin, Shining Silver Plate Armor, Gold Trim, Holy Aura, Hammer/Sword"),
    simpleOpt("job_ranger", "游侠/猎人", "Ranger", "Ranger, Hooded Green Cloak, Leather Armor, Longbow, Forest background"),
    simpleOpt("job_barbarian", "野蛮人", "Barbarian", "Barbarian, Conan style, Bare Chest, Fur Loincloth, Muscles, Battle Axe"),
    simpleOpt("job_druid_fan", "德鲁伊", "Druid", "Druid, Wearing Animal Skulls and Leaves, Wooden Staff, Nature Magic"),
    simpleOpt("job_rogue", "盗贼/刺客", "Rogue", "Rogue, Tight Leather Armor, Daggers, Hood, Shadowy atmosphere"),
    simpleOpt("job_sorcerer", "术士/法师", "Sorcerer", "Sorcerer, Robes with star patterns, Glowing Magic Staff, Arcane Energy"),
    simpleOpt("job_bard", "吟游诗人", "Bard", "Bard, Colorful Clothes, Feathered Hat, Playing Lute, Charismatic"),
    simpleOpt("job_necro_fan", "死灵法师", "Necromancer", "Necromancer, Tattered Black Robes, Bone Jewelry, Green Ghostly Fire, Skulls"),
    simpleOpt("job_king", "国王/领主", "King", "Medieval King, Gold Crown, Fur-trimmed Cape, Holding Scepter, Throne"),
    simpleOpt("job_jester", "宫廷小丑", "Jester", "Court Jester, Motley Costume, Bells on hat, Creepy or Funny makeup"),
  ]
};

// G4. Ancient Mythology
const grpProfAncient: OptionGroup = {
  groupNameCN: "古典神话", groupNameEN: "Ancient Mythology",
  options: [
    simpleOpt("job_spartan", "斯巴达战士", "Spartan", "Spartan Hoplite, Bronze Helmet with Red Crest, Round Shield, Red Cape, Abs"),
    simpleOpt("job_senator", "罗马元老", "Senator", "Roman Senator, White Toga with Purple sash, Laurel Wreath, Marble background"),
    simpleOpt("job_gladiator", "角斗士", "Gladiator", "Gladiator, Leather straps, Shoulder Armor, Helmet, Holding Sword and Net, Arena"),
    simpleOpt("job_oracle", "神谕/祭司", "Oracle", "Greek Oracle Priestess, White draped dress, Veil, Smoke, Temple background"),
    simpleOpt("job_pharaoh", "法老", "Pharaoh", "Egyptian Pharaoh, Nemes Headdress, False Beard, Gold jewelry, Scepter"),
    simpleOpt("job_anubis", "阿努比斯卫", "Anubis Guard", "Anubis Guard, Jackal Mask, Gold Armor, Egyptian Skirt, Khopesh Sword"),
    simpleOpt("job_cleo", "埃及艳后", "Cleopatra", "Cleopatra style, Black Bob hair with Gold beads, Heavy Eyeliner, Snake jewelry"),
  ]
};

// G5. Tribal & Shamanic
const grpProfTribal: OptionGroup = {
  groupNameCN: "原始与萨满", groupNameEN: "Tribal & Shamanic",
  options: [
    simpleOpt("job_viking_t", "维京海盗", "Viking", "Viking Warrior, Chainmail and Fur, War Paint on face, Bearded, Axe"),
    simpleOpt("job_shaman", "萨满/巫医", "Shaman", "Tribal Shaman, Animal Skull Mask, Feathers, Bone Necklace, Ritual Staff"),
    simpleOpt("job_aztec", "美洲豹战士", "Jaguar Warrior", "Aztec Jaguar Warrior, Jaguar Skin suit, Obsidian Sword (Macuahuitl)"),
    simpleOpt("job_amazon", "亚马逊女战", "Amazonian", "Amazonian Warrior, Leather Bikini Armor, Spear, Jungle background"),
    simpleOpt("job_caveman", "原始人", "Caveman", "Prehistoric Caveman, Animal Pelt, Club, Messy Hair, Dirt"),
  ]
};

// G6. Victorian & Gothic
const grpProfVictorian: OptionGroup = {
  groupNameCN: "维多利亚与哥特", groupNameEN: "Victorian & Gothic",
  options: [
    simpleOpt("job_plague", "瘟疫医生", "Plague Doctor", "Plague Doctor, Beak Mask, Black Leather Coat, Wide Brim Hat, Lantern"),
    simpleOpt("job_inventor", "蒸汽发明家", "Inventor", "Steampunk Inventor, Brass Goggles, Leather Apron, Mechanical Tools, Gloves"),
    simpleOpt("job_vamp_lord", "吸血鬼伯爵", "Vampire Lord", "Vampire Lord, Victorian Suit, High Collar, Red lined Cape, Pale skin"),
    simpleOpt("job_hunter_v", "怪物猎人", "Hunter", "Van Helsing style Hunter, Leather Trench Coat, Crossbow, Hat, Holy Water"),
    simpleOpt("job_detective_v", "福尔摩斯", "Detective", "Sherlock Holmes style, Tweed Coat, Deerstalker Hat, Pipe, Magnifying Glass"),
    simpleOpt("job_maid", "女仆", "Maid", "Victorian Maid, Black Dress with White Apron, Bonnet, Feather Duster"),
    simpleOpt("job_pirate_c", "海盗船长", "Pirate Captain", "Pirate Captain, Tricorn Hat, Frock Coat, Hook Hand, Parrot"),
  ]
};

// Define Groups for Human Sub-modules

// Skin
const grpSkinTone: OptionGroup = {
  groupNameCN: "肤色", groupNameEN: "Skin Tone",
  options: [
    simpleOpt("skin_pale", "苍白", "Pale", "Pale Porcelain Skin, Translucent Veins"),
    simpleOpt("skin_fair", "白皙", "Fair", "Fair Skin Tone"),
    simpleOpt("skin_tan", "古铜/小麦", "Tan", "Sun-kissed Tan Skin, Bronzed"),
    simpleOpt("skin_olive", "橄榄色", "Olive", "Olive Skin Tone"),
    simpleOpt("skin_brown", "棕色", "Brown", "Rich Brown Skin"),
    simpleOpt("skin_black", "黝黑", "Ebony", "Dark Ebony Skin"),
    simpleOpt("skin_blue", "蓝皮", "Blue", "Blue Skin pigment"),
    simpleOpt("skin_green", "绿皮", "Green", "Green Skin pigment"),
    simpleOpt("skin_red", "红皮", "Red", "Red Skin pigment"),
    simpleOpt("skin_grey", "灰皮", "Grey", "Grey Skin pigment"),
    simpleOpt("skin_gold", "金色", "Gold", "Golden Skin"),
  ]
};
const grpSkinMaterial: OptionGroup = {
  groupNameCN: "材质", groupNameEN: "Material",
  options: [
    simpleOpt("skin_default", "默认", "Default", "Natural Skin Texture"),
    simpleOpt("skin_oil", "油亮/汗湿", "Oily", "Oily Skin, Sweaty Sheen"),
    simpleOpt("skin_scales", "鳞片覆盖", "Scales", "Reptilian Scales texture, Iridescent"),
    simpleOpt("skin_stone", "岩石/石肤", "Stone", "Cracked Stone Texture, Granite Flesh"),
    simpleOpt("skin_metal", "金属/液态", "Metal", "Chrome Flesh, Liquid Mercury Texture"),
    simpleOpt("skin_magma", "熔岩/燃烧", "Magma", "Magma Skin, Cracks glowing with fire"),
    simpleOpt("skin_bark", "树皮/木质", "Bark", "Bark Skin, Wooden Texture, Mossy"),
    simpleOpt("skin_porcelain", "陶瓷", "Porcelain", "Cracked Porcelain Doll Texture"),
    simpleOpt("skin_glass", "玻璃", "Glass", "Translucent Glass Skin"),
    simpleOpt("skin_holo", "全息", "Holographic", "Holographic Digital Skin"),
  ]
};

// Hair
const grpHairLength: OptionGroup = {
  groupNameCN: "长度", groupNameEN: "Length",
  options: [
    simpleOpt("hair_bald", "光头/寸头", "Bald/Buzz", "Bald head, Buzz Cut"),
    simpleOpt("hair_pixie", "精灵短发", "Pixie", "Short Pixie Cut"),
    simpleOpt("hair_bob", "波波头", "Bob", "Bob Cut"),
    simpleOpt("hair_shoulder", "齐肩", "Shoulder Length", "Shoulder-length Hair"),
    simpleOpt("hair_long", "长直发", "Long Straight", "Long Straight Hair"),
    simpleOpt("hair_waist", "齐腰长发", "Waist Length", "Waist Length Flowing Hair"),
  ]
};
const grpHairStyle: OptionGroup = {
  groupNameCN: "发型", groupNameEN: "Style",
  options: [
    simpleOpt("hair_messy", "凌乱/刚睡醒", "Messy", "Messy Bedhead, Unkempt"),
    simpleOpt("hair_bun", "丸子头", "Bun", "Messy Bun, Updo"),
    simpleOpt("hair_twin", "双马尾", "Twin Tails", "Twin Tails, Pigtails"),
    simpleOpt("hair_ponytail", "高马尾", "High Ponytail", "High Ponytail"),
    simpleOpt("hair_braid", "麻花辫", "Braids", "Braided Hair"),
    simpleOpt("hair_dread", "脏辫", "Dreadlocks", "Dreadlocks"),
    simpleOpt("hair_cornrow", "地垄沟", "Cornrows", "Cornrows"),
    simpleOpt("hair_afro", "爆炸头", "Afro", "Afro Hairstyle"),
    simpleOpt("hair_finger", "手推波纹(20s)", "Finger Waves", "Vintage Finger Waves"),
    simpleOpt("hair_pomp", "庞巴度(50s)", "Pompadour", "Pompadour Hairstyle"),
    simpleOpt("hair_mullet", "狼尾(80s)", "Mullet", "Mullet Hairstyle"),
    simpleOpt("hair_liberty", "自由女神刺头", "Liberty Spikes", "Punk Liberty Spikes"),
    simpleOpt("hair_mohawk", "莫霍克", "Mohawk", "Mohawk Hairstyle"),
    simpleOpt("hair_undercut", "铲青", "Undercut", "Undercut Hairstyle"),
    simpleOpt("hair_hime", "公主切", "Hime Cut", "Hime Cut"),
    simpleOpt("hair_wolf", "鲻鱼头", "Wolf Cut", "Wolf Cut"),
    simpleOpt("hair_curtain", "八字刘海", "Curtain Bangs", "Curtain Bangs"),
    simpleOpt("hair_wet", "湿发", "Wet Look", "Wet Look Hair"),
    simpleOpt("hair_slick", "大背头", "Slicked Back", "Slicked Back Hair"),
    simpleOpt("hair_wind", "风吹", "Windblown", "Windblown Hair"),
    simpleOpt("hair_top_knot", "顶髻", "Top Knot", "Top Knot hairstyle"),
    simpleOpt("hair_french_braid", "法式辫", "French Braid", "French Braid"),
    simpleOpt("hair_dutch_braid", "荷兰辫", "Dutch Braid", "Dutch Braid"),
    simpleOpt("hair_fishtail", "鱼骨辫", "Fishtail Braid", "Fishtail Braid"),
    simpleOpt("hair_crown_braid", "皇冠辫", "Crown Braid", "Crown Braid"),
    simpleOpt("hair_beehive", "蜂巢头(60s)", "Beehive", "60s Beehive hairstyle"),
    simpleOpt("hair_quiff", "飞机头", "Quiff", "Quiff hairstyle"),
    simpleOpt("hair_bowl_cut", "碗盖头", "Bowl Cut", "Bowl Cut"),
    simpleOpt("hair_jheri_curl", "杰瑞卷(80s)", "Jheri Curl", "80s Jheri Curl"),
    simpleOpt("hair_spiky", "尖刺头(90s)", "Spiky Hair", "90s Spiky Hair"),
    simpleOpt("hair_shag", "shag发型", "Shag", "Shag haircut"),
    simpleOpt("hair_odango", "团子头", "Odango", "Odango (Sailor Moon) buns"),
    simpleOpt("hair_side_shave", "侧削", "Side Shave", "Side Shave hairstyle"),
    simpleOpt("hair_tonsure", "修士发型", "Tonsure", "Monk Tonsure hairstyle"),
    simpleOpt("hair_victory_rolls", "胜利卷(40s)", "Victory Rolls", "40s Victory Rolls"),
    simpleOpt("hair_chignon", "发髻", "Chignon", "Elegant Chignon"),
    simpleOpt("hair_bouffant", "蓬松发型", "Bouffant", "Bouffant hairstyle"),
    simpleOpt("hair_asymmetrical", "不对称发型", "Asymmetrical", "Asymmetrical haircut"),
    simpleOpt("hair_feathered", "羽毛剪", "Feathered", "Feathered hairstyle (70s)"),
    simpleOpt("hair_perms", "烫发", "Perms", "Permed hair"),
    simpleOpt("hair_rattail", "鼠尾辫", "Rattail", "Rattail hairstyle"),
    simpleOpt("hair_devillock", "恶魔锁", "Devillock", "Misfits Devillock hairstyle"),
    simpleOpt("hair_queue", "清朝辫子", "Queue", "Manchu Queue hairstyle"),
    simpleOpt("hair_bettie", "贝蒂刘海", "Bettie Bangs", "Bettie Page Bangs"),
    simpleOpt("hair_chelsea", "切尔西头", "Chelsea Cut", "Skinhead Chelsea Cut"),
  ]
};
const grpHairColor: OptionGroup = {
  groupNameCN: "发色", groupNameEN: "Color",
  options: [
    simpleOpt("col_black", "黑", "Jet Black", "Jet Black Hair"),
    simpleOpt("col_blonde", "金", "Platinum Blonde", "Platinum Blonde Hair"),
    simpleOpt("col_brown", "棕", "Chestnut Brown", "Chestnut Brown Hair"),
    simpleOpt("col_red", "姜红", "Ginger Red", "Ginger Red Hair"),
    simpleOpt("col_silver", "银白", "Silver/White", "Silver White Hair"),
    simpleOpt("col_grey", "灰", "Grey", "Grey Hair"),
    simpleOpt("col_pink", "粉彩", "Pastel Pink", "Pastel Pink Hair"),
    simpleOpt("col_blue", "电光蓝", "Electric Blue", "Electric Blue Hair"),
    simpleOpt("col_green", "霓虹绿", "Neon Green", "Neon Green Hair"),
    simpleOpt("col_purple", "紫", "Purple", "Purple Hair"),
    simpleOpt("col_lavender", "薰衣草", "Lavender", "Lavender Hair"),
    simpleOpt("col_turq", "绿松石", "Turquoise", "Turquoise Hair"),
    simpleOpt("col_ombre", "渐变", "Ombre", "Ombre Gradient Hair"),
    simpleOpt("col_rainbow", "彩虹", "Rainbow", "Rainbow Colored Hair"),
    simpleOpt("col_split", "阴阳染", "Split Dye", "Split Dye (Cruella style) Hair"),
    simpleOpt("col_highlight", "挑染", "Highlights", "Hair with Highlights"),
    simpleOpt("col_root", "布丁头", "Dark Roots", "Visible Dark Roots"),
  ]
};

// Face
const grpFaceVibe: OptionGroup = {
  groupNameCN: "气质", groupNameEN: "Vibe",
  options: [
    simpleOpt("face_beauty", "美丽", "Beautiful", "Beautiful Face"),
    simpleOpt("face_cute", "可爱", "Cute", "Cute, Adorable Face"),
    simpleOpt("face_kind", "慈祥", "Kind", "Kind, Gentle Face"),
    simpleOpt("face_noble_v", "尊贵", "Noble", "Noble, Aristocratic Face"),
    simpleOpt("face_ugly_v", "丑陋", "Ugly", "Ugly, Repulsive Face"),
    simpleOpt("face_scary", "恐怖", "Scary", "Scary, Terrifying Face"),
    simpleOpt("face_disgust", "恶心", "Disgusting", "Disgusting, Gross Face"),
    simpleOpt("face_weird", "怪诞", "Weird", "Weird, Strange Face"),
    simpleOpt("face_melancholic", "忧郁", "Melancholic", "Melancholic, Sad eyes"),
    simpleOpt("face_fierce", "凶猛", "Fierce", "Fierce, Intense gaze"),
    simpleOpt("face_ethereal", "空灵", "Ethereal", "Ethereal, Otherworldly beauty"),
  ]
};
const grpFacePreset: OptionGroup = {
  groupNameCN: "预设", groupNameEN: "Preset",
  options: [
    simpleOpt("face_insta", "网红脸", "Insta-Glam", "Insta-Glam Face, Perfect Symmetry, Heavy Contour"),
    simpleOpt("face_kpop", "偶像脸", "K-Pop Idol", "K-Pop Idol Face, Glass Skin, V-line Jaw"),
    simpleOpt("face_model", "超模脸", "Model", "High Fashion Model Face, Sharp Cheekbones"),
    simpleOpt("face_classic", "古典脸", "Classic", "Classic Cinematic Beauty, Timeless features"),
    simpleOpt("face_baby", "童颜", "Baby Face", "Baby Face, Youthful features"),
    simpleOpt("face_andro", "雌雄莫辨", "Androgynous", "Androgynous Face"),
    simpleOpt("face_chiseled", "雕刻般", "Chiseled", "Chiseled Jawline, Strong features"),
    simpleOpt("face_feral", "野性", "Feral", "Feral, Wild eyes"),
    simpleOpt("face_doll", "像娃娃", "Doll-like", "Doll-like, Large eyes"),
    simpleOpt("face_alien", "外星感", "Alien", "Alien-like features, Wide set eyes"),
    simpleOpt("face_noble_p", "贵族气", "Noble", "Noble, Aristocratic features"),
    simpleOpt("face_plain", "普通人", "Plain", "Plain Face, Average Features, Realistic"),
    simpleOpt("face_rugged", "粗犷", "Rugged", "Rugged Face, Weathered Texture, Strong Jaw"),
    simpleOpt("face_weathered", "风霜", "Weathered", "Weathered Face, Sun damage"),
    simpleOpt("face_villain", "反派", "Villain", "Villainous Features, Sharp Nose, Sinister"),
    simpleOpt("face_heroic", "英雄脸", "Heroic", "Heroic, Strong Jaw, Confident expression"),
    simpleOpt("face_wise", "智慧长者", "Wise", "Wise, Wrinkled, Knowing eyes"),
    simpleOpt("face_tired_p", "疲惫社畜", "Tired", "Tired Face, Dark eye bags, Stressed look"),
    simpleOpt("face_sickly", "病态", "Sickly", "Sickly, Gaunt, Pale, Sunken eyes"),
  ]
};
const grpMakeup: OptionGroup = {
  groupNameCN: "妆容", groupNameEN: "Makeup",
  options: [
    simpleOpt("mu_none", "素颜", "No Makeup", "No Makeup, Raw Skin Texture, Fresh Faced"),
    simpleOpt("mu_natural", "淡妆", "Natural", "Natural No-Makeup Look"),
    simpleOpt("mu_glam", "浓妆", "Glam", "Heavy Glam Makeup, Winged Eyeliner"),
    simpleOpt("mu_goth", "烟熏/哥特", "Goth", "Smokey Eyes, Black Lipstick"),
    simpleOpt("mu_clown", "小丑妆", "Clown", "Clown Makeup, Messy"),
    simpleOpt("mu_geisha", "艺伎", "Geisha", "Geisha Makeup, White face"),
    simpleOpt("mu_kabuki", "歌舞伎", "Kabuki", "Kabuki Makeup"),
    simpleOpt("mu_corpse", "尸脸(黑金属)", "Corpse Paint", "Corpse Paint, Black Metal style"),
    simpleOpt("mu_glitter", "闪粉泪妆", "Glitter Tears", "Glitter Tears, Euphoria style"),
    simpleOpt("mu_war", "战纹/迷彩", "War Paint", "War Paint, Camouflage Grease"),
    simpleOpt("mu_art", "艺术面绘", "Face Paint", "Avant-garde Face Paint"),
  ]
};

// Traits
const grpMutations: OptionGroup = {
  groupNameCN: "非人特征", groupNameEN: "Mutations",
  options: [
    simpleOpt("mut_succubus", "魅魔角/尾", "Succubus", "Succubus Horns, Heart-shaped Tail"),
    simpleOpt("mut_ram", "盘羊角", "Ram Horns", "Curved Ram Horns"),
    simpleOpt("mut_uni", "独角兽", "Unihorn", "Unicorn Horn"),
    simpleOpt("mut_elf", "精灵耳", "Elf Ears", "Pointed Elf Ears"),
    simpleOpt("mut_fin", "鱼鳍耳", "Fin Ears", "Aquatic Fin Ears"),
    simpleOpt("mut_fangs", "吸血鬼牙", "Fangs", "Sharp Vampire Fangs"),
    simpleOpt("mut_tusks", "獠牙", "Tusks", "Large Orc Tusks"),
    simpleOpt("mut_tongue", "蛇信", "Split Tongue", "Split Serpent Tongue"),
    simpleOpt("mut_cateye", "竖瞳", "Cat Eyes", "Slit Cat Eyes"),
    simpleOpt("mut_blackeye", "全黑眼", "Black Sclera", "All Black Sclera"),
    simpleOpt("mut_thirdeye", "三只眼", "Third Eye", "Third Eye on forehead"),
    simpleOpt("mut_cyclops", "独眼", "Cyclops", "Single Cyclops Eye"),
    simpleOpt("mut_gills", "鱼鳃", "Gills", "Gills on neck"),
    simpleOpt("mut_web", "蹼", "Webbed", "Webbed Fingers"),
    simpleOpt("mut_wings_f", "羽翼", "Feathered Wings", "Large White Feathered Wings"),
    simpleOpt("mut_wings_b", "蝠翼", "Bat Wings", "Leathery Bat Wings"),
    simpleOpt("mut_wings_m", "机械翼", "Mech Wings", "Mechanical Metal Wings"),
    simpleOpt("mut_halo", "光环", "Halo", "Glowing Halo"),
    simpleOpt("mut_crown", "浮空冠", "Floating Crown", "Floating Energy Crown"),
    simpleOpt("mut_tail", "尾巴", "Tail", "Long Tail"),
  ]
};
const grpImperfections: OptionGroup = {
  groupNameCN: "瑕疵与印记", groupNameEN: "Imperfections",
  options: [
    simpleOpt("imp_freckle", "雀斑", "Freckles", "Heavy Freckles"),
    simpleOpt("imp_acne", "痘印", "Acne", "Acne, Textured skin"),
    simpleOpt("imp_rosacea", "酒糟鼻", "Rosacea", "Rosacea, Red cheeks"),
    simpleOpt("imp_mole", "泪痣", "Mole", "Beauty Mark, Mole under eye"),
    simpleOpt("imp_vitiligo", "白斑", "Vitiligo", "Vitiligo skin patterns"),
    simpleOpt("imp_darkcircle", "黑眼圈", "Dark Circles", "Heavy Dark Circles"),
    simpleOpt("imp_tat_face", "面部纹身", "Face Tattoo", "Face Tattoo"),
    simpleOpt("imp_tat_neck", "颈部纹身", "Neck Tattoo", "Neck Tattoo"),
    simpleOpt("imp_tat_sleeve", "花臂", "Sleeve Tattoo", "Full Sleeve Tattoo"),
    simpleOpt("imp_tat_yakuza", "日式纹身", "Yakuza Tattoo", "Yakuza Irezumi Tattoo"),
    simpleOpt("imp_scar_eye", "眼部刀疤", "Eye Scar", "Vertical Scar over eye"),
    simpleOpt("imp_scar_burn", "烧伤", "Burn Mark", "Burn Marks"),
    simpleOpt("imp_scar_stitch", "缝合线", "Stitches", "Stitched Wound"),
    simpleOpt("imp_cyb_larm", "左机械臂", "L-Mech Arm", "Cybernetic Left Arm"),
    simpleOpt("imp_cyb_rarm", "右机械臂", "R-Mech Arm", "Cybernetic Right Arm"),
    simpleOpt("imp_cyb_eye", "义眼", "Cyber Eye", "Glowing Cybernetic Eye"),
    simpleOpt("imp_cyb_skin", "机械露肌", "Exposed Mech", "Synthetic Skin Peeling revealing metal"),
    simpleOpt("imp_bandage", "绷带", "Bandages", "Wrapped in Bandages"),
    simpleOpt("imp_eyepatch", "眼罩", "Eyepatch", "Wearing Eyepatch"),
    simpleOpt("imp_mask", "医用口罩", "Mask", "Wearing Medical Mask"),
    simpleOpt("imp_dirt", "污垢", "Dirt", "Dirty face, Grime"),
  ]
};

// Fashion 120+ Items Extension
const grpFashHigh: OptionGroup = {
  groupNameCN: "高定与先锋", groupNameEN: "High Fashion & Avant-Garde",
  options: [
    simpleOpt("fash_haute", "高定秀场", "Haute Couture", "Haute Couture, Runway Fashion, Intricate embroidery, Hand-crafted details"),
    simpleOpt("fash_sculpt", "雕塑感/异形", "Sculptural", "Iris van Herpen Style, 3D Printed Fabric, Sculptural silhouette, Organic shapes, Flowing lines"),
    simpleOpt("fash_mcqueen", "暗黑浪漫", "McQueen Style", "Alexander McQueen Style, Dark Romanticism, Skulls and Roses, Dramatic feathers, Victorian Goth influence"),
    simpleOpt("fash_minimal", "极简奢华", "Minimalist Luxury", "Minimalist Luxury, Jil Sander / The Row Style, Clean lines, Monochromatic, High-end Cashmere"),
    simpleOpt("fash_balen", "末世廓形", "Balenciaga Style", "Balenciaga Aesthetic, Oversized Silhouette, Post-Apocalyptic Chic, Black mask, Baggy layers"),
    simpleOpt("fash_gucci", "复古极繁", "Maximalist/Gucci", "Gucci Aesthetic, Maximalist, Clashing Patterns, Floral and Plaid, Vintage Geek Chic, Wes Anderson vibe"),
    simpleOpt("fash_gala", "MetGala礼服", "Met Gala Look", "Met Gala Red Carpet Look, Massive train, Sequins and Jewels, Theatrical grandeur"),
    simpleOpt("fash_avant", "解构主义", "Deconstructivism", "Deconstructivism Fashion, Yohji Yamamoto / Comme des Garçons, Asymmetrical, Raw edges, Layered Black"),
    simpleOpt("fash_glass", "玻璃/透明装", "Glass Fashion", "Translucent Plastic Fashion, Glass Fabric, Holographic Sheen, Futurewear"),
    simpleOpt("fash_metal", "金属织物", "Chainmail/Metal", "Paco Rabanne Style, Chainmail Dress, Metal discs, Reflective Silver"),
  ]
};

const grpFashStreet: OptionGroup = {
  groupNameCN: "街头与潮流", groupNameEN: "Streetwear & Urban",
  options: [
    simpleOpt("fash_hype", "美式潮牌", "Hypebeast", "Hypebeast Style, Supreme Aesthetic, Oversized Hoodie, Logo graphics, Baggy Jeans, Sneakers"),
    simpleOpt("fash_skate", "滑板风格", "Skater", "Skater Style, Thrasher Aesthetic, Beanie, Vans shoes, Flannel shirt tied around waist"),
    simpleOpt("fash_y2k", "千禧辣妹", "Y2K", "Y2K Fashion, Low-rise Jeans, Baby Tee, Velour Tracksuit, Rhinestones, Pink aesthetics"),
    simpleOpt("fash_ath", "运动休闲", "Athleisure", "Athleisure, Yoga Pants, Crop Top, Bomber Jacket, Nike Aesthetic, Sporty"),
    simpleOpt("fash_norm", "性冷淡/工装", "Normcore", "Normcore, Carhartt Workwear, Beanie, Plain T-shirt, Straight leg denim, Utilitarian"),
    simpleOpt("fash_hiphop", "嘻哈/Oversize", "90s Hip Hop", "90s Hip Hop Fashion, Baggy Jersey, Gold Chains, Timberland Boots, Bucket Hat"),
    simpleOpt("fash_tech", "机能忍者", "Techwear", "Techwear, Acronym Style, Urban Ninja, Matte Black, Multi-pocket Cargo Pants, Straps"),
    simpleOpt("fash_gorp", "户外山系", "Gorpcore", "Gorpcore, North Face Jacket, Hiking Boots, Fleece Vest, Functional Outdoor gear"),
    simpleOpt("fash_block", "多巴胺穿搭", "Dopamine", "Dopamine Dressing, Color Blocking, Vibrant Primary Colors, Playful, Kidcore"),
    simpleOpt("fash_grunge", "垃圾摇滚", "Grunge", "90s Grunge, Kurt Cobain Style, Distressed Sweater, Ripped Jeans, Converse"),
  ]
};

const grpFashSub: OptionGroup = {
  groupNameCN: "亚文化", groupNameEN: "Subculture & Alternative",
  options: [
    simpleOpt("fash_goth_tr", "传统哥特", "Trad Goth", "Trad Goth, Siouxsie Sioux Style, Teased Hair, Black Lace, Fishnets, Heavy Eyeliner"),
    simpleOpt("fash_cyberg", "赛博哥特", "Cybergoth", "Cybergoth, Neon Hair falls, Gas mask, UV reactive clothing, Platform boots, Industrial Dance"),
    simpleOpt("fash_punk", "70s朋克", "70s Punk", "70s Punk Rock, Vivienne Westwood Style, Safety Pins, Tartan Bondage trousers, Mohawk"),
    simpleOpt("fash_emo", "Emo/情绪", "Emo", "2000s Emo Style, Side bangs, Skinny Jeans, Band T-shirt, Studded Belt, Converse"),
    simpleOpt("fash_lolita", "洛丽塔", "Lolita", "Gothic Lolita Fashion, Frilly Dress, Bonnet, Lace Parasol, Victorian Doll aesthetic"),
    simpleOpt("fash_scene", "Scene风格", "Scene Kid", "Scene Kid Aesthetic, Neon hair extensions, Kandi bracelets, Gloomy Bear, Chaotic colors"),
    simpleOpt("fash_steam", "蒸汽朋克", "Steampunk", "Steampunk Fashion, Corset, Goggles, Brass Accessories, Brown Leather, Victorian Sci-fi"),
    simpleOpt("fash_pastel", "粉彩哥特", "Pastel Goth", "Pastel Goth, Creepy Cute, Spikes and Bows, Pink and Black, Bat wings"),
    simpleOpt("fash_visual", "视觉系", "Visual Kei", "Visual Kei, Glam Rock, Elaborate Hair, Androgynous, Leather and Lace mix"),
    simpleOpt("fash_biker", "机车党", "Biker", "Biker Gang, Leather Jacket with patches, Bandana, Heavy Boots, Denim Vest"),
  ]
};

const grpFashProf: OptionGroup = {
  groupNameCN: "职业与制服", groupNameEN: "Professional & Uniform",
  options: [
    simpleOpt("fash_suit", "商务精英", "Business Suit", "Italian Tailored Suit, Pinstripe, White Collar, Power Tie, Wolf of Wall Street vibe"),
    simpleOpt("fash_tux", "晚宴燕尾", "Tuxedo", "Black Tie Tuxedo, Bow tie, Formal Evening wear, James Bond aesthetic"),
    simpleOpt("fash_lab", "科研/医疗", "Lab Coat", "White Lab Coat, Scrubs, Stethoscope, Sterile aesthetics, Scientist look"),
    simpleOpt("fash_mili", "现代战术", "Tactical Gear", "Tactical Military Gear, Camouflage, Bulletproof Vest, Combat Helmet, Special Forces"),
    simpleOpt("fash_pilot", "飞行员", "Pilot", "Fighter Pilot Suit, G-Suit, Aviator Sunglasses, Bomber Jacket, Patches"),
    simpleOpt("fash_police", "警服/特警", "Police/SWAT", "Police Uniform, SWAT Team gear, Badge, Utility Belt, Dark Blue"),
    simpleOpt("fash_school", "日系校服", "School Uniform", "Japanese School Uniform, Sailor Suit (Seifuku), Pleated Skirt, Loafers, High Socks"),
    simpleOpt("fash_ivy", "常春藤/学院", "Ivy League", "Ivy League Style, Preppy, Tweed Blazer, Sweater Vest, Polo Shirt, Ralph Lauren vibe"),
    simpleOpt("fash_chef", "厨师服", "Chef", "Chef's Whites, Apron, Toque hat, Professional Kitchen attire"),
    simpleOpt("fash_priest", "神职长袍", "Priest/Nun", "Priest Cassock, Nun Habit, Religious Vestments, Gold embroidery, Solemn"),
  ]
};

const grpFashTrad: OptionGroup = {
  groupNameCN: "民族与古风", groupNameEN: "Traditional & Cultural",
  options: [
    simpleOpt("fash_hanfu", "汉服(仙气)", "Hanfu", "Traditional Chinese Hanfu, Flowing Silk Robes, Wide Sleeves, Celestial embroidery, Wuxia style"),
    simpleOpt("fash_qipao", "旗袍", "Qipao", "Cheongsam / Qipao, Silk Brocade, High collar, Form fitting, Wong Kar-wai aesthetic"),
    simpleOpt("fash_kimono", "和服", "Kimono", "Formal Kimono, Obi Sash, Floral Patterns, Traditional Japanese, Geta sandals"),
    simpleOpt("fash_sari", "印度纱丽", "Saree", "Indian Saree, Silk and Gold thread, Vibrant Colors, Bindi, Jewelry"),
    simpleOpt("fash_vic_d", "维多利亚裙", "Victorian Dress", "Victorian Ballgown, Corset, Crinoline cage, Lace collar, 19th Century"),
    simpleOpt("fash_ren", "文艺复兴", "Renaissance", "Renaissance Velvet Robes, Fur trim, Gold chains, Tudor style, Shakespearean"),
    simpleOpt("fash_egypt", "古埃及", "Egyptian", "Ancient Egyptian Shendyt, Gold Collars, Pleated White Linen, Lapis Jewelry"),
    simpleOpt("fash_greek", "希腊长袍", "Greek Toga", "Greco-Roman Toga, Draped White Fabric, Gold Laurel Wreath, Sandals"),
    simpleOpt("fash_viking", "维京皮草", "Viking", "Viking Fur Cloak, Leather Armor, Runes, Rugged textures, Layers"),
    simpleOpt("fash_arab", "阿拉伯长袍", "Arabian", "Bedouin Robes, Turban, Flowing fabric, Desert attire, Layers"),
  ]
};

const grpFashScifi: OptionGroup = {
  groupNameCN: "科幻与未来", groupNameEN: "Sci-Fi & Future",
  options: [
    simpleOpt("fash_space", "宇航服", "Space Suit", "NASA Space Suit, Bulky Helmet, Life Support System, White and Orange"),
    simpleOpt("fash_scifi", "紧身战斗服", "Plugsuit", "Sci-Fi Plugsuit, Spandex, Evangelion Style, Glowing lines, Interface ports"),
    simpleOpt("fash_cyber_j", "赛博夹克", "Cyberpunk Jacket", "Cyberpunk Bomber Jacket, High collar, LED lights, Patches, Holographic material"),
    simpleOpt("fash_dune", "蒸馏服(沙丘)", "Stillsuit", "Dune Stillsuit, Desert Survival Gear, Nose tube, Weathered, Tactical"),
    simpleOpt("fash_jedi", "绝地长袍", "Jedi Robes", "Jedi Robes, Hooded Cloak, Layered Earth tones, Star Wars aesthetic"),
    simpleOpt("fash_android", "仿生皮肤", "Android Skin", "Synthetic Android Skin, White Panel lines, Exposed joints, Minimalist Future"),
    simpleOpt("fash_mech", "外骨骼", "Exoskeleton", "Exoskeleton Armor, Hydraulic pistons, Industrial Frame, Heavy Duty"),
    simpleOpt("fash_holo", "全息服装", "Holographic", "Clothing made of Holographic Light, Digital Glitch fabric, Translucent"),
    simpleOpt("fash_chrome", "液态金属", "Liquid Chrome", "Liquid Chrome Outfit, T-1000 texture, Reflective Silver body"),
    simpleOpt("fash_neo", "黑客皮衣", "Neo/Matrix", "Matrix Style, Black Latex Trench Coat, Sunglasses, Combat Boots"),
  ]
};

const grpFashFantasy: OptionGroup = {
  groupNameCN: "奇幻与盔甲", groupNameEN: "Fantasy & Armor",
  options: [
    simpleOpt("fash_plate", "板甲骑士", "Plate Armor", "Full Plate Steel Armor, Shining Knight, Helmet with Visor, Engraved details"),
    simpleOpt("fash_rogue", "盗贼皮甲", "Rogue Leather", "Leather Rogue Armor, Hooded, Daggers, Dark colors, Stealth gear"),
    simpleOpt("fash_mage", "法师长袍", "Mage Robes", "Wizard Robes, Starry patterns, Glowing Runes, Mystical Fabric, Hood"),
    simpleOpt("fash_barb", "野蛮人", "Barbarian", "Barbarian Loincloth, Fur boots, Leather straps, Bare chest, Conan style"),
    simpleOpt("fash_elf_a", "精灵轻甲", "Elven Armor", "Elven Mithril Armor, Leaf motifs, Elegant design, Silver and Green"),
    simpleOpt("fash_necro", "死灵法师", "Necromancer", "Necromancer Robes, Tattered black cloth, Bone accessories, Green fog"),
    simpleOpt("fash_dark_k", "黑骑士", "Dark Knight", "Dark Knight Armor, Spiked Pauldrons, Sauron aesthetic, Black Metal"),
    simpleOpt("fash_hunt", "恶魔猎人", "Demon Hunter", "Demon Hunter Gear, Long Coat, Crossbows, Hat, Bloodborne style"),
    simpleOpt("fash_druid", "德鲁伊", "Druid", "Druid Garb, Antlers, Leaves and Vines, Animal pelts, Nature texture"),
    simpleOpt("fash_valk", "女武神", "Valkyrie", "Valkyrie Armor, Winged Helmet, Silver Breastplate, Divine aesthetic"),
  ]
};

const grpFashVintage: OptionGroup = {
  groupNameCN: "年代秀", groupNameEN: "Vintage Eras",
  options: [
    simpleOpt("fash_20s", "20s爵士", "20s Flapper", "1920s Flapper Dress, Pearls, Feathers, Art Deco patterns, Great Gatsby"),
    simpleOpt("fash_50s", "50s画报", "50s Pin-up", "1950s Pin-up Style, Polka Dot Dress, High Waisted Shorts, Bandana, Rockabilly"),
    simpleOpt("fash_60s", "60s摩登", "60s Mod", "1960s Mod Fashion, Color block mini dress, Go-go boots, Twiggy style"),
    simpleOpt("fash_70s", "70s迪斯科", "70s Disco", "1970s Disco Fashion, Bell Bottoms, Wide Collar Shirt, Sequins, Afro"),
    simpleOpt("fash_80s", "80s权力", "80s Power", "1980s Power Suit, Shoulder Pads, Neon Windbreaker, Leg warmers, Perm hair"),
    simpleOpt("fash_90s", "90s极简", "90s Minimalist", "1990s Minimalist, Slip Dress, Kate Moss Heroin Chic, Calvin Klein aesthetic"),
    simpleOpt("fash_cowboy", "西部牛仔", "Cowboy", "Cowboy Outfit, Stetson Hat, Leather Chaps, Spurs, Bandana, Dust"),
    simpleOpt("fash_noir", "风衣侦探", "Film Noir", "Film Noir Detective, Beige Trench Coat, Fedora Hat, Cigarette smoke"),
  ]
};

const grpFashMaterial: OptionGroup = {
  groupNameCN: "特殊材质", groupNameEN: "Special Materials",
  options: [
    simpleOpt("fash_latex", "全黑乳胶", "Latex", "Tight Black Latex Catsuit, High Shine, Fetish Fashion aesthetics"),
    simpleOpt("fash_pvc", "透明PVC", "PVC", "Transparent Plastic Clothing, Clear PVC Raincoat, Futuristic"),
    simpleOpt("fash_lace", "全身蕾丝", "Lace Bodysuit", "Intricate Black Lace Bodysuit, See-through, Delicate patterns"),
    simpleOpt("fash_shib", "绳艺束缚", "Shibari", "Shibari Rope aesthetics, Artistic rope binding over clothes"),
    simpleOpt("fash_gold", "黄金甲", "Solid Gold", "Outfit made of Solid Gold, Golden Foil texture, Opulent"),
    simpleOpt("fash_bio", "生物膜", "Bio-Membrane", "Clothing made of Organic Membrane, Slimy texture, Alien fashion"),
    simpleOpt("fash_fire", "火焰衣", "Fire Dress", "Dress made of Living Fire, Burning fabric, Ember particles"),
    simpleOpt("fash_water", "水流衣", "Water Dress", "Dress made of Flowing Water, Liquid form, Splash shape"),
    simpleOpt("fash_smoke", "烟雾衣", "Smoke Outfit", "Outfit made of Black Smoke, Ethereal, Formless, Shadowy"),
    simpleOpt("fash_nude", "原始/无衣", "Primal/Nude", "No Clothing, Artistic Nude, Natural State, Strategically covered by shadow/hair"),
  ]
};

// Performance Groups (New from v4.2 PRD)

// 5.1 Micro-Expressions
const grpExpPos: OptionGroup = {
    groupNameCN: "快乐与狂喜", groupNameEN: "Positive & High Energy",
    options: [
        simpleOpt("exp_smile_gentle", "温柔浅笑", "Gentle Smile", "Soft gentle smile, Warm expression, Kind eyes, Relaxed features"),
        simpleOpt("exp_smile_bright", "灿烂笑容", "Bright Smile", "Bright beaming smile, Showing teeth, Radiating happiness, Crow's feet"),
        simpleOpt("exp_laugh", "开怀大笑", "Laughing", "Laughing hysterically, Head thrown back, Tears of joy, Mouth wide open"),
        simpleOpt("exp_excited", "兴奋/期待", "Excited", "Wide-eyed excitement, Dilated pupils, Eager expression, Mouth slightly open"),
        simpleOpt("exp_ecstasy", "狂喜/极乐", "Ecstasy", "Expression of pure ecstasy, Euphoric, Eyes rolling back, Blissful"),
        simpleOpt("exp_relief", "如释重负", "Relieved", "Sigh of relief, Relaxed brow, exhale, Contented"),
    ]
};
const grpExpNegLow: OptionGroup = {
    groupNameCN: "悲伤与抑郁", groupNameEN: "Negative & Low Energy",
    options: [
        simpleOpt("exp_sad", "忧郁/感伤", "Melancholic", "Melancholic expression, Downturned mouth, Sad eyes, Gloomy atmosphere"),
        simpleOpt("exp_cry_silent", "无声流泪", "Silent Crying", "Silent crying, Single tear rolling down cheek, Glassy eyes, Red nose"),
        simpleOpt("exp_cry_ugly", "痛哭流涕", "Ugly Crying", "Ugly crying, Sobbing uncontrollably, Scrunched face, Streaming tears, Grief"),
        simpleOpt("exp_disappoint", "失望/沮丧", "Disappointed", "Deeply disappointed, Looking down, Defeated expression, Sighing"),
        simpleOpt("exp_numb", "麻木/空洞", "Numb", "Numb expression, Thousand-yard stare, Hollow eyes, Traumatized, PTSD look"),
        simpleOpt("exp_pout", "委屈/嘟嘴", "Pouting", "Pouting, Quivering lip, Puppy dog eyes, Sulking"),
    ]
};
const grpExpNegHigh: OptionGroup = {
    groupNameCN: "愤怒与惊恐", groupNameEN: "Negative & High Energy",
    options: [
        simpleOpt("exp_frown", "皱眉/不悦", "Frowning", "Furrowed brows, Frowning, Displeased, Stern look"),
        simpleOpt("exp_angry", "愤怒/瞪视", "Angry", "Angry glare, Intense staring, Teeth clenched, Flared nostrils"),
        simpleOpt("exp_rage", "暴怒/嘶吼", "Rage", "Screaming in blind rage, Veins popping on forehead, Ferocious, Mouth wide open"),
        simpleOpt("exp_scared", "惊恐/畏惧", "Terrified", "Terrified expression, Pale face, Eyes wide open in shock, Sweating"),
        simpleOpt("exp_scream", "尖叫/恐惧", "Screaming", "Screaming in terror, Mouth agape, Horror movie expression"),
        simpleOpt("exp_pain", "痛苦/呻吟", "Pain", "Grimacing in agony, Gritting teeth, Eyes squeezed shut, Suffering"),
    ]
};
const grpExpComplex: OptionGroup = {
    groupNameCN: "复杂与社交", groupNameEN: "Complex & Social",
    options: [
        simpleOpt("exp_stoic", "冷漠/扑克脸", "Stoic", "Stoic, Deadpan, Emotionless, Poker face, Cool attitude"),
        simpleOpt("exp_smirk", "坏笑/得意", "Smirking", "Smirking, Cocky expression, One corner of mouth raised, Arrogant"),
        simpleOpt("exp_seduce", "魅惑/挑逗", "Seductive", "Seductive gaze, Bedroom eyes, Biting lower lip, Flirty"),
        simpleOpt("exp_doubt", "怀疑/挑眉", "Skeptical", "Skeptical, One eyebrow raised, Suspicious side-eye, Judging"),
        simpleOpt("exp_disgust", "厌恶/鄙视", "Disgusted", "Look of disgust, Sneering, Wrinkled nose, Revulsion"),
        simpleOpt("exp_crazy", "疯狂/病娇", "Crazy", "Psychotic break, Manic wide eyes, Creepy smile, Unhinged"),
        simpleOpt("exp_focus", "极度专注", "Focused", "Intense focus, Concentrating, Narrowed eyes, Studying"),
        simpleOpt("exp_drunk", "微醺/迷离", "Drunk", "Drunk expression, Flushed cheeks, Hazy unfocused eyes, Dazed"),
    ]
};

// 5.2 Static Poses
const grpPoseStand: OptionGroup = {
    groupNameCN: "站姿", groupNameEN: "Standing",
    options: [
        simpleOpt("pose_stand_hero", "英雄站姿", "Heroic Stance", "Heroic Power Stance, Legs apart, Hands on hips, Chest out, Low angle"),
        simpleOpt("pose_stand_cross", "抱臂/防御", "Arms Crossed", "Standing with arms crossed over chest, Defensive posture, Lean back"),
        simpleOpt("pose_stand_lean", "靠墙/慵懒", "Leaning", "Leaning casually against a wall, One leg up, Relaxed slouch"),
        simpleOpt("pose_stand_back", "背对/回眸", "Back Turned", "Standing with back to camera, Looking over shoulder, Mysterious silhouette"),
        simpleOpt("pose_stand_sexy", "S型/超模", "Model Pose", "Contrapposto pose, S-curve body line, Fashion model stance, Hip popped"),
        simpleOpt("pose_stand_hands", "插兜/耍帅", "Hands in Pockets", "Hands in pockets, Hunched shoulders, Cool vibe, Street style"),
    ]
};
const grpPoseSit: OptionGroup = {
    groupNameCN: "坐姿", groupNameEN: "Sitting",
    options: [
        simpleOpt("pose_sit_throne", "王座/霸气", "Throne Sitting", "Sitting on a throne, Manspreading, Dominant posture, Hands on armrests"),
        simpleOpt("pose_sit_cross", "二郎腿/优雅", "Legs Crossed", "Sitting with legs crossed, Elegant posture, Hands resting on knee"),
        simpleOpt("pose_sit_slump", "瘫坐/葛优躺", "Slumped", "Slumped in chair, Sprawled out, Total exhaustion, Melted posture"),
        simpleOpt("pose_sit_fetal", "抱膝/孤独", "Hugging Knees", "Sitting on floor hugging knees to chest, Fetal sitting, Vulnerable"),
        simpleOpt("pose_sit_squat", "亚洲蹲/街头", "Squatting", "Squatting low, Slavic squat, Heels on ground, Street thug vibe"),
        simpleOpt("pose_sit_zen", "打坐/冥想", "Meditating", "Lotus position, Meditating, Straight back, Hands in Mudra"),
        simpleOpt("pose_sit_desk", "伏案/工作", "Desk Sitting", "Sitting at a desk, Leaning forward, Elbows on table, Head in hands"),
    ]
};
const grpPoseLie: OptionGroup = {
    groupNameCN: "躺与地面", groupNameEN: "Lying & Ground",
    options: [
        simpleOpt("pose_lie_back", "大字仰卧", "Lying Back", "Lying on back, Sprawled out, Staring at ceiling, Defeated or Relaxed"),
        simpleOpt("pose_lie_side", "侧卧/美人", "Lying Side", "Lying on side, Propped up on one elbow, Romantic pose"),
        simpleOpt("pose_lie_fetal", "蜷缩/恐惧", "Fetal Floor", "Curled up in fetal position on the ground, Protecting head, Scared"),
        simpleOpt("pose_kneel", "跪地/祈祷", "Kneeling", "Kneeling on both knees, Upright posture, Submissive or Religious"),
        simpleOpt("pose_crawl", "爬行/求生", "Crawling", "Crawling on hands and knees, Dragging body, Desperate"),
        simpleOpt("pose_fall", "倒地/死亡", "Collapsed", "Collapsed on the floor, Unconscious pose, Twisted limbs"),
    ]
};
const grpPoseFantasy: OptionGroup = {
    groupNameCN: "特殊/超能", groupNameEN: "Fantasy & Dynamic",
    options: [
        simpleOpt("pose_float", "悬浮/神性", "Levitating", "Levitating in mid-air, Zero gravity pose, Body arched, Toes pointed"),
        simpleOpt("pose_upside", "倒吊", "Upside Down", "Hanging upside down, Spider-man pose, Hair hanging down"),
        simpleOpt("pose_fall_air", "高空坠落", "Free Falling", "Free falling through the air, Limbs flailing, Wind resistance"),
        simpleOpt("pose_landing", "超级英雄落地", "Superhero Landing", "Three-point landing pose, One fist on ground, Looking up, Dynamic"),
        simpleOpt("pose_contort", "扭曲/非人", "Contorted", "Contorted body, Unnatural joint angles, Exorcist style, Horror pose"),
    ]
};

// 5.3 Dynamic Actions
const grpActCombat: OptionGroup = {
    groupNameCN: "战斗", groupNameEN: "Combat & Violence",
    options: [
        simpleOpt("act_punch", "出拳/攻击", "Punching", "Throwing a punch, Dynamic motion blur, Fist connecting, Action shot"),
        simpleOpt("act_kick", "踢腿/飞踢", "Kicking", "High kick, Martial arts move, Leg extended, Dynamic composition"),
        simpleOpt("act_sword", "挥剑/斩击", "Sword Swinging", "Swinging a sword, Blade blur, Attack stance, Warrior scream"),
        simpleOpt("act_gun", "举枪/射击", "Shooting", "Firing a gun, Muzzle flash, Recoil, Aiming down sights"),
        simpleOpt("act_dodge", "闪避/格挡", "Dodging", "Dodging an attack, Blocking with arms, Defensive maneuver"),
        simpleOpt("act_choke", "掐脖/压制", "Choking", "Choking someone (off-camera), Aggressive grip, Dominating"),
        simpleOpt("act_explode", "爆破背景", "Walking from Explosion", "Walking away from explosion, Cool guys don't look at explosions"),
    ]
};
const grpActMove: OptionGroup = {
    groupNameCN: "移动", groupNameEN: "Movement",
    options: [
        simpleOpt("act_run", "冲刺/奔跑", "Sprinting", "Sprinting towards camera, Hair flying back, Intense speed, Motion blur"),
        simpleOpt("act_walk", "走秀/漫步", "Strutting", "Walking confidently, Strutting, Fashion runway walk, Long strides"),
        simpleOpt("act_jump", "跳跃/跑酷", "Jumping", "Jumping over obstacle, Parkour move, Mid-air suspension"),
        simpleOpt("act_dance", "舞蹈/旋转", "Dancing", "Dancing, Twirling, Ballet move or Club dancing, Flowing motion"),
        simpleOpt("act_climb", "攀爬", "Climbing", "Climbing a wall/cliff, Hanging by fingertips, Strain"),
    ]
};
const grpActLife: OptionGroup = {
    groupNameCN: "生活与嗜好", groupNameEN: "Daily Life",
    options: [
        simpleOpt("act_smoke", "吸烟/吐雾", "Smoking", "Smoking a cigarette, Exhaling thick smoke cloud, Holding lit cigarette"),
        simpleOpt("act_drink", "饮酒/喝水", "Drinking", "Drinking from a glass, Sipping coffee/cocktail, Holding cup"),
        simpleOpt("act_eat", "进食", "Eating", "Eating food, Biting into fruit/burger, Messy eating"),
        simpleOpt("act_phone", "看手机/自拍", "Using Phone", "Looking at smartphone screen, Taking a selfie, Face illuminated by screen"),
        simpleOpt("act_read", "阅读", "Reading", "Reading a book/newspaper, Turned pages, Focused eyes"),
        simpleOpt("act_write", "书写/绘图", "Writing", "Writing in a notebook, Drawing, Holding pen"),
        simpleOpt("act_makeup", "化妆/照镜", "Applying Makeup", "Applying lipstick/makeup, Looking in handheld mirror"),
    ]
};
const grpActTech: OptionGroup = {
    groupNameCN: "科技与魔法", groupNameEN: "Tech & Magic",
    options: [
        simpleOpt("act_type", "黑客/打字", "Typing", "Typing furiously on keyboard, Hacker aesthetic, Multiple screens"),
        simpleOpt("act_holo", "全息操作", "Holographic Interface", "Interacting with holographic interface, Touching floating UI elements"),
        simpleOpt("act_fix", "修理/焊接", "Fixing", "Fixing machinery, Wielding a wrench/welder, Sparks flying"),
        simpleOpt("act_cast", "施法/结印", "Casting Spell", "Casting a magic spell, Glowing hands, Arcane energy flowing"),
        simpleOpt("act_summon", "召唤仪式", "Summoning", "Summoning ritual, Hands raised to sky, Chanting"),
        simpleOpt("act_card", "占卜/玩牌", "Card Reading", "Holding Tarot cards, Shuffling poker cards, Magician gesture"),
    ]
};

// 5.4 Gaze (Single Group)
const grpGaze: OptionGroup = {
    groupNameCN: "视线与连接", groupNameEN: "Gaze & Connection",
    options: [
        simpleOpt("gaze_cam", "直视镜头", "At Camera", "Looking directly at camera, Intense Eye Contact, Breaking the 4th wall"),
        simpleOpt("gaze_away", "看向画外", "Looking Away", "Looking away from camera, Staring into distance, Profile view"),
        simpleOpt("gaze_up", "仰望", "Looking Up", "Looking up at sky, Hopeful or Desperate gaze, Chin up"),
        simpleOpt("gaze_down", "俯视/低头", "Looking Down", "Looking down, Chin to chest, Shame or Shyness or God-like view"),
        simpleOpt("gaze_side", "斜眼/瞥视", "Side-Eye", "Side-eye glance, Suspicious look, Peek"),
        simpleOpt("gaze_close", "闭眼", "Closed Eyes", "Eyes closed, Sleeping, Dead, or Meditating"),
        simpleOpt("gaze_obs", "遮挡/无视", "Obscured", "Eyes obscured by hair/shadow/sunglasses, Faceless"),
        simpleOpt("gaze_crazy", "库布里克凝视", "Kubrick Stare", "The Kubrick Stare, Head tilted down but eyes looking up, Menacing"),
        simpleOpt("gaze_roll", "翻白眼", "Eye Roll", "Rolling eyes, Annoyed expression"),
    ]
};

export const humanOptions = {
  biology: [
    { 
      id: 'species', 
      titleCN: '物种', titleEN: 'Species', 
      options: [
        simpleOpt("spec_human", "人类(智人)", "Human", "Human, Homo Sapiens"),
        simpleOpt("spec_elf", "精灵", "Elf", "Elf, Elven, Pointed Ears, Elegant Features"),
        simpleOpt("spec_orc", "兽人/奥克", "Orc", "Orc, Green Skin, Tusks, Muscular, Brutish"),
        simpleOpt("spec_vampire", "吸血鬼", "Vampire", "Vampire, Pale Skin, Fangs, Red Eyes, Gothic Aura"),
        simpleOpt("spec_demon", "恶魔/提夫林", "Demon", "Demon, Tiefling, Horns, Red Skin, Tail"),
        simpleOpt("spec_angel", "天使/天族", "Angel", "Angel, Celestial, Wings, Halo, Divine"),
        simpleOpt("spec_cyborg", "赛博格", "Cyborg", "Cyborg, Mechanical Joints, Panel Lines, Half-Human"),
        simpleOpt("spec_android", "仿生人", "Android", "Android, Synthetic Skin, Ball Jointed Doll, Artificial Perfection"),
        simpleOpt("spec_alien", "类人外星人", "Alien", "Humanoid Alien, Exotic Features, Star Trek Style"),
        simpleOpt("spec_werewolf", "狼人(直立)", "Werewolf", "Werewolf, Lycanthrope, Wolf Head, Fur Covered Body, Claws"),
        simpleOpt("spec_undead", "丧尸/亡灵", "Undead", "Undead, Zombie, Rotting Flesh, Hollow Eyes"),
      ] 
    },
    { 
      id: 'gender', 
      titleCN: '性别', titleEN: 'Gender', 
      options: [
        simpleOpt("gen_male", "男性", "Male", "Male, Masculine features"),
        simpleOpt("gen_female", "女性", "Female", "Female, Feminine features"),
        simpleOpt("gen_andro", "中性", "Androgynous", "Androgynous, Non-binary, Ambiguous Gender"),
        simpleOpt("gen_trans", "跨性别", "Transgender", "Transgender, Soft Masculinity/Femininity mix"),
      ] 
    },
    { 
      id: 'age', 
      titleCN: '年龄', titleEN: 'Age', 
      options: [
        simpleOpt("age_infant", "婴幼儿 (1-3)", "Infant/Toddler", "Toddler, 2 years old, Baby features, Chubby cheeks"),
        simpleOpt("age_kid", "幼童 (3-6)", "Young Kid", "Preschooler, 5 years old, Small child, Innocent look"),
        simpleOpt("age_child", "儿童 (6-12)", "Child", "Child, 10 years old, Youthful"),
        simpleOpt("age_teen", "少年 (13-19)", "Teenager", "Teenager, 18 years old, Adolescent"),
        simpleOpt("age_young", "青年 (20-29)", "Young Adult", "Young Adult, 25 years old"),
        simpleOpt("age_adult", "成年 (30-45)", "Adult", "Adult, 35 years old, Mature"),
        simpleOpt("age_middle", "中年 (46-60)", "Middle-aged", "Middle-aged, 50 years old, Mature lines"),
        simpleOpt("age_elder", "老年 (60-80)", "Elderly", "Elderly, 70 years old, Wrinkled"),
        simpleOpt("age_ancient", "极老 (80+)", "Ancient", "Ancient, 90 years old, Deeply weathered"),
      ] 
    },
    { 
      id: 'ethnicity', 
      titleCN: '血统', titleEN: 'Ethnicity', 
      options: [
        simpleOpt("eth_east_asia", "东亚", "East Asian", "East Asian, Chinese/Japanese/Korean descent"),
        simpleOpt("eth_se_asia", "东南亚", "SE Asian", "Southeast Asian, Thai/Vietnamese descent"),
        simpleOpt("eth_south_asia", "南亚/印度", "South Asian", "South Asian, Indian descent"),
        simpleOpt("eth_caucasian", "高加索(白人)", "Caucasian", "Caucasian, European descent"),
        simpleOpt("eth_black", "非裔(黑人)", "Black", "Black, African descent, Dark Ebony Skin"),
        simpleOpt("eth_latino", "拉丁/西班牙", "Latino", "Hispanic, Latino"),
        simpleOpt("eth_middle_east", "中东", "Middle Eastern", "Middle Eastern, Arab/Persian descent"),
        simpleOpt("eth_fantasy", "幻想种", "Fantasy", "Exotic Fantasy Features, Unearthly"),
      ] 
    },
    { 
      id: 'body', 
      titleCN: '身材', titleEN: 'Body Silhouette', 
      options: [
        simpleOpt("body_skinny", "消瘦", "Skinny", "Emaciated, Skinny, Visible bones"),
        simpleOpt("body_slim", "纤细", "Slim", "Slim build, Slender, Petite"),
        simpleOpt("body_fit", "匀称", "Fit", "Fit body, Athletic Toned"),
        simpleOpt("body_muscle", "肌肉", "Muscular", "Muscular, Ripped, Bodybuilder physique"),
        simpleOpt("body_curvy", "丰满", "Curvy", "Curvy figure, Voluptuous, Hourglass"),
        simpleOpt("body_allure", "性感/惹火", "Voluptuous", "Voluptuous, Hourglass figure, Curvy and Fit, Pin-up physique"),
        simpleOpt("body_chubby", "微胖", "Chubby", "Chubby, Soft body, Plus size"),
        simpleOpt("body_heavy", "魁梧/肥胖", "Heavy", "Heavily built, Obese, Massive frame"),
      ] 
    },
  ],

  // Profession Group (Consolidated)
  profession: [
      {
          id: 'profession',
          titleCN: '职业', titleEN: 'Profession',
          options: [
              grpProfCorp, grpProfLabor, grpProfMed, grpProfLaw, grpProfArt, grpProfSport, 
              grpProfFanGen, grpProfOutlaw,
              grpProfEast, grpProfJp, grpProfHighFan, grpProfAncient, grpProfTribal, grpProfVictorian
          ],
          multi: false, max: 1
      }
  ],

  // New Consolidated Visual Modules (5 items matching 5 Biology items)
  visuals: [
    { 
      id: 'skin', 
      titleCN: '皮肤', titleEN: 'Skin', 
      options: [grpSkinTone, grpSkinMaterial],
      multi: true, max: 2 
    },
    { 
      id: 'hair', 
      titleCN: '毛发', titleEN: 'Hair', 
      options: [grpHairLength, grpHairStyle, grpHairColor],
      multi: true, max: 4
    },
    { 
      id: 'face', 
      titleCN: '面容', titleEN: 'Face', 
      options: [grpFaceVibe, grpFacePreset, grpMakeup],
      multi: true, max: 4
    },
    { 
      id: 'traits', 
      titleCN: '特征', titleEN: 'Traits', 
      options: [grpMutations, grpImperfections],
      multi: true, max: 5
    },
    { 
      id: 'fashion', 
      titleCN: '服饰', titleEN: 'Fashion', 
      options: [
        grpFashHigh, grpFashStreet, grpFashSub, grpFashProf, 
        grpFashTrad, grpFashScifi, grpFashFantasy, grpFashVintage, grpFashMaterial
      ],
      multi: true, max: 3
    }
  ],

  performance: [
    { 
      id: 'expression', 
      titleCN: '表情', titleEN: 'Expression', 
      options: [grpExpPos, grpExpNegLow, grpExpNegHigh, grpExpComplex],
      multi: true, max: 2
    },
    { 
      id: 'pose', 
      titleCN: '静姿', titleEN: 'Pose', 
      options: [grpPoseStand, grpPoseSit, grpPoseLie, grpPoseFantasy]
    },
    { 
      id: 'action', 
      titleCN: '动资', titleEN: 'Action', 
      options: [grpActCombat, grpActMove, grpActLife, grpActTech]
    },
    { 
      id: 'gaze', 
      titleCN: '视线', titleEN: 'Gaze', 
      options: [grpGaze]
    },
  ]
};

export const initialHuman: HumanEngineState = {
  species: "", gender: "", age: "", ethnicity: "", body: "",
  profession: "",
  skin: "", hair: "", face: "", traits: "", fashion: "",
  expression: "", pose: "", action: "", gaze: ""
};
