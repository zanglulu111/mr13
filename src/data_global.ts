
import { OptionGroup, GlobalFieldState } from './types';
import { opt } from './data_helpers';

// 1. Medium
const grpMedPhoto: OptionGroup = {
  groupNameCN: "摄影与写实", groupNameEN: "Photography",
  options: [
    opt("med_cine", "电影级实拍", "Cinematic Shot", "Cinematic Shot, Movie Still, Live Action, Color Graded, ARRI Alexa, 35mm lens"),
    opt("med_film", "胶片摄影", "Analog Film", "Analog Film Photography, Film Grain, Vintage Texture, Kodak Portra 400, Fujifilm"),
    opt("med_studio", "影棚/广告", "Studio Photography", "Studio Photography, Commercial Look, Softbox Lighting, Clean Background, High Key, Sharp Focus"),
    opt("med_docu", "新闻纪实", "Documentary Photo", "Documentary Photography, Raw Style, Journalism, Candid, Leica M6, Natural Light"),
    opt("med_polaroid", "拍立得", "Polaroid", "Polaroid Photo, Instant Film, Flash Photography, Vignette, Soft focus, Imperfect"),
    opt("med_wetplate", "古法湿版", "Wet Plate", "Wet Plate Collodion, Tintype, 19th Century Photo, Scratched Texture, Black and White, Long Exposure"),
    opt("med_cctv", "监控/低清", "CCTV / Low Res", "CCTV Footage, Security Camera, Low Resolution, Glitchy, Night Vision, Grainy"),
    opt("med_drone", "航拍", "Drone View", "Drone Photography, Aerial View, Top-down Angle, High Altitude, DJI"),
  ]
};
const grpMed3D: OptionGroup = {
  groupNameCN: "三维与数字", groupNameEN: "3D & CGI",
  options: [
    opt("med_ue5", "虚幻引擎5", "Unreal Engine 5", "Unreal Engine 5 Render, 3D CGI, Ray Tracing, Lumen Global Illumination, 8k resolution, Hyper-realistic"),
    opt("med_octane", "Octane渲染", "Octane Render", "Octane Render, 3D Art, Path Tracing, Glass and Chrome Materials, Cinema4D, Redshift"),
    opt("med_clay", "黏土定格", "Claymation", "Claymation, Stop Motion Animation, Plasticine Texture, Fingerprints, Aardman style, Tilt-shift"),
    opt("med_iso", "等轴/微缩", "Isometric 3D", "Isometric 3D, Orthographic View, Miniature Diorama, Tilt-shift, Blender 3D, Clean background"),
    opt("med_lowpoly", "低多边形", "Low Poly", "Low Poly 3D, Geometric Facets, Minimalist Game Art, Flat Shading, PS1 graphics, Retro gaming"),
    opt("med_voxel", "体素/像素3D", "Voxel Art", "Voxel Art, Minecraft Style, Blocky, 3D Pixel Art, MagicaVoxel, Lego style"),
    opt("med_sculpt", "数字雕刻", "Digital Sculpt", "ZBrush Sculpt, Digital Clay, Grey Model, High Poly Detail, Matcap grey, Work in progress"),
  ]
};
const grpMed2D: OptionGroup = {
  groupNameCN: "插画与动漫", groupNameEN: "2D Illustration & Anime",
  options: [
    opt("med_anime_90", "90s赛璐璐", "90s Anime", "90s Anime Style, Cel Shaded, Retro Anime, Hand Drawn, VHS glitch, Cowboy Bebop style"),
    opt("med_anime_mod", "现代二次元", "Modern Anime", "Modern Anime Style, Clean Lines, Vibrant Colors, Kyoto Animation style, High resolution, Detailed eyes"),
    opt("med_vector", "矢量插画", "Vector Art", "Vector Art, Adobe Illustrator, Flat Design, Solid Colors, No outlines, Minimalist"),
    opt("med_concept", "概念设计稿", "Concept Art", "Concept Art, Digital Painting, Speedpaint, Rough Brushstrokes, ArtStation Trending, Fantasy"),
    opt("med_comic", "美漫风格", "Comic Book", "Comic Book Art, Bold Outlines, Halftone Dots, Ink Lines, Graphic Novel, Marvel style"),
    opt("med_manga", "黑白日漫", "Manga B&W", "Manga Style, Black and White, Screen Tones, Ink Pen, Junji Ito style, Berserk style"),
    opt("med_pixel", "2D像素画", "Pixel Art", "Pixel Art, 16-bit Graphics, Retro Game Sprite, SNES style, Dithering"),
  ]
};
const grpMedTrad: OptionGroup = {
  groupNameCN: "传统手绘", groupNameEN: "Traditional Art",
  options: [
    opt("med_oil", "古典油画", "Oil Painting", "Oil Painting, Thick Impasto, Canvas Texture, Visible Brushstrokes, Classical, Masterpiece"),
    opt("med_water", "水彩画", "Watercolor", "Watercolor Painting, Wet-on-wet, Paper Texture, Soft Bleed, Pastel colors, Artistic"),
    opt("med_ink", "水墨/素描", "Ink / Sketch", "Ink Wash Painting, Sumi-e, Charcoal Sketch, Graphite Pencil, Black and white, Rough"),
    opt("med_print", "木刻版画", "Woodblock Print", "Woodblock Print, Linocut, Ukiyo-e Style, Stamp Texture, Bold lines, Limited palette"),
    opt("med_crayon", "蜡笔/儿童画", "Crayon Drawing", "Crayon Drawing, Child's Drawing, Scribbles, Rough Texture, Naive art, Colorful"),
    opt("med_blueprint", "工程蓝图", "Blueprint", "Blueprint Schematic, Technical Drawing, White Lines on Blue, Diagram, Architectural, Precise"),
  ]
};
const mediumOptions: OptionGroup[] = [grpMedPhoto, grpMed3D, grpMed2D, grpMedTrad];

// 2. Visual Soul
const soulCult: OptionGroup = {
  groupNameCN: "邪典与新浪潮", groupNameEN: "Cult & New Wave",
  options: [
    opt("soul_jodorowsky", "佐杜洛夫斯基", "Jodorowsky", "Alejandro Jodorowsky, Holy Mountain aesthetic, Surreal rituals, Tarot symbolism, Vibrant colors"),
    opt("soul_terayama", "寺山修司", "Shuji Terayama", "Shuji Terayama, Pastoral Noir, Painted faces, White makeup, Surreal Japanese theater, Avant-garde"),
    opt("soul_miike", "三池崇史", "Takashi Miike", "Takashi Miike, Yakuza aesthetic, Hyper-violence, Absurdist humor, Neon blood, Gritty textured"),
    opt("soul_tarantino", "昆汀", "Tarantino", "Quentin Tarantino, Nonlinear narrative vibe, Feet focus, Trunk shot, Retro 70s aesthetic, Yellow subtitles"),
    opt("soul_russell", "肯·罗素", "Ken Russell", "Ken Russell, Altered States, Hallucinogenic visual effects, Biological horror transformation"),
    opt("soul_noe", "加斯帕·诺", "Gaspar Noé", "Gaspar Noé, Enter the Void, Neon strobe lights, Overhead spinning camera, Disorienting colors"),
    opt("soul_cronenberg", "柯南伯格", "Cronenberg", "David Cronenberg, Body Horror, Flesh technology, Videodrome aesthetic, Visceral transformation"),
    opt("soul_waters", "约翰·沃特斯", "John Waters", "John Waters, Camp aesthetic, Trash culture, Exaggerated makeup, Kitsch"),
    opt("soul_angelopoulos", "安哲罗普洛斯", "Angelopoulos", "Theo Angelopoulos, Long takes, Misty landscapes, Melancholic blue hour, Silhouettes"),
    opt("soul_von_trier", "拉斯·冯·提尔", "Lars von Trier", "Lars von Trier, Handheld camera, Dogme 95, Raw realism, Bleak tones"),
    opt("soul_newwave", "法国新浪潮", "French New Wave", "French New Wave, Godard style, Jump cuts, Black and white, Handheld, Parisian street"),
    opt("soul_giallo", "铅黄恐怖", "Giallo", "Giallo Horror, Dario Argento, Vivid red blood, Stylized lighting, Black gloves, Mystery"),
    opt("soul_pinku", "粉红暴力", "Pinku Eiga", "Japanese Pinku Eiga, Soft focus, Retro 70s Japan, Exploitation aesthetic"),
    opt("soul_midnight", "午夜电影", "Midnight Movie", "Midnight Movie aesthetic, Grindhouse, Film grain, B-Movie charm, Low budget creative"),
    opt("soul_psychedelic", "迷幻摇滚", "Psychedelic", "Psychedelic Rock Poster style, Liquid light show, Swirling colors, 60s Acid trip"),
  ]
};
const soulDesign: OptionGroup = {
  groupNameCN: "构图与设计", groupNameEN: "Composition & Design",
  options: [
    opt("soul_wes", "韦斯·安德森", "Wes Anderson", "Wes Anderson Style, Symmetrical Composition, Pastel Palette, Flat Lighting, Whimsical"),
    opt("soul_kubrick", "库布里克", "Stanley Kubrick", "Stanley Kubrick, One-point Perspective, Clinical Coldness, The Shining Carpet Pattern, Unsettling"),
    opt("soul_wong", "王家卫", "Wong Kar-wai", "Wong Kar-wai, Step Printing, Neon Green and Red, Cinematic Blur, Intimate, Melancholic"),
    opt("soul_lynch", "大卫·林奇", "David Lynch", "David Lynch, Red Room, Dreamlike, Uncanny Valley, Flashbulb lighting"),
    opt("soul_hopper", "爱德华·霍普", "Edward Hopper", "Edward Hopper, Urban Solitude, Geometric Shadows, Window Light, Melancholic"),
    opt("soul_mondrian", "蒙德里安", "Piet Mondrian", "Piet Mondrian Style, De Stijl, Primary Colors (Red Blue Yellow), Black Grid Lines, Flat"),
    opt("soul_bauhaus", "包豪斯", "Bauhaus", "Bauhaus Style, Form Follows Function, Geometric Shapes, Minimalist, Concrete and Glass"),
    opt("soul_memphis", "孟菲斯设计", "Memphis Design", "Memphis Design, 80s Postmodernism, Squiggly Lines, Clashing Colors, Geometric Patterns"),
    opt("soul_vapor_aest", "蒸汽美学", "Vaporwave Aesthetic", "Vaporwave Aesthetic, Roman Busts, Grid Background, Pink and Teal, 90s Web"),
    opt("soul_scandi", "北欧极简", "Scandinavian Design", "Scandinavian Design, Hygge, Minimalist Wood, White Interiors, Natural Light, Cozy"),
    opt("soul_brutalist", "野兽派", "Brutalist", "Brutalist Architecture, Raw Concrete, Massive Scale, Blocky Shapes, Monochromatic Grey"),
    opt("soul_isometric", "等轴视角", "Isometric View", "Isometric View, Orthographic Projection, 3D Diorama, Clean Background, Miniature"),
  ]
};
const soulDark: OptionGroup = {
  groupNameCN: "黑暗与恐怖", groupNameEN: "Dark, Horror & Noir",
  options: [
    opt("soul_fincher", "大卫·芬奇", "David Fincher", "David Fincher, Low-key Lighting, Green-Yellow Grading, Clinical, High Contrast"),
    opt("soul_giger", "H.R. 吉格尔", "H.R. Giger", "H.R. Giger, Biomechanical, Xenomorph Style, Ribs and Bones, Monochromatic Grey"),
    opt("soul_beksinski", "贝克辛斯基", "Zdzisław Beksiński", "Zdzisław Beksiński, Nightmare Surrealism, Skeletal Structures, Rusty Orange fog"),
    opt("soul_burton", "蒂姆·波顿", "Tim Burton", "Tim Burton, Gothic Whimsy, Pale Skin, Dark Stripes, Twisted Trees, Spooky"),
    opt("soul_lovecraft", "洛夫克拉夫特", "Lovecraftian", "Lovecraftian Horror, Cthulhu Mythos, Tentacles, Cosmic Dread, Non-Euclidean"),
    opt("soul_junji", "伊藤润二", "Junji Ito", "Junji Ito, Body Horror, Spirals, Black and White Manga, Unsettling Eyes"),
    opt("soul_noir", "黑色电影", "Film Noir", "Film Noir, High Contrast B&W, Chiaroscuro Lighting, Venetian Blinds Shadows, Black and White, Detective"),
    opt("soul_hitchcock", "希区柯克", "Alfred Hitchcock", "Alfred Hitchcock, Suspense, Vertigo Effect, Sharp Shadows, 50s Technicolor"),
    opt("soul_del_toro", "德尔·托罗", "Guillermo del Toro", "Guillermo del Toro, Dark Fairy Tale, Clockwork Mechanisms, Amber Lighting, Monsters"),
    opt("soul_silenthill", "寂静岭", "Silent Hill", "Silent Hill Aesthetic, Heavy Fog, Rusty Metal, Decay, Ash Falling, Psychological Horror"),
    opt("soul_souls", "魂系(宫崎英高)", "Dark Souls", "Dark Souls Style, FromSoftware, Decaying Kingdom, Medieval Ruin, Fog Gates, Despair"),
    opt("soul_bloodborne", "血源诅咒", "Bloodborne", "Bloodborne Style, Victorian Gothic Horror, Lovecraftian Beasts, Blood Moon, Cobblestones"),
    opt("soul_sin_city", "罪恶之城", "Sin City", "Sin City Style, Frank Miller, High Contrast B&W with Splash of Red, Comic Noir"),
    opt("soul_midsommar", "仲夏夜(阿里)", "Midsommar", "Ari Aster, Midsommar, Bright Horror, Daylight Nightmare, Flower Crowns, Unsettling"),
  ]
};
const soulNeon: OptionGroup = {
  groupNameCN: "霓虹与情绪", groupNameEN: "Neon, Color & Mood",
  options: [
    opt("soul_blade", "银翼杀手", "Blade Runner", "Blade Runner, Cyberpunk Noir, Rain and Neon, Holograms, Blue and Orange"),
    opt("soul_refn", "雷弗恩", "Nicolas Winding Refn", "Nicolas Winding Refn, Neon Demon, High Contrast Neon, Red and Blue, Glossy"),
    opt("soul_tron", "创:战纪", "Tron Legacy", "Tron Legacy Style, Glowing Grid, Black Background, Neon Lines, Digital World"),
    opt("soul_euphoria", "亢奋(美剧)", "Euphoria", "Euphoria HBO Style, Glitter, Purple and Blue Lighting, Bokeh, Gen Z Aesthetic"),
    opt("soul_moonlight", "月光男孩", "Moonlight", "Moonlight Movie, Rich Skin Tones, High Contrast Blue and Purple, Intimate"),
    opt("soul_miami", "迈阿密风云", "Miami Vice", "Miami Vice 80s, Pink and Teal, Palm Trees, Sunset, Synthwave, Grainy"),
    opt("soul_cyber2077", "赛博朋克2077", "Cyberpunk 2077", "Cyberpunk 2077, Night City, Trash and Tech, Kitsch and Neokitsch, Glitch"),
    opt("soul_matrix", "黑客帝国", "The Matrix", "The Matrix, Green Tint, Code Rain, Late 90s Cyber, Black Leather, Bullet Time"),
    opt("soul_shinkai", "新海诚", "Makoto Shinkai", "Makoto Shinkai, Hyper-realistic Sky, Lens Flare, Vibrant Blue, Emotional"),
    opt("soul_ghibli", "宫崎骏", "Studio Ghibli", "Studio Ghibli, Hayao Miyazaki, Lush Nature, Fluffy Clouds, Watercolor Backgrounds"),
    opt("soul_paprika", "红辣椒(今敏)", "Paprika", "Paprika Anime, Satoshi Kon, Dream Parade, Riot of Colors, Confetti, Surreal"),
    opt("soul_akira", "阿基拉", "Akira", "Akira Anime, Katsuhiro Otomo, Cyberpunk Tokyo, Red Bike, Light Trails, Detailed Debris"),
    opt("soul_ghost", "攻壳机动队", "Ghost in the Shell", "Ghost in the Shell (1995), Mamoru Oshii, City Reflections, Philosophic Mood, Greenish Haze"),
    opt("soul_spider", "蜘蛛侠平行宇宙", "Spider-Verse", "Into the Spider-Verse, Halftone Dots, Chromatic Aberration, Glitch, Graffiti"),
    opt("soul_arcane", "双城之战", "Arcane", "Arcane League of Legends, Fortiche Style, Painted Textures, Steampunk/Zaun, Dynamic Lighting"),
  ]
};
const soulEpic: OptionGroup = {
  groupNameCN: "史诗与科幻", groupNameEN: "Epic, Scale & Scifi",
  options: [
    opt("soul_denis", "维伦纽瓦", "Denis Villeneuve", "Denis Villeneuve, Dune Style, Brutalism, Monochromatic Sand, Megalophobia"),
    opt("soul_nolan", "诺兰", "Christopher Nolan", "Christopher Nolan, IMAX Scale, Practical Effects, Cold Tones, Sharp Focus"),
    opt("soul_lucas", "星球大战", "Star Wars", "Star Wars Aesthetic, Ralph McQuarrie, Space Opera, Used Future, Lightsabers"),
    opt("soul_trek", "星际迷航", "Star Trek", "Star Trek Aesthetic, Clean Futurism, Starship Bridge, Lens Flares (JJ Abrams), Utopia"),
    opt("soul_cameron", "阿凡达", "Avatar", "James Cameron, Avatar Pandora, Bioluminescent Jungle, Floating Mountains, Blue Aliens"),
    opt("soul_jackson", "指环王", "Lord of the Rings", "Peter Jackson, Lord of the Rings, New Zealand Landscape, High Fantasy, Epic Battle"),
    opt("soul_stalenhag", "斯塔伦海格", "Simon Stålenhag", "Simon Stålenhag, Tales from the Loop, Swedish Rural 80s + Robots, Foggy"),
    opt("soul_mead", "席德·米德", "Syd Mead", "Syd Mead, Futurist Concept Art, Sleek Vehicles, Neo-Futurism, Clean Lines"),
    opt("soul_moebius", "墨必斯", "Moebius", "Moebius (Jean Giraud), Ligne Claire, Sci-Fi Desert, Pastel Colors, Surreal Creatures"),
    opt("soul_frazetta", "弗雷泽塔", "Frank Frazetta", "Frank Frazetta, Conan Style, Muscular Heroes, Dark Fantasy, Oil Painting, Dynamic"),
    opt("soul_dore", "多雷(版画)", "Gustave Doré", "Gustave Doré, Wood Engraving, Dante's Inferno, Biblical Epic, Dramatic Light beams"),
    opt("soul_martin", "约翰·马丁", "John Martin", "John Martin, Apocalyptic Landscapes, Tiny Figures, Massive Destruction, Romanticism"),
    opt("soul_friedrich", "弗里德里希", "Caspar David Friedrich", "Caspar David Friedrich, Wanderer above the Sea of Fog, Romanticism, Sublime Nature"),
    opt("soul_madmax", "疯狂的麦克斯", "Mad Max", "Mad Max Fury Road, George Miller, Wasteland, High Saturation Orange and Teal, Explosions"),
  ]
};
const soulSurreal: OptionGroup = {
  groupNameCN: "超现实与抽象", groupNameEN: "Surreal & Abstract",
  options: [
    opt("soul_dali", "达利", "Salvador Dali", "Salvador Dali, Melting Clocks, Surreal Desert, Dream Logic, Long Shadows"),
    opt("soul_magritte", "马格利特", "René Magritte", "René Magritte, Surrealism, Bowler Hat, Green Apple, Floating Rocks, Blue Sky with Clouds"),
    opt("soul_escher", "埃舍尔", "M.C. Escher", "M.C. Escher, Impossible Geometry, Infinite Staircase, Tessellation, Black and White Sketch"),
    opt("soul_kusama", "草间弥生", "Yayoi Kusama", "Yayoi Kusama, Polka Dots, Infinity Mirrors, Vibrant Pumpkins, Psychedelic"),
    opt("soul_murakami", "村上隆", "Takashi Murakami", "Takashi Murakami, Superflat, Smiling Flowers, Anime Pop, Psychedelic Colors"),
    opt("soul_bosch", "博斯", "Hieronymus Bosch", "Hieronymus Bosch, Garden of Earthly Delights, Chaos, Strange Hybrid Creatures, Medieval Surrealism"),
    opt("soul_alice", "爱丽丝幻境", "Alice in Wonderland", "Alice in Wonderland Aesthetic, Mushroom Forest, Checkerboard, Mad Hatter, Fantasy"),
    opt("soul_inception", "盗梦空间", "Inception", "Inception Style, Folding Cities, Gravity Defying, Architectural Paradox"),
    opt("soul_drstrange", "奇异博士", "Doctor Strange", "Doctor Strange Style, Fractal Geometry, Mirror Dimension, Kaleidoscope effect"),
    opt("soul_tool", "Tool乐队MV", "Tool Music Video", "Tool Band Video Style, Stop Motion, Dark Surrealism, Eyes, Flesh textures"),
  ]
};
const soulPaint: OptionGroup = {
  groupNameCN: "画家与插画", groupNameEN: "Painters & Illustration",
  options: [
    opt("soul_vangogh", "梵高", "Vincent van Gogh", "Vincent van Gogh, Starry Night Style, Swirling Brushstrokes, Thick Impasto, Vibrant Yellow and Blue"),
    opt("soul_monet", "莫奈", "Claude Monet", "Claude Monet, Impressionism, Water Lilies, Soft Dappled Light, Garden Atmosphere"),
    opt("soul_rembrandt", "伦勃朗", "Rembrandt", "Rembrandt, Baroque, Chiaroscuro (Light and Shadow), Dark Background, Emotional Portrait"),
    opt("soul_klimt", "克里姆特", "Gustav Klimt", "Gustav Klimt, The Kiss Style, Gold Leaf, Decorative Patterns, Art Nouveau, Erotic"),
    opt("soul_picasso", "毕加索", "Pablo Picasso", "Pablo Picasso, Cubism, Fragmented Faces, Abstract Geometric, Blue Period"),
    opt("soul_basquiat", "巴斯奎特", "Basquiat", "Jean-Michel Basquiat, Neo-expressionism, Graffiti, Crown Motif, Chaotic Scribbles"),
    opt("soul_banksy", "班克西", "Banksy", "Banksy Style, Stencil Art, Graffiti, Black and White with Red, Satirical"),
    opt("soul_rockwell", "洛克威尔", "Norman Rockwell", "Norman Rockwell, Americana, Idealized Realism, Storybook Illustration, Warm Expressions"),
    opt("soul_mucha", "穆夏", "Alphonse Mucha", "Alphonse Mucha, Art Nouveau Poster, Flowing Hair, Halo, Pastel Colors"),
    opt("soul_leyendecker", "莱恩德克", "J.C. Leyendecker", "J.C. Leyendecker, Sharp Brushstrokes, Elegant Men, Golden Age Illustration"),
    opt("soul_ghirlandaio", "文艺复兴肖像", "Renaissance Portrait", "Domenico Ghirlandaio, Quattrocento Style, Profile Portrait, Tempera Paint"),
    opt("soul_waterhouse", "前拉斐尔派", "Pre-Raphaelite", "John William Waterhouse, Pre-Raphaelite, Mythological, Romantic, Detailed Nature"),
  ]
};

// soulLens removed - moved to data_post.ts Camera FX

const visualSoulOptions: OptionGroup[] = [soulCult, soulDesign, soulDark, soulNeon, soulEpic, soulSurreal, soulPaint];

// 3. Visual Base
const grpMythic: OptionGroup = {
  groupNameCN: "远古与神话", groupNameEN: "Prehistoric & Mythic",
  options: [
    opt("base_iceage", "冰河时代", "Ice Age", "Ice Age, Pleistocene, Woolly Mammoths, Glaciers, Cave painting style"),
    opt("myth_cn_classic", "中国神话(正统)", "Chinese Mythology (Classic)", "Chinese Mythology, Taoist Pantheon, Dunhuang Mural Style, Divine Golden Clouds, Majestic, Sacred"),
    opt("myth_cn_wuxia", "中国武侠(江湖)", "Wuxia / Martial Arts", "Wuxia Aesthetic, Jianghu, Martial Arts Motion, Bamboo Forest, Ink Wash Atmosphere, Heroic"),
    opt("myth_cn_xianxia", "中国仙侠(修真)", "Xianxia / Cultivation", "Xianxia Fantasy, Cultivation World, Ethereal Floating Mountains, Flying Swords, Pastel Aura, Immortal"),
    opt("myth_in", "印度神话", "Indian Mythology", "Indian Mythology, Vedic Fantasy, Vibrant Saturation, Golden Light, Mandala Patterns"),
    opt("myth_gr", "希腊神话", "Greek Mythology", "Greek Mythology, Mount Olympus, White Marble, Ambrosia Light, Divine Blue Sky"),
    opt("myth_rm", "罗马神话", "Roman Mythology", "Roman Mythology, Imperial Grandeur, Red and Gold, Mars Aesthetic, Epic Scale"),
    opt("myth_nr", "北欧神话", "Norse Mythology", "Norse Mythology, Yggdrasil, Magical Runes, Cold Mist, Bifrost Colors"),
    opt("base_jurassic", "侏罗纪/蛮荒", "Jurassic / Primeval", "Prehistoric, Primeval Jungle, Volumetric Mist, Savage Nature, Giant Ferns"),
    opt("base_atlantis", "亚特兰蒂斯", "Atlantis", "Atlantis Ruins, Underwater, Bioluminescent Blue, Ancient Tech, Wet Marble"),
  ]
};
const grpAncient: OptionGroup = {
  groupNameCN: "古典文明", groupNameEN: "Ancient Civilizations",
  options: [
    opt("civ_pre_qin", "华夏(先秦)", "Pre-Qin / Bronze Age", "Pre-Qin Dynasty, Bronze Age China, Sanxingdui aesthetic, Oracle bone script, Ritual bronze ware"),
    opt("civ_egypt", "古埃及", "Ancient Egypt", "Ancient Egypt, Pharaonic, Desert Sunlight, Sandstone, Lapis Lazuli"),
    opt("civ_greece", "古希腊", "Ancient Greece", "Ancient Greece, Acropolis, Mediterranean Blue, Olive Groves, White Stone"),
    opt("civ_rome", "古罗马", "Ancient Rome", "Ancient Rome, Roman Empire, Colosseum, Military Order, Marble and Silk, Grandeur"),
    opt("civ_han_tang", "华夏(汉唐)", "Ancient China (Han/Tang)", "Ancient China, Han Dynasty, Grand Palace, Vermilion Walls, Epic History"),
    opt("civ_qing", "华夏(清朝)", "Ancient China (Qing)", "Qing Dynasty, Manchu Architecture, Intricate Embroidery, Indigo Patterns, Forbidden City"),
    opt("civ_japan", "日本(江户)", "Feudal Japan (Edo)", "Feudal Japan, Edo Period, Wabi-sabi Wood, Paper Lanterns, Cherry Blossoms"),
    opt("civ_aztec", "玛雅/阿兹特克", "Maya / Aztec", "Aztec, Maya, Deep Jungle, Step Pyramids, Stone Carvings, Mystical Green"),
  ]
};
const grpMedieval: OptionGroup = {
  groupNameCN: "中世纪与前现代", groupNameEN: "Medieval & Pre-Modern",
  options: [
    opt("base_medieval", "欧洲中世纪", "Medieval Europe", "Medieval Europe, Stone Castle, Torchlight, Cold Grey, Gritty Realism"),
    opt("base_gothic", "哥特宗教", "Gothic / Religious", "Gothic Architecture, Stained Glass Light, Spire, Dark Atmosphere, Fog"),
    opt("base_renaissance", "文艺复兴", "Renaissance", "Renaissance Art, Florence, Oil Painting Texture, Soft Window Light, Velvet"),
    opt("base_arabian", "阿拉伯之夜", "Arabian Nights", "Islamic Golden Age, Geometric Patterns, Warm Desert Dusk, Oasis, Grand Bazaar"),
    opt("base_pirate", "大航海时代", "Age of Discovery", "Pirate Era, Nautical, Worn Wood, Ocean Mist, Salt Water, Adventure"),
  ]
};
const grpRetro: OptionGroup = {
  groupNameCN: "复古怀旧", groupNameEN: "Retro & Nostalgia",
  options: [
    opt("retro_victorian", "维多利亚", "Victorian Era", "Victorian London, Industrial Smog, Gaslight, Brick Texture, Sepia Tone"),
    opt("retro_west", "美国西部", "Wild West", "Wild West, Golden Hour, Dusty Desert, Warm Orange, Frontier"),
    opt("retro_noir", "黑色电影", "Film Noir", "Film Noir, High Contrast B&W, Chiaroscuro Shadows, Rain-slicked"),
    opt("retro_hippie", "嬉皮士", "Hippie 60s", "1960s Hippie, Psychedelic Colors, Tie-dye, Film Grain, Flower Power"),
    opt("retro_hk", "港风复古", "Hong Kong 90s", "90s Hong Kong, Wong Kar-wai Vibe, Neon Green and Red, Nostalgic Haze"),
    opt("retro_jp_80s", "日系泡沫", "Japan 80s City Pop", "80s Japan City Pop, Bright City Lights, Anime Realism, Glossy, Summer"),
    opt("retro_vapor", "蒸汽波", "Vaporwave", "Vaporwave, 90s CGI, Pastel Gradients, Lo-fi, Surreal Dream"),
    opt("retro_synth", "合成汽波", "Synthwave", "Synthwave, Retrowave, Neon Grid, Magenta and Cyan, High Contrast"),
    opt("retro_y2k", "千禧年", "Y2K Aesthetic", "Y2K Aesthetic, Metallic Sheen, Matrix Green, Wide Angle Fisheye"),
  ]
};
const grpModern: OptionGroup = {
  groupNameCN: "现代地缘", groupNameEN: "Modern Geo-Context",
  options: [
    opt("mod_cn", "现代中国", "Modern China", "Modern China, Massive Infrastructure, Humid Atmosphere, Mix of Old and New"),
    opt("mod_jp", "现代日本", "Modern Japan", "Modern Japan, Clean Sharp Focus, Cool Blue Tones, Transparent Air, Orderly"),
    opt("mod_usa", "现代美国", "Modern USA", "Modern USA, Urban Realism, Concrete and Glass, Cinematic Lighting, Diverse"),
    opt("mod_eu", "现代欧洲", "Modern Europe", "Modern Europe, Historic Architecture mixed with Modern, Overcast Light, Elegant"),
    opt("mod_south", "全球南方", "Global South", "Global South, Vibrant Colors, High Density, Warm Sunlight, Raw Texture"),
  ]
};

const grpSubculture: OptionGroup = {
  groupNameCN: "亚文化与时尚", groupNameEN: "Subcultures & Fashion",
  options: [
    opt("sub_hiphop", "嘻哈", "Hip-Hop 90s", "90s Hip Hop aesthetic, Boombox, Graffiti background, Oversized clothes"),
    opt("sub_hype", "潮流Hypebeast", "Hypebeast", "Modern Hypebeast, Street fashion, Limited edition sneakers, Brand logos, Clean urban"),
    opt("sub_gangsta", "匪帮说唱", "Gangsta Rap", "Gangsta Rap aesthetic, West Coast, Lowriders, Bandanas, Gold chains"),
    opt("sub_mumble", "墨菲斯说唱", "Mumble Rap", "SoundCloud Rapper aesthetic, Face tattoos, Dyed dreads, Colorful grills, Druggy vibe"),
    opt("sub_dopamine", "多巴胺穿搭", "Dopamine", "Dopamine Dressing, Rainbow bright colors, Clashing patterns, Joyful maximalism"),
    opt("sub_goth", "哥特/暗黑", "Goth", "Goth Subculture, Dark Romanticism, Black Lace, Pale Skin, Melancholic"),
    opt("sub_punk", "朋克", "Punk", "70s Punk, Anarchist, Safety Pins, Gritty Dirty, Graffiti Background"),
    opt("sub_grunge", "垃圾摇滚", "Grunge", "90s Grunge, Flannel Textures, Messy, Dark Moody Lighting"),
    opt("sub_techwear", "机能", "Techwear", "Techwear Fashion, Urban Ninja, Matte Black, Straps and Buckles"),
    opt("sub_highfashion", "高定时尚", "High Fashion", "High Fashion Editorial, Avant-garde, Studio Lighting, Exquisite Fabric"),
  ]
};

const grpFuture: OptionGroup = {
  groupNameCN: "未来与异界", groupNameEN: "Future & Otherworldly",
  options: [
    opt("fut_mars", "火星殖民地", "Mars Colony", "Mars Colony, Red dust, Domed cities, Terraforming"),
    opt("fut_moon", "月球基地", "Lunar Base", "Lunar Base, Grey crater landscape, Black sky, Earthrise"),
    opt("fut_station", "空间站", "Space Station", "Space Station Interior, Zero gravity, White padded walls, Porthole view"),
    opt("fut_near", "近未来", "Near Future", "Near Future, Augmented Reality glasses, Subtle tech integration, Realistic 2030s"),
    opt("fut_post_human", "后人类纪元", "Post-Human", "Post-Human Era, AI civilization, Dyson Sphere, Matrioshka Brain, Abstract tech"),
    opt("fut_bio_ship", "生物飞船", "Bio-Ship", "Living Spaceship, Organic walls, Veins and pulses, Giger-esque interior"),
    opt("fut_dystopia", "反乌托邦", "Dystopia", "Near-Future Dystopia, Surveillance State, Cold concrete, Oppressive Grey"),
    opt("fut_solarpunk", "太阳朋克", "Solarpunk", "Solarpunk, Eco-Futurism, Bright Sunlight, White and Green, Clean"),
    opt("fut_waste", "废土末世", "Wasteland", "Post-Apocalyptic, Ruins, Overgrown, Rusty Texture, Dusty"),
    opt("fut_space", "太空歌剧", "Space Opera", "Space Opera, Galactic Scale, Starry Void, High Tech Metal, Cinematic"),
    opt("fut_void", "虚空/梦核", "Void / Liminal", "Liminal Space, Dreamcore, Abstract Void, Unsettling Silence, Flat Light"),
  ]
};

const visualBaseOptions: OptionGroup[] = [
  grpMythic, grpAncient, grpMedieval, grpRetro, grpModern, grpSubculture, grpFuture
];

// 4. Tech Overlay
const grpTechMech: OptionGroup = {
  groupNameCN: "模拟与机械", groupNameEN: "Analog & Mechanical",
  options: [
    opt("tech_steam", "蒸汽朋克", "Steampunk", "Steampunk, Brass Gears, Copper Pipes, Steam Powered, Victorian Engineering, Clockwork"),
    opt("tech_clock", "发条/钟表", "Clockpunk", "Clockpunk, Intricate Clockwork, Golden Gears, Wind-up Mechanisms, Precision Engineering"),
    opt("tech_diesel", "柴油朋克", "Dieselpunk", "Dieselpunk, Heavy Rusty Steel, Black Smoke, Internal Combustion, Riveted Armor"),
    opt("tech_atom", "原子朋克", "Atompunk", "Atompunk, 1950s Retro-Futurism, Vacuum Tubes, Chrome and Plastic, Nuclear Power"),
  ]
};
const grpTechDigi: OptionGroup = {
  groupNameCN: "数字与能量", groupNameEN: "Digital & Energy",
  options: [
    opt("tech_cyber", "赛博朋克", "Cyberpunk", "Cyberpunk, Advanced Circuitry, Neon Holograms, Chrome Prosthetics, Data Cables, LED Displays"),
    opt("tech_crystal", "晶体/光棱", "Crystal Tech", "Crystal Technology, Glowing Prisms, Refractive Light Energy, Floating Shards, Translucent Geometry"),
    opt("tech_glitch", "故障/数据", "Glitch Art", "Glitch Art, Datamoshing, Pixel Sorting, Broken Digital Screen, RGB Split, Visual Distortion"),
    opt("tech_nanotech", "纳米/流体", "Nanotech", "Nanotech, Liquid Metal, Morphing Shapes, Grey Goo, Seamless Tech, Swarm Intelligence"),
  ]
};
const grpTechBio: OptionGroup = {
  groupNameCN: "生物与有机", groupNameEN: "Biological & Organic",
  options: [
    opt("tech_bio", "生物朋克", "Biopunk", "Biopunk, Genetically Modified Flesh, Organic Technology, Pulsating Veins, Wet Texture"),
    opt("tech_insect", "虫群科技", "Insectoid Tech", "Insectoid Tech, Chitinous Armor, Amber Resin, Hexagonal Hive Structure, Organic Curves"),
    opt("tech_botanic", "植物共生", "Botanical Tech", "Botanical Technology, Solarpunk Tech, Living Wood Architecture, Bioluminescent Flora, Photosynthesis"),
    opt("tech_scavenge", "拾荒/拼凑", "Scavenger Tech", "Scavenger Tech, Makeshift Engineering, Duct Tape and Wire, Repurposed Junk, Rusty Scrap"),
  ]
};
const grpTechArcane: OptionGroup = {
  groupNameCN: "秘术与超自然", groupNameEN: "Arcane & Anomalous",
  options: [
    opt("tech_arcane", "高魔奥术", "Arcane Magic", "Arcane Magic, Glowing Runes, Floating Magic Circles, Mana Energy, Enchanted Gold"),
    opt("tech_alchemy", "炼金术", "Alchemy", "Alchemy, Transmutation Circles, Glass Flasks, Mercury and Gold, Occult Symbols"),
    opt("tech_eldritch", "克苏鲁/虚空", "Eldritch Tech", "Eldritch Tech, Alien Geometry, Non-Euclidean, Dark Purple Energy, Whispering Shadows"),
    opt("tech_steammag", "魔导蒸汽", "Magitech", "Magitech, Steam and Magic, Glowing Crystals in Brass, Fantasy Engineering"),
  ]
};
const techOverlayOptions: OptionGroup[] = [grpTechMech, grpTechDigi, grpTechBio, grpTechArcane];

// 5. Entropy
const grpEntOrder: OptionGroup = {
  groupNameCN: "低熵：秩序", groupNameEN: "Order & Perfection",
  options: [
    opt("ent_clinic", "临床无菌", "Clinical Sterile", "Clinical Sterile, White Lab Aesthetic, Dust--free, Stainless Steel, Cold Lighting"),
    opt("ent_divine", "神圣秩序", "Divine Purity", "Divine Purity, Angelic Atmosphere, Perfect Symmetry, Soft Golden Light, Untouched"),
    opt("ent_utopia", "乌托邦", "Utopian", "Utopian, Minimalist Architecture, Harmonious, Clean Lines, Bright Natural Light"),
    opt("ent_new", "崭新出厂", "Brand New", "Brand New, Pristine Condition, Factory Fresh, Glossy Surface, Unblemished"),
  ]
};
const grpEntBalance: OptionGroup = {
  groupNameCN: "平衡熵：生活", groupNameEN: "Life & Reality",
  options: [
    opt("ent_livedin", "生活气息", "Lived-in", "Lived-in, Warm Clutter, Personal Items, Authentic Texture, Cozy Atmosphere"),
    opt("ent_bustling", "繁华喧闹", "Bustling", "Bustling Atmosphere, Crowded, Visual Noise, Vibrant Colors, Street Dust"),
    opt("ent_worn", "陈旧怀旧", "Worn Texture", "Worn Texture, Faded Colors, Peeling Paint, Dusty Corners, Nostalgic Lighting"),
    opt("ent_nature", "自然风化", "Weathered", "Weathered by Nature, Sun-bleached, Mossy, Eroded Stone, Earthy Texture"),
  ]
};
const grpEntChaos: OptionGroup = {
  groupNameCN: "高熵：混乱", groupNameEN: "Chaos & Decay",
  options: [
    opt("ent_gritty", "脏乱/油污", "Gritty", "Gritty, Heavy Pollution, Grease and Grime, Wet Trash, Dark Shadows, Unsafe"),
    opt("ent_ruin", "废墟/遗弃", "Abandoned Ruins", "Abandoned Ruins, Decaying Structures, Overgrown Weeds, Broken Glass, Silent"),
    opt("ent_destruct", "毁灭/战损", "Destroyed", "Destroyed, War-torn, Bombardment Aftermath, Fire and Ash, Tragic"),
    opt("ent_rot", "腐烂/瘟疫", "Rotting", "Rotting, Decaying Organic Matter, Moldy, Sickly Green Atmosphere, Flies"),
  ]
};
const grpEntAbnormal: OptionGroup = {
  groupNameCN: "异常熵：扭曲", groupNameEN: "Abnormal & Distortion",
  options: [
    opt("ent_horror", "心理恐怖", "Psychological Horror", "Psychological Horror, Silent Hill Vibe, Heavy Fog, Rusty Blood, Unsettling Silence"),
    opt("ent_void", "虚无/阈限", "Liminal Space", "Liminal Space, Dreamcore, Uncanny Valley, Empty and Endless, Artificial Flat Light"),
    opt("ent_surreal", "超现实", "Surrealism", "Surrealism, Dream Logic, Floating Objects, Melting Textures, Distorted Perspective"),
  ]
};
const entropyOptions: OptionGroup[] = [grpEntOrder, grpEntBalance, grpEntChaos, grpEntAbnormal];

export const globalOptions = [
  { id: 'medium', titleCN: '渲染\n媒介', titleEN: 'Rendering Medium', options: mediumOptions, multi: true, max: 3 },
  { id: 'visualSoul', titleCN: '视觉\n灵魂', titleEN: 'Visual Soul', options: visualSoulOptions, multi: true, max: 3 },
  { id: 'visualBase', titleCN: '时空\n基底', titleEN: 'Visual Base', options: visualBaseOptions, multi: true, max: 3 },
  { id: 'techOverlay', titleCN: '科技\n动力', titleEN: 'Tech Overlay', options: techOverlayOptions },
  { id: 'entropy', titleCN: '环境\n熵值', titleEN: 'Entropy', options: entropyOptions },
];

export const initialGlobal: GlobalFieldState = {
  visualBase: "", techOverlay: "", entropy: "", visualSoul: "", medium: ""
};
