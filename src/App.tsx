import { Box, Button, Flex, Group, Text, Stack, Link } from "@chakra-ui/react";
import { useColorMode } from "./ui/use-color-mode";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  const contactEmail = "inbox@lu0.me";

  const readings = [
    {
      title: "The Neomonolith",
      url: "https://inconshreveable.com/10-07-2015/the-neomonolith/"
    },
    {
      title: "Organise by domain",
      url: "https://stitcher.io/blog/organise-by-domain"
    }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <Flex
      align="center"
      direction="column"
      minH="100vh"
      bgColor={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Box p={4}>
        <Flex align="center" direction="column">
          <Text fontSize="xl">{t("title")}</Text>
          <Text fontSize="sm">{t("subtitle")}</Text>
          <Group>
            <Button
              variant="ghost"
              bg="transparent"
              size="lg"
              transition="none"
              _hover={{ bg: "transparent", borderBottom: "1px solid currentColor", transition: "none" }}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </Button>
            <Button
              variant="ghost"
              bg="transparent"
              size="lg"
              transition="none"
              _hover={{ bg: "transparent", borderBottom: "1px solid currentColor", transition: "none" }}
              onClick={toggleLanguage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            </Button>
          </Group>
        </Flex>
      </Box>
      <Box flex="1" py={5} px="5rem">
        <Stack gap={6} direction="row" align="center" justify="center">
          <Link 
            _hover={{ textDecoration: "underline" }} 
            href={`mailto:${contactEmail}`}
          >
            {t("contact")}
          </Link>
          <Link
            _hover={{ textDecoration: "underline" }}
            target="_blank"
            href="https://github.com/ludbg"
          >
            {t("github")}
          </Link>
        </Stack>
        <Stack mt={12} className="flex flex-col items-center">
          <b>{t("readings")}</b>
          <ul>
            {readings.map((reading, index) => (
              <li key={index}>
                <a 
                  target="_blank" 
                  href={reading.url}
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'}
                >
                  {reading.title}
                </a>
              </li>
            ))}
          </ul>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
