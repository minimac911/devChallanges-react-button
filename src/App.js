import "./App.css";
import CustomButton from "./components/CustomButton";
import { ChakraProvider } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Center>
          <HStack>
            <CustomButton>Default</CustomButton>
            <CustomButton variant="outline">Default</CustomButton>
            <CustomButton variant="ghost">Default</CustomButton>
            <CustomButton disableShadow>Default</CustomButton>
            <CustomButton disabled>Disabled</CustomButton>
            <CustomButton disabled variant="ghost">
              Disabled
            </CustomButton>
            <CustomButton startIcon={<LocalGroceryStoreIcon />}>
              Button
            </CustomButton>
            <CustomButton endIcon={<LocalGroceryStoreIcon />}>
              Button
            </CustomButton>
            <CustomButton size="sm">Button</CustomButton>
            <CustomButton size="md">Button</CustomButton>
            <CustomButton size="lg">Button</CustomButton>
            <CustomButton color="gray">Button</CustomButton>
            <CustomButton color="blue">Button</CustomButton>
            <CustomButton color="facebook">Button</CustomButton>
            <CustomButton color="red">Button</CustomButton>
          </HStack>
        </Center>
      </div>
    </ChakraProvider>
  );
}

export default App;
