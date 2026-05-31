import { Stack, Text } from "@flodesk/grain";
import { TemplateConfig } from "../../../context/EditorContext";
import ColorPicker from "../controllers/ColorPicker";
import SizeInput from "../controllers/SizeInput";

type PageConfigProps = {
    templateConfig: TemplateConfig;
    updateTemplatConfig: (updates: Partial<TemplateConfig>) => void;
}

export default function PageConfig({ templateConfig, updateTemplatConfig }: PageConfigProps) {
    return (
        <Stack gap="l">
            <Text align="center" size="l">Page settings</Text>
            <ColorPicker
                label="Backdrop color"
                value={templateConfig?.backgroundColor || undefined}
                onChange={(val: string) => {
                    updateTemplatConfig({
                        backgroundColor: val
                    })
                }} />
            <ColorPicker
                label="Canvas color"
                value={templateConfig?.canvasColor || undefined}
                onChange={(val: string) => {
                    updateTemplatConfig({
                        canvasColor: val
                    })
                }} />
            <SizeInput
                label="Width"
                min={300}
                max={800}
                step={10}
                unit="px"
                value={parseInt(templateConfig?.maxWidth || "300px") || undefined}
                onChange={(val: number) => {
                    updateTemplatConfig({
                        maxWidth: `${val}px`
                    })
                }}
            />
        </Stack>
    );
}