import { Button, Image, Link } from "@nextui-org/react";
import { Github, Linkedin } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";

export default function Introduction() {
    const words = [{ text: "Emmanuel" }, { text: "Afful", className: "text-blue-500 dark:text-blue-500" }];
    // const introRef = useRef(null);
    // const introControls = useAnimation();

    // useEffect(() => {
    //     const introSection = introRef.current;

    //     const scrollHandler = () => {
    //         const introTop = introSection.getBoundingClientRect().top;
    //         const screenHeight = window.innerHeight;

    //         if (introTop < screenHeight / 2) {
    //             introControls.start({ opacity: 1, y: 0 });
    //         } else {
    //             introControls.start({ opacity: 0, y: 50 });
    //         }
    //     };

    //     window.addEventListener('scroll', scrollHandler);

    //     return () => {
    //         window.removeEventListener('scroll', scrollHandler);
    //     };
    // }, [introControls]);

    return (
        <div className="container mx-auto flex flex-col items-center justify-between relative" >
                <motion.div className="flex flex-col items-center pt-12 prose">
                    <TypewriterEffectSmooth words={words} />
                    <h3 className="font-bold sm:text-lg md:text-xl lg:text-2xl mt-1">Full Stack Developer</h3>
                    <p className="text-center">
                        Hello, I'm Emmanuel Afful, a passionate Full Stack Developer dedicated to transforming ideas into seamless digital experiences. With a knack for innovation and an insaaatiable curiosity for cutting-edge technologies, I thrive on the dyamiic interplay between front and backend development. Explore my below to dicover about my journey.
                    </p>
                    <div className="flex items-center gap-4 px-2 py-2">
                        <Button isIconOnly variant="bordered" color="default">
                            <Linkedin />
                        </Button>
                        <Button isIconOnly variant="bordered">
                            <Github />
                        </Button>
                    </div>
                    <Button variant="bordered" color="default" className="top-10">
                        <Link className="prose-a:no-underline" href="/resume.pdf" download>Download Resume</Link>
                    </Button>
                </motion.div>

                <div className="absolute overflow-clip -bottom-[27rem] top-auto inset-24 filter shadow shadow-slate-400">
                    <Image src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png" alt="laptop" className="object-cover" />
                </div>
        </div>
    );
}
