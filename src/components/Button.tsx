import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  colorScheme?: string;
  size?: string;
  width?: string;
  marginTop?: string;
}

export const Button = ({
  onClick,
  children,
  colorScheme = 'teal',
  size = 'sm',
  width = '100%',
  marginTop = '5px'
}: ButtonProps) => {
  return (
    <ChakraButton 
      onClick={onClick} 
      colorScheme={colorScheme} 
      size={size} 
      width={width} 
      marginTop={marginTop}
    >
      {children}
    </ChakraButton>
  );
};
