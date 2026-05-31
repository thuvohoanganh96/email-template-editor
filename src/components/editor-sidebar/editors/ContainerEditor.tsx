import { Stack, Text } from '@flodesk/grain';
import ColorPicker from '../controllers/ColorPicker';
import PaddingEditor, { PaddingValue } from '../controllers/PaddingEditor';
import { NodeData } from '../../../context/EditorContext';

type ContainerEditorProps = {
    data: NodeData;
    setData: (nodeData: NodeData) => void;
    label?: string;
}

export default function ContainerEditor({ data, setData, label }: ContainerEditorProps) {
    const parse = (v: string | number | undefined) => parseInt(v as string) || 0;

    return (
        <Stack gap="l">
            <Text align="center" size="l">{label ?? 'Container settings'}</Text>
            <ColorPicker
                label="Background color"
                value={data?.style?.backgroundColor as string | undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, backgroundColor: val }
                })}
            />
            <PaddingEditor
                label="Padding"
                value={{
                    top: parse(data?.style?.paddingTop),
                    right: parse(data?.style?.paddingRight),
                    bottom: parse(data?.style?.paddingBottom),
                    left: parse(data?.style?.paddingLeft),
                }}
                onChange={(val: PaddingValue) => setData({
                    ...data,
                    style: {
                        ...data.style,
                        paddingTop: `${val.top}px`,
                        paddingRight: `${val.right}px`,
                        paddingBottom: `${val.bottom}px`,
                        paddingLeft: `${val.left}px`,
                    }
                })}
            />
        </Stack>
    );
}
