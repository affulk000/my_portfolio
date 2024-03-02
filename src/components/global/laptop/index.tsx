import { motion, useAnimation } from "framer-motion";

const Laptop = () => {
    const laptopControls = useAnimation();

    const openLaptop = async () => {
        await laptopControls.start({ rotateY: 0 });
    };

    const closeLaptop = async () => {
        await laptopControls.start({ rotateY: -180 });
    };

    return (
        <div>
            <button onClick={openLaptop}>Open Laptop</button>
            <button onClick={closeLaptop}>Close Laptop</button>
            <motion.div
                className="laptop"
                style={{ width: 400, height: 300, background: "gray", position: "relative" }}
                animate={laptopControls}
            >
                <motion.div
                    className="screen"
                    style={{ width: "100%", height: "80%", background: "black", position: "absolute", top: 10, left: 0 }}
                />
                <motion.div
                    className="keyboard"
                    style={{ width: "100%", height: "20%", background: "silver", position: "absolute", bottom: 0, left: 0 }}
                />
            </motion.div>
        </div>
    );
};

export default Laptop;
