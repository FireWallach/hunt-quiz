const gunshots = [
    {
        "name": "Berthier Mle 1892",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/BerthierMle1892.mp3",
        "image": "/images/BerthierMle1892.png"
    },
    {
        "name": "Bomb Lance",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/BombLance.mp3",
        "image": "images/BombLance.webp"
    },
    {
        "name": "Bornheim No. 3",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/BornheimNo3.mp3",
        "image": "images/BornheimNo3.webp"
    },
    {
        "name": "Caldwell Conversion",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/BerthierMle1892.mp3",
        "image": "images/CaldwellConversionPistol.webp"
    },
    {
        "name": "Caldwell Conversion Uppercut",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/CaldwellConversionUppercut.mp3",
        "image": "images/CaldwellConversionUppercut.webp"
    },
    {
        "name": "Caldwell 92 New Army",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/Caldwell92NewArmy.mp3",
        "image": "images/Caldwell92NewArmy.webp"
    },
    {
        "name": "Caldwell Pax",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/CaldwellPax.mp3",
        "image": "images/CaldwellPax.webp"
    },
    {
        "name": "Caldwell Rival 78",
        "range": "20m",
        "ammo": "Shotgun",
        "sound": "sounds/CaldwellRival78.mp3",
        "image": "images/CaldwellRival78.webp"
    },
    {
        "name": "Crossbow",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/Crossbow.mp3",
        "image": "images/Crossbow.webp"
    },
    {
        "name": "Crown & King Auto-5",
        "range": "20m",
        "ammo": "Shotgun",
        "image": "images/CrownKingAuto-5.webp",
        "sound": "sounds/CrownKingAuto-5.mp3"
    },
    {
        "name": "Dolch 96",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/Dolch96.mp3",
        "image": "images/Dolch96.webp"
    },
    {
        "name": "Drilling",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/Drilling.mp3",
        "image": "images/Drilling.webp"
    },
    {
        "name": "Flare Pistol",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/FlarePistol.mp3",
        "image": "images/FlarePistol.webp"
    },
    {
        "name": "Hand Crossbow",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/HandCrossbow.mp3",
        "image": "images/HandCrossbow.webp"
    },
    {
        "name": "Hunting Bow",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/HuntingBow.mp3",
        "image": "images/HuntingBow.png"
    },
    {
        "name": "Lebel 1886",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/Lebel1886.mp3",
        "image": "images/Lebel1886.webp"
    },
    {
        "name": "LeMat Mark II",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/LeMatMarkII.mp3",
        "image": "images/LeMatMarkII.webp"
    },
    {
        "name": "LeMat Mark II UpperMat",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/LeMatMarkIIUpperMat.mp3",
        "image": "images/LeMatMarkIIUpperMat.png"
    },
    {
        "name": "Martini-Henry IC1",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/Martini-HenryIC1.mp3",
        "image": "images/Martini-HenryIC1.webp"
    },
    {
        "name": "Mosin-Nagant Avtomat",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/Mosin-NagantM1891Avtomat.mp3",
        "image": "images/Mosin-NagantAvtomat.webp"
    },
    {
        "name": "Mosin-Nagant M1891",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/Mosin-NagantM1891.mp3",
        "image": "images/Mosin-NagantM1891.webp"
    },
    {
        "name": "Nagant M1895 Officer",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/NagantM1895.mp3",
        "image": "images/NagantM1895Officer.webp"
    },
    {
        "name": "Nagant M1895 Silencer",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/NagantM1895Silencer.mp3",
        "image": "images/NagantM1895Silencer.webp"
    },
    {
        "name": "Nitro Express Rifle",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/NitroExpressRifle.mp3",
        "image": "images/NitroExpressRifle.webp"
    },
    {
        "name": "Quad Derringer",
        "range": "20m",
        "ammo": "Special",
        "sound": "sounds/QuadDerringer.mp3",
        "image": "images/QuadDerringer.webp"
    },
    {
        "name": "Romero 77",
        "range": "20m",
        "ammo": "Shotgun",
        "sound": "sounds/Romero77.mp3",
        "image": "images/Romero77.webp"
    },
    {
        "name": "Scottfield Model 3",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/ScottfieldModel3.mp3",
        "image": "images/ScottfieldModel3.webp"
    },
    {
        "name": "Sparks LRR",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/SparksLRR.mp3",
        "image": "images/SparksLRR.webp"
    },
    {
        "name": "Sparks LRR Silencer",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/SparksLRRSilencer.mp3",
        "image": "images/SparksLRRSilencer.webp"
    },
    {
        "name": "Sparks Pistol",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/SparksPistol.mp3",
        "image": "images/SparksPistol.png"
    },
    {
        "name": "Specter 1882",
        "range": "20m",
        "ammo": "Shotgun",
        "sound": "sounds/Specter1882.mp3",
        "image": "images/Specter1882.webp"
    },
    {
        "name": "Springfield 1866",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/Springfield1866.mp3",
        "image": "images/Springfield1866.webp"
    },
    {
        "name": "Springfield M1892 Krag",
        "range": "20m",
        "ammo": "Long",
        "sound": "sounds/SpringfieldM1892Krag.mp3",
        "image": "images/SpringfieldM1892Krag.webp"
    },
    {
        "name": "Vetterli 71 Karabiner",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/Vetterli71Karabiner.mp3",
        "image": "images/Vetterli71Karabiner.webp"
    },
    {
        "name": "Vetterli 71 Karabiner Silencer",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/Vetterli71KarabinerSilencer.mp3",
        "image": "images/Vetterli71KarabinerSilencer.png"
    },
    {
        "name": "Winfield 1887 Terminus",
        "range": "20m",
        "ammo": "Shotgun",
        "sound": "sounds/Winfield1887Terminus.mp3",
        "image": "images/Winfield1887Terminus.webp"
    },
    {
        "name": "Winfield 1893 Slate",
        "range": "20m",
        "ammo": "Shotgun",
        "sound": "sounds/Winfield1893Slate.mp3",
        "image": "images/Winfield1893Slate.webp"
    },
    {
        "name": "Winfield M1873",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/WinfieldM1873.mp3",
        "image": "images/WinfieldM1873.webp"
    },
    {
        "name": "Winfield M1873C Silencer",
        "range": "20m",
        "ammo": "Compact",
        "sound": "sounds/WinfieldM1873CSilencer.mp3",
        "image": "images/WinfieldM1873CSilencer.webp"
    },
    {
        "name": "Winfield M1876 Centennial",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/WinfieldM1876Centennial.mp3",
        "image": "images/WinfieldM1876Centennial.webp"
    },
    {
        "name": "Winfield M1876 Centennial Shorty Silencer",
        "range": "20m",
        "ammo": "Medium",
        "sound": "sounds/WinfieldM1876CentennialShortySilencer.mp3",
        "image": "images/WinfieldM1876CentennialShortySilencer.png"
    },
]

export default gunshots;