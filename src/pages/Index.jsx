// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, Button, SimpleGrid, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaBook, FaRegClock, FaStar, FaArrowRight } from "react-icons/fa";

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
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Course Results
        </Heading>
        <Text fontSize="lg">Explore the courses based on your research topic.</Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
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
    </Container>
  );
};

export default Index;
