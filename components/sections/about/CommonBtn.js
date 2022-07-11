import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CommonBtn = (props) => {
  return (
    <div>
      <Box mt={"100px"} mb={"100px"}>
        <a href={props.link}>
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.5,
              },
            }}
            src={props.image}
          />
        </a>
      </Box>
    </div>
  );
};

export default CommonBtn;
