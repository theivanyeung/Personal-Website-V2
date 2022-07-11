import { Button, Text } from "@chakra-ui/react";

const ResumeBtn = () => {
  return (
    <div>
      <Button
        w={"249px"}
        h={"67.5px"}
        mt={"100px"}
        mb={"100px"}
        bgColor={"rgba(149, 200, 216, 0.25)"}
        border={"2px solid #95C8D8"}
        borderRadius={"24px"}
        colorScheme={"whiteAlpha"}
        display={{ base: "none", lg: "block" }}
      >
        <Text
          fontWeight={"light"}
          fontSize={"5xl"}
          letterSpacing={"0.2em"}
          color={"white"}
        >
          RESUME
        </Text>
      </Button>
      <Button
        w={"249px"}
        h={"67.5px"}
        mt={"100px"}
        mb={"100px"}
        bgColor={"rgba(149, 200, 216, 0.25)"}
        border={"2px solid #95C8D8"}
        borderRadius={"24px"}
        colorScheme={"whiteAlpha"}
        display={{ base: "block", lg: "none" }}
      >
        <Text
          fontWeight={"light"}
          fontSize={"5xl"}
          letterSpacing={"0.2em"}
          color={"white"}
        >
          RESUME
        </Text>
      </Button>
    </div>
  );
};

export default ResumeBtn;
