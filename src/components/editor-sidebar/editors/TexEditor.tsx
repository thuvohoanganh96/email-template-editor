import { Stack, Text } from '@flodesk/grain';
import ColorPicker from '../controllers/ColorPicker';
import TextInput from '../controllers/TextInput';
import { NodeData } from '../../../context/EditorContext';
import { PRESET_COLORS } from '../../../constant';
import FontPicker, { FontValue } from '../controllers/FontPicker';
import PaddingEditor, { PaddingValue } from '../controllers/PaddingEditor';
import AlignmentSelection, { AlignmentValue } from '../controllers/AlignmentSelection';
import FontSizeSelector from '../controllers/FontSizeSelector';

type TextEditorProps = {
    data: NodeData;
    setData: (nodeData: NodeData) => void;
}

export default function TextEditor({ data, setData, }: TextEditorProps) {
    const parse = (v: string | number | undefined) => parseInt(v as string) || 0;

    return (
        <Stack gap="l">
            <Text size="l" align="center">Text settings</Text>
            <ColorPicker label="Background color" value={data?.style?.backgroundColor || "transparent"} onChange={(val) => setData({
                ...data,
                style: {
                    ...data.style,
                    backgroundColor: val
                }
            })} />
            <ColorPicker label="Text color" value={data?.style?.color || PRESET_COLORS[0]} onChange={(val) => setData({
                ...data,
                style: {
                    ...data.style,
                    color: val
                }
            })} />
            <TextInput label="Content" value={data?.content || ""} placeholder={"Context"} onChange={(val) => setData({
                ...data,
                content: val
            })} />
            <FontPicker
                label="Font"
                value={{
                    fontFamily: data?.style?.fontFamily || 'Inter',
                    fontWeight: data?.style?.fontWeight as string || 'normal'
                }}
                onChange={(val: FontValue) => {
                    setData({
                        ...data,
                        style: {
                            ...data.style,
                            fontFamily: val.fontFamily,
                            fontWeight: val.fontWeight
                        }
                    })
                }}
            />
            <FontSizeSelector
                label="Font size"
                value={parseInt(data?.style?.fontSize as string) || undefined}
                onChange={(val) => {
                    setData({
                        ...data,
                        style: {
                            ...data.style,
                            fontSize: `${val}px`
                        }
                    });
                }} />
            <AlignmentSelection
                label="Text align"
                value={data?.style?.textAlign as AlignmentValue}
                onChange={(val: AlignmentValue) => {
                    setData({
                        ...data,
                        style: {
                            ...data.style,
                            textAlign: val
                        }
                    });
                }} />
            <FontSizeSelector
                label="Line height"
                value={parseInt(data?.style?.lineHeight as string) || undefined}
                onChange={(val) => {
                    setData({
                        ...data,
                        style: {
                            ...data.style,
                            lineHeight: `${val}px`
                        }
                    });
                }} />

            <PaddingEditor
                label="Padding"
                value={{
                    top: parse(data?.style?.paddingTop),
                    right: parse(data?.style?.paddingRight),
                    bottom: parse(data?.style?.paddingBottom),
                    left: parse(data?.style?.paddingLeft),
                }}
                onChange={(val: PaddingValue) => {
                    setData({
                        ...data,
                        style: {
                            ...data.style,
                            paddingTop: `${val.top}px`,
                            paddingRight: `${val.right}px`,
                            paddingBottom: `${val.bottom}px`,
                            paddingLeft: `${val.left}px`,
                        }
                    });
                }} />
        </Stack>
    );
}

