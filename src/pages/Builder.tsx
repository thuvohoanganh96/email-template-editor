import LayoutWrapper from '../components/common/LayoutWrapper';
import Chatbot from '../components/chatbot';
import { Box, Flex, IconChevronLeft, IconChevronRight, IconToggle } from '@flodesk/grain';
import EditorPreview from '../components/editor-preview';
import EditorSidebar from '../components/editor-sidebar/index.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEditorContext } from '../context/EditorContext.tsx';
import { TEMPLATE_LIST } from '../metadata';

export default function Builder() {
  const [showSidebar, setShowSidebar] = useState(true);
  const { templateid } = useParams<{ templateid: string }>();
  const { loadTemplate, templateInfo } = useEditorContext();

  useEffect(() => {
    if (templateInfo.templateId === templateid) return;
    const template = TEMPLATE_LIST.find((t) => t.templateId === templateid);
    if (template) loadTemplate(template);
  }, [templateid]);

  return (
    <LayoutWrapper>
      <Flex
        flex="1"
        width="100%"
        height="100%"
        overflow="hidden"
        position="relative"
      >
        <Box
          flex="1"
          width={{
            default: undefined,
            tablet: "100%",
            mobile: "100%",
          }}
          height="100% "
          overflowX="hidden"
          overflowY="auto"
        >
          <EditorPreview />
        </Box>

        {showSidebar ? <Box
          width="30%"
          height="100%"
          minWidth={"300px"}
          overflowY="auto"
          shadow="l"
          position="relative"
        >
          <Box
            position="absolute"
            left="0px"
            top="0px"
            zIndex="1"
            backgroundColor="background"
            radius="m"
          >
            <IconToggle icon={<IconChevronRight />} isActive onClick={() => setShowSidebar(!showSidebar)} />
          </Box>
          <EditorSidebar />
        </Box> :
          <Box position="absolute" right="0px" top="0px" backgroundColor="background"
            radius="m"
            shadow="l"
          >
            <IconToggle icon={<IconChevronLeft />} isActive onClick={() => setShowSidebar(!showSidebar)} />
          </Box>
        }
      </Flex>
      <Chatbot />
    </LayoutWrapper>
  );
}