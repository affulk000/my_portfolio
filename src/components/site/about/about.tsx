import { Button, Image, Tab } from "@nextui-org/react";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function About() {
    return (
        <div className="flex justify-evenly container mx-auto">
            <div>
                <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
            </div>
            {/* text content */}
            <div className="top-0 prose">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <Tab>
                    <TabsTrigger value={"Acheivements"}>
                        <Button>Acheivements</Button>
                    </TabsTrigger>
                    <TabsContent value={"Acheivements"} >
                        <TabsList></TabsList>
                    </TabsContent>
                </Tab>
            </div>
        </div>
    )
}