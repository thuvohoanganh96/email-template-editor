import { Box, Flex, Text } from '@flodesk/grain';
import { useNavigate } from 'react-router-dom';
import Container from '../components/common/Container';
import LayoutWrapper from '../components/common/LayoutWrapper';
import { TEMPLATE_LIST } from '../metadata';
import { generateHtml } from '../components/editor-sidebar/RenderHtml';
import { EmailTemplate } from '../context/EditorContext';

const IFRAME_WIDTH = 600;
const CARD_WIDTH = 280;
const SCALE = CARD_WIDTH / IFRAME_WIDTH;
const IFRAME_HEIGHT = IFRAME_WIDTH * (3 / 2);

export default function Templates() {
  const navigate = useNavigate();

  const handleSelect = (template: EmailTemplate) => {
    navigate(`/build/${template.templateId}`);
  };

  return (
    <LayoutWrapper>
      <Box
        height="100%"
        width="100%"
        overflowY={"auto"}
      >
        <Container>
          <Box marginBottom="l">
            <Text size="xl" weight="medium" color="content" align="center">
              Choose a template to start
            </Text>
          </Box>
          <Flex wrap="wrap" gap="l" justifyContent="center" >
            {TEMPLATE_LIST.map((template) => {
              const html = generateHtml(template.templateConfig, template.blockIds, template.blocks);
              return (
                <Box key={template.templateId} width={`${CARD_WIDTH}px`}>
                  <Box
                    position="relative"
                    overflow="hidden"
                    radius="m"
                    shadow="m"
                    style={{ aspectRatio: '2/3', cursor: 'pointer' }}
                    onClick={() => handleSelect(template)}
                  >
                    <iframe
                      srcDoc={html}
                      title={template.templateName}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: `${IFRAME_WIDTH}px`,
                        height: `${IFRAME_HEIGHT}px`,
                        border: 'none',
                        transform: `scale(${SCALE})`,
                        transformOrigin: 'top left',
                        pointerEvents: 'none',
                      }}
                    />
                  </Box>
                  <Box paddingTop="s">
                    <Text size="s" weight="medium" color="content">
                      {template.templateName}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Box>
    </LayoutWrapper>
  );
}
