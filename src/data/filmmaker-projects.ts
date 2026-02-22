import img1 from "@/assets/sifou/0117a6223762409.Y3JvcCwyNDU0LDE5MjAsNTQsMA.png";
import img2 from "@/assets/sifou/0252aa225603343.682078c49db16.jpg";
import img3 from "@/assets/sifou/037adb223817359.Y3JvcCw0ODk4LDM4MzEsMCw0OA.jpg";
import img4 from "@/assets/sifou/2fb1f3223818585.Y3JvcCwxNjI4LDEyNzMsNDY3LDMyMg.jpg";
import img5 from "@/assets/sifou/30e67a223761351.Y3JvcCwyNDU0LDE5MjAsOTcsMA.jpg";
import img6 from "@/assets/sifou/36910f236183811.Y3JvcCwxMzgwLDEwODAsMTY0LDA.jpg";
import img7 from "@/assets/sifou/40c9d9243031173.6979432534455.jpg";
import img8 from "@/assets/sifou/4e2abc228274127.685046737f683.jpg";
import img9 from "@/assets/sifou/54091e223759321.Y3JvcCwxNzAxLDEzMzAsMTM4LDg0.png";
import img10 from "@/assets/sifou/5e1163223753307.Y3JvcCwxOTYzLDE1MzYsMCww.png";
import img11 from "@/assets/sifou/6e7bac223755105.Y3JvcCwxNzU5LDEzNzYsMTMwLDEyMQ.png";
import img12 from "@/assets/sifou/8634bb243031311.6979447b2741f.jpg";

export interface FilmmakerProject {
    id: string;
    title: string;
    type: string;
    year: string;
    desc: string;
    thumbnail: string;
    videoUrl?: string;
}

export const filmmakerProjects: FilmmakerProject[] = [
    {
        id: "223762409",
        title: "Mission AM Possible",
        type: "Short Film",
        year: "2025",
        desc: "A cinematic video reel exploring narrative depth and technical precision.",
        thumbnail: img1,
        videoUrl: "https://www.behance.net/embed/project/223762409"
    },
    {
        id: "225603343",
        title: "Unshakn Reel",
        type: "Commercial",
        year: "2024",
        desc: "Dynamic ad reel showcasing brand storytelling and high-energy visuals.",
        thumbnail: img2,
        videoUrl: "https://www.behance.net/embed/project/225603343"
    },
    {
        id: "223817359",
        title: "AUDI Q3 S-Line",
        type: "Commercial",
        year: "2025",
        desc: "Sleek cinematography highlighting automotive design and performance.",
        thumbnail: img3,
        videoUrl: "https://www.behance.net/embed/project/223817359"
    },
    {
        id: "223818585",
        title: "Reel Gym (Legs Day)",
        type: "Content Creation",
        year: "2024",
        desc: "High-intensity fitness cinematography and dynamic editing transitions.",
        thumbnail: img4,
        videoUrl: "https://www.behance.net/embed/project/223818585"
    },
    {
        id: "223761351",
        title: "Cinematic Journey",
        type: "Experimental",
        year: "2025",
        desc: "Exploring visual texture and atmosphere through digital lens.",
        thumbnail: img5,
        videoUrl: "https://www.behance.net/embed/project/223761351"
    },
    {
        id: "236183811",
        title: "PILATES CENTER",
        type: "Commercial",
        year: "2023",
        desc: "Clean and minimalist visual presentation for a wellness facility.",
        thumbnail: img6,
        videoUrl: "https://www.behance.net/embed/project/236183811"
    },
    {
        id: "243031173",
        title: "Seriderm Event",
        type: "Event Film",
        year: "2025",
        desc: "Capturing the essence and atmosphere of professional corporate events.",
        thumbnail: img7,
        videoUrl: "https://www.behance.net/embed/project/243031173"
    },
    {
        id: "228274127",
        title: "El Padre",
        type: "Short Film",
        year: "2024",
        desc: "A heartfelt narrative piece focusing on character and emotional depth.",
        thumbnail: img8,
        videoUrl: "https://www.behance.net/embed/project/228274127"
    },
    {
        id: "223759321",
        title: "USMA vs ORAPA",
        type: "Sports Film",
        year: "2025",
        desc: "Fast-paced match day coverage with immersive field-level cinematography.",
        thumbnail: img9,
        videoUrl: "https://www.behance.net/embed/project/223759321"
    },
    {
        id: "223753307",
        title: "ELVALISA Part 2",
        type: "Short Film",
        year: "2024",
        desc: "Continuance of a narrative visual series with enhanced cinematic scale.",
        thumbnail: img10,
        videoUrl: "https://www.behance.net/embed/project/223753307"
    },
    {
        id: "223755105",
        title: "AM Store Pub",
        type: "Commercial",
        year: "2025",
        desc: "Creative retail advertisement focusing on product aesthetics and brand identity.",
        thumbnail: img11,
        videoUrl: "https://www.behance.net/embed/project/223755105"
    },
    {
        id: "243031311",
        title: "Turkiva Reel",
        type: "Documentary",
        year: "2023",
        desc: "Visual exploration of culture and landscapes through a cinematic lens.",
        thumbnail: img12,
        videoUrl: "https://www.behance.net/embed/project/243031311"
    }
];
