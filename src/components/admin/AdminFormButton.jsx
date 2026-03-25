import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Grid2X2Check } from "lucide-react";



const AdminFormButton = () => {
  const [isClicked, setIsClicked ] = useState(false);

  return(
      <>
        <main className="flex flex-col xl:flex-row w-full min-h-screen items-center justify-center">
          
          <motion.button 
            onClick={() => setIsClicked(!isClicked)}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            animate={{ 
              rotate: isClicked ? 90 : 0,
              opacity: 1,
              duration: 2
            }}
            
            transition={{
              type: "tween",
              stiffness: 100,
              damping: 10,
            }}
            className="bg-blue-700 w-[100px] h-[100px] rounded-xl cursor-pointer flex justify-center items-center text-white"
          >
            {isClicked ? <Plus size={60}/> : <Grid2X2Check size={60}/>}
          </motion.button>
  
        </main>
      </>
    );
  
};


export default AdminFormButton;