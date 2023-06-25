// import { testimonial_settings } from "@/data/home";
import Image from "next/image";
import React from "react";
import circle from "../../assets/svg/circle-creative.svg";
import square from "../../assets/svg/square-creative.svg";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { testimonials } from "@/data/common";
import StarIcon from "@mui/icons-material/Star";
function Testimonials({ styles }) {
  const testimonial_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Box
      minH="60vh"
      backgroundColor="var(--primary-background-color)"
      // backgroundColor="var(--secondary-background-color)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   flexDirection={"row"}
      w={"100vw"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box position={"relative"} w={["90%", "90%", "81%"]}>
        <Heading
          as="h2"
          fontSize={["28px"]}
          fontWeight={"semibold"}
          lineHeight={"42px"}
          letterSpacing={"0.01em"}
          textAlign={["center", "center", "center"]}
        >
          Hear from Our Satisfied Users
        </Heading>
        <Text
          mt={"20px"}
          mx={"auto"}
          textAlign={["center", "center", "center"]}
          w={["100%", "100%", "80%"]}
          fontSize={"17px"}
          letterSpacing={"0.01em"}
          lineHeight={"27px"}
        >
          Don't just take our word for it. Listen to our satisfied users'
          experiences with our paraphrasing tool. From students to
          professionals, our tool has benefited people from diverse fields.
        </Text>
        <Box position={"relative"} w="100%" mt="20px" py={"5px"}>
          <Box
            position={"absolute"}
            left={"0"}
            top={"0"}
            zIndex={0}
            w={"100px"}
            h={"100px"}
          >
            <Image src={square} alt="cd" />
          </Box>
          <Box
            position={"absolute"}
            right={"0"}
            bottom={"0"}
            zIndex={0}
            w={"100px"}
            h={"100px"}
          >
            <Image src={circle} alt="cd" />
          </Box>
          <Box
            position={"relative"}
            // w="100%"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            // my={"25px"}
          >
            {testimonials.map((item) => (
              <Box
                boxShadow="sm"
                position={"relative"}
                w={["99%", "99%", "30%"]}
                bg={"var(--white)"}
                borderRadius={10}
                m="10px"
                p="20px"
                maxW="400px"
                h={"auto"}
                key={item.id}
              >
                <Box display={"flex"} my="10px">
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#dddddd" }} />
                </Box>
                <Text
                  my="15px"
                  fontSize={"17px"}
                  letterSpacing={"0.01em"}
                  lineHeight={"27px"}
                >
                  {item.desc}
                </Text>
                <Box
                  pt="10px"
                  display={"flex"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  paddingTop={"10px"}
                >
                  <Box boxSize={"50px"} borderRadius={"50%"}>
                    <Image
                      src={item.avatar}
                      alt="image"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Text fontWeight={"bold"} ml="10px">
                    {item.user}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
