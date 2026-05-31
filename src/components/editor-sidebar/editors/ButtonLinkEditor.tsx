import { Stack, Text } from '@flodesk/grain';
import ColorPicker from '../controllers/ColorPicker';
import SizeInput from '../controllers/SizeInput';
import TextInput from '../controllers/TextInput';
import { NodeData } from '../../../context/EditorContext';

type ButtonLinkEditorProps = {
    data: NodeData;
    setData: (nodeData: NodeData) => void;
    label?: string;
}

export default function ButtonLinkEditor({ data, setData, label }: ButtonLinkEditorProps) {
    return (
        <Stack gap="l">
            <Text align="center" size="l">{label ?? 'Link settings'}</Text>
            <ColorPicker
                label="Background color"
                value={data?.style?.backgroundColor as string | undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, backgroundColor: val }
                })}
            />
            <ColorPicker
                label="Text color"
                value={data?.style?.color as string | undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, color: val }
                })}
            />
            <TextInput label="Content" value={data?.content || ""} placeholder={"Context"} onChange={(val) => setData({
                ...data,
                content: val
            })} />
            <TextInput
                label="URL"
                value={data?.props?.href as string | undefined}
                placeholder="https://example.com"
                onChange={(val) => setData({
                    ...data,
                    props: { ...data.props, href: val }
                })}
            />
            <SizeInput
                unit="px"
                label="Border radius"
                min={0}
                max={50}
                step={1}
                value={parseInt(data?.style?.borderRadius as string | "0px") || undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, borderRadius: `${val}px` }
                })}
            />
        </Stack>
    );
}
