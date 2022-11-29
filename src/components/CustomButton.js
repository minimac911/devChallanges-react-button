import { Button } from "@chakra-ui/react";

function CustomButton(props) {
  return (
    <Button
      shadow={props.disableShadow ? "none" : "md"}
      variant={props.variant}
      colorScheme={props.color ? props.color : "blue"}
      disabled={props.disabled}
      size={props.size}
      leftIcon={props.startIcon}
      rightIcon={props.endIcon}
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
