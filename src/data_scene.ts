
import { OptionGroup, SceneState } from './types';
import { simpleOpt, opt } from './data_helpers';

// 1. Environment (Massive Expansion)

// 1.1 Residential
const grpRes: OptionGroup = {
  groupNameCN: "居住与私密", groupNameEN: "Residential",
  options: [
    simpleOpt("res_bed_m", "主卧", "Master Bedroom", "Master Bedroom, King size bed, En-suite, Luxury, Morning light"),
    simpleOpt("res_bed_s", "单人/儿童房", "Small Bedroom", "Small Bedroom, Single bed, Posters on wall, Messy desk, Cozy"),
    simpleOpt("res_living", "客厅", "Living Room", "Living Room, Sofa, Coffee table, TV, Carpet, Domestic atmosphere"),
    simpleOpt("res_kitchen", "厨房", "Kitchen", "Kitchen, Cooking counter, Stove, Sink, Utensils, Steam"),
    simpleOpt("res_dining", "餐厅", "Dining Room", "Dining Room, Dining table, Chairs, Chandelier, Family dinner setting"),
    simpleOpt("res_bath", "浴室", "Bathroom", "Bathroom, Tiled walls, Mirror reflection, Bathtub, Shower curtain"),
    simpleOpt("res_study", "书房", "Home Office/Study", "Home Office, Bookshelves, Desk, Computer, Reading lamp, Quiet"),
    simpleOpt("res_attic", "阁楼", "Attic", "Attic, Sloped ceiling, Dusty, Old boxes, Wooden beams, Secretive"),
    simpleOpt("res_base", "地下室", "Basement", "Basement, Concrete walls, Dim light, Storage boxes, Boiler, Man cave"),
    simpleOpt("res_garage", "家庭车库", "Home Garage", "Home Garage, Car parked, Tools on wall, Oil stains, Workbench"),
    simpleOpt("res_garden", "后花园", "Backyard Garden", "Backyard Garden, Lawn, Flower beds, Fence, Patio furniture"),
    simpleOpt("res_balcony", "阳台", "Balcony", "Apartment Balcony, Railing, Potted plants, City view background"),
    simpleOpt("res_closet", "步入式衣帽间", "Walk-in Closet", "Walk-in Closet, Rows of clothes, Shoes, Mirrors, Luxury fashion"),
    simpleOpt("res_laundry", "洗衣房", "Laundry Room", "Laundry Room, Washing machine, Dryer, Laundry basket, Tiles"),
    simpleOpt("res_hall", "玄关/门厅", "Foyer/Hallway", "Entry Foyer, Coat rack, Shoe cabinet, Mirror, Front door"),
    simpleOpt("res_pantry", "储物间", "Pantry", "Pantry, Shelves filled with food jars, Canned goods, Tight space"),
    simpleOpt("res_mansion", "豪宅大厅", "Mansion Hall", "Grand Mansion Hall, Double staircase, Marble floor, Chandelier, Opulent"),
    simpleOpt("res_pent", "顶层公寓", "Penthouse", "Luxury Penthouse, Floor to ceiling windows, City skyline view, Modern furniture"),
    simpleOpt("res_loft", "Loft公寓", "Loft Apartment", "Industrial Loft, Brick walls, High ceiling, Open plan, Metal stairs"),
    simpleOpt("res_dorm", "宿舍", "Dorm Room", "Dorm Room, Bunk beds, Shared space, College lifestyle, Cluttered"),
    simpleOpt("res_shack", "棚屋", "Wooden Shack", "Wooden Shack interior, Gaps in wood, Dirt floor, Poverty, Basic"),
    simpleOpt("res_rv", "房车内景", "RV/Camper Van", "RV Interior, Compact living, Van life, View of nature through window"),
    simpleOpt("res_nursery", "育婴室", "Nursery", "Baby Nursery, Crib, Pastel colors, Mobiles hanging, Soft toys"),
    simpleOpt("res_zen", "冥想角", "Zen Corner", "Meditation Corner, Yoga mat, Incense, Plants, Sunlight, Minimalist"),
  ]
};

// 1.2 Urban
const grpUrban: OptionGroup = {
  groupNameCN: "城市与街头", groupNameEN: "Urban & Street",
  options: [
    simpleOpt("urb_street", "繁华街道", "City Street", "Busy City Street, Pavement, Skyscrapers, Traffic, Urban life"),
    simpleOpt("urb_alley", "阴暗后巷", "Back Alley", "Back Alley, Trash cans, Puddles, Fire escape, Brick walls, Gritty"),
    simpleOpt("urb_cross", "十字路口", "Intersection", "Busy Intersection, Crosswalk, Traffic lights, Cars waiting, Zebra crossing"),
    simpleOpt("urb_roof", "摩天楼顶", "Rooftop Edge", "Rooftop Edge, City skyline background, HVAC units, Danger, High altitude"),
    simpleOpt("urb_sub_p", "地铁站台", "Subway Platform", "Subway Platform, Tiled walls, Yellow safety line, Waiting passengers"),
    simpleOpt("urb_sub_c", "地铁车厢", "Subway Car", "Inside Subway Car, Handrails, Seats, Windows reflecting tunnels"),
    simpleOpt("urb_bus", "公交车站", "Bus Stop", "Bus Stop Shelter, Bench, Advertisement glass, Waiting people, Rain"),
    simpleOpt("urb_park", "停车场", "Parking Lot", "Parking Lot, Painted lines, Parked cars, Asphalt, Street lights"),
    simpleOpt("urb_garage", "立体车库", "Parking Garage", "Concrete Parking Garage, Ramps, Pillars, Echoing, Dim light"),
    simpleOpt("urb_bridge", "天桥/立交", "Overpass/Bridge", "Pedestrian Bridge, Highway below, Concrete railing, City view"),
    simpleOpt("urb_tunnel", "行车隧道", "Road Tunnel", "Road Tunnel, Curved concrete walls, Orange lights, Speed lines"),
    simpleOpt("urb_gas", "加油站", "Gas Station", "Gas Station, Fuel pumps, Canopy lights, Night, Convenience store"),
    simpleOpt("urb_phone", "电话亭", "Phone Booth", "Phone Booth, Rain on glass, Neon reflection, Solitude, Retro"),
    simpleOpt("urb_news", "报刊亭", "Newsstand", "Newsstand, Magazines, Newspapers, Snacks, Street corner"),
    simpleOpt("urb_stall", "路边摊", "Food Stall", "Street Food Stall, Steam, Cooking, Night market vibe, Stools"),
    simpleOpt("urb_plaza", "城市广场", "City Plaza", "Public Plaza, Fountain, Pigeons, Benches, Open space"),
    simpleOpt("urb_skate", "滑板场", "Skate Park", "Skate Park, Concrete ramps, Graffiti, Youth culture, Sunlight"),
    simpleOpt("urb_fire", "消防梯", "Fire Escape", "Metal Fire Escape stairs, Brick building facade, Urban texture"),
    simpleOpt("urb_slum", "贫民窟巷道", "Slum Alley", "Slum narrow alley, Hanging wires, Corrugated iron, Crowded, Dirty"),
    simpleOpt("urb_construct", "建筑工地", "Construction Site", "Construction Site, Scaffolding, Cranes, Unfinished concrete, Rebar"),
    simpleOpt("urb_dead", "死胡同", "Dead End", "Dead End street, Brick wall, Dumpster, Lonely atmosphere"),
    simpleOpt("urb_prom", "海滨大道", "Promenade", "Seaside Promenade, Palm trees, Railing, Ocean view, Walking path"),
    simpleOpt("urb_cyber", "赛博街道", "Cyberpunk Street", "Cyberpunk Street, Neon signs, Holograms, Rain, Wet pavement"),
    simpleOpt("urb_ruin", "废弃街道", "Ruined Street", "Post-apocalyptic Street, Overgrown vegetation, Cracked asphalt, Abandoned cars"),
  ]
};

// 1.3 Commercial
const grpComm: OptionGroup = {
  groupNameCN: "商业与公共", groupNameEN: "Commercial & Public",
  options: [
    simpleOpt("com_office", "大办公室", "Open Plan Office", "Open Plan Office, Rows of desks, Computers, Busy, Corporate"),
    simpleOpt("com_boss", "老板办公室", "Executive Office", "Executive Office, Large desk, Leather chair, City view, Bookshelf"),
    simpleOpt("com_meet", "会议室", "Conference Room", "Conference Room, Long glass table, Whiteboard, Projector, Tension"),
    simpleOpt("com_cafe", "咖啡馆", "Cafe", "Cozy Cafe, Wooden tables, Espresso machine, Steam, Coffee shop vibe"),
    simpleOpt("com_bar", "酒吧", "Bar/Pub", "Bar Counter, Bartender, Bottles, Dim light, Stools, Neon sign"),
    simpleOpt("com_diner", "美式餐厅", "Retro Diner", "Retro Diner, Red booths, Jukebox, Checkered floor, Milkshakes"),
    simpleOpt("com_rest", "高级餐厅", "Fine Dining", "Fine Dining Restaurant, White tablecloths, Candlelight, Wine glasses"),
    simpleOpt("com_mall", "购物中心", "Shopping Mall", "Shopping Mall Atrium, Escalators, Glass storefronts, Polished floor"),
    simpleOpt("com_super", "超市", "Supermarket", "Supermarket Aisle, Shelves stocked with goods, Fluorescent light, Shopping cart"),
    simpleOpt("com_conv", "便利店", "Convenience Store", "Convenience Store, Fridges, Cash register, Late night vibe"),
    simpleOpt("com_lib", "图书馆", "Library", "Public Library, Rows of bookshelves, Silence, Reading lamps, Dust motes"),
    simpleOpt("com_school", "教室", "Classroom", "Classroom, Chalkboard, Student desks, Educational posters"),
    simpleOpt("com_gym", "健身房", "Gym", "Gym, Weights, Treadmills, Mirrors, Sweat, Workout equipment"),
    simpleOpt("com_pool", "室内泳池", "Indoor Pool", "Indoor Swimming Pool, Tiled lanes, Water reflection, Echoing"),
    simpleOpt("com_hosp_c", "医院走廊", "Hospital Corridor", "Hospital Corridor, Sterile white, Wheelchair, Fluorescent light"),
    simpleOpt("com_hosp_r", "病房", "Hospital Room", "Hospital Room, Medical bed, Monitors, IV drip, Curtain"),
    simpleOpt("com_bank", "银行大厅/金库", "Bank/Vault", "Bank Vault, Safe deposit boxes, Heavy metal door, Money, Gold"),
    simpleOpt("com_post", "邮局", "Post Office", "Post Office, Packages, Counter, Sorting bins, Letters"),
    simpleOpt("com_salon", "理发店", "Hair Salon", "Hair Salon, Mirrors, Barber chair, Hairdryers, Scissors"),
    simpleOpt("com_laund", "自助洗衣店", "Laundromat", "Laundromat, Rows of washing machines, Tiled floor, Lonely vibe"),
    simpleOpt("com_cine", "电影院", "Cinema/Theater", "Movie Theater, Red seats, Big screen, Popcorn, Dark"),
    simpleOpt("com_arcade", "街机厅", "Arcade", "Arcade, Game cabinets, Neon lights, Joystick, Retro gaming"),
    simpleOpt("com_cas", "赌场", "Casino", "Casino Floor, Slot machines, Green felt tables, Bright lights, Gambling"),
    simpleOpt("com_museum", "博物馆", "Museum Gallery", "Museum Gallery, Pedestals, Glass cases, Art on walls, Quiet"),
  ]
};

// 1.4 Industrial
const grpInd: OptionGroup = {
  groupNameCN: "工业与科研", groupNameEN: "Industrial & Science",
  options: [
    simpleOpt("ind_fac", "工厂流水线", "Factory Line", "Factory Assembly Line, Robotic arms, Conveyor belts, Sparks"),
    simpleOpt("ind_ware", "大型仓库", "Warehouse", "Huge Warehouse, Pallets stacked high, Forklift, Concrete floor"),
    simpleOpt("ind_lab", "化学实验室", "Chemistry Lab", "Chemistry Lab, Glass beakers, Colorful liquids, Fume hood, White coat"),
    simpleOpt("ind_clean", "无尘室", "Clean Room", "Clean Room, Hazmat suits, Sterile, Chip manufacturing, Yellow light"),
    simpleOpt("ind_server", "服务器机房", "Server Room", "Server Room, Racks of blinking lights, Cables, Cooling fans, Data center"),
    simpleOpt("ind_power", "发电厂", "Power Plant", "Power Plant Interior, Turbines, Pipes, Industrial scale, Metal catwalks"),
    simpleOpt("ind_nuc", "核反应堆", "Nuclear Reactor", "Nuclear Reactor Core, Blue glow, Water pool, Control rods, High tech"),
    simpleOpt("ind_cont", "控制室", "Control Room", "Mission Control Room, Wall of screens, Consoles, Operators, Maps"),
    simpleOpt("ind_oil", "钻井平台", "Oil Rig", "Offshore Oil Rig, Steel structure, Ocean waves below, Industrial crane"),
    simpleOpt("ind_mine", "矿井", "Mine Shaft", "Underground Mine Shaft, Wooden beams, Rails, Lanterns, Pickaxes"),
    simpleOpt("ind_sewer", "下水道", "Sewer", "Sewer Tunnel, Cylindrical, Sludge water, Pipes, Rats, Damp"),
    simpleOpt("ind_vent", "通风管道", "Ventilation Shaft", "Inside Ventilation Shaft, Metal fan, Tight space, Dust, Spy movie vibe"),
    simpleOpt("ind_slaugh", "屠宰场/冷库", "Meat Locker", "Meat Locker, Hanging meat, Cold fog, Industrial hooks, Freezer"),
    simpleOpt("ind_scrap", "废车场", "Scrapyard", "Scrapyard, Piles of junk metal, Crushed cars, Rust, Crane"),
    simpleOpt("ind_dock", "卸货码头", "Loading Dock", "Loading Dock, Shipping containers, Trucks, Concrete, Industrial exterior"),
    simpleOpt("ind_boil", "锅炉房", "Boiler Room", "Boiler Room, Rusty pipes, Steam, Pressure gauges, Heat"),
    simpleOpt("ind_text", "纺织厂", "Textile Mill", "Textile Mill, Looms, Fabric rolls, Dust in air, Vintage industrial"),
    simpleOpt("ind_brew", "酿酒厂", "Brewery/Distillery", "Brewery, Copper vats, Pipes, Fermentation tanks, Industrial"),
    simpleOpt("ind_green", "工业温室", "Hydroponics", "Industrial Hydroponics, Grow lights, Rows of plants, Irrigation pipes"),
    simpleOpt("ind_weap", "军火库", "Armory", "Armory, Racks of weapons, Ammunition crates, Secure facility, Gun wall"),
    simpleOpt("ind_morgue", "停尸房", "Morgue", "Morgue, Metal drawers, Autopsy table, Cold tile, Sterile"),
    simpleOpt("ind_obs", "天文台", "Observatory", "Observatory Dome, Giant telescope, Star charts, Open roof slot"),
    simpleOpt("ind_col", "粒子对撞机", "Particle Collider", "Particle Collider Tunnel, High tech magnets, Cables, Sci-fi engineering"),
    simpleOpt("ind_cock", "飞机驾驶舱", "Cockpit", "Airplane Cockpit, Dials, Switches, Window view of clouds, Pilot seat"),
  ]
};

// 1.5 History
const grpHist: OptionGroup = {
  groupNameCN: "历史与文明", groupNameEN: "History & Civilization",
  options: [
    simpleOpt("his_castle", "城堡大厅", "Castle Great Hall", "Medieval Castle Great Hall, Stone walls, Long tables, Banners, Torches"),
    simpleOpt("his_throne", "王座厅", "Throne Room", "Throne Room, Royal throne, Red carpet, Guards, Majesty"),
    simpleOpt("his_dungeon", "地牢", "Dungeon", "Medieval Dungeon, Iron bars, Straw on floor, Chains, Dark"),
    simpleOpt("his_lib", "古图书馆", "Ancient Library", "Ancient Library, Scrolls, Dust, Candlelight, High shelves, Knowledge"),
    simpleOpt("his_temp_g", "希腊神庙", "Greek Temple", "Greek Temple, Marble columns, Open sky, Statues, White stone"),
    simpleOpt("his_temp_e", "埃及神庙", "Egyptian Temple", "Egyptian Temple, Hieroglyphs, Sandstone, Giant statues, Torchlight"),
    simpleOpt("his_tomb", "陵墓内部", "Tomb/Crypt", "Ancient Tomb, Sarcophagus, Cobwebs, Dust, Treasure, Mystery"),
    simpleOpt("his_vik", "维京长屋", "Viking Longhouse", "Viking Longhouse, Central fire pit, Wooden beams, Shields on wall, Feast"),
    simpleOpt("his_tav", "中世纪酒馆", "Medieval Tavern", "Medieval Tavern, Wooden mugs, Barrels, Fireplace, Rowdy crowd"),
    simpleOpt("his_mark", "古代集市", "Ancient Bazaar", "Ancient Bazaar, Tents, Spices, Carpets, Camels, Crowded"),
    simpleOpt("his_dojo", "日式道场", "Dojo", "Traditional Dojo, Tatami mats, Calligraphy, Wooden swords, Zen"),
    simpleOpt("his_tea", "茶室", "Tea House", "Japanese Tea House, Sliding doors, Low table, Garden view, Serene"),
    simpleOpt("his_palace", "凡尔赛宫", "Baroque Palace", "Baroque Palace, Hall of Mirrors, Gold leaf, Painted ceiling, Luxury"),
    simpleOpt("his_vic_st", "维多利亚街道", "Victorian Street", "Victorian Street, Cobblestone, Gas lamps, Fog, Horse carriage"),
    simpleOpt("his_west", "西部酒馆", "Saloon", "Western Saloon, Swinging doors, Piano, Wooden bar, Cowboy vibe"),
    simpleOpt("his_tren", "战壕", "War Trench", "WWI Trench, Mud, Sandbags, Barbed wire, Wooden planks, War"),
    simpleOpt("his_ball", "舞厅", "Ballroom", "Grand Ballroom, Waltz, Gowns, Orchestra, Chandeliers, Society"),
    simpleOpt("his_opium", "鸦片馆", "Opium Den", "Vintage Opium Den, Low beds, Smoke, Dim red light, Noir atmosphere"),
    simpleOpt("his_col", "斗兽场", "Colosseum", "Roman Colosseum, Sand arena, Crowds in stands, Gladiators, Sun"),
    simpleOpt("his_bath", "罗马浴场", "Roman Bath", "Roman Bathhouse, Pools, Steam, Mosaic tiles, Columns, Relaxing"),
    simpleOpt("his_black", "铁匠铺", "Blacksmith", "Blacksmith Shop, Anvil, Forge fire, Hammers, Glowing metal"),
    simpleOpt("his_alch", "炼金室", "Alchemist Lab", "Alchemist Lab, Potions, Dried herbs, Skulls, Old books, Magic"),
    simpleOpt("his_fort", "堡垒城墙", "Fortress Wall", "Fortress Wall, Battlements, Cannons, View of battlefield, Stone"),
    simpleOpt("his_ship", "帆船甲板", "Pirate Ship Deck", "Pirate Ship Deck, Wooden planks, Ropes, Masts, Ocean horizon"),
  ]
};

// 1.6 Nature
const grpNature: OptionGroup = {
  groupNameCN: "自然景观", groupNameEN: "Nature",
  options: [
    simpleOpt("nat_forest", "针叶林", "Coniferous Forest", "Coniferous Forest, Pine trees, Mist, Needles on ground, Twilight"),
    simpleOpt("nat_jungle", "热带雨林", "Rainforest", "Tropical Rainforest, Giant leaves, Vines, Humidity, Exotic flowers"),
    simpleOpt("nat_desert", "沙丘", "Sand Dunes", "Desert Sand Dunes, Ripples in sand, Heat haze, Blue sky, Arid"),
    simpleOpt("nat_canyon", "峡谷", "Canyon", "Red Rock Canyon, Eroded cliffs, River at bottom, Majestic scale"),
    simpleOpt("nat_mount", "雪山之巅", "Mountain Peak", "Snowy Mountain Peak, jagged rocks, Clouds below, Summit"),
    simpleOpt("nat_beach", "热带海滩", "Tropical Beach", "White Sand Beach, Turquoise water, Palm trees, Sunny"),
    simpleOpt("nat_ocean", "深海/洋面", "Open Ocean", "Open Ocean, Deep blue water, Rolling waves, Horizon, Infinite"),
    simpleOpt("nat_cliff", "海边悬崖", "Coastal Cliff", "Coastal Cliff, Waves crashing below, Grass edge, Wind, Dramatic"),
    simpleOpt("nat_water", "瀑布", "Waterfall", "Giant Waterfall, Spray, Rainbow, Rock pool, Lush nature"),
    simpleOpt("nat_lake", "静谧湖泊", "Calm Lake", "Calm Lake, Reflection of mountains, Still water, Pebble shore"),
    simpleOpt("nat_swamp", "沼泽湿地", "Swamp/Marsh", "Swamp, Mangroves, Murky water, Moss, Mist, Eerie"),
    simpleOpt("nat_cave", "溶洞", "Limestone Cave", "Limestone Cave, Stalactites, Stalagmites, Underground river, Echo"),
    simpleOpt("nat_ice", "冰川/冰洞", "Glacier", "Blue Ice Glacier, Ice cave, Translucent walls, Cold, Frozen"),
    simpleOpt("nat_vol", "火山", "Volcano Crater", "Volcano Crater, Lava lake, Black rock, Smoke, Ash, Magma"),
    simpleOpt("nat_oas", "绿洲", "Desert Oasis", "Desert Oasis, Palm trees, Water pool, Surrounded by sand, Paradise"),
    simpleOpt("nat_tun", "苔原", "Tundra", "Frozen Tundra, Moss, Rocks, Snow patches, Desolate landscape"),
    simpleOpt("nat_sav", "大草原", "Savanna", "African Savanna, Yellow grass, Acacia trees, Sunset, Wildlife"),
    simpleOpt("nat_bam", "竹林", "Bamboo Forest", "Bamboo Forest, Tall green stalks, Light filtering through, Zen"),
    simpleOpt("nat_field", "花海/田野", "Flower Field", "Field of Flowers, Lavender/Sunflowers, Rolling hills, Bright colors"),
    simpleOpt("nat_rice", "梯田", "Rice Terrace", "Rice Terraces, Layered water pools, Green hills, Reflection"),
    simpleOpt("nat_und", "海底珊瑚", "Coral Reef", "Underwater Coral Reef, Colorful fish, Blue clear water, Light rays"),
    simpleOpt("nat_salt", "盐湖", "Salt Flats", "Salt Flats, Mirror reflection of sky, Infinite white ground, Surreal"),
    simpleOpt("nat_met", "陨石坑", "Meteor Crater", "Meteor Crater, Impact zone, Barren rock, Alien landscape vibe"),
    simpleOpt("nat_aut", "秋日树林", "Autumn Woods", "Autumn Forest, Red and orange leaves, Falling leaves, Golden light"),
  ]
};

// 1.7 Sci-Fi
const grpSciFi: OptionGroup = {
  groupNameCN: "科幻与太空", groupNameEN: "Sci-Fi & Space",
  options: [
    simpleOpt("sci_bridge", "舰桥/指挥舱", "Spaceship Bridge", "Spaceship Bridge, Holographic displays, Captain's chair, View of stars"),
    simpleOpt("sci_corr", "飞船走廊", "Sci-Fi Corridor", "Sci-Fi Corridor, Hexagonal panels, Clean white, LED strips, Airlock"),
    simpleOpt("sci_eng", "引擎室", "Engine Room", "Spaceship Engine Room, Glowing core, Pipes, Energy pulse, Warp drive"),
    simpleOpt("sci_cryo", "冷冻睡眠舱", "Cryo Bay", "Cryo Bay, Rows of sleeping pods, Blue mist, Frost, Hibernation"),
    simpleOpt("sci_med", "医疗舱", "Med Bay", "Sci-Fi Med Bay, Scanning laser, Healing tank, Robotic surgeon, Sterile"),
    simpleOpt("sci_hang", "机库", "Hangar Bay", "Spaceship Hangar, Fighters docked, Magnetic shield, Busy crew, Tools"),
    simpleOpt("sci_stat", "空间站内部", "Space Station", "Space Station Interior, Zero gravity, Floating objects, View of Earth"),
    simpleOpt("sci_col", "月球/火星基地", "Colony Base", "Moon/Mars Base, Domes, Regolith dust, Rovers, Survival habitat"),
    simpleOpt("sci_alien", "异星地表", "Alien Landscape", "Alien Planet, Purple sky, Strange flora, Two moons, Exotic"),
    simpleOpt("sci_mark", "黑市/地下城", "Cyber Market", "Cyberpunk Market, Neon signs, Rain, Tech stalls, Crowded, Gritty"),
    simpleOpt("sci_club", "赛博夜店", "Cyber Club", "Cyberpunk Nightclub, Holographic dancers, Lasers, Chrome, Futuristic"),
    simpleOpt("sci_lab", "生物实验室", "Bio Lab", "Bio-Engineering Lab, Cloning vats, Green liquid, DNA helix, Mutation"),
    simpleOpt("sci_robot", "机器人车间", "Robot Workshop", "Robot Workshop, Disassembled androids, Cables, Sparks, Oil"),
    simpleOpt("sci_serv", "数据中心", "Data Core", "Data Core, Infinite server racks, Blue light, Digital flow, The Matrix"),
    simpleOpt("sci_port", "传送门", "Warp Gate", "Giant Warp Gate, Energy ring, Swirling vortex, Event horizon, Space"),
    simpleOpt("sci_mech", "机甲驾驶舱", "Mecha Cockpit", "Inside Mecha Cockpit, HUD display, Battlefield view, Joysticks"),
    simpleOpt("sci_dys", "戴森球表面", "Dyson Sphere", "Dyson Sphere Surface, Infinite metal landscape, Solar panels, Mega scale"),
    simpleOpt("sci_hyd", "水培农场", "Hydroponics Bay", "Space Hydroponics, Plants in tubes, UV lights, Artificial nature"),
    simpleOpt("sci_mine", "小行星矿场", "Asteroid Mine", "Asteroid Mine, Low gravity, Drills, Space dust, Dark void background"),
    simpleOpt("sci_ruin", "先驱者遗迹", "Ancient Sci-Fi Ruins", "Ancient Alien Ruins, Floating monoliths, Glowing glyphs, Mystery"),
    simpleOpt("sci_elev", "太空电梯", "Space Elevator", "Space Elevator Car, Glass walls, Stratosphere view, High tech"),
    simpleOpt("sci_arm", "武器库", "Armory", "Sci-Fi Armory, Laser rifles, Power armor suits, High security"),
    simpleOpt("sci_quar", "隔离区", "Quarantine Zone", "Quarantine Zone, Plastic sheets, Warning signs, Hazmat, Decontamination"),
    simpleOpt("sci_deb", "残骸带", "Debris Field", "Space Debris Field, Destroyed ships, Floating metal, Silent, Cold"),
  ]
};

// 1.8 Fantasy
const grpFantasy: OptionGroup = {
  groupNameCN: "奇幻与超自然", groupNameEN: "Fantasy & Magic",
  options: [
    simpleOpt("fan_dun", "地下城", "Dungeon", "Dungeon, Stone corridors, Torches, Traps, Skeleton remains, RPG vibe"),
    simpleOpt("fan_wiz", "法师塔顶", "Wizard's Study", "Wizard's Tower Study, Telescopes, Magic books, Floating orbs, Mystical"),
    simpleOpt("fan_cav", "水晶洞穴", "Crystal Cave", "Crystal Cave, Glowing crystals, Magical energy, Purple light, Enchanted"),
    simpleOpt("fan_for", "精灵森林", "Enchanted Forest", "Enchanted Forest, Giant trees, Glowing mushrooms, Fireflies, Ethereal"),
    simpleOpt("fan_hut", "女巫小屋", "Witch's Hut", "Witch's Hut, Cauldron, Dried herbs, Cat, Spooky woods outside"),
    simpleOpt("fan_drag", "龙穴", "Dragon's Lair", "Dragon's Lair, Gold coins pile, Smoke, Heat, Dragon scales"),
    simpleOpt("fan_alt", "召唤祭坛", "Ritual Altar", "Stone Altar, Magic circle, Runes on floor, Candles, Sacrifice"),
    simpleOpt("fan_lib", "魔法图书馆", "Arcane Library", "Arcane Library, Flying books, Infinite shelves, Magic dust, Hogwarts vibe"),
    simpleOpt("fan_sky", "浮空岛", "Floating Island", "Floating Island, Waterfalls falling into void, Clouds, Fantasy castle"),
    simpleOpt("fan_tree", "世界树", "Tree of Life", "Giant Tree of Life, Glowing roots, Ancient, Spiritual atmosphere"),
    simpleOpt("fan_hell", "地狱边境", "Inferno", "Infernal Landscape, Lava river, Obsidian rocks, Red sky, Demons"),
    simpleOpt("fan_heav", "天界", "Celestial Realm", "Celestial Realm, Golden clouds, White marble, God rays, Divine"),
    simpleOpt("fan_nec", "死灵墓穴", "Necropolis", "Necropolis, Green mist, Undead energy, Skulls, Dark magic"),
    simpleOpt("fan_fair", "妖精圈", "Fairy Circle", "Fairy Circle, Mushrooms ring, Magical glade, Soft light, Whimsical"),
    simpleOpt("fan_gui", "公会大厅", "Guild Hall", "Adventurer's Guild Hall, Quest board, Wooden tables, Beer, Weapons"),
    simpleOpt("fan_shop", "魔药店", "Potion Shop", "Potion Shop, Colorful bottles, Alchemist, Magical items for sale"),
    simpleOpt("fan_rui", "古代遗迹", "Ancient Ruins", "Fantasy Ruins, Overgrown stone, Magic residue, Forgotten civilization"),
    simpleOpt("fan_port", "传送门", "Magic Portal", "Swirling Magic Portal, Vortex, Rune stones frame, Dimension jump"),
    simpleOpt("fan_temp", "元素神殿", "Elemental Temple", "Elemental Temple, Water/Fire/Earth/Air theme, Sacred, Statue"),
    simpleOpt("fan_bean", "巨型豆茎", "Giant Beanstalk", "Giant Beanstalk, Leaves as platforms, Above clouds, High altitude"),
    simpleOpt("fan_und", "地底世界", "Underdark", "Underground World, Bioluminescent fungi, Dark elves, Cave city"),
    simpleOpt("fan_ice", "冰雪城堡", "Ice Castle", "Ice Castle, Translucent walls, Frozen throne, Cold magic, Blue"),
    simpleOpt("fan_gard", "秘密花园", "Secret Garden", "Secret Garden, Overgrown gate, Blooming flowers, Fountain, Hidden"),
    simpleOpt("fan_bat", "古战场", "Ancient Battlefield", "Ancient Battlefield, Rusted swords, Ghostly fog, Sorrowful, Epic"),
  ]
};

// 1.9 Studio
const grpStudio: OptionGroup = {
  groupNameCN: "影棚与舞台", groupNameEN: "Studio & Stage",
  options: [
    simpleOpt("stu_cyc", "无尽白棚", "Infinity Cove", "White Infinity Cove, Studio lighting, Seamless background, Commercial look"),
    simpleOpt("stu_green", "绿幕摄影棚", "Green Screen", "Green Screen Studio, Chroma key, Tracking markers, Film production"),
    simpleOpt("stu_port", "肖像背景", "Portrait Studio", "Portrait Studio, Canvas backdrop, Three-point lighting, Stool"),
    simpleOpt("stu_stage", "剧院舞台", "Theater Stage", "Theater Stage, Red velvet curtains, Spotlight, Wooden floorboards"),
    simpleOpt("stu_run", "T台秀场", "Fashion Runway", "Fashion Runway, Catwalk, Flashing cameras, Dark audience, High fashion"),
    simpleOpt("stu_news", "新闻演播室", "Newsroom", "Newsroom Set, Anchor desk, Screens in background, Bright lighting"),
    simpleOpt("stu_talk", "脱口秀布景", "Talk Show Set", "Talk Show Set, Sofa, Desk, City backdrop, Studio audience"),
    simpleOpt("stu_box", "拳击擂台", "Boxing Ring", "Boxing Ring, Ropes, Bright overhead lights, Canvas floor, Sport"),
    simpleOpt("stu_circ", "马戏团帐篷", "Circus Tent", "Inside Circus Tent, Striped canvas, Sawdust, Trapeze, Spotlight"),
    simpleOpt("stu_ball", "芭蕾舞房", "Ballet Studio", "Ballet Studio, Wall mirrors, Barre, Wooden floor, Natural light"),
    simpleOpt("stu_dress", "后台化妆间", "Dressing Room", "Backstage Dressing Room, Light bulb mirror, Makeup, Costumes"),
    simpleOpt("stu_pod", "产品展台", "Product Podium", "Product Podium, Geometric shapes, Studio light, Minimalist, pastel"),
    simpleOpt("stu_dio", "微缩模型", "Diorama", "Diorama Box, Miniature world, Tilt-shift effect, Toy-like texture"),
    simpleOpt("stu_art", "画廊/展厅", "Art Gallery", "Art Gallery, White walls, Framed art, Concrete floor, Track lighting"),
    simpleOpt("stu_mus", "博物馆展柜", "Museum Case", "Glass Display Case, Artifact inside, Spotlights, Dark room"),
    simpleOpt("stu_ind", "工业风Loft", "Industrial Loft", "Industrial Loft Studio, Brick walls, Large windows, Daylight, Boho"),
    simpleOpt("stu_kit", "美食摄影台", "Kitchen Studio", "Kitchen Studio Set, Marble counter, Fresh ingredients, Bright airy light"),
    simpleOpt("stu_rec", "录音棚", "Recording Booth", "Sound Recording Booth, Foam walls, Microphone, Headphones, Glass window"),
    simpleOpt("stu_vp", "虚拟制片", "Virtual Production", "Virtual Production Volume, LED wall background, Unreal Engine, Tech"),
    simpleOpt("stu_test", "碰撞测试", "Crash Test Zone", "Crash Test Facility, Yellow and black stripes, Bright lights, Industrial"),
    simpleOpt("stu_win", "橱窗展示", "Shop Window", "Shop Window Display, Mannequins, Props, Glass reflection, Street view"),
    simpleOpt("stu_look", "卢卡斯影棚", "Sci-Fi Set", "Sci-Fi Movie Set, Green screens, Props, Cameras, Behind the scenes"),
    simpleOpt("stu_flower", "花墙背景", "Flower Wall", "Flower Wall Backdrop, Roses, Peonies, Event photography, Romantic"),
    simpleOpt("stu_neon", "霓虹灯管房", "Neon Room", "Room full of Neon tubes, Dan Flavin style, Color gels, Artistic"),
  ]
};

// Section 6: Conceptual Set Styles (Ultimate Edition)

// A. 抽象与几何 (Abstract & Geometry)
const grpSetAbstract: OptionGroup = {
  groupNameCN: "A. 抽象与几何", groupNameEN: "A. Abstract & Geometry",
  options: [
    opt("set_memphis", "孟菲斯几何", "Memphis Design", "Memphis Design Set, Squiggly lines, Polka dots, Pop pastel colors, 80s abstract, Geometric shapes"),
    opt("set_bauhaus", "包豪斯舞台", "Bauhaus Theater", "Bauhaus Theater Set, Triadic Ballet style, Primary colors (Red Blue Yellow), Geometric costumes, Oscar Schlemmer"),
    opt("set_opart", "欧普艺术", "Op Art", "Op Art Room, Black and White optical illusion, Moire pattern, Dizzying spirals, Bridget Riley style"),
    opt("set_grid", "无限网格", "Neon Grid", "Tron Legacy Grid, Neon Laser floor, Infinite Horizon, Wireframe landscape, Retro-future, Synthwave"),
    opt("set_stairs", "埃舍尔阶梯", "Escher Stairs", "M.C. Escher Stairs, Impossible architecture, Penrose steps, Gravity defying, Infinite loops, Paradox"),
    opt("set_frac", "分形世界", "Fractal World", "3D Fractal World, Mandelbrot set, Infinite complexity, Recursive patterns, Mathematical beauty, Psychedelic"),
    opt("set_voronoi", "泰森多边形", "Voronoi Cell", "Voronoi structure, Organic cellular pattern, 3D printed mesh, Biological architecture, White on white"),
    opt("set_lowpoly", "低多边形", "Low Poly Land", "Low Poly Art, Faceted surfaces, Sharp edges, Minimalist 3D game style, Pastel gradients"),
    opt("set_iso", "等轴测视界", "Isometric View", "Isometric view, Orthographic camera, Miniature world, Clean geometry, Monument Valley style"),
    opt("set_construct", "构成主义", "Constructivism", "Russian Constructivism, Bold red and black, Industrial geometry, Diagonal lines, Propaganda art style"),
    opt("set_cubism", "立体主义", "Cubism Space", "Cubism 3D representation, Picasso style, Fragmented objects, Multiple perspectives at once, Angular"),
    opt("set_destijl", "风格派", "De Stijl", "De Stijl Movement, Mondrian style, Black grid lines, White rectangles, Primary color blocks"),
    opt("set_fluid", "流体几何", "Fluid Geometry", "Abstract Fluid forms, Liquid metal shapes, Smooth curves, Zaha Hadid architecture style"),
    opt("set_origami", "折纸世界", "Origami World", "World made of Paper, Origami folds, Paper texture, Sharp creases, Delicate structures"),
    opt("set_pixel", "像素空间", "Voxel/Pixel", "Voxel Art, Minecraft style, Blocky world, 8-bit aesthetic in 3D, Lego-like structure"),
    opt("set_suprem", "至上主义", "Suprematism", "Suprematism art style, Malevich, Floating geometric shapes, Pure artistic feeling, Minimalist abstraction"),
    opt("set_tessel", "镶嵌铺满", "Tessellation", "Tessellation pattern, Interlocking shapes, Escher reptiles, Repeated pattern covering everything, Mosaic"),
    opt("set_wire", "线框模型", "Wireframe", "3D Wireframe render, Blueprint aesthetic, White lines on blue, Architectural schematic, Transparent"),
    opt("set_kaleid", "万花筒", "Kaleidoscope", "Kaleidoscopic vision, Symmetrical mirrors, Fractured light, Colorful pattern, Psychedelic"),
    opt("set_golden", "黄金螺旋", "Golden Ratio", "Golden Ratio composition, Fibonacci spiral, Perfect geometry, Divine proportion, Mathematical art"),
    opt("set_non_eu", "非欧几何", "Non-Euclidean", "Non-Euclidean geometry, Space bending, Impossible shapes, Lovecraftian geometry, Mind-bending"),
    opt("set_point", "点彩空间", "Pointillism 3D", "3D Pointillism, World made of floating dots, Particle cloud, Seurat style, Atomic structure"),
    opt("set_glitch_g", "几何故障", "Geometry Glitch", "Geometry Glitch, Distorted polygons, Mesh errors, Datamosh, Digital artifact"),
    opt("set_moebius", "莫比乌斯环", "Mobius Strip", "Mobius Strip architecture, Infinite loop, One sided surface, Mathematical paradox, Flowing"),
  ]
};

// B. 超现实与梦境 (Surreal & Dream)
const grpSetSurreal: OptionGroup = {
  groupNameCN: "B. 超现实与梦境", groupNameEN: "B. Surreal & Dream",
  options: [
    opt("set_magritte", "马格利特天空", "Magritte Sky", "René Magritte style, Room with Clouds wallpaper, Floating Green Apple, Surreal daylight, Bowler hat"),
    opt("set_dali", "融化荒原", "Dali Landscape", "Salvador Dali Set, Melting Clocks, Long Shadows, Desert horizon, Crutches holding up objects"),
    opt("set_chirico", "形而上广场", "De Chirico Plaza", "Giorgio de Chirico style, Empty Italian plaza, Long afternoon shadows, Arches, Statues, Melancholy"),
    opt("set_door", "门之迷宫", "Door Maze", "Field of freestanding Doors, Monsters Inc style, Portals, Stairs to nowhere, Surreal choice"),
    opt("set_float", "反重力/失重", "Zero Gravity", "Zero Gravity Room, Furniture floating in air, Suspended objects, Dream logic, Inception style"),
    opt("set_scale", "爱丽丝变身", "Alice Scale", "Alice in Wonderland Room, Oversized furniture, Tiny door, Distorted perspective, Shrinking feeling"),
    opt("set_water", "水没都市", "Flooded Room", "Flooded Room, Shallow Water on floor, Reflections, Stillness, Tarkovsky Stalker vibe"),
    opt("set_sky", "云端筑梦", "Cloud Room", "Room positioned high in clouds, Floor made of clouds, Heavenly, Ethereal white"),
    opt("set_fold", "折叠城市", "Folding City", "Inception Movie style, City folding onto itself, Bending horizon, Physics defiance"),
    opt("set_face", "巨脸注视", "Giant Face", "Surreal landscape with Giant Face sculpture, Ancient ruins of a face, Fallen statue head"),
    opt("set_chess", "无尽棋盘", "Endless Chessboard", "Infinite Chessboard landscape, Surreal checkmate, Giant chess pieces, Dream logic"),
    opt("set_train", "水中列车", "Water Train", "Spirited Away Train, Train tracks running through ocean, Infinite water horizon, Nostalgic"),
    opt("set_bed", "森林之床", "Bed in Forest", "A luxury bed placed in the middle of a deep forest, Surreal comfort, Dream core"),
    opt("set_ladder", "通天梯", "Ladder to Sky", "Ladder reaching into the clouds, Infinite climb, Truman Show ending vibe, White background"),
    opt("set_fish", "空中游鱼", "Sky Fish", "Giant Fish/Whales swimming in the sky, Flying marine life, Surreal atmosphere, Magical realism"),
    opt("set_invert", "颠倒世界", "Upside Down", "Upside Down Room, Furniture on ceiling, Walking on ceiling, Disorienting, Anti-gravity"),
    opt("set_library", "巴别图书馆", "Infinite Library", "The Library of Babel, Infinite hexagonal galleries, Bookshelves to infinity, Jorge Luis Borges"),
    opt("set_giant_obj", "巨物置景", "Giant Objects", "Claes Oldenburg style, Giant everyday objects (Spoon, Cherry, Typewriter) in landscape, Pop Surrealism"),
    opt("set_double", "双重曝光", "Double Exposure", "3D Double Exposure, Universe inside a silhouette, Starry sky inside a room, Ethereal blend"),
    opt("set_body", "人体景观", "Body Landscape", "Landscape made of human body curves, Skin texture terrain, Abstract surrealism"),
    opt("set_window", "孤窗", "Lonely Window", "A freestanding window in the middle of nowhere, View into another world, Portal"),
    opt("set_hole", "地面黑洞", "Floor Hole", "Giant hole in the floor leading to space, Looney Tunes style portable hole, Abyss"),
    opt("set_levitate", "群体悬浮", "Levitation", "Crowd of people floating in air, Rapture style, Sleeping in mid-air, Supernatural"),
    opt("set_melt", "融化地板", "Melting Floor", "Floor turning into liquid, Furniture sinking, Viscous reality, Psychedelic melt"),
  ]
};

// C. 材质包裹 (Material & Texture)
const grpSetMaterial: OptionGroup = {
  groupNameCN: "C. 材质包裹", groupNameEN: "C. Material & Texture",
  options: [
    opt("set_soft", "软体空间", "Soft/Plush Room", "Softroom aesthetic, Entire room covered in Pink Fur/Velvet, Plush texture, Rounded corners"),
    opt("set_plastic", "真空包裹", "Vacuum Wrapped", "Wrapped in Plastic, Vacuum sealed room, Transparent PVC textures, Dexter style, Suffocating"),
    opt("set_foil", "银色工厂", "Silver Foil", "Silver Aluminum Foil room, Andy Warhol Factory, Metallic reflection, Space age, Crumpled texture"),
    opt("set_mirror", "无限镜屋", "Infinity Mirror", "Infinity Mirror Room, Yayoi Kusama style, Multiple reflections, LED dots, Disorienting"),
    opt("set_ice", "冰封密室", "Ice Room", "Room made of solid Ice, Translucent Blue walls, Frozen furniture, Sub-zero atmosphere"),
    opt("set_gold", "黄金屋", "Gold Room", "Room entirely made of Gold, Gold leaf walls, Golden floor, Opulent, Blinding reflection"),
    opt("set_balloon", "气球装置", "Balloon Room", "Room filled with thousands of Balloons, Rubber texture, Claustrophobic fun"),
    opt("set_slime", "黏液空间", "Slime/Drip", "Room dripping with colorful Slime, Viscous liquid, Melting walls, Nickelodeon vibe"),
    opt("set_chrome", "液态铬", "Liquid Chrome", "Liquid Chrome environment, Sorayama style, Reflective metal, T-1000 texture, Futuristic curve"),
    opt("set_vanta", "绝对黑体", "Vantablack Void", "Vantablack object, Absorbs all light, Silhouette against background, Void texture, Zero reflection"),
    opt("set_crystal", "晶体生长", "Crystal Growth", "Room overgrown with Crystals, Amethyst geodes, Sharp facets, Translucent minerals"),
    opt("set_flesh", "生物血肉", "Flesh/Biomechanical", "H.R. Giger style, Walls made of organic flesh and bone, Biomechanical texture, Body horror"),
    opt("set_soap", "肥皂泡", "Soap Bubbles", "World inside a Soap Bubble, Iridescent film, Rainbow reflection, Fragile, Wet"),
    opt("set_paper", "纸板世界", "Cardboard Box", "World made of Cardboard, DIY aesthetic, Brown paper texture, Stop motion feel"),
    opt("set_neon_g", "霓虹玻璃", "Neon Glass", "Transparent Glass walls with Neon edges, Glowing geometric shapes, Transparent tech"),
    opt("set_porc", "破碎瓷器", "Porcelain", "World made of White Porcelain, Cracked surface, Fragile, Kintsugi gold repair, Doll-like"),
    opt("set_denim", "丹宁牛仔", "Denim World", "Everything covered in Blue Denim fabric, Jeans texture, Stitching details, Fashion concept"),
    opt("set_choc", "巧克力工厂", "Chocolate/Candy", "Room made of Chocolate, Edible textures, Charlie and the Chocolate Factory, Melting sweets"),
    opt("set_obsid", "黑曜石", "Obsidian/Black Glass", "Glossy Black Obsidian walls, Sharp edges, Dark reflection, Volcanic glass"),
    opt("set_rust", "锈蚀空间", "Rusty Metal", "Silent Hill Otherworld, Rusted metal grids, Decay, Industrial horror, Tetanus texture"),
    opt("set_velvet", "丝绒褶皱", "Red Velvet", "Room draped in Red Velvet, Heavy fabric folds, Royal, Theatrical texture"),
    opt("set_wool", "针织毛线", "Knitted/Wool", "World made of Yarn, Knitted texture, Yoshi's Woolly World style, Cozy, Handmade"),
    opt("set_marble", "大理石殿", "Marble Block", "Carved from a single block of Marble, Veins texture, Roman sculpture aesthetic, Cold stone"),
    opt("set_trans", "完全透明", "Transparent Polycarb", "Transparent Polycarbonate furniture and walls, Ghost chair style, See-through, Modern"),
  ]
};

// D. 自然入侵 (Nature & Overgrowth)
const grpSetNature: OptionGroup = {
  groupNameCN: "D. 自然入侵", groupNameEN: "D. Nature & Overgrowth",
  options: [
    opt("set_flower", "花卉爆炸", "Flower Explosion", "Room exploding with Flowers, Overgrown floral installation, Bloom, Gucci ad style"),
    opt("set_forest", "室内森林", "Indoor Forest", "Forest growing inside a room, Trees breaking through floor, Mossy furniture, Abandoned"),
    opt("set_sand", "沙丘入侵", "Sand Dunes", "Room filled with Sand dunes, Desert taking over, Tame Impala album cover style"),
    opt("set_snow", "室内降雪", "Indoor Snow", "Snow falling inside a room, Snow piles on furniture, Surreal winter, Frozen time"),
    opt("set_grass", "草地野餐", "Indoor Grass", "Floor covered in lush green grass, Picnic indoors, Artificial nature, Surreal comfort"),
    opt("set_under", "深海沉没", "Submerged Ruins", "Underwater Room, Coral growing on furniture, Fish swimming through windows, Atlantis vibe"),
    opt("set_root", "盘根错节", "Giant Roots", "Giant Tree Roots breaking through walls, Angkor Wat style, Nature reclaiming, Ancient strength"),
    opt("set_fungus", "真菌孢子", "Fungal Growth", "The Last of Us aesthetic, Colorful fungus growing on walls, Spores in air, Bioluminescent mushrooms"),
    opt("set_ivy", "常春藤", "Ivy Covered", "Walls completely covered in Green Ivy, Dense foliage, Secret garden feel, Vertical garden"),
    opt("set_rocks", "巨石阵", "Floating Rocks", "Anti-gravity rocks floating in room, Avatar Hallelujah Mountains style, Earth magic"),
    opt("set_swamp", "室内沼泽", "Indoor Swamp", "Floor turned into murky water, Reeds growing, Fog, Southern Gothic atmosphere"),
    opt("set_fire", "燃烧之屋", "Burning Room", "Room on fire (controlled), Flames licking walls, Smoke, Ash, Destruction aesthetic"),
    opt("set_rain", "局部降雨", "Indoor Rain", "Raining only inside the room, Personal rain cloud, Melancholy, Wet floor reflection"),
    opt("set_bamboo", "竹林禅意", "Indoor Bamboo", "Bamboo forest growing through floor, Zen garden indoors, Minimalist nature"),
    opt("set_coral", "陆地珊瑚", "Dry Coral", "Coral reefs growing on dry land, Bleached coral, Surreal marine life, Pastel colors"),
    opt("set_tornado", "室内风暴", "Indoor Tornado", "Miniature Tornado inside a room, Swirling debris, Chaos, Weather anomaly"),
    opt("set_autumn", "落叶铺地", "Autumn Leaves", "Floor covered in thick layer of Red Autumn Leaves, Melancholy, Crisp texture"),
    opt("set_spider", "蛛网尘封", "Spiderwebs", "Room covered in thick Cobwebs, Ancient dust, Miss Havisham style, Time forgotten"),
    opt("set_mud", "泥泞之地", "Mud Slide", "Room filled with wet Mud, Mudslide aftermath, Earthy texture, Dirty"),
    opt("set_lightn", "球状闪电", "Ball Lightning", "Ball lightning floating in room, Electric sparks, Ozone, Dangerous energy"),
    opt("set_cave", "溶洞化", "Stalactites", "Ceiling dripping with Stalactites, Limestone texture, Cave formation indoors"),
    opt("set_butt", "蝴蝶群舞", "Butterfly Swarm", "Room filled with thousands of Butterflies, Monarch swarm, Magical realism"),
    opt("set_ash", "火山灰", "Ash Covered", "Everything covered in grey Volcanic Ash, Pompeii vibe, Silent, Grey monochrome"),
    opt("set_crystal_n", "晶体地貌", "Geode Room", "Room inside a giant Geode, Purple Amethyst walls, Sparkle, Natural wonder"),
  ]
};

// E. 符号与仪式 (Symbolic & Ritual)
const grpSetSymbolic: OptionGroup = {
  groupNameCN: "E. 符号与仪式", groupNameEN: "E. Symbolic & Ritual",
  options: [
    opt("set_jodo", "神圣之山", "Holy Mountain", "Holy Mountain aesthetic, Jodorowsky style, Tarot symbols, Altar, Mystical geometry, Cult vibe"),
    opt("set_red", "红色帷幕", "Red Curtains", "Twin Peaks Red Room, Zigzag floor, Heavy Velvet Curtains, Spotlight, Lynchian nightmare"),
    opt("set_eye", "全视之眼", "Eye Watching", "Room full of Eyeballs, Giant Eye watching, Illuminati symbolism, Paranoia, Surreal horror"),
    opt("set_candle", "千烛之屋", "Candle Room", "Room filled with thousands of melted candles, Wax floor, Flickering light, Seance atmosphere"),
    opt("set_circle", "召唤法阵", "Summoning Circle", "Magic Circle painted on floor, Runes, Salt lines, Occult ritual setup, Pentagram"),
    opt("set_mask", "面具墙", "Wall of Masks", "Wall covered in Porcelain Masks, Eyes Wide Shut vibe, Anonymous, Creepy"),
    opt("set_statue", "石膏像群", "Busts/Statues", "Room filled with Greek Statues, Vaporwave aesthetic, Broken marble, Frozen history"),
    opt("set_string", "红线连接", "Red String", "Conspiracy Wall, Red strings connecting photos, Detective board, Obsession, Chaos"),
    opt("set_chains", "锁链悬挂", "Hanging Chains", "Room filled with hanging rusty chains, Hellraiser style, Industrial torture, Heavy metal"),
    opt("set_cage", "鸟笼", "Birdcages", "Room filled with empty birdcages, Trapped symbolism, Victorian gothic"),
    opt("set_frame", "空画框", "Empty Frames", "Floating Empty Gold Frames, Missing art, Memory loss, Surreal gallery"),
    opt("set_tv", "电视堆叠", "TV Stack", "Stack of retro CRT TVs, Static noise, Glitch screens, Persona 4 vibe, Media overload"),
    opt("set_mono", "黑石碑", "Monolith", "2001 A Space Odyssey Monolith, Black slab in center, Evolution, Mystery, Alien artifact"),
    opt("set_tarot", "塔罗牌阵", "Tarot Cards", "Giant Tarot Cards floating, Major Arcana, Mystical symbolism, Fortune telling"),
    opt("set_ouija", "通灵板", "Ouija Board", "Floor painted as Ouija Board, Planchette, Spirits, Letters and Numbers"),
    opt("set_clock", "时钟阵列", "Clocks", "Room filled with Clocks, Different times, Ticking sound, Time manipulation, Dali vibe"),
    opt("set_manne", "塑料模特", "Mannequins", "Room full of Shop Mannequins, Uncanny valley, Silent Hill vibe, Artificial life"),
    opt("set_confess", "告解室", "Confessional", "Confessional Booth, Screen mesh, Secrets, Religious guilt, Shadowy"),
    opt("set_throne", "剑之王座", "Throne of Swords", "Throne made of melted swords, Iron Throne style, Power, War, Steel"),
    opt("set_blood", "血池", "Blood Bath", "Pool filled with Red Liquid/Blood, Horror aesthetic, Vampire lair, Contrast with white tiles"),
    opt("set_scare", "稻草人", "Scarecrows", "Field of Scarecrows, Rural horror, Folk horror, Burlap sacks"),
    opt("set_doll", "娃娃屋", "Dollhouse", "Human scale Dollhouse, Front open, Artificial life, Melanie Martinez aesthetic"),
    opt("set_grave", "墓土", "Graveyard Soil", "Room floor covered in Graveyard dirt, Tombstones indoors, Gothic, Death"),
    opt("set_cross", "十字架", "Neon Crosses", "Field of Neon Crosses, Cyberpunk Cemetery, Evangelion vibe, Religious tech"),
  ]
};

// F. 光影与装置 (Light & Tech)
const grpSetLight: OptionGroup = {
  groupNameCN: "F. 光影与装置", groupNameEN: "F. Light & Tech",
  options: [
    opt("set_turrell", "特瑞尔光域", "Turrell Skyspace", "James Turrell Skyspace, Ganzfeld effect, Pure solid color light, No corners, Infinite depth"),
    opt("set_neon", "灯管丛林", "Neon Forest", "Forest of Vertical Neon Tubes, Dan Flavin art, Colored light space, Minimalist, Cyberpunk"),
    opt("set_laser", "激光网", "Laser Grid", "Laser Grid, Security beams, Red laser lines cutting through smoke, Mission Impossible style"),
    opt("set_proj", "光影映射", "Projection Map", "Projection Mapping room, Digital patterns on walls, Immersive art, teamLab style"),
    opt("set_screen", "屏幕墙", "Screen Wall", "Wall of TV screens, Glitch art, Static noise, Surveillance monitors, Nam June Paik style"),
    opt("set_holo", "全息甲板", "Holodeck", "Star Trek Holodeck, Yellow grid lines, Virtual reality simulation, Empty digital room"),
    opt("set_prism", "棱镜折射", "Prism Light", "Pink Floyd Dark Side of the Moon style, Light refracting through prisms, Rainbow spectrum"),
    opt("set_fiber", "光纤丛林", "Fiber Optics", "Hanging Fiber Optic cables, Glowing tips, Avatar Tree of Souls vibe, Data transmission"),
    opt("set_strope", "频闪空间", "Strobe Light", "Strobe light effect, Frozen motion, High contrast, Disorienting, Club vibe"),
    opt("set_shadow", "皮影/剪影", "Shadow Play", "Shadow Play, Strong backlight, Silhouettes projected on screen, German Expressionism"),
    opt("set_uv", "黑光/荧光", "Blacklight/UV", "Blacklight UV room, Fluorescent paint glowing, Rave atmosphere, Hidden symbols"),
    opt("set_led", "LED体积", "LED Volume", "LED Volume stage, Mandalorian set, Virtual background, Seamless digital environment"),
    opt("set_xray", "X光透视", "X-Ray Vision", "X-Ray aesthetic, Transparent objects, Skeleton view, Blue and Black, Medical tech"),
    opt("set_infra", "红外热感", "Thermal/Infrared", "Thermal Camera aesthetic, Heat map colors (Red/Blue), Predator vision, High tech"),
    opt("set_biolum", "生物荧光", "Bioluminescence", "Natural bioluminescent lighting, Glowing plankton, Blue glow, Avatar nature"),
    opt("set_data", "数据流", "Data Stream", "The Matrix Code, Green falling characters, Digital rain, Cyberspace"),
    opt("set_spot", "聚光灯", "Spotlight", "Single Spotlight in darkness, Theatrical stage, Interrogation, Solitude"),
    opt("set_lightp", "光绘", "Light Painting", "Long exposure Light Painting, Trails of light, Scribbles in air, Picasso light art"),
    opt("set_scan", "CT扫描", "Scan Lines", "Slit-scan photography effect, Digital distortion, Time displacement, Abstract tech"),
    opt("set_quant", "量子隧道", "Quantum Tunnel", "Wormhole visual, Warping light, Star Wars Hyperspace, Speed"),
    opt("set_bulb", "爱迪生灯泡", "Edison Bulbs", "Room filled with hanging Edison Bulbs, Warm filament glow, Industrial chic"),
    opt("set_flare", "镜头光晕", "Lens Flare", "Overuse of J.J. Abrams Lens Flares, Horizontal blue flares, Sci-fi cinematic"),
    opt("set_bokeh", "光斑背景", "Bokeh City", "Out of focus city lights, Bokeh balls, Abstract night city, Dreamy blur"),
    opt("set_godray", "丁达尔光", "God Rays", "Volumetric God Rays shining through windows, Dusty atmosphere, Divine light"),
  ]
};

// G. 流行与时尚 (Pop & Fashion)
const grpSetPop: OptionGroup = {
  groupNameCN: "G. 流行与时尚", groupNameEN: "G. Pop & Fashion",
  options: [
    opt("set_barbie", "芭比粉屋", "Barbiecore", "Barbie Dreamhouse style, All Pink, Plastic texture, Toy aesthetic, Feminine, Kitsch"),
    opt("set_wes", "韦斯对称", "Wes Anderson Set", "Wes Anderson style, Pastel colors, Symmetrical composition, Flat lighting, Whimsical"),
    opt("set_vapor", "蒸汽波", "Vaporwave", "Vaporwave aesthetic, Roman bust, Palm tree, Pink and Cyan, Glitch, 90s Web"),
    opt("set_pool", "泳池派对", "Poolside", "David Hockney style, Swimming Pool, Splash, Bright blue, Sunny California vibe, Pop art"),
    opt("set_diner", "复古餐厅", "Pop Diner", "Stylized 50s Diner, Checkered floor, Neon Jukebox, Milkshake, Riverdale vibe"),
    opt("set_check", "棋盘格", "Checkerboard", "Black and White Checkerboard floor, Ska aesthetic, Alice in Wonderland, Optical"),
    opt("set_gradient", "渐变背景", "Gradient Studio", "Seamless Gradient Background, Studio lighting, Spotify playlist cover art style, Trendy"),
    opt("set_disco", "迪斯科球", "Disco Inferno", "Giant Disco Ball, Sparkles, Studio 54 vibe, 70s fashion, Reflection"),
    opt("set_candy", "糖果世界", "Candy Land", "World made of Candy, Lollipops, Chocolate river, Katy Perry MV style, Vibrant colors"),
    opt("set_box", "玩具包装", "Toy Box", "Human inside a Toy Box, Plastic window, Accessories included, Doll aesthetic"),
    opt("set_mcm", "中世纪现代", "Mid-Century Modern", "Mad Men style, Eames chair, Teak wood, Atomic age patterns, Stylish interior"),
    opt("set_y2k", "千禧辣妹", "Y2K Aesthetic", "Y2K aesthetic, Metallic silver, Blobby furniture, Futuristic 2000s, Matrix fashion"),
    opt("set_cyber_y", "赛博Y2K", "Cyber Y2K", "Cyber Y2K, Chrome, Neon green, Tribal tattoos, Digital nostalgia, Rave"),
    opt("set_grunge", "90s垃圾摇滚", "90s Grunge", "90s Grunge aesthetic, Plaid shirts, Dirty room, Nirvana vibe, Angst, Low fidelity"),
    opt("set_kawaii", "原宿卡哇伊", "Kawaii/Harajuku", "Harajuku style, Overloaded cuteness, Decora fashion, Pastel rainbow, Anime toys"),
    opt("set_goth", "粉彩哥特", "Pastel Goth", "Pastel Goth aesthetic, Spooky but cute, Skulls with bows, Black and Pink"),
    opt("set_runway", "高定秀场", "High Fashion", "Haute Couture Runway, Avant-garde set design, Dramatic lighting, Vogue editorial"),
    opt("set_mag", "杂志封面", "Magazine Cover", "Vogue Magazine Cover style, Bold typography overlay, Fashion pose, Studio backdrop"),
    opt("set_graf", "涂鸦墙", "Graffiti Wall", "Street Art Wall, Banksy style, Spray paint, Urban decay, Hip hop culture"),
    opt("set_sneak", "球鞋墙", "Sneakerhead", "Room of Sneaker display boxes, Hypebeast culture, Streetwear, LED display"),
    opt("set_kpop", "K-Pop布景", "K-Pop MV Set", "K-Pop Music Video Set, High production value, Multiple distinct zones, Colorful, Polished"),
    opt("set_redcarp", "红毯", "Red Carpet", "Red Carpet Event, Paparazzi flashes, Velvet ropes, Glamour, Hollywood"),
    opt("set_bill", "广告牌", "Billboard", "Subject inside a Giant Billboard, Times Square aesthetic, Commercial advertising"),
    opt("set_polar", "拍立得", "Polaroid", "Polaroid Frame aesthetic, Vintage film texture, Flash photography, Nostalgic memory"),
  ]
};

// --- SPACE CATEGORY ---
const grpScale: OptionGroup = {
  groupNameCN: "空间尺度与维度", groupNameEN: "Spatial Scale & Dimension",
  options: [
    simpleOpt("sc_cramp", "幽闭/挤压", "Claustrophobic", "Claustrophobic, Extremely tight space, Suffocating, Narrow, Walls closing in"),
    simpleOpt("sc_capsule", "胶囊/紧凑", "Capsule/Compact", "Capsule scale, Compact living, Ship cabin, Efficient use of space, Tiny"),
    simpleOpt("sc_intimate", "私密/亲近", "Intimate", "Intimate scale, Cozy, Personal space, Close quarters, Warm atmosphere"),
    simpleOpt("sc_open", "开放/通透", "Open Plan/Airy", "Open plan, Airy, Spacious, High visibility, Unobstructed view"),
    simpleOpt("sc_grand", "宏伟/殿堂", "Grand/Palatial", "Grand scale, Palatial, High ceilings, Ballrooms, Cathedrals, Impressive"),
    simpleOpt("sc_mega", "巨构/史诗", "Megastructure", "Megastructure, Cyclopean scale, Monumental, Dwarf the human, Epic scale, Gigantic"),
    simpleOpt("sc_vert", "垂直深渊", "Verticality", "Extreme Verticality, Towering height, Looking up/down, Bottomless pit, Skyscraper canyon"),
    simpleOpt("sc_tunnel", "无限纵深", "Infinite Depth", "Infinite depth, Tunnel vision, Endless corridor, Vanishing point, Long perspective"),
  ]
};

const grpComp: OptionGroup = {
  groupNameCN: "构图形式与留白", groupNameEN: "Composition & Form",
  options: [
    simpleOpt("cmp_min", "极简去噪", "Minimalist", "Minimalist, Clean lines, Uncluttered, Simple geometry, Decluttered"),
    simpleOpt("cmp_neg", "大量负空间", "Negative Space", "Negative space, Small subject, Vast empty background, Solitude, Breathing room"),
    simpleOpt("cmp_void", "虚空/无界", "The Void", "The Void, Infinite white/black background, Nothingness, Ethereal, No horizon, Studio lighting"),
    simpleOpt("cmp_sym", "绝对对称", "Symmetrical", "Symmetrical composition, Centered, Mirror image, Balanced, Wes Anderson style"),
    simpleOpt("cmp_rep", "阵列/重复", "Repetitive/Array", "Repetitive pattern, Array of objects, Modular, Grid layout, Infinite rows"),
    simpleOpt("cmp_frame", "框中框", "Frame within Frame", "Frame within a frame, View through a door/window, Layered depth, Peeking through"),
    simpleOpt("cmp_chaos", "无序/散乱", "Chaotic/Scattered", "Chaotic composition, Scattered objects, Asymmetrical, Debris field, Explosion of items"),
  ]
};

const grpBgColor: OptionGroup = {
  groupNameCN: "纯色背景", groupNameEN: "Solid Backgrounds",
  options: [
    simpleOpt("bg_white", "纯白背景", "Solid White", "Solid White Background, Isolated on White, High Key, Clean Studio Backdrop, Hex code #FFFFFF, No shadows"), 
    simpleOpt("bg_black", "纯黑背景", "Solid Black", "Solid Black Background, Isolated on Black, Low Key, Pitch Black Void, Hex code #000000"), 
    simpleOpt("bg_grey", "中性灰", "Neutral Grey", "Solid Grey Background, Neutral Grey Studio Backdrop, Middle Grey, Professional Photography Background"), 
    simpleOpt("bg_green", "绿幕/色键", "Chroma Green", "Solid Green Background, Chroma Key Green, Flat Green Backdrop, For VFX"), 
    simpleOpt("bg_red", "正红背景", "Solid Red", "Solid Red Background, Vibrant Red Backdrop, Isolated on Red"),
    simpleOpt("bg_blue", "深蓝背景", "Solid Blue", "Solid Blue Background, Deep Blue Backdrop, Royal Blue, Isolated on Blue"),
    simpleOpt("bg_yellow", "明黄背景", "Solid Yellow", "Solid Yellow Background, Bright Yellow Backdrop, Pop Art Yellow, Isolated on Yellow"),
    simpleOpt("bg_pink", "粉色背景", "Solid Pink", "Solid Pink Background, Pastel Pink Backdrop, Millennial Pink, Soft Atmosphere"),
    simpleOpt("bg_cream", "奶油/米色", "Cream/Beige", "Solid Cream Background, Beige Backdrop, Warm Off-white, Earthy Tone"),
    simpleOpt("bg_orange", "橙色背景", "Solid Orange", "Solid Orange Background, Vibrant Orange Backdrop, Energetic"),
    simpleOpt("bg_purple", "紫色背景", "Solid Purple", "Solid Purple Background, Electric Purple Backdrop, Cyber"),
  ]
};

// 2. Prop Warehouse (Massive Expansion)

// 1. 生活痕迹与熵值 (Lived-in & Clutter)
const grpPropLife: OptionGroup = {
  groupNameCN: "1. 生活痕迹 (熵)", groupNameEN: "1. Lived-in & Clutter",
  options: [
    simpleOpt("prop_messy_bed", "凌乱床铺", "Unmade Bed", "Unmade Bed, Rumpled white sheets, Pillows on floor, Messy morning vibe"),
    simpleOpt("prop_clothes", "散落衣物", "Scattered Clothes", "Clothes scattered on floor, Laundry pile, Open suitcase, Messy room"),
    simpleOpt("prop_trash", "垃圾堆", "Trash & Debris", "Piles of Trash, Crumpled paper, Plastic bags, Debris, Gritty texture"),
    simpleOpt("prop_pizza", "外卖盒", "Pizza Boxes", "Stack of Pizza boxes, Takeout containers, Empty beer bottles, Junk food, Bachelor pad"),
    simpleOpt("prop_books_s", "散乱书籍", "Scattered Books", "Books scattered on floor, Open books, Stacks of paper, Intellectual clutter"),
    simpleOpt("prop_papers", "飞舞纸张", "Flying Papers", "Papers blowing in wind, Scattered documents, Confidential files, Chaos"),
    simpleOpt("prop_cig", "烟灰缸", "Ashtray", "Overflowing Ashtray, Cigarette smoke, Butts, Noir atmosphere"),
    simpleOpt("prop_coffee", "溢出咖啡", "Spilled Coffee", "Spilled Coffee cup, Stain on table, Steam, Morning chaos"),
    simpleOpt("prop_dishes", "脏盘子", "Dirty Dishes", "Sink full of Dirty Dishes, Leftover food, Flies, Domestic mess"),
    simpleOpt("prop_toy", "遗落玩具", "Lost Toy", "Lonely Teddy Bear, Broken doll, Lego bricks on floor, Childhood memory"),
    simpleOpt("prop_luggage", "行李箱", "Luggage", "Vintage Leather Suitcases, Stacked trunks, Travel tags, Ready to leave"),
    simpleOpt("prop_wires", "缠绕线缆", "Tangled Wires", "Messy tangled cables, Power strips, Chargers, Tech clutter, Cyberpunk vibe"),
    simpleOpt("prop_tape", "警示带", "Caution Tape", "Yellow Caution Tape, Crime scene tape, Do not cross, Police line"),
    simpleOpt("prop_foot", "脚印/泥迹", "Footprints", "Muddy footprints on floor, Wet shoeprints, Evidence, Mystery"),
    simpleOpt("prop_dust", "厚重积灰", "Thick Dust", "Thick layer of Dust, Cobwebs, Fingerprints in dust, Abandoned for years"),
    simpleOpt("prop_glass", "破碎玻璃", "Broken Glass", "Shattered glass on floor, Broken window fragments, Violence aftermath"),
    simpleOpt("prop_money", "散落钞票", "Scattered Money", "Piles of Cash, Dollar bills flying, Bank heist aftermath, Greed"),
    simpleOpt("prop_paint", "油漆桶", "Paint Cans", "Open Paint cans, Splattered paint, Brushes, Drop cloth, Renovation"),
    simpleOpt("prop_makeup", "散乱化妆品", "Spilled Makeup", "Spilled lipstick, Broken powder compact, Vanity clutter, Fashion chaos"),
    simpleOpt("prop_bottle", "空酒瓶", "Empty Bottles", "Collection of Empty Wine Bottles, Alcoholism, Party aftermath, Glass reflection"),
    simpleOpt("prop_map", "钉墙地图", "Wall Map", "Map pinned on wall, Red string connections, Notes, Planning strategy"),
    simpleOpt("prop_key", "钥匙串", "Keys", "Bunch of Keys, Rusty keys, Key on table, Metallic texture"),
    simpleOpt("prop_phone", "碎屏手机", "Broken Phone", "Smartphone with cracked screen, Glowing notification, Modern anxiety"),
    simpleOpt("prop_bag", "购物袋", "Shopping Bags", "Luxury Shopping Bags, Paper bags, Consumerism, Retail therapy"),
  ]
};

// 2. 叙事家具与陈设 (Narrative Furniture)
const grpPropFurn: OptionGroup = {
  groupNameCN: "2. 叙事家具", groupNameEN: "2. Narrative Furniture",
  options: [
    simpleOpt("furn_chair", "孤椅", "Lonely Chair", "Single Wooden Chair in center, Spotlight, Interrogation vibe, Solitude"),
    simpleOpt("furn_throne", "王座", "Throne", "Elaborate Throne, Velvet and Gold, Game of Thrones style, Power symbol"),
    simpleOpt("furn_sofa", "切斯特菲尔德", "Chesterfield Sofa", "Vintage Leather Chesterfield Sofa, Tufted buttons, Classic luxury, Cigar club vibe"),
    simpleOpt("furn_bed", "四柱大床", "Canopy Bed", "Four-poster Canopy Bed, Sheer curtains, Romantic, Royal bedroom"),
    simpleOpt("furn_tub", "猫脚浴缸", "Clawfoot Tub", "Vintage Clawfoot Bathtub, Brass tap, Bubbles, Luxury bathroom"),
    simpleOpt("furn_mirror", "落地古镜", "Antique Mirror", "Ornate Antique Floor Mirror, Gold frame, Aged glass, Reflection"),
    simpleOpt("furn_ladder", "梯子", "Ladder", "Wooden Ladder, Painter's ladder, Reaching upwards, Construction prop"),
    simpleOpt("furn_lamp", "蒂凡尼灯", "Tiffany Lamp", "Tiffany Stained Glass Lamp, Colorful light, Art Nouveau, Vintage decor"),
    simpleOpt("furn_clock", "落地钟", "Grandfather Clock", "Grandfather Clock, Pendulum swinging, Wood carving, Timepiece"),
    simpleOpt("furn_desk", "总裁桌", "Executive Desk", "Massive Mahogany Desk, Green bankers lamp, Authority, Office"),
    simpleOpt("furn_screen", "屏风", "Folding Screen", "Asian Folding Screen, Painted landscape, Privacy divider, Silhouette"),
    simpleOpt("furn_piano", "三角钢琴", "Grand Piano", "Black Grand Piano, Open lid, Sheet music, Elegant, Music room"),
    simpleOpt("furn_chander", "水晶吊灯", "Chandelier", "Crystal Chandelier, Sparkles, Hanging from ceiling, Opera Phantom vibe"),
    simpleOpt("furn_globe", "复古地球仪", "Vintage Globe", "Vintage Globe on stand, Sepia map, Explorer's study"),
    simpleOpt("furn_rug", "波斯地毯", "Persian Rug", "Persian Rug, Intricate patterns, Red and Blue, Texture on floor"),
    simpleOpt("furn_manne", "裁缝人台", "Dress Form", "Vintage Dress Form, Mannequin, Sewing room, Fashion design"),
    simpleOpt("furn_easel", "画架", "Easel", "Wooden Easel, Blank canvas, Paint splatter, Artist studio"),
    simpleOpt("furn_chest", "藏宝箱", "Treasure Chest", "Wooden Chest with iron bands, Padlock, Pirate loot, Mystery storage"),
    simpleOpt("furn_tv", "复古电视", "Retro TV", "CRT TV set, Wood paneling, Static screen, 80s living room"),
    simpleOpt("furn_fan", "吊扇", "Ceiling Fan", "Rotating Ceiling Fan, Motion blur, Noir detective office vibe"),
    simpleOpt("furn_curtain", "天鹅绒窗帘", "Velvet Curtains", "Heavy Red Velvet Curtains, Theatrical, Blocking light, Texture"),
    simpleOpt("furn_bird", "鸟笼", "Birdcage", "Ornate Birdcage, Hanging, Empty or with bird, Victoriana"),
    simpleOpt("furn_gram", "留声机", "Gramophone", "Vintage Gramophone, Brass horn, Vinyl record, Old music"),
    simpleOpt("furn_tele", "红色电话", "Red Telephone", "Vintage Rotary Telephone, Red hot line, Emergency call, Cold War vibe"),
  ]
};

// 3. 科技与复古装置 (Tech & Retro)
const grpPropTech: OptionGroup = {
  groupNameCN: "3. 科技与复古", groupNameEN: "3. Tech & Retro",
  options: [
    simpleOpt("tech_pc", "老式电脑", "Vintage Computer", "Beige CRT Monitor, Mechanical keyboard, DOS screen, 90s Hacker"),
    simpleOpt("tech_holo", "全息投影", "Hologram", "Holographic projection, Blue wireframe, Floating UI, Sci-fi tech"),
    simpleOpt("tech_robot", "机器人手臂", "Robot Arm", "Industrial Robot Arm, Wires, Servo motors, Assembly line"),
    simpleOpt("tech_server", "服务器机架", "Server Rack", "Server Rack, Blinking LEDs, Cables, Data center noise"),
    simpleOpt("tech_cam", "监控探头", "CCTV Camera", "Security Camera, Red light, Surveillance, Orwellian vibe"),
    simpleOpt("tech_vr", "VR头显", "VR Headset", "Virtual Reality Headset, Cyberpunk visor, Connected cables, Gaming"),
    simpleOpt("tech_drone", "无人机", "Drone", "Flying Drone, Quadcopter, Camera lens, Hovering"),
    simpleOpt("tech_radio", "收音机", "Transistor Radio", "Old Transistor Radio, Antenna, Analog dials, Fallout vibe"),
    simpleOpt("tech_tape", "磁带录音机", "Cassette Player", "Cassette Tape Player, Walkman, Tangled tape, 80s Retro"),
    simpleOpt("tech_tvwall", "电视墙", "TV Wall", "Wall of stacked CRT TVs, Glitch art, Static noise, Media overload"),
    simpleOpt("tech_arcade", "街机", "Arcade Cabinet", "Arcade Game Cabinet, Joystick, Glowing screen, Retro gaming"),
    simpleOpt("tech_neon", "霓虹招牌", "Neon Sign", "Buzzing Neon Sign, 'Open' or 'Motel', Pink and Blue light"),
    simpleOpt("tech_dish", "卫星锅", "Satellite Dish", "Satellite Dish, Rusty metal, Pointing at sky, Communications"),
    simpleOpt("tech_teles", "天文望远镜", "Telescope", "Brass Telescope, Tripod, Pointing at window, Astronomy"),
    simpleOpt("tech_micro", "显微镜", "Microscope", "Lab Microscope, Glass slides, Scientific equipment"),
    simpleOpt("tech_pump", "加油泵", "Gas Pump", "Vintage Gas Pump, Rusty, Route 66 vibe, Abandoned"),
    simpleOpt("tech_juke", "点唱机", "Jukebox", "Vintage Jukebox, Glowing lights, Chrome, Diner aesthetics"),
    simpleOpt("tech_fan", "工业风扇", "Industrial Fan", "Large Metal Industrial Fan, Spinning blades, Ventilation"),
    simpleOpt("tech_iv", "输液架", "IV Drip", "Medical IV Drip stand, Plastic bag, Hospital prop"),
    simpleOpt("tech_pod", "休眠舱", "Cryo Pod", "Sci-fi Cryo Pod, Glass door, Frost, Sleeping human inside"),
    simpleOpt("tech_arm", "义肢", "Cybernetic Arm", "Mechanical Prosthetic Arm, Chrome metal, Wires, Cyberpunk"),
    simpleOpt("tech_bomb", "定时炸弹", "Time Bomb", "Time Bomb, Red digital countdown, Colored wires, C4, Tension"),
    simpleOpt("tech_type", "打字机", "Typewriter", "Vintage Typewriter, Paper page, Writer's block, Mechanical keys"),
    simpleOpt("tech_projector", "电影放映机", "Film Projector", "Vintage Film Projector, Film reels, Light beam, Dust in light"),
  ]
};

// 4. 艺术与文明符号 (Art & Culture)
const grpPropArt: OptionGroup = {
  groupNameCN: "4. 艺术与文明", groupNameEN: "4. Art & Culture",
  options: [
    simpleOpt("art_bust", "破碎石膏", "Broken Bust", "Broken Greek Marble Bust, Vaporwave aesthetic, Classical art"),
    simpleOpt("art_statue", "大卫像", "David Statue", "Michelangelo's David statue, White marble, Renaissance art"),
    simpleOpt("art_paint", "油画", "Framed Painting", "Ornate Gold Framed Oil Painting, Portrait, Old Master style"),
    simpleOpt("art_frame", "空画框", "Empty Frame", "Floating Empty Gold Frame, Surrealism, Gallery prop"),
    simpleOpt("art_mask", "威尼斯面具", "Venetian Mask", "Porcelain Venetian Mask, Feathers, Mystery, Masquerade"),
    simpleOpt("art_skull", "头骨", "Human Skull", "Human Skull, Vanitas theme, Memento Mori, Gothic prop"),
    simpleOpt("art_candles", "蜡烛群", "Melted Candles", "Group of Melted Candles, Wax dripping, Flickering flame, Ritual"),
    simpleOpt("art_tarot", "塔罗牌", "Tarot Cards", "Spread of Tarot Cards, Major Arcana, Mysticism, Fortune telling"),
    simpleOpt("art_crystal", "水晶球", "Crystal Ball", "Crystal Ball on stand, Refracted image, Divination, Magic"),
    simpleOpt("art_book", "魔法书", "Grimoire", "Ancient Leather Book, Grimoire, Metal clasps, Dust, Magic spells"),
    simpleOpt("art_scroll", "卷轴", "Scrolls", "Papyrus Scrolls, Rolled up, Ancient knowledge, Library prop"),
    simpleOpt("art_sword", "古剑", "Sword", "Medieval Sword, Rusty blade, Stone pedestal, Weaponry"),
    simpleOpt("art_shield", "盾牌", "Shield", "Battle Shield, Heraldry, Hanging on wall, Knight armor"),
    simpleOpt("art_vase", "青花瓷", "Porcelain Vase", "Blue and White Porcelain Vase, Ming Dynasty style, Flowers"),
    simpleOpt("art_kintsugi", "金缮瓷器", "Kintsugi Pottery", "Broken pottery repaired with gold, Kintsugi, Wabi-sabi"),
    simpleOpt("art_totem", "图腾柱", "Totem", "Wooden Totem carving, Tribal symbols, Ritual object"),
    simpleOpt("art_jewel", "珠宝", "Jewelry Box", "Open Jewelry Box, Pearls, Gold necklace, Sparkle, Treasure"),
    simpleOpt("art_crown", "王冠", "Crown", "Gold Crown, Gemstones, Velvet cushion, Royal symbol"),
    simpleOpt("art_chess", "棋盘", "Chess Set", "Chess Board, Checkmate position, Strategy, Intellectual game"),
    simpleOpt("art_violin", "小提琴", "Violin", "Violin and Bow, Wood texture, Classical music, Instrument"),
    simpleOpt("art_camera", "古董相机", "Vintage Camera", "Vintage Bellows Camera, Tripod, Photography prop"),
    simpleOpt("art_film", "胶卷", "Film Reels", "Film Reels, Unspooled film strip, Cinema history"),
    simpleOpt("art_anchor", "船锚", "Anchor", "Rusty Iron Ship Anchor, Heavy, Nautical theme"),
    simpleOpt("art_coffin", "棺材", "Coffin", "Wooden Coffin, Gothic atmosphere, Vampire prop, Death"),
  ]
};

// 5. 自然与有机静物 (Nature & Organic)
const grpPropNature: OptionGroup = {
  groupNameCN: "5. 自然与有机", groupNameEN: "5. Nature & Organic",
  options: [
    simpleOpt("nat_plant", "盆栽", "Potted Plant", "Green Potted Plant, Monstera leaf, Indoor nature, Fresh"),
    simpleOpt("nat_flower", "花束", "Bouquet", "Vase of Fresh Flowers, Colorful bloom, Romantic gesture"),
    simpleOpt("nat_wilt", "枯萎花朵", "Wilted Flower", "Wilted Rose, Drooping petals, Dry, Melancholy, Vanitas"),
    simpleOpt("nat_vines", "藤蔓", "Creeping Vines", "Ivy vines creeping on wall, Overgrowth, Nature reclaiming"),
    simpleOpt("nat_tree", "枯树", "Dead Tree", "Dead Tree silhouette, Leafless branches, Spooky atmosphere"),
    simpleOpt("nat_leaves", "落叶", "Autumn Leaves", "Scattered Autumn Leaves on floor, Red and Orange, Dry texture"),
    simpleOpt("nat_rock", "岩石", "Rocks", "Natural Rocks, Stones, Zen garden arrangement, Earthy"),
    simpleOpt("nat_crys", "水晶簇", "Crystals", "Amethyst Crystal Cluster, Purple geode, Magic mineral, Sparkle"),
    simpleOpt("nat_apple", "苹果", "Red Apple", "Single Red Apple, Snow White vibe, Fresh fruit, Still life"),
    simpleOpt("nat_fruit", "腐烂水果", "Rotting Fruit", "Bowl of Rotting Fruit, Mold, Flies, Decay, Memento Mori"),
    simpleOpt("nat_bone", "动物骨骼", "Animal Bones", "Animal Skull, Rib cage, Bleached white bones, Desert vibe"),
    simpleOpt("nat_feather", "羽毛", "Feathers", "Floating White Feathers, Angelic, Softness, Bird traces"),
    simpleOpt("nat_shell", "贝壳", "Seashells", "Collection of Seashells, Conch, Ocean vibe, Beachcomber"),
    simpleOpt("nat_mushroom", "蘑菇", "Mushrooms", "Glowing Mushrooms, Fungi growing on wood, Magical forest"),
    simpleOpt("nat_log", "原木", "Log", "Wooden Log, Firewood, Mossy texture, Forest prop"),
    simpleOpt("nat_pump", "南瓜", "Pumpkin", "Orange Pumpkin, Jack-o'-lantern, Halloween vibe, Autumn harvest"),
    simpleOpt("nat_wheat", "麦穗", "Wheat", "Bundle of dried Wheat, Golden color, Harvest, Farmhouse decor"),
    simpleOpt("nat_bamboo", "竹子", "Bamboo", "Green Bamboo stalks, Zen atmosphere, Asian garden"),
    simpleOpt("nat_coral", "珊瑚", "Coral", "Dried White Coral, Marine texture, Aquarium prop"),
    simpleOpt("nat_egg", "鸟蛋", "Bird Eggs", "Nest with Blue Bird Eggs, Fragile, New life, Nature"),
    simpleOpt("nat_spider", "蜘蛛网", "Spiderweb", "Intricate Spiderweb, Dew drops, Spooky corner, Abandoned"),
    simpleOpt("nat_butterfly", "蝴蝶标本", "Butterfly Frame", "Framed Butterfly Specimen, Pinned insect, Entomology, Victorian"),
    simpleOpt("nat_fish", "金鱼缸", "Goldfish Bowl", "Glass Bowl with Goldfish, Water distortion, Pet, Solitude"),
    simpleOpt("nat_cactus", "仙人掌", "Cactus", "Potted Cactus, Spikes, Desert plant, Minimalist decor"),
  ]
};

// 6. 工业与危险品 (Industrial & Hazard)
const grpPropInd: OptionGroup = {
  groupNameCN: "6. 工业与危险", groupNameEN: "6. Industrial & Hazard",
  options: [
    simpleOpt("ind_barrel", "油桶", "Oil Drum", "Rusty Oil Drum, Leaking toxic sludge, Industrial waste, Hazard"),
    simpleOpt("ind_chain", "铁链", "Chains", "Hanging Rusty Chains, Heavy metal, Dungeon or Factory vibe"),
    simpleOpt("ind_box", "板条箱", "Wooden Crate", "Shipping Wooden Crate, Cargo, Warehouse prop, Storage"),
    simpleOpt("ind_pallet", "托盘", "Pallet", "Wooden Pallet, Stacked, Industrial floor, Logistics"),
    simpleOpt("ind_cone", "交通锥", "Traffic Cone", "Orange Traffic Cone, Construction zone, Warning"),
    simpleOpt("ind_tool", "工具挂板", "Tools", "Wall of Tools, Wrench, Hammer, Screwdriver, Workshop"),
    simpleOpt("ind_ladder", "金属梯", "Metal Ladder", "Rusted Metal Ladder, Fire escape, Industrial texture"),
    simpleOpt("ind_pipe", "管道", "Pipes", "Exposed Pipes, Steam leaking, Valves, Industrial aesthetic"),
    simpleOpt("ind_fence", "铁丝网", "Chain Link Fence", "Chain Link Fence, Barbed wire top, Restricted area, Urban cage"),
    simpleOpt("ind_sign", "路牌", "Street Sign", "Metal Street Sign, Stop sign, Rusty, Urban prop"),
    simpleOpt("ind_wheel", "轮胎", "Tire", "Old Car Tire, Rubber texture, Junkyard prop, Trash"),
    simpleOpt("ind_brick", "砖块", "Bricks", "Pile of Red Bricks, Construction debris, Ruined wall"),
    simpleOpt("ind_bulb", "灯泡", "Light Bulb", "Hanging naked Light Bulb, Filament glow, Gritty atmosphere"),
    simpleOpt("ind_fan", "排气扇", "Exhaust Fan", "Rusty Exhaust Fan, Spinning, Industrial ventilation"),
    simpleOpt("ind_cart", "推车", "Shopping Cart", "Abandoned Shopping Cart, Rusty, Urban decay, Homeless prop"),
    simpleOpt("ind_container", "集装箱", "Shipping Container", "Corrugated Shipping Container, Colorful metal, Port vibe"),
    simpleOpt("ind_scaff", "脚手架", "Scaffolding", "Metal Scaffolding, Construction site, Pipes and boards"),
    simpleOpt("ind_manhole", "井盖", "Manhole Cover", "Iron Manhole Cover, Steam rising, Street texture"),
    simpleOpt("ind_meter", "仪表盘", "Pressure Gauge", "Brass Pressure Gauge, Steampunk, Industrial machine"),
    simpleOpt("ind_lever", "拉杆/开关", "Lever", "Industrial Switch Lever, Heavy machinery control, Retro tech"),
    simpleOpt("ind_hazmat", "生化桶", "Biohazard Barrel", "Yellow Barrel with Biohazard symbol, Toxic waste, Danger"),
    simpleOpt("ind_fire", "灭火器", "Fire Extinguisher", "Red Fire Extinguisher, Safety equipment, Wall mounted"),
    simpleOpt("ind_anvil", "铁砧", "Anvil", "Blacksmith Anvil, Heavy iron, Forge prop"),
    simpleOpt("ind_gear", "齿轮", "Gears", "Large Rusty Gears, Machine parts, Steampunk aesthetic"),
  ]
};

// 7. 食物与宴会 (Food & Feast)
const grpPropFood: OptionGroup = {
  groupNameCN: "7. 食物与宴会", groupNameEN: "7. Food & Feast",
  options: [
    simpleOpt("food_banquet", "盛宴", "Feast", "Medieval Feast table, Roast chicken, Wine, Silverware, Gluttony"),
    simpleOpt("food_cake", "生日蛋糕", "Birthday Cake", "Birthday Cake with candles, Celebration, Sweet, Party"),
    simpleOpt("food_coffee", "咖啡杯", "Coffee Cup", "Steaming Coffee Cup, Latte art, Cafe vibe, Morning"),
    simpleOpt("food_tea", "茶具", "Tea Set", "Porcelain Tea Set, Teapot, Afternoon tea, Elegant"),
    simpleOpt("food_wine", "红酒", "Red Wine", "Glass of Red Wine, Wine Bottle, Romantic dinner, Alcohol"),
    simpleOpt("food_bread", "面包", "Bread", "Freshly baked Bread, Baguette, Flour dust, Bakery vibe"),
    simpleOpt("food_fruit", "果盘", "Fruit Bowl", "Bowl of Fresh Fruit, Grapes, Apples, Still life painting style"),
    simpleOpt("food_meat", "生肉", "Raw Meat", "Slab of Raw Meat, Butcher shop, Blood, Visceral texture"),
    simpleOpt("food_sushi", "寿司", "Sushi", "Plate of Sushi, Sashimi, Japanese food, Fine dining"),
    simpleOpt("food_burger", "快餐", "Burger & Fries", "Cheeseburger and Fries, Fast food wrapper, American diner"),
    simpleOpt("food_donut", "甜甜圈", "Donuts", "Box of colorful Donuts, Glazed, Police station prop"),
    simpleOpt("food_ice", "冰淇淋", "Ice Cream", "Melting Ice Cream cone, Summer vibe, Sweet"),
    simpleOpt("food_beer", "啤酒", "Beer Mug", "Frothy Beer Mug, Pub atmosphere, Golden liquid"),
    simpleOpt("food_cocktail", "鸡尾酒", "Cocktail", "Colorful Cocktail, Martini glass, Olive, Bar prop"),
    simpleOpt("food_champ", "香槟塔", "Champagne Tower", "Tower of Champagne glasses, Luxury party, Celebration"),
    simpleOpt("food_picnic", "野餐篮", "Picnic Basket", "Wicker Picnic Basket, Checkered cloth, Sandwich, Outdoors"),
    simpleOpt("food_cereal", "麦片", "Cereal Bowl", "Bowl of Cereal with milk, Spoon, Breakfast table"),
    simpleOpt("food_egg", "煎蛋", "Fried Egg", "Fried Egg in pan, Bacon, Sizzling, Kitchen prop"),
    simpleOpt("food_candy", "糖果", "Candy Jar", "Jar filled with colorful Candy, Lollipops, Sweet shop"),
    simpleOpt("food_cheese", "奶酪板", "Cheese Board", "Cheese Board, Grapes, Knife, Charcuterie, Gourmet"),
    simpleOpt("food_noodle", "泡面", "Instant Noodles", "Cup of Instant Noodles, Steam, Late night snack, Cyberpunk food"),
    simpleOpt("food_lobster", "龙虾", "Lobster", "Cooked Red Lobster, Luxury dinner, Seafood"),
    simpleOpt("food_pie", "派", "Pie", "Freshly baked Pie, Steam, Window sill, Home comfort"),
    simpleOpt("food_milk", "牛奶", "Milk Bottle", "Glass Milk Bottle, Vintage dairy, White liquid"),
  ]
};

// 8. 抽象几何体 (Abstract Shapes)
const grpPropShape: OptionGroup = {
  groupNameCN: "8. 抽象几何体", groupNameEN: "8. Abstract Shapes",
  options: [
    simpleOpt("shape_sphere", "铬球", "Chrome Sphere", "Floating Chrome Sphere, Reflection mapping, Scifi prop, Shiny"),
    simpleOpt("shape_cube", "发光立方", "Glowing Cube", "Glowing Blue Cube, Tesseract, Sci-fi energy source, Geometric"),
    simpleOpt("shape_pyra", "金字塔", "Pyramid", "Crystal Pyramid, Prism, Mystery power, Geometric"),
    simpleOpt("shape_mono", "黑石碑", "Monolith", "Black Monolith slab, Matte black, Alien artifact, 2001 vibe"),
    simpleOpt("shape_ring", "光环", "Neon Ring", "Giant Neon Ring light, Portal shape, Circular geometry"),
    simpleOpt("shape_blob", "液态球", "Liquid Blob", "Floating Liquid Mercury Blob, T-1000 texture, Amorphous shape"),
    simpleOpt("shape_ico", "二十面体", "Icosahedron", "Floating Icosahedron, D&D Dice shape, Sacred geometry"),
    simpleOpt("shape_spiral", "螺旋", "Spiral", "Fibonacci Spiral sculpture, Golden ratio, Abstract art"),
    simpleOpt("shape_donut", "圆环体", "Torus", "Donut shape Torus, 3D primitive, Mathematical form"),
    simpleOpt("shape_grid", "网格", "3D Grid", "Floating 3D Grid, Wireframe, Blueprint aesthetic"),
    simpleOpt("shape_cloud", "低多边形云", "Low Poly Cloud", "Geometric Cloud, Paper craft style, Pastel color"),
    simpleOpt("shape_prism", "棱镜", "Glass Prism", "Glass Prism, Rainbow light refraction, Physics prop"),
    simpleOpt("shape_obelisk", "方尖碑", "Obelisk", "Stone Obelisk, Ancient monument, Tall pillar"),
    simpleOpt("shape_frame", "线框立方", "Wireframe Cube", "Neon Wireframe Cube, Holographic edge, Tech demo style"),
    simpleOpt("shape_fluid", "流体雕塑", "Fluid Sculpture", "Frozen fluid splash sculpture, Water shape, Artistic"),
    simpleOpt("shape_knot", "凯尔特结", "Knot", "Endless Knot shape, Complex geometry, Abstract loop"),
    simpleOpt("shape_metaball", "融球", "Metaballs", "Merging organic spheres, Gooey interaction, 3D effect"),
    simpleOpt("shape_shard", "碎片", "Shards", "Exploding Shards, Floating fragments, Chaos geometry"),
    simpleOpt("shape_pill", "胶囊", "Pill Shape", "Giant Pill shape, Medical abstract, Capsule"),
    simpleOpt("shape_star", "星星", "Star Shape", "Glowing Star shape, Mario star style, Symbol"),
    simpleOpt("shape_heart", "心形", "Heart Shape", "Floating Heart shape, Neon red, Love symbol"),
    simpleOpt("shape_diamond", "钻石", "Diamond", "Giant cut Diamond, Refraction, Luxury symbol"),
    simpleOpt("shape_dna", "DNA双螺旋", "DNA Helix", "Holographic DNA Helix, Biology, Rotating spiral"),
    simpleOpt("shape_atom", "原子模型", "Atom", "Atom model, Electrons orbiting nucleus, Science symbol"),
  ]
};

// 3. Time & Weather

const grpTime: OptionGroup = {
  groupNameCN: "时间与光照", groupNameEN: "Time & Lighting",
  options: [
    simpleOpt("tm_predawn", "破晓/蒙昧", "Pre-dawn", "Pre-dawn, Gloomy, Cold dark blue, Before sunrise, Low visibility, Eerie silence"),
    simpleOpt("tm_dawn", "黎明/日出", "Sunrise/Dawn", "Sunrise, Dawn, First light, Long shadows, Hopeful, Soft orange glow, Morning dew"),
    simpleOpt("tm_morn", "清晨/通透", "Clear Morning", "Clear Morning, Fresh atmosphere, Bright clean light, Azure sky, Crisp details"),
    simpleOpt("tm_noon", "正午/硬光", "High Noon", "High Noon, Midday, Overhead sun, Harsh sunlight, Hard sharp shadows, High contrast, Bleached colors"),
    simpleOpt("tm_after", "午后/斜阳", "Late Afternoon", "Late Afternoon, Slanted light, Defined shadows, Warm but not orange, Relaxed atmosphere"),
    simpleOpt("tm_gold", "金时 (黄昏)", "Golden Hour", "Golden Hour, Sunset light, Warm orange gold glow, Rim light, Magical atmosphere, Cinematic"),
    simpleOpt("tm_sunset", "日落/燃烧", "Sunset", "Sunset, Burning sky, Red and Purple clouds, Silhouette, Dramatic ending, Horizon glow"),
    simpleOpt("tm_blue", "蓝调 (暮色)", "Blue Hour", "Blue Hour, Twilight, Post-sunset, Cold deep blue tones, Street lights turning on, Melancholy"),
    simpleOpt("tm_moon", "明月夜", "Moonlight", "Full Moon night, Bright Moonlight, Silver cool light, Visible details, Dreamy night"),
    simpleOpt("tm_dark", "漆黑/无光", "Pitch Black", "Pitch Black, No moon, Darkness, Only artificial lights visible, Horror atmosphere, Mystery"),
    simpleOpt("tm_star", "星夜/银河", "Starry Night", "Starry Night, Milky Way, Clear night sky, Astrophotography, Vast universe"),
    simpleOpt("tm_white", "极昼/白夜", "White Night", "White Night, Midnight Sun, Nordic summer, Surreal bright night, Low sun at midnight"),
    simpleOpt("tm_over", "阴天/柔光", "Overcast/Diffused", "Overcast sky, Diffused soft light, Shadowless, Even lighting, Flat light, Moodless"),
    simpleOpt("tm_eclipse", "日食/黑日", "Solar Eclipse", "Solar Eclipse, Ring of Fire, Unnatural darkness, Eerie shadows, Apocalyptic omen"),
    simpleOpt("tm_bio", "生物荧光", "Bioluminescent", "Bioluminescent Night, Pandora style, Glowing plants, Neon nature, Avatar aesthetic, Magical darkness"),
  ]
};

const grpWeather: OptionGroup = {
  groupNameCN: "天气与大气", groupNameEN: "Weather & Atmosphere",
  options: [
    simpleOpt("wea_clear", "晴空万里", "Clear/Sunny", "Clear Sky, Sunny, Cloudless, Azure sky, High visibility, Crisp atmosphere"),
    simpleOpt("wea_cloudy", "多云/阴霾", "Overcast/Cloudy", "Overcast, Cloudy sky, Grey clouds, Gloomy atmosphere, Soft diffuse light"),
    simpleOpt("wea_rain", "降雨/湿润", "Rain & Puddles", "Raining, Raindrops, Wet surfaces, Puddles on ground, Reflections, Splashing"),
    simpleOpt("wea_snow", "降雪/积雪", "Snowing", "Falling snow, Snowflakes, Snow covered ground, Winter atmosphere, Frosty"),
    simpleOpt("wea_fog", "浓雾 (寂静岭)", "Heavy Fog", "Heavy Fog, Dense Mist, Low visibility, Whiteout, Mysterious, Silent Hill vibe"),
    simpleOpt("wea_mist", "薄雾/晨霭", "Mist/Haze", "Light Mist, Haze, Atmospheric depth, Morning mist, Softening distance"),
    simpleOpt("wea_steam", "蒸汽/地热", "Steam/Smoke", "Rising steam, Smoke vents, Geothermal steam, Industrial smoke, Hazy air"),
    simpleOpt("wea_dust", "光尘/微粒", "Dust Motes", "Floating dust motes, Particles in air, Dusty atmosphere, Tyndall effect, Old room vibe"),
    simpleOpt("wea_ember", "余烬/火星", "Embers/Sparks", "Flying embers, Fire sparks, Burning ash in air, Post-fire atmosphere, Chaos"),
    simpleOpt("wea_pollen", "花粉/孢子", "Pollen/Spores", "Floating pollen, Glowing spores, Magical particles, Fantasy forest atmosphere, Ethereal"),
    simpleOpt("wea_petal", "花瓣飘落", "Falling Petals", "Falling Cherry Blossom petals, Flower petals in wind, Romantic, Anime aesthetic"),
    simpleOpt("wea_storm", "雷暴/闪电", "Thunderstorm", "Thunderstorm, Lightning bolts, Dark ominous sky, Heavy rain, Dramatic energy"),
    simpleOpt("wea_sand", "沙尘暴", "Sandstorm", "Sandstorm, Dust storm, Orange haze, Low visibility, Desert storm, Mad Max vibe"),
    simpleOpt("wea_blizz", "暴风雪", "Blizzard", "Blizzard, Whiteout, Strong wind, Horizontal snow, Harsh winter, Survival vibe"),
    simpleOpt("wea_wind", "大风/疾风", "Strong Wind", "Strong wind, Blowing hair, Trees bending, Leaves flying, Dynamic motion"),
  ]
};

export const sceneOptions = {
    environment: [
      grpRes, grpUrban, grpComm, grpInd, grpHist, grpNature, grpSciFi, grpFantasy, grpStudio,
      grpSetAbstract, grpSetSurreal, grpSetMaterial, grpSetNature, grpSetSymbolic, grpSetLight, grpSetPop
    ],
    // New Space Category
    space: [grpScale, grpComp, grpBgColor],
    props: [grpPropLife, grpPropFurn, grpPropTech, grpPropArt, grpPropNature, grpPropInd, grpPropFood, grpPropShape],
    time: [grpTime],
    weather: [grpWeather],
};

export const initialScene: SceneState = {
  environment: "", space: "", props: "", time: "", weather: ""
};
