import { Box, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";

const CommonBtn = (props) => {
  return (
    <div>
      <Box mt={"100px"} mb={"100px"}>
        <LinkBox>
          <LinkOverlay href="/">
            <Image src={props.image} />
          </LinkOverlay>
        </LinkBox>
      </Box>
    </div>
  );
};

export default CommonBtn;
