import { Arrange, Box, Flex, Icon, IconButton, IconRedo, IconUndo, Text } from "@flodesk/grain";
import { useEditorContext } from "../../context/EditorContext";
import Export from "./Export";



export default function Footer() {
    const { undo, redo, canUndo, canRedo } = useEditorContext();

    return (
        <Box paddingX="l" paddingY="s" position="absolute" left={0} bottom={0} width="100%" borderSide="all" shadow="l" backgroundColor="background">
            <Flex wrap="no-wrap" justifyContent="space-between" alignItems="center">
                <Arrange gap="m">
                    <IconButton onClick={undo} disabled={!canUndo}>
                        <Arrange gap="0.65em">
                            <Icon size={"m"} icon={<IconUndo />} />
                            <Text size={"m"} weight="medium">
                                Undo
                            </Text>
                        </Arrange>
                    </IconButton>

                    <IconButton onClick={redo} disabled={!canRedo}>
                        <Arrange gap="0.65em">
                            <Icon size={"m"} icon={<IconRedo />} />
                            <Text size={"m"} weight="medium">
                                Redo
                            </Text>
                        </Arrange>
                    </IconButton>
                </Arrange>
                <Export />
            </Flex>
        </Box>
    );
}

