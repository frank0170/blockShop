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
        Producator: "Corsair",
        Model: "AX1600i",
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
        Producator: "Seasonic",
        Model: "Prime SSR-1300PD",
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
        Producator: "Seasonic",
        Model: "Prime SSR-1300PD",
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
];
