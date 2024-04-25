import PC1 from "@/public/images/pc1.jpeg";
import PC2 from "@/public/images/pc2.jpeg";
import PC3 from "@/public/images/pc3.jpeg";

export const products = [
  {
    id: 1,
    type: "Workstation",
    image: PC2,
    name: "Workstation 1",
    description: "Description for Workstation 1",
    category: "Workstation",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "Asus",
        Model: "Pro WS TRX50-SAGE",
      },
      {
        CPU: true,
        Producator: "AMD",
        Model: "7960X",
        Nuclee: 24,
        Threads: 48,
        GHZ: 4.2,
        TurboGhz: 5.3,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4090 Ventus",
        VRAM: "24GB",
        Frecventa: "2235 Mhz",
        FrecventaBoost: "2550 Mhz",
      },
      {
        RAM: true,
        Producator: "Samsung",
        Capacitate: "64 GB",
        Tip: "ECC",
        Slot: "DDR5",
        Frecventa: "4800Mhz",
        CL: 40,
      },
      {
        SSD: true,
        Producator: "Western Digital",
        Model: "SN700",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13 PRO",
        Putere: "1600W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "Noctua",
        Model: "NH-D9 TR5-SP6",
      },
      {
        Case: true,
        Producator: "Fractal Design",
        Model: "Torrent",
        Marime: "Full Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },

  {
    id: 2,
    type: "Workstation",
    image: PC2,
    name: "Workstation 2",
    description: "Description for Workstation 2",
    category: "Workstation",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "Asrock",
        Model: "B650E Taichi Lite",
      },
      {
        CPU: true,
        Producator: "AMD",
        Model: "7950X",
        Nuclee: 16,
        Threads: 32,
        GHZ: 4.5,
        TurboGhz: 5.7,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4090 Ventus",
        VRAM: "24GB",
        Frecventa: "2235 Mhz",
        FrecventaBoost: "2550 Mhz",
      },
      {
        RAM: true,
        Producator: "G.Skill",
        Model: "Ripjaws S5",
        Capacitate: "32 GB",
        Slot: "DDR5",
        Frecventa: "6000Mhz",
        CL: 32,
      },
      {
        SSD: true,
        Producator: "Western Digital",
        Model: "SN700",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13 PRO",
        Putere: "1600W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "Noctua",
        Model: "NH-D15",
      },
      {
        Case: true,
        Producator: "Fractal Design",
        Model: "Torrent",
        Marime: "Full Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },

  {
    id: 3,
    type: "Workstation",
    image: PC2,
    name: "Workstation 3",
    description: "Description for Workstation 3",
    category: "Workstation",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "Asrock",
        Model: "B760 Pro RS",
      },
      {
        CPU: true,
        Producator: "Intel",
        Model: "i9-14900KS",
        Nuclee: 24,
        Threads: 32,
        GHZ: 3.2,
        TurboGhz: 6.2,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4090 Ventus",
        VRAM: "24GB",
        Frecventa: "2235 Mhz",
        FrecventaBoost: "2550 Mhz",
      },
      {
        RAM: true,
        Producator: "G.Skill",
        Model: "Ripjaws S5",
        Capacitate: "32 GB",
        Slot: "DDR5",
        Frecventa: "6000Mhz",
        CL: 32,
      },
      {
        SSD: true,
        Producator: "Western Digital",
        Model: "SN700",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13 PRO",
        Putere: "1300W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "Noctua",
        Model: "NH-D15",
      },
      {
        Case: true,
        Producator: "Fractal Design",
        Model: "Torrent",
        Marime: "Full Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },

  {
    id: 4,
    type: "Gaming",
    image: PC2,
    name: "GAMING HIGH-END AMD",
    description: "Description for top amd",
    category: "Gaming",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "MSI",
        Model: "gaming-plus-wifi-amd-b650",
      },
      {
        CPU: true,
        Producator: "AMD",
        Model: "Ryzen 9 7950X3D",
        Nuclee: 16,
        Threads: 32,
        GHZ: 4.5,
        TurboGhz: 5.7,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4090 Ventus",
        VRAM: "24 GB",
        Frecventa: "2235 Mhz",
        FrecventaBoost: "2550 Mhz",
      },
      {
        RAM: true,
        Producator: "G.Skill",
        Model: "Flare X5 Black AMD EXPO",
        Capacitate: "32 GB",
        Slot: "DDR5",
        Frecventa: "6000Mhz",
        CL: 30,
      },
      {
        SSD: true,
        Producator: "Adata",
        Model: "XPG GAMMIX S70 Blade",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13 PRO",
        Putere: "1300W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "Noctua",
        Model: "NH-D15",
      },
      {
        Case: true,
        Producator: "Fractal Design",
        Model: "Torrent",
        Marime: "Full Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },

  {
    id: 5,
    type: "Gaming",
    image: PC2,
    name: "GAMING MID AMD",
    description: "Description for mid amd",
    category: "Gaming",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "MSI",
        Model: "PRO B650M-B",
      },
      {
        CPU: true,
        Producator: "AMD",
        Model: "RYZEN 5 5600X",
        Nuclee: 6,
        Threads: 12,
        GHZ: 3.7,
        TurboGhz: 4.6,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4070 VENTUS 3X",
        VRAM: "24 GB",
        Frecventa: "2505 Mhz",
        FrecventaBoost: "2520 Mhz",
      },
      {
        RAM: true,
        Producator: "G.Skill",
        Model: "Flare X5 Black AMD EXPO",
        Capacitate: "32 GB",
        Slot: "DDR5",
        Frecventa: "6000Mhz",
        CL: 30,
      },
      {
        SSD: true,
        Producator: "Adata",
        Model: "XPG GAMMIX S70 Blade",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13",
        Putere: "1000W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "deepcool",
        Model: "AK620",
      },
      {
        Case: true,
        Producator: "Corsair",
        Model: "4000D",
        Marime: "Middle Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },
  {
    id: 6,
    type: "Gaming",
    image: PC2,
    name: "GAMING ENTRY AMD",
    description: "Description for Entry amd",
    category: "Gaming",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "MSI",
        Model: "MSI PRO A620M-E",
      },
      {
        CPU: true,
        Producator: "AMD",
        Model: "RYZEN 5500",
        Nuclee: 6,
        Threads: 12,
        GHZ: 3.6,
        TurboGhz: 4.2,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: " RTX 4060 VENTUS 2X",
        VRAM: "8 GB",
        Frecventa: "1830 Mhz",
        FrecventaBoost: "2490 Mhz",
      },
      {
        RAM: true,
        Producator: "Kingston",
        Model: " Fury Beast",
        Capacitate: "16 GB",
        Slot: "DDR5",
        Frecventa: "5600Mhz",
        CL: 36,
      },
      {
        SSD: true,
        Producator: "Adata",
        Model: "XPG GAMMIX S70 Blade",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "System Power 9",
        Putere: "700W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "AMD",
        Model: "STOCK",
      },
      {
        Case: true,
        Producator: "Deepcool",
        Model: "MACUBE 110",
        Marime: "Middle Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },

  {
    id: 7,
    type: "Gaming",
    image: PC2,
    name: "GAMING HIGH-END Intel",
    description: "Description for top Intel",
    category: "Gaming",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "ASRockI",
        Model: "B760 Pro RS",
      },
      {
        CPU: true,
        Producator: "Intel",
        Model: "i9 14950KS",
        Nuclee: 25,
        Threads: 32,
        GHZ: 3.2,
        TurboGhz: 6.2,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4090 Ventus",
        VRAM: "24 GB",
        Frecventa: "2235 Mhz",
        FrecventaBoost: "2550 Mhz",
      },
      {
        RAM: true,
        Producator: "GOODRAM",
        Model: "IRG-60D5L30S/32GDC",
        Capacitate: "32 GB",
        Slot: "DDR5",
        Frecventa: "6000Mhz",
        CL: 30,
      },
      {
        SSD: true,
        Producator: "Adata",
        Model: "XPG GAMMIX S70 Blade",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13 PRO",
        Putere: "1300W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "Noctua",
        Model: "NH-D15",
      },
      {
        Case: true,
        Producator: "Fractal Design",
        Model: "Torrent",
        Marime: "Full Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },

  {
    id: 8,
    type: "Gaming",
    image: PC2,
    name: "GAMING MID Intel",
    description: "Description for mid Intel",
    category: "Gaming",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "ASUS",
        Model: "PRIME B760-PLUS",
      },
      {
        CPU: true,
        Producator: "Intel",
        Model: "i7 14700KF",
        Nuclee: 20,
        Threads: 28,
        GHZ: 3.4,
        TurboGhz: 5.6,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: "RTX 4070 VENTUS 3X",
        VRAM: "24 GB",
        Frecventa: "2505 Mhz",
        FrecventaBoost: "2520 Mhz",
      },
      {
        RAM: true,
        Producator: "GOODRAM",
        Model: "IRG-60D5L30S/32GDC",
        Capacitate: "32 GB",
        Slot: "DDR5",
        Frecventa: "6000Mhz",
        CL: 30,
      },
      {
        SSD: true,
        Producator: "Adata",
        Model: "XPG GAMMIX S70 Blade",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "DARK POWER 13",
        Putere: "1000W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "deepcool",
        Model: "AK620",
      },
      {
        Case: true,
        Producator: "Corsair",
        Model: "4000D",
        Marime: "Middle Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },
  {
    id: 9,
    type: "Gaming",
    image: PC2,
    name: "GAMING ENTRY Intel",
    description: "Description for Entry intel",
    category: "Gaming",
    price: 34000,
    specs: [
      {
        Motherboard: true,
        Producator: "GIGABYTE",
        Model: "B760M DS3H",
      },
      {
        CPU: true,
        Producator: "Intel",
        Model: "i3 14100F",
        Nuclee: 4,
        Threads: 8,
        GHZ: 3.5,
        TurboGhz: 4.7,
      },
      {
        GPU: true,
        Producator: "MSI",
        Model: " RTX 4060 VENTUS 2X",
        VRAM: "8 GB",
        Frecventa: "1830 Mhz",
        FrecventaBoost: "2490 Mhz",
      },
      {
        RAM: true,
        Producator: "Kingston",
        Model: " Fury Beast",
        Capacitate: "16 GB",
        Slot: "DDR5",
        Frecventa: "5600Mhz",
        CL: 36,
      },
      {
        SSD: true,
        Producator: "Adata",
        Model: "XPG GAMMIX S70 Blade",
        Tip: "Nvme M2",
        Capacitate: "1 TB",
      },
      {
        PSU: true,
        Producator: "be quiet!",
        Model: "System Power 9",
        Putere: "700W",
        Modular: "Da",
      },
      {
        CPU_Cooler: true,
        Producator: "Intel",
        Model: "STOCK",
      },
      {
        Case: true,
        Producator: "Deepcool",
        Model: "MACUBE 110",
        Marime: "Middle Tower",
      },
    ],
    performance: [
      {
        Game: "Cyberpunk 2077",
        Settings: [
          { Quality: "Low", FPS: "90" },
          { Quality: "Medium", FPS: "60" },
          { Quality: "High", FPS: "45" },
        ],
      },
      {
        Game: "Red Dead Redemption 2",
        Settings: [
          { Quality: "Low", FPS: "100" },
          { Quality: "Medium", FPS: "70" },
          { Quality: "High", FPS: "50" },
        ],
      },
      {
        Game: "Call of Duty: Warzone",
        Settings: [
          { Quality: "Low", FPS: "120" },
          { Quality: "Medium", FPS: "90" },
          { Quality: "High", FPS: "70" },
        ],
      },
    ],
  },
];