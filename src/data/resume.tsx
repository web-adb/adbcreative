import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { FaFileAlt, FaVideo, FaPencilRuler, FaUserAlt, FaProjectDiagram, FaChalkboardTeacher, FaCameraRetro, FaMusic, FaEdit } from "react-icons/fa";
import { AiFillLayout, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineEventNote, MdOutlineContentPaste, MdOutlineDesignServices } from "react-icons/md";
import { RiTeamLine, RiComputerLine } from "react-icons/ri";
import { IoMdColorPalette } from "react-icons/io";

export const DATA = {
  name: "ADB Creative",
  initials: "CA",
  url: "https://www.chiragaggarwal.tech",
  location: "Delhi NCR, India",
  locationLink: "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  description:
    "Tim kreatif SMK 1 Adiwerna yang mengembangkan solusi inovatif dengan teknologi dan kreativitas.",
  summary:
    "Kami adalah ADB Creative, tim yang terdiri dari siswa-siswi SMK 1 Adiwerna dengan semangat tinggi dalam bidang kreatif dan teknologi. Sebagai tim kreatif dan inovatif, kami berfokus pada pengembangan konten menarik, desain profesional, serta pemanfaatan teknologi untuk mendukung berbagai kebutuhan sekolah. Kami juga memiliki antusiasme tinggi dalam produksi media, desain grafis, dan strategi digital, **khususnya untuk menciptakan dampak positif di bidang teknologi informasi dan desain kreatif**.",
  avatarUrl: "/me.jpg",

  skills: [
    {
      name: "Documentation",
      icon: <FaFileAlt className="size-3" />, // Dokumentasi
    },
    {
      name: "Talent Management",
      icon: <FaUserAlt className="size-3" />, // Talent
    },
    {
      name: "Design",
      icon: <FaPencilRuler className="size-3" />, // Desain kreatif
    },
    {
      name: "Video Editing",
      icon: <FaVideo className="size-3" />, // Editing video
    },
    {
      name: "Website Development",
      icon: <AiFillLayout className="size-3" />, // Pengembangan situs web
    },
    {
      name: "Team Collaboration",
      icon: <AiOutlineTeam className="size-3" />, // Kolaborasi tim
    },
    {
      name: "Project Management",
      icon: <FaProjectDiagram className="size-3" />, // Manajemen proyek
    },
    {
      name: "Event Planning",
      icon: <MdOutlineEventNote className="size-3" />, // Perencanaan acara
    },
    {
      name: "Content Creation",
      icon: <MdOutlineContentPaste className="size-3" />, // Pembuatan konten
    },
    {
      name: "Photography",
      icon: <FaCameraRetro className="size-3" />, // Fotografi
    },
    {
      name: "Teaching/Training",
      icon: <FaChalkboardTeacher className="size-3" />, // Pelatihan/pendidikan
    },
    {
      name: "Podcast Production",
      icon: <FaMusic className="size-3" />, // Produksi musik
    },
    {
      name: "Creative Writing",
      icon: <FaEdit className="size-3" />, // Penulisan kreatif
    },
    {
      name: "Graphic Design",
      icon: <MdOutlineDesignServices className="size-3" />, // Desain grafis
    },
    {
      name: "Animation",
      icon: <IoMdColorPalette className="size-3" />, // Animasi dan seni
    },
    {
      name: "Team Leadership",
      icon: <RiTeamLine className="size-3" />, // Kepemimpinan tim
    },
    {
      name: "Technical Skills",
      icon: <RiComputerLine className="size-3" />, // Keterampilan teknis
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chiragaggarwal5k@gmail.com",
    tel: "+91 9667685415",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ChiragAgg5k",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chiragagg5k/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ChiragAgg5k",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chiragaggarwal5k@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Desain Studio",
      href: "https://example.com/desain-studio",
      badges: [],
      location: "Tegal, Indonesia",
      title: "Desainer Grafis",
      logoUrl: "https://via.placeholder.com/150/0000FF/808080?text=Desain+Studio",
      start: "Januari 2023",
      end: "Juli 2023",
      description: [
        "- Mendesain elemen visual untuk berbagai kebutuhan klien.",
        "- Membuat desain modern dengan fokus pada user experience.",
      ],
      links: [
        {
          type: "Portfolio",
          href: "https://example.com/portfolio",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "TalentHub",
      href: "https://example.com/talenthub",
      badges: [],
      location: "Remote",
      title: "Talent & Kreator",
      logoUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=TalentHub",
      start: "Juli 2024",
      end: "September 2024",
      description: [
        "- Mengembangkan konten kreatif dan interaktif untuk media sosial.",
        "- Mengelola kolaborasi dengan kreator lain untuk meningkatkan engagement.",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com/talenthub",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "EditFlow AI",
      href: "https://example.com/editflow-ai",
      badges: [],
      location: "Remote",
      title: "Video Editor",
      logoUrl: "https://via.placeholder.com/150/00FF00/000000?text=EditFlow+AI",
      start: "Oktober 2023",
      end: "Desember 2023",
      description: [
        "- Mengedit video promosi dengan storytelling visual yang menarik.",
        "- Meningkatkan kualitas produksi video melalui efek modern.",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com/editflow-ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "WebCreate Studio",
      href: "https://example.com/webcreate",
      badges: [],
      location: "Tegal, Indonesia",
      title: "Website Developer",
      logoUrl: "https://via.placeholder.com/150/FFFF00/000000?text=WebCreate+Studio",
      start: "Januari 2023",
      end: "Juli 2023",
      description: [
        "- Mengembangkan dan mendesain website responsif untuk klien lokal.",
        "- Mengimplementasikan teknologi modern untuk meningkatkan kinerja website.",
      ],
      links: [
        {
          type: "Portfolio",
          href: "https://example.com/webcreate",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "DocPro",
      href: "https://example.com/docpro",
      badges: [],
      location: "Remote",
      title: "Dokumentasi Teknis",
      logoUrl: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=DocPro",
      start: "Desember 2024",
      end: "Sekarang",
      description: [
        "- Menyusun dokumentasi teknis untuk berbagai aplikasi dan fitur baru.",
        "- Berkolaborasi dengan tim pengembang untuk memastikan keakuratan dokumentasi.",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com/docpro",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],

  education: [
    {
      school: "Desain",
      href: "#",
      degree: "Divisi Desain bertanggung jawab untuk pembuatan konsep visual dan estetika.",
      logoUrl: "/desain.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Talent",
      href: "#",
      degree: "Divisi Talent bertugas mengelola dan mempromosikan potensi individu di berbagai bidang.",
      logoUrl: "/talent.png",
      start: "2010",
      end: "2022",
    },
    {
      school: "Editor",
      href: "#",
      degree: "Divisi Editor berfokus pada penyuntingan konten untuk memastikan kualitas dan konsistensi.",
      logoUrl: "/editor.png",
      start: "2015",
      end: "2023",
    },
    {
      school: "Dokumentasi",
      href: "#",
      degree: "Divisi Dokumentasi bertanggung jawab untuk pencatatan dan penyimpanan data.",
      logoUrl: "/dokumentasi.png",
      start: "2019",
      end: "2025",
    },
    {
      school: "Website",
      href: "#",
      degree: "Divisi Website mengelola dan mengembangkan platform digital.",
      logoUrl: "/website.png",
      start: "2018",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Creative Design Projects",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Proyek divisi desain yang mencakup pembuatan poster, banner, dan infografis untuk kebutuhan acara sekolah dan promosi digital.",
      technologies: ["Photoshop", "Illustrator", "Canva"],
      links: [
        {
          type: "Portfolio",
          href: "#",
          icon: <Icons.folder className="size-3" />,
        },
      ],
      image: "/projects/design-division.png",
    },
    {
      title: "Talent Development Initiatives",
      href: "#",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "Kegiatan divisi talent meliputi pengembangan bakat siswa melalui pelatihan, lomba, dan kolaborasi kreatif.",
      technologies: ["Public Speaking", "Team Management"],
      links: [
        {
          type: "Portfolio",
          href: "#",
          icon: <Icons.folder className="size-3" />,
        },
      ],
      image: "/projects/talent-division.png",
    },
    {
      title: "Video Editing Projects",
      href: "#",
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "Divisi editor bertanggung jawab dalam editing video untuk dokumentasi acara dan kebutuhan konten kreatif sekolah.",
      technologies: ["Adobe Premiere Pro", "After Effects", "CapCut"],
      links: [
        {
          type: "Portfolio",
          href: "#",
          icon: <Icons.folder className="size-3" />,
        },
      ],
      image: "/projects/editor-division.png",
    },
    {
      title: "Website Development Tasks",
      href: "#",
      dates: "Apr 2024 - Present",
      active: true,
      description:
        "Divisi website menangani pengembangan dan pemeliharaan website sekolah untuk meningkatkan visibilitas dan fungsi online.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/website-division.png",
    },
    {
      title: "Event Documentation",
      href: "#",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Divisi dokumentasi bertugas mendokumentasikan acara penting melalui foto dan video untuk arsip dan publikasi.",
      technologies: ["Photography", "Videography"],
      links: [
        {
          type: "Portfolio",
          href: "#",
          icon: <Icons.folder className="size-3" />,
        },
      ],
      image: "/projects/documentation-division.png",
    },
  ],
  positions: [
    {
      "title": "Desain",
      "dates": "2022 - Sekarang",
      "location": "Divisi Desain",
      "description": "Divisi Desain bertanggung jawab atas pembuatan konten visual, mulai dari poster, banner, hingga desain UI/UX untuk berbagai proyek.",
      "image": "/desain.png",
      "links": [
        { "title": "Portfolio", "href": "https://example.com/desain" }
      ]
    },
    {
      "title": "Talent",
      "dates": "2023 - Sekarang",
      "location": "Divisi Talent",
      "description": "Divisi Talent mengelola dan mengembangkan bakat anggota dalam berbagai bidang, termasuk seni peran, voice over, dan public speaking.",
      "image": "/talent.png",
      "links": [
        { "title": "Kegiatan", "href": "https://example.com/talent" }
      ]
    },
    {
      "title": "Editor",
      "dates": "2021 - Sekarang",
      "location": "Divisi Editor",
      "description": "Divisi Editor bertugas menyunting dan memastikan kualitas tulisan, video, serta audio sebelum dipublikasikan.",
      "image": "/editor.png",
      "links": [
        { "title": "Artikel", "href": "https://example.com/editor" }
      ]
    },
    {
      "title": "Website",
      "dates": "2020 - Sekarang",
      "location": "Divisi Website",
      "description": "Divisi Website mengembangkan dan memelihara situs web serta sistem digital lainnya untuk mendukung kegiatan organisasi.",
      "image": "/website.png",
      "links": [
        { "title": "Repo GitHub", "href": "https://github.com/example/website" }
      ]
    },
    {
      "title": "Dokumentasi",
      "dates": "2019 - Sekarang",
      "location": "Divisi Dokumentasi",
      "description": "Divisi Dokumentasi bertanggung jawab atas pencatatan, pengarsipan, serta dokumentasi foto dan video dalam setiap kegiatan organisasi.",
      "image": "/dokumentasi.png",
      "links": [
        { "title": "Galeri", "href": "https://example.com/dokumentasi" }
      ]
    },
  ],
  achievements: [
    {
      title: "Summer Immersion in Vietnam",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      image: "/achievements/summer-immersion.jpeg",
    },
    {
      title: "Github Constellation",
      dates: "June 2024",
      location: "Bangalore",
      image: "/achievements/github-constellation.jpeg",
    },
    {
      title: "Hackaccino",
      dates: "April 2024",
      location: "CSI Bennett University",
      image: "/achievements/hackaccino.jpeg",
    },
    {
      title: "HackWithDelhi",
      dates: "April 2024",
      location: "GL Bajaj Institute of Technology and Management",
      image: "/achievements/hackwithdelhi.jpeg",
    },
    {
      title: "HackCBS",
      dates: "November 2023",
      location: "Shaheed Sukhdev College of Business Studies",
      image: "/achievements/hackcbs.jpeg",
    },
    {
      title: "Luminous TechnoX Hackathon",
      dates: "December 2023",
      location: "Taj City Center, Gurugram",
      image: "/achievements/luminous.jpg",
    },
  ],
} as const;
