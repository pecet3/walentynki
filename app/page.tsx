"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { IoHeart } from "react-icons/io5";
import { useSearchParams } from "next/navigation";

function AnswerYes({ name }: { name: string }) {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            duration: 2.2,
            delay: 0.5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="mb-40 relative flex flex-col items-center"
      >
        <IoHeart size={128} className="text-red-600" />
        <p
          className={`absolute top-10 ${
            name.length > 8
              ? "left-16"
              : name.length > 3
              ? "left-22"
              : "left-24"
          } italic font-bold text-2xl`}
        >
          {name}
        </p>
        <p className="tracking-widest text-4xl">Kocham Cię</p>
      </motion.div>
    </>
  );
}

export default function Page() {
  const [answeredYes, setAnsweredYes] = useState(false);
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  const handleNoClick = () => {
    alert("To spadaj :(");
  };

  const handleYesClick = () => {
    setAnsweredYes(true);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      {!answeredYes ? (
        <div className="justify-center font-bold flex flex-col gap-12 items-center">
          <TypeAnimation
            sequence={[400, "Czy zostaniesz moją walentynką?", 1000]}
            wrapper="div"
            speed={5}
            cursor={false}
            className="m-auto font-extrabold tracking-widest text-tal-600 text-center text-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3.5, duration: 0.3 }}
            className="flex items-center gap-4"
          >
            <button
              className="border-black border-2 p-1 bg-red-400 rounded-xl"
              onClick={handleNoClick}
            >
              nie :(
            </button>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}
              animate={{
                backgroundColor: ["#6ce62f", "#aafa82", "#6ce62f"],
                scale: [1, 1.15, 1],
                transition: {
                  duration: 2.2,
                  delay: 1,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex rounded-xl text-black py-2 px-4 text-4xl font-bold tracking-tight border-black border-4 duration-300 shadow-lg hover:shadow-xl"
              onClick={handleYesClick}
            >
              Tak
            </motion.button>
          </motion.div>
        </div>
      ) : (
        <AnswerYes name={name} />
      )}
      {name != "" ? (
        <p className="fixed bottom-0 right-0 text-xs">
          by pecet
          <a href="https://github.com/pecet3/walentynki"> | repo</a>
        </p>
      ) : null}
    </main>
  );
}
