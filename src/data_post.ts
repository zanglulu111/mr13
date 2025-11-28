
import { OptionGroup } from './types';
import { simpleOpt } from './data_helpers';

// 1. Camera & Composition (Legacy Preserved)
const grpShot: OptionGroup = {
  groupNameCN: "景别", groupNameEN: "Shot Size",
  options: [
    simpleOpt("shot_ecu", "大特写 (ECU)", "Extreme Close-up", "Extreme Close-up, Macro focus, Iris detail, Skin texture"),
    simpleOpt("shot_cu", "近景 (CU)", "Close-up", "Close-up shot, Face focus, Emotional expression"),
    simpleOpt("shot_mcu", "中近景 (MCU)", "Medium Close-up", "Medium Close-up, Chest up, Portrait composition"),
    simpleOpt("shot_med", "中景 (MS)", "Medium Shot", "Medium shot, Waist up, Cowboy shot"),
    simpleOpt("shot_full", "全景/全身 (FS)", "Full Body", "Full Body shot, Head to toe, Showing outfit"),
    simpleOpt("shot_wide", "远景 (WS)", "Wide Shot", "Wide shot, Environmental portrait, Character in context"),
    simpleOpt("shot_ext", "大远景 (EWS)", "Extreme Wide Shot", "Extreme Wide shot, Epic scale, Tiny figure in landscape"),
  ]
};

const grpAngle: OptionGroup = {
  groupNameCN: "机位角度", groupNameEN: "Camera Angle",
  options: [
    simpleOpt("ang_eye", "平视", "Eye-Level", "Eye-Level angle, Neutral perspective"),
    simpleOpt("ang_low", "低角度 (仰视)", "Low Angle", "Low Angle shot, Worm's Eye view, Looking up, Imposing"),
    simpleOpt("ang_high", "高角度 (俯视)", "High Angle", "High Angle shot, Looking down, Vulnerable subject"),
    simpleOpt("ang_top", "上帝视角 (顶视)", "Top-down / Aerial", "Top-down view, Aerial angle, Drone shot, Map view"),
    simpleOpt("ang_dutch", "荷兰角 (倾斜)", "Dutch Angle", "Dutch Angle, Tilted camera, Unease, Dynamic tension"),
    simpleOpt("ang_pov", "第一人称 (POV)", "POV", "POV Shot, First Person perspective, Handheld camera"),
    simpleOpt("ang_shoulder", "过肩镜头", "Over-the-Shoulder", "Over-the-Shoulder shot, Behind the back"),
  ]
};

const grpLighting: OptionGroup = {
  groupNameCN: "专业布光", groupNameEN: "Lighting",
  options: [
    simpleOpt("lit_rem", "伦勃朗光", "Rembrandt", "Rembrandt Lighting, Chiaroscuro, Triangle light on cheek, Moody"),
    simpleOpt("lit_butter", "蝴蝶光", "Butterfly", "Butterfly Lighting, Paramount lighting, Shadow under nose, Glamour"),
    simpleOpt("lit_split", "侧逆光/阴阳脸", "Split Lighting", "Split Lighting, Side lighting, Half face in shadow, High contrast"),
    simpleOpt("lit_rim", "轮廓光", "Rim Lighting", "Rim Lighting, Backlight, Halo effect, Separated from background"),
    simpleOpt("lit_sil", "剪影", "Silhouette", "Silhouette, Backlit, Dark figure against bright background"),
    simpleOpt("lit_soft", "柔光箱", "Softbox", "Softbox Lighting, Diffuse light, Soft shadows, Studio look"),
    simpleOpt("lit_hard", "硬光", "Hard Light", "Hard Light, Sharp shadows, High contrast, Noir style"),
    simpleOpt("lit_vol", "体积光/丁达尔", "Volumetric", "Volumetric Lighting, God Rays, Shafts of light, Dusty air"),
    simpleOpt("lit_cine", "电影感布光", "Cinematic", "Cinematic Lighting, Teal and Orange, Dramatic atmosphere"),
    simpleOpt("lit_neon", "霓虹光", "Neon", "Neon Lighting, Cyan and Magenta glow, Cyberpunk vibe"),
    simpleOpt("lit_bio", "生物荧光", "Bioluminescence", "Bioluminescence, Glowing blue/green organic light, Ethereal"),
    simpleOpt("lit_candle", "烛光", "Candlelight", "Candlelight, Warm flickering glow, Firelight, Intimate"),
    simpleOpt("lit_fire", "火光", "Bonfire", "Bonfire lighting, Dynamic orange glow, Dancing shadows"),
    simpleOpt("lit_strobe", "频闪", "Strobe", "Strobe Light, Flashing, Club lighting, Frozen motion"),
    simpleOpt("lit_gobo", "百叶窗/投影", "Gobo", "Gobo Lighting, Window blind shadows, Projected patterns"),
    simpleOpt("lit_under", "底光 (恐怖)", "Under-lighting", "Under-lighting, Horror lighting, Flashlight under chin"),
    simpleOpt("lit_top", "顶光 (审讯)", "Top Light", "Overhead spotlight, Skull shadows, Interrogation room style"),
    simpleOpt("lit_nat", "自然窗光", "Natural Window", "Natural Window Light, Soft daylight, Vermeer style"),
    simpleOpt("lit_gold", "金时 (黄昏)", "Golden Hour", "Golden Hour lighting, Warm orange sun, Long shadows"),
    simpleOpt("lit_blue", "蓝调 (黎明)", "Blue Hour", "Blue Hour lighting, Cold twilight, Melancholic"),
  ]
};

// --- NEW: Photography & Camera ---

// 1. 摄影介质与器材 (Format & Device)
const grpCamDevice: OptionGroup = {
    groupNameCN: "摄影介质与器材", groupNameEN: "Format & Device",
    options: [
        // --- 胶片与模拟 ---
        simpleOpt("dev_35mm", "35mm 胶片", "35mm Film", "Shot on 35mm Film, Kodak Portra 400, Analog Texture, Warm Tones, Nostalgic"),
        simpleOpt("dev_16mm", "16mm 电影胶卷", "16mm Film", "Shot on 16mm Film, Vintage Movie aesthetic, Arriflex camera, Soft grain, Retro cinema"),
        simpleOpt("dev_imax", "IMAX 70mm", "IMAX 70mm", "IMAX 70mm, Shot on Arri Alexa 65, Incredible Detail, Epic Scale, 8K resolution"),
        simpleOpt("dev_polar", "拍立得", "Polaroid", "Polaroid Photo, Instant film aesthetic, White border, Soft vignetting, Flash photography, Imperfect"),
        simpleOpt("dev_wet", "湿版摄影", "Wet Plate", "Wet Plate Collodion, Tin Type Photography, 19th Century, Scratched Texture, Black and white, Antique"),
        simpleOpt("dev_leica", "徕卡黑白", "Leica M6 B&W", "Shot on Leica M6, Kodak Tri-X 400, High Contrast Black and White, Street Photography grain"),
        
        // --- 特殊/低保真器材 ---
        simpleOpt("dev_vhs", "VHS录像带", "VHS Tape", "VHS Tape Artifacts, Tracking lines, Low resolution, 90s Home Video style, Magnetic tape noise"),
        simpleOpt("dev_cctv", "监控录像", "CCTV", "CCTV Footage, Security Camera, Low Resolution, Grainy, Night Vision Green, Surveillance"),
        simpleOpt("dev_gopro", "GoPro/运动相机", "Action Cam", "GoPro Footage, Wide Angle Distortion, First Person View (FPV), High saturation, Sharp"),
        simpleOpt("dev_drone", "无人机航拍", "Drone View", "Drone Photography, DJI Mavic, Top-down View, God's Eye View, High Altitude"),
        simpleOpt("dev_therm", "热成像", "Thermal", "Thermal Imaging, Heat Map, Infrared Camera, Predator Vision, Rainbow colors"),
        simpleOpt("dev_nvg", "夜视仪", "Night Vision", "Night Vision Goggles, Green phosphor screen, Grainy, Military footage"),
    ]
};

// 2. 镜头焦段与物理特质 (Lens Character)
const grpCamLens: OptionGroup = {
    groupNameCN: "镜头物理特质", groupNameEN: "Lens Physics",
    options: [
        simpleOpt("lens_wide", "超广角", "Ultra-Wide Angle", "Ultra-Wide Angle Lens, 14mm, Expansive view, Slight distortion at edges, Dynamic perspective"),
        simpleOpt("lens_fish", "鱼眼畸变", "Fisheye", "Fisheye Lens, Spherical distortion, 180 degree view, Skate video style, Bulging center"),
        simpleOpt("lens_tele", "长焦压缩", "Telephoto Compression", "Telephoto Lens, 200mm, Compressed background, Flat perspective, Background appears close"),
        simpleOpt("lens_macro", "微距细节", "Macro Lens", "Macro Lens, Extreme close-up, 100mm Macro, Visible textures, Microscopic world"),
        simpleOpt("lens_tilt", "移轴(微缩)", "Tilt-Shift", "Tilt-Shift Lens, Miniature effect, Blurry top and bottom, Toy city look, Selective focus"),
        simpleOpt("lens_motion", "动态模糊", "Motion Blur", "Motion Blur, Long Exposure, Shutter drag, Speed lines, Streaking lights"),
        simpleOpt("lens_shaky", "手持晃动", "Handheld/Shaky", "Handheld Camera, Shaky footage, Cloverfield style, Realistic chaos, Documentary vibe"),
        simpleOpt("lens_split", "屈光度/分割", "Split Diopter", "Split Diopter Shot, Both foreground and background in sharp focus, Brian De Palma style"),
    ]
};

// 3. 光学现象与光斑 (Optics & Bokeh)
const grpCamOptics: OptionGroup = {
    groupNameCN: "光学与光斑", groupNameEN: "Optics & Bokeh",
    options: [
        // --- 虚化与光斑 ---
        simpleOpt("opt_bokeh_c", "奶油虚化", "Creamy Bokeh", "Creamy Bokeh, Smooth background blur, f/1.2 aperture, Soft focus, Dreamy, Portrait photography"),
        simpleOpt("opt_bokeh_s", "旋焦光斑", "Swirly Bokeh", "Swirly Bokeh, Petzval Lens effect, Vintage distortion, Circular background blur, Old glass character"),
        simpleOpt("opt_bokeh_a", "变形宽银幕", "Anamorphic Bokeh", "Anamorphic Lens, Oval Bokeh, Cinematic look, Horizontal lens flare, JJ Abrams style"),
        simpleOpt("opt_bokeh_h", "心形光斑", "Heart Bokeh", "Heart Shaped Bokeh, Custom aperture shape, Romantic, City lights in background"),
        
        // --- 光线瑕疵 ---
        simpleOpt("opt_flare", "镜头光晕", "Lens Flare", "Lens Flare, Sun flare, Light hitting the lens, Cinematic artifact, Summer vibe"),
        simpleOpt("opt_leak", "漏光", "Light Leaks", "Film Light Leaks, Red and Orange burns, Overexposed edges, Vintage film error"),
        simpleOpt("opt_bloom", "柔光/光溢出", "Bloom/Glow", "Bloom Effect, Soft focus, Dreamy glow around highlights, Diffusion filter, Ethereal"),
        simpleOpt("opt_rays", "丁达尔光柱", "God Rays", "God Rays, Volumetric lighting, Shafts of light piercing through dust/fog, Divine atmosphere"),
        simpleOpt("opt_caust", "水波焦散", "Caustics", "Water Caustics, Light patterns reflected from water, Swimming pool lighting effect"),
        simpleOpt("opt_glint", "星芒/闪光", "Star Filter/Glint", "Star Filter effect, 4-point star lights, Sparkling jewelry, Glittering highlights"),
    ]
};

// --- NEW: Visual Effects (SFX) ---

// 1. 粒子与纹理 (Sub-grouped)

const grpVFXTech: OptionGroup = {
    groupNameCN: "科技与抽象粒子", groupNameEN: "Tech & Abstract",
    options: [
        simpleOpt("part_plexus", "点线连接 (Plexus)", "Plexus Effect", "Abstract Plexus effect, Connecting dots and lines, Network topology, Constellation pattern, High-tech data visualization, Clean"),
        simpleOpt("part_flow", "流体粒子 (Apple风)", "Abstract Particle Flow", "Abstract Particle Flow, Apple Ad style, Smooth flowing particles, Silk-like motion, Elegant 3D render, Colorful gradients"),
        simpleOpt("part_digi", "数字粉末/解体", "Digital Dispersion", "Disintegrating into digital pixels, Particle dispersion effect, Thanos snap style, Cubes and data fragments"),
        simpleOpt("part_hud", "悬浮UI粒子", "FUI / HUD Particles", "Floating HUD elements, FUI (Futuristic User Interface), Holographic data points, Cyber interface graphics"),
        simpleOpt("part_gold", "金粉/流沙", "Gold Dust", "Floating Gold Dust, Golden glitter, Luxury perfume ad style, Shimmering particles, Bokeh orbs"),
    ]
};

const grpVFXTexture: OptionGroup = {
    groupNameCN: "画面纹理与做旧", groupNameEN: "Texture & Imperfection",
    options: [
        simpleOpt("part_grain", "粗颗粒", "Heavy Film Grain", "Heavy Film Grain, ISO 3200, Noise, Gritty texture, Raw photography style"),
        simpleOpt("part_scratch", "划痕与灰尘", "Scratches & Dust", "Film Scratches, Dust specks on lens, Damaged film aesthetic, Vintage overlay"),
        simpleOpt("part_half", "半调网点", "Halftone Dots", "Halftone Dots, Comic book printing texture, Pop art style, CMYK pattern"),
        simpleOpt("part_scan", "扫描线", "Scanlines", "CRT Scanlines, RGB pixel grid, Monitor texture, Retro tech interface"),
        simpleOpt("part_glitch", "故障噪点", "Glitch Noise", "Digital Glitch, Datamoshing, Pixel sorting, Compression artifacts, Broken video"),
    ]
};

const grpVFXAtmosphere: OptionGroup = {
    groupNameCN: "环境与自然粒子", groupNameEN: "Atmospheric",
    options: [
        simpleOpt("part_dust", "光尘/微粒", "Dust Motes", "Floating Dust Motes in air, Illuminated by light, Old room atmosphere, Tiny particles"),
        simpleOpt("part_ember", "飞舞余烬", "Flying Embers", "Burning Embers floating in air, Fire sparks, Ash, War/Fantasy atmosphere"),
        simpleOpt("part_rain", "镜头雨滴", "Rain on Lens", "Raindrops on camera lens, Water droplets, Blurry foreground spots, Stormy vibe"),
        simpleOpt("part_pollen", "发光孢子", "Glowing Spores", "Floating Bioluminescent Spores, Magical particles, Avatar forest vibe, Fantasy dust"),
        simpleOpt("part_conf", "彩屑", "Confetti", "Falling Confetti, Celebration, Party particles, Colorful paper bits"),
    ]
};

// 2. 艺术滤镜与后期 (Artistic FX)
const grpVFXArt: OptionGroup = {
    groupNameCN: "艺术滤镜与后期", groupNameEN: "Artistic FX",
    options: [
        simpleOpt("art_double", "双重曝光", "Double Exposure", "Double Exposure, Superimposed images, Silhouette overlay, True Detective intro style"),
        simpleOpt("art_prism", "棱镜重影", "Prism Effect", "Prism photography, Fractal glass effect, Kaleidoscopic split, Dreamy fragmentation"),
        simpleOpt("art_chroma", "色差偏移", "Chromatic Aberration", "Chromatic Aberration, RGB shift, Color fringing on edges, Modern glitch vibe"),
        simpleOpt("art_vig", "边缘暗角", "Vignette", "Heavy Vignette, Dark corners, Spotlight center effect, Antique photo look"),
        simpleOpt("art_kaleid", "万花筒", "Kaleidoscope", "Kaleidoscope pattern, Symmetrical reflection, Psychedelic geometry, Abstract"),
        simpleOpt("art_duo", "双色调", "Duotone", "Duotone colors, Spotify style, High contrast two-color palette, Graphic design look"),
        simpleOpt("art_infra", "红外摄影", "Infrared/Aerochrome", "Kodak Aerochrome style, False color, Pink trees, Surreal infrared photography"),
        simpleOpt("art_xray", "X光透视", "X-Ray", "X-Ray visual style, Skeleton view, Transparent layers, Negative colors"),
    ]
};

// --- NEW: Quality Boosters ---

// 1. 通用质量提升
const grpQualGeneral: OptionGroup = {
    groupNameCN: "通用质量提升", groupNameEN: "Universal Boosters",
    options: [
        simpleOpt("qual_master", "杰作/大师级", "Masterpiece", "Masterpiece, Best Quality, Award winning, Top quality, High aesthetic"),
        simpleOpt("qual_best", "最佳画质", "Best Quality", "Best Quality, Highres, High quality, 8k resolution, Sharp"),
        simpleOpt("qual_award", "获奖作品", "Award Winning", "Award Winning Art, Trending on ArtStation, Featured on Pixiv, Highly praised"),
        simpleOpt("qual_sharp", "锐利聚焦", "Sharp Focus", "Sharp Focus, Sharp edges, In focus, Crisp details, Clear features"),
        simpleOpt("qual_hdr", "高动态范围 (HDR)", "HDR", "HDR, High Dynamic Range, Vivid colors, Rich contrast, Detailed shadows and highlights"),
        simpleOpt("qual_clean", "纯净画面", "Clean", "Clean lines, Clean background, No noise, De-noise, Smooth"),
    ]
};

// 2. 摄影写实与肌理
const grpQualPhoto: OptionGroup = {
    groupNameCN: "摄影写实与肌理", groupNameEN: "Photorealism & Texture",
    options: [
        simpleOpt("qual_raw", "RAW 原片感", "RAW Photo", "RAW photo, Analog style, Unprocessed, Realistic lighting, High fidelity, DSLR, Fujifilm color"),
        simpleOpt("qual_skin", "真实皮肤肌理", "Realistic Skin Texture", "Realistic skin texture, Detailed pores, Skin imperfections, Goosebumps, Subsurface scattering"),
        simpleOpt("qual_tex", "极致材质纹理", "Intricate Textures", "Intricate textures, Tangible texture, Fabric detail, Wood grain, Metal scratch, Roughness"),
        simpleOpt("qual_photo", "超写实主义", "Photorealistic", "Photorealistic, Hyper-realistic, 8k uhd, Photography, Maximum detail, Lifelike"),
        simpleOpt("qual_film", "电影级质感", "Cinematic Grain", "Cinematic texture, Film grain, Movie still, Color graded, Detailed atmosphere"),
        simpleOpt("qual_eye", "眼部细节", "Detailed Eyes", "Beautifully detailed eyes, Detailed iris, Reflection in eyes, Macro eye details"),
    ]
};

// 3. 3D渲染与数字细节
const grpQualCG: OptionGroup = {
    groupNameCN: "3D渲染与细节", groupNameEN: "3D Render & CG",
    options: [
        simpleOpt("qual_ue5", "虚幻引擎 5", "Unreal Engine 5", "Unreal Engine 5, Lumen, Nanite, Real-time rendering, Game cinematic style, 8K"),
        simpleOpt("qual_octane", "OC 渲染", "Octane Render", "Octane Render, Physically based rendering (PBR), Path tracing, Hyper-detailed 3D, Commercial render"),
        simpleOpt("qual_ray", "光线追踪", "Ray Tracing", "Ray Tracing, Global Illumination, Accurate reflections, Ambient Occlusion, Volumetric light"),
        simpleOpt("qual_ultra", "超精细细节", "Ultra Detailed", "Ultra Detailed, Insane details, Intricate details, High definition, Microscopic details"),
        simpleOpt("qual_vray", "V-Ray 建筑感", "V-Ray Render", "V-Ray Render, Architectural visualization, Photometric lighting, Clean render, Soft shadows"),
        simpleOpt("qual_zbrush", "ZBrush 雕刻", "ZBrush Sculpt", "ZBrush Central style, Digital sculpting, Clay render, High poly model"),
    ]
};

// 4. 2D 艺术与手绘质感
const grpQualArt: OptionGroup = {
    groupNameCN: "绘画与手绘质感", groupNameEN: "2D Art & Brushwork",
    options: [
        simpleOpt("qual_offical", "官方原画水准", "Official Art", "Official Art, Key Visual, High Production Value, Highly detailed, Anime Screencap, Studio Ghibli quality"),
        simpleOpt("qual_detail_2d", "精细插画", "Intricate Illustration", "Intricate details, Finely detailed, Hyper-detailed illustration, Complex background, Wallpaper"),
        simpleOpt("qual_lines", "清晰线稿", "Clear Lineart", "Clear Lineart, Bold lines, Crisp outlines, Ink lines, G-pen style, No messy lines"),
        simpleOpt("qual_color", "鲜艳色彩", "Vibrant Colors", "Vibrant Colors, Vivid palette, Colorful, High saturation, Anime coloring"),
        simpleOpt("qual_impasto", "厚涂/油画", "Thick Impasto", "Thick Impasto, Oil painting texture, Brushstrokes, Palette knife, Textured canvas"),
        simpleOpt("qual_water", "水彩晕染", "Watercolor Bleed", "Watercolor painting, Wet-on-wet, Color bleed, Soft edges, Paper texture"),
        simpleOpt("qual_cel", "赛璐珞/平涂", "Cel Shading", "Cel Shading, Flat color, Anime style, Hard shadows, Clean look"),
        simpleOpt("qual_sketch", "素描/手绘风", "Sketchy/Rough", "Sketch, Rough lines, Graphite, Charcoal, Hand-drawn, Loose strokes"),
        simpleOpt("qual_vector", "矢量/免抠感", "Vector Art", "Vector Art, Adobe Illustrator, Flat design, Clean lines, No gradients, SVG style"),
    ]
};

// Exporting the options map
export const postProcessOptions = {
    shot: [grpShot],
    lens: [grpCamLens], 
    angle: [grpAngle],
    lighting: [grpLighting],
    cameraFX: [grpCamDevice, grpCamOptics], 
    screenFX: [grpVFXTech, grpVFXTexture, grpVFXAtmosphere, grpVFXArt],  // Updated: Split particle groups
    quality: [grpQualGeneral, grpQualPhoto, grpQualCG, grpQualArt] 
};
