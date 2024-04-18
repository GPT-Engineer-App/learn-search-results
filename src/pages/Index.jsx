// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, Button, SimpleGrid, Image, VStack, HStack, Icon, AspectRatio, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaBook, FaRegClock, FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Index = () => {
  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Introduction to Deep Learning",
      description: "Learn the fundamentals of deep learning and neural networks.",
      duration: "4 weeks",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmclMjBjb3Vyc2V8ZW58MHx8fHwxNzEzNDY4ODQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      title: "Advanced Machine Learning",
      description: "Dive deeper into machine learning techniques and applications.",
      duration: "6 weeks",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb3Vyc2V8ZW58MHx8fHwxNzEzNDY4ODQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      title: "Data Science and Analytics",
      description: "Explore data science theories and apply them in real-world scenarios.",
      duration: "8 weeks",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGNvdXJzZXxlbnwwfHx8fDE3MTM0Njg4NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5} align="stretch">
        <AspectRatio ratio={16 / 9} w="full">
          <iframe title="Embedded Video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
        </AspectRatio>
        <Heading as="h2" size="lg" mt={10}>
          Quick Quiz
        </Heading>
        <VStack align="start" spacing={4}>
          <Text>1. What is the primary benefit of deep learning?</Text>
          <ButtonGroup variant="outline" isAttached>
            <Button>Efficiency</Button>
            <Button>Accuracy</Button>
            <Button>Scalability</Button>
          </ButtonGroup>
          <Text>2. Which algorithm is used in image recognition?</Text>
          <ButtonGroup variant="outline" isAttached>
            <Button>CNN</Button>
            <Button>RNN</Button>
            <Button>SVM</Button>
          </ButtonGroup>
        </VStack>
        <Heading as="h2" size="lg" mt={10}>
          Image Carousel
        </Heading>
        <HStack spacing={2} overflow="hidden">
          <IconButton icon={<FaChevronLeft />} aria-label="Previous image" />
          <Image src="https://example.com/image1.jpg" boxSize="200px" />
          <Image src="https://example.com/image2.jpg" boxSize="200px" />
          <Image src="https://example.com/image3.jpg" boxSize="200px" />
          <IconButton icon={<FaChevronRight />} aria-label="Next image" />
        </HStack>
        <Heading as="h2" size="lg" mt={10}>
          Course Results
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {courses.map((course) => (
            <Box key={course.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image borderRadius="md" src={course.imageUrl} alt={`Image of ${course.title}`} />
              <VStack align="stretch" mt={4}>
                <Heading as="h3" size="md">
                  {course.title}
                </Heading>
                <Text mt={2}>{course.description}</Text>
                <HStack justifyContent="space-between" mt={2}>
                  <HStack>
                    <Icon as={FaRegClock} />
                    <Text fontSize="sm">{course.duration}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaStar} color="yellow.400" />
                    <Text fontSize="sm">{course.rating} / 5</Text>
                  </HStack>
                </HStack>
                <Button rightIcon={<FaArrowRight />} colorScheme="blue" mt={4}>
                  Learn More
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
