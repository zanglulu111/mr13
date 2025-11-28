
import { OptionGroup, CreatureEngineState } from './types';
import { simpleOpt } from './data_helpers';

// 1. Blueprint
const grpBioClass: OptionGroup = {
  groupNameCN: "纲目/原型", groupNameEN: "Class & Archetype",
  options: [
    simpleOpt("cls_feline", "猫科 (虎/豹)", "Feline", "Feline Beast, Tiger anatomy, Lion features, Agile body, Predatory"),
    simpleOpt("cls_canine", "犬科 (狼/狐)", "Canine", "Canine Beast, Wolf anatomy, Fox features, Snout, Furry"),
    simpleOpt("cls_ursine", "熊科 (巨兽)", "Ursine", "Ursine Beast, Grizzly Bear anatomy, Massive muscular build, Heavy paws"),
    simpleOpt("cls_primate", "灵长类 (猿)", "Primate", "Primate Beast, Gorilla anatomy, Long arms, Human-like hands, Hunchback"),
    simpleOpt("cls_reptile", "爬行类 (蜥蜴)", "Reptile", "Reptilian Beast, Komodo Dragon anatomy, Scaled body, Cold-blooded"),
    simpleOpt("cls_avian", "鸟纲 (猛禽)", "Avian", "Avian Creature, Eagle anatomy, Large Wings, Talons, Beak"),
    simpleOpt("cls_insect", "昆虫纲 (甲虫)", "Insectoid", "Insectoid Creature, Arthropod, Hard Exoskeleton, Mantis/Beetle anatomy"),
    simpleOpt("cls_arachnid", "蛛形纲 (蜘蛛)", "Arachnid", "Arachnid Creature, Spider anatomy, Multiple eyes, 8 legs, Web"),
    simpleOpt("cls_dragon", "真龙 (西方)", "Dragon", "Majestic Western Dragon, Dinosaur body, Bat wings, Long neck"),
    simpleOpt("cls_loong", "神龙 (东方)", "Loong", "Eastern Loong Dragon, Serpentine body, Antlers, Floating, No wings"),
    simpleOpt("cls_aquatic", "水生 (深海)", "Aquatic", "Aquatic Sea Monster, Shark anatomy, Fins, Gills, Streamlined"),
    simpleOpt("cls_cephalo", "头足纲 (触手)", "Cephalopod", "Cephalopod, Octopus anatomy, Tentacled Horror, Squid-like, Soft body"),
    simpleOpt("cls_worm", "蠕虫 (沙丘)", "Worm", "Giant Worm, Segmented body, Lamprey mouth, No limbs, Burrower"),
    simpleOpt("cls_slime", "软体/史莱姆", "Slime", "Amorphous Slime, Gelatinous Cube, Blob Monster, Translucent, Shapeless"),
    simpleOpt("cls_plant", "植物怪 (树人)", "Plant/Treant", "Botanical Creature, Treant, Living Wood, Vines and Roots anatomy"),
    simpleOpt("cls_construct", "构装体 (魔像)", "Construct", "Construct Golem, Artificial Life, Animated Statue, Robot"),
    simpleOpt("cls_undead", "亡灵生物", "Undead", "Undead Creature, Zombie Beast, Skeleton anatomy, Rotting"),
  ]
};

const grpBioStance: OptionGroup = {
  groupNameCN: "姿态/体型", groupNameEN: "Stance & Posture",
  options: [
    simpleOpt("stn_quad", "四足着地", "Quadruped", "Quadrupedal stance, On all fours, Stable posture"),
    simpleOpt("stn_biped", "双足 (霸王龙)", "Bipedal", "Bipedal Theropod stance, Hunched forward, T-Rex posture, Tail balance"),
    simpleOpt("stn_humanoid", "类人直立", "Humanoid", "Humanoid stance, Upright, Two legs two arms, Werewolf posture"),
    simpleOpt("stn_tripod", "三足 (异星)", "Tripodal", "Tripodal stance, Three legs, Alien biology, War of the Worlds style"),
    simpleOpt("stn_multi", "多足 (蜈蚣)", "Multi-legged", "Multi-legged, Centipede locomotion, Skittering posture"),
    simpleOpt("stn_slither", "盘踞/蛇行", "Slithering", "Coiled posture, Slithering on ground, S-shape body"),
    simpleOpt("stn_hover", "反重力/悬浮", "Hovering", "Levitating, Hovering in mid-air, Psionic float, No contact with ground"),
    simpleOpt("stn_fly", "飞行/滞空", "Flying", "Flying, Wings fully spread, Aerial dynamic pose"),
    simpleOpt("stn_swim", "游动", "Swimming", "Swimming underwater, Fin propulsion, Weightless"),
    simpleOpt("stn_burrow", "掘地/潜伏", "Burrowing", "Burrowing, Half-buried in ground, Erupting from earth"),
  ]
};

const grpBioScale: OptionGroup = {
  groupNameCN: "体型量级", groupNameEN: "Scale",
  options: [
    simpleOpt("scl_micro", "微观 (细胞级)", "Microscopic", "Microscopic scale, Cellular level details, Visible only under microscope, Bio-luminescent specks"),
    simpleOpt("scl_tiny", "微型 (指尖)", "Tiny", "Tiny scale, Miniature creature, Fitting in palm of hand, Macro photography perspective"),
    simpleOpt("scl_small", "小型 (膝高)", "Small", "Small scale, Knee-high, Pet sized, Lightweight frame, Low angle shot"),
    simpleOpt("scl_med", "中型 (人高)", "Medium", "Medium scale, Human height, Average biological size, Eye-level view"),
    simpleOpt("scl_large", "大型 (载具级)", "Large", "Large scale, Massive build, Heavyweight, Size of a car, Imposing bulk"),
    simpleOpt("scl_giant", "巨型 (楼层级)", "Giant", "Giant scale, Multi-story tall, Massive height, Shaking the ground, Looming over humans"),
    simpleOpt("scl_colossal", "超巨 (地标级)", "Colossal", "Colossal scale, Towering over buildings, Skyscraper height, Megalophobia, Epic scale"),
    simpleOpt("scl_cosmic", "星环 (神级)", "Cosmic", "Cosmic scale, Celestial body size, Larger than worlds, Nebula background, World-eater"),
  ]
};

// 2. Integumentary (Now merged into Genesis)
const grpBioTexture: OptionGroup = {
  groupNameCN: "表皮材质", groupNameEN: "Texture",
  options: [
    simpleOpt("tex_fur_s", "短绒毛", "Short Fur", "Velvet Short Fur, Soft texture, Sleek"),
    simpleOpt("tex_fur_l", "长鬃毛", "Long Fur", "Shaggy Long Fur, Matted hair, Wild mane"),
    simpleOpt("tex_scale_h", "硬鳞 (龙/鳄)", "Hard Scales", "Hard Armored Scales, Plate armor skin, Rough texture"),
    simpleOpt("tex_scale_s", "软鳞 (蛇/鱼)", "Soft Scales", "Smooth Iridescent Scales, Wet shine, Glistening"),
    simpleOpt("tex_skin", "皮革/无毛", "Leathery", "Leathery Hide, Wrinkled Elephant skin, Rhino texture"),
    simpleOpt("tex_chitin", "甲壳 (光泽)", "Chitin", "Hard Chitin Exoskeleton, Beetle Shell, Glossy black"),
    simpleOpt("tex_feather", "羽毛", "Feathers", "Covered in Feathers, Plumage, Bird-like texture"),
    simpleOpt("tex_slime", "粘液", "Slime", "Slimy Mucus, Dripping wet, Gooey, Translucent"),
    simpleOpt("tex_rot", "腐肉/骨骼", "Rotting", "Rotting Flesh, Exposed Bone, Decaying, Zombie texture"),
    simpleOpt("tex_bark", "树皮/苔藓", "Bark", "Wooden Bark texture, Covered in Moss and Lichen"),
    simpleOpt("tex_rock", "岩石/花岗", "Rock", "Living Rock, Granite texture, Cracked Stone surface"),
    simpleOpt("tex_metal", "机械/金属", "Metal", "Chrome Metal plating, Rusted Iron, Robotic parts, Cables"),
  ]
};

const grpBioElement: OptionGroup = {
  groupNameCN: "元素属性", groupNameEN: "Element",
  options: [
    simpleOpt("elm_fire", "火焰/熔岩", "Fire", "Body made of Fire and Magma, Burning Ember skin, Smoke trails"),
    simpleOpt("elm_ice", "冰霜/水晶", "Ice", "Body made of Ice Crystals, Glacial blue, Translucent, Frozen"),
    simpleOpt("elm_thunder", "雷电/能量", "Thunder", "Body made of Lightning, Electrical sparks, Crackling energy"),
    simpleOpt("elm_shadow", "暗影/虚空", "Shadow", "Body made of Black Smoke, Shadow particles, Void texture"),
    simpleOpt("elm_light", "神圣/光辉", "Light", "Body made of Pure Light, Glowing Aura, Celestial gold"),
    simpleOpt("elm_galaxy", "星空/宇宙", "Galaxy", "Body made of Stars and Nebula, Galaxy texture, Cosmic"),
    simpleOpt("elm_water", "水流/液体", "Water", "Body made of Flowing Water, Liquid form, Bubbles"),
    simpleOpt("elm_tech", "数据/全息", "Holographic", "Holographic Body, Digital Glitch, Matrix Code texture"),
  ]
};

// 3. Anatomy (Now merged into Morphology)
const grpBioHead: OptionGroup = {
  groupNameCN: "头部特征", groupNameEN: "Head Features",
  options: [
    simpleOpt("hd_horns", "巨角", "Large Horns", "Large Curved Ram Horns, Antlers, Demonic Horns"),
    simpleOpt("hd_fangs", "獠牙", "Fangs", "Long Sharp Fangs, Sabertooth, Rows of Shark Teeth"),
    simpleOpt("hd_beak", "鸟喙", "Beak", "Sharp Hooked Beak, Raptor Beak"),
    simpleOpt("hd_mandible", "昆虫口器", "Mandibles", "Insect Mandibles, Pincers, Alien mouth"),
    simpleOpt("hd_multi_eye", "复眼/多眼", "Multi-Eyes", "Cluster of Spider Eyes, Compound Eyes, Many eyes"),
    simpleOpt("hd_cyclops", "独眼", "Cyclops", "Single Cyclops Eye, Glowing eye"),
    simpleOpt("hd_no_face", "无面/盲视", "Faceless", "Faceless, Smooth blank head, Eyeless, Xenomorph style"),
    simpleOpt("hd_mane", "雄狮鬃毛", "Mane", "Thick Lion Mane, Neck Frill"),
    simpleOpt("hd_skull", "外露头骨", "Skull", "Exposed Skull face, Bone mask"),
    simpleOpt("hd_tentacle", "面部触须", "Tentacles", "Cthulhu style Tentacle beard, Feelers"),
  ]
};

const grpBioBody: OptionGroup = {
  groupNameCN: "身体部件", groupNameEN: "Body Parts",
  options: [
    simpleOpt("bod_wing_bat", "恶魔翼", "Bat Wings", "Large Leathery Bat Wings, Dragon Wings"),
    simpleOpt("bod_wing_fea", "天使翼", "Feathered Wings", "Massive Feathered Wings, Eagle Wings"),
    simpleOpt("bod_wing_ins", "昆虫翼", "Insect Wings", "Translucent Dragonfly Wings, Beetle Wings"),
    simpleOpt("bod_tail", "长尾", "Tail", "Long Whip-like Tail, Prehensile Tail"),
    simpleOpt("bod_spines", "背刺", "Spines", "Sharp Spines along back, Stegosaurus plates, Razor fin"),
    simpleOpt("bod_arms", "多臂", "Multi-Arms", "Multiple extra arms, Four arms, Shiva style"),
    simpleOpt("bod_tentacle", "背部触手", "Back Tentacles", "Wriggling Tentacles sprouting from back"),
    simpleOpt("bod_claw", "利爪", "Claws", "Razor sharp Claws, Massive Talons"),
    simpleOpt("bod_vents", "生物喷口", "Vents", "Bioluminescent Vents, Gas pores, Alien texture"),
    simpleOpt("bod_udder", "囊肿/卵", "Sacks", "Alien Egg Sacks, Gross biological texture"),
  ]
};

// 4. Soul & Action (Now merged into Morphology)
const grpBioMood: OptionGroup = {
  groupNameCN: "情绪状态", groupNameEN: "Mood / State",
  options: [
    simpleOpt("md_fierce", "凶猛/狂暴", "Fierce", "Fierce, Predatory, Aggressive, Dangerous, Enraged"),
    simpleOpt("md_noble", "高贵/神性", "Noble", "Noble, Majestic, Divine Guardian, Proud, Stoic"),
    simpleOpt("md_scary", "恐怖/惊悚", "Scary", "Terrifying, Nightmarish, Unsettling, Eldritch Horror"),
    simpleOpt("md_cute", "可爱/萌系", "Cute", "Cute, Adorable, Chibi proportions, Big round eyes, Fluffy"),
    simpleOpt("md_sad", "悲伤/垂死", "Sad", "Wounded, Dying, Sad expression, Weak, Suffering"),
    simpleOpt("md_sleep", "休眠/沉睡", "Sleeping", "Dormant, Sleeping, Hibernating, Peaceful"),
    simpleOpt("md_alien", "未知/冷漠", "Alien", "Alien, Unknowable, Insect-like intelligence, Cold"),
  ]
};

const grpBioAction: OptionGroup = {
  groupNameCN: "动态行为", groupNameEN: "Action",
  options: [
    simpleOpt("act_roar", "咆哮/嘶吼", "Roaring", "Roaring towards camera, Mouth wide open, Baring teeth"),
    simpleOpt("act_hunt", "潜行/狩猎", "Hunting", "Stalking prey, Low to ground, Ready to pounce"),
    simpleOpt("act_attack", "扑咬/攻击", "Attacking", "Mid-air pounce, Biting, Attacking, Dynamic blur"),
    simpleOpt("act_eat", "进食/吞噬", "Eating", "Eating prey, Chewing, Blood on mouth"),
    simpleOpt("act_fly", "飞行/俯冲", "Flying", "Diving through air, Gliding, Wings spread"),
    simpleOpt("act_swim", "游动", "Swimming", "Swimming gracefully, Propelling through water"),
    simpleOpt("act_emerge", "破土/浮现", "Emerging", "Emerging from the ground/water, Bursting out"),
    simpleOpt("act_hatch", "孵化", "Hatching", "Hatching from an egg, Gooey, Newborn"),
    simpleOpt("act_perch", "栖息/蹲伏", "Perching", "Perched on a high point, Gargoyle pose, Observing"),
    simpleOpt("act_howl", "长啸", "Howling", "Howling at the moon, Head tilted back"),
  ]
};

export const creatureOptions = {
  genesis: [
    {
       id: 'class', titleCN: '生物纲目', titleEN: 'Class',
       options: grpBioClass.options
    },
    {
       id: 'stance', titleCN: '姿态/体型', titleEN: 'Stance',
       options: grpBioStance.options
    },
    {
       id: 'scale', titleCN: '体型量级', titleEN: 'Scale',
       options: grpBioScale.options
    },
    {
       id: 'texture', titleCN: '表皮材质', titleEN: 'Texture',
       options: grpBioTexture.options,
       multi: true, max: 3
    },
    {
       id: 'element', titleCN: '元素属性', titleEN: 'Element',
       options: grpBioElement.options,
       multi: true, max: 6
    }
  ],
  morphology: [
    {
       id: 'headFeatures', titleCN: '头部特征', titleEN: 'Head Features',
       options: grpBioHead.options,
       multi: true, max: 6
    },
    {
       id: 'bodyParts', titleCN: '身体部件', titleEN: 'Body Parts',
       options: grpBioBody.options,
       multi: true, max: 6
    },
    {
       id: 'mood', titleCN: '情绪/状态', titleEN: 'Mood',
       options: grpBioMood.options,
       multi: true, max: 2
    },
    {
       id: 'action', titleCN: '动作', titleEN: 'Action',
       options: grpBioAction.options,
       multi: true, max: 2
    }
  ]
};

export const initialCreature: CreatureEngineState = {
  class: "", stance: "", scale: "", texture: "", element: "",
  headFeatures: "", bodyParts: "", mood: "", action: ""
};
