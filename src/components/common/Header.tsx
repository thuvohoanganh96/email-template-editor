import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@flodesk/grain';
import { CenterComponent } from './style';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isBuilder = pathname.startsWith('/build/');

  return (
    <Box width="100%" paddingX={{
      default: "l",
      tablet: "m",
      mobile: "m",
    }}
      paddingY="m" borderColor="transparent" shadow="m" position="relative" zIndex="1">
      <Box>
        <Text size="m" weight="medium" color="content">Logo</Text>
      </Box>
      {isBuilder && (
        <CenterComponent>
          <Flex direction="flow" gap="m" margin="auto" wrap="no-wrap"
          minWidth="300px"
            justifyContent={{
              default: "center",
              tablet: "end",
              mobile: "end",
            }}>
            <Box cursor="pointer" onClick={() => navigate('/')}>
              <Text size="m" weight="medium" color={'content'} onClick={() => navigate('/')}>Choose template</Text>
            </Box>

            <Text size="m" weight="medium" color="content3">{'>'}</Text>
            <Text size="m" weight="medium" color={'content'}>Design template</Text>
          </Flex>
        </CenterComponent>
      )}
    </Box>
  );
}
