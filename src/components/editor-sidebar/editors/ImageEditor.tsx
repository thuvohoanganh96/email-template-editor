import React from 'react';
import { Stack, Text } from '@flodesk/grain';
import TextInput from '../controllers/TextInput';
import SizeInput from '../controllers/SizeInput';
import ObjectFitSelector from '../controllers/ObjectFitSelector';
import { NodeData } from '../../../context/EditorContext';

type ImageEditorProps = {
    data: NodeData;
    setData: (nodeData: NodeData) => void;
    label?: string;
}

export default function ImageEditor({ data, setData, label }: ImageEditorProps) {
    return (
        <Stack gap="l">
            <Text align="center" size="l">{label ?? 'Image settings'}</Text>
            <TextInput
                label="URL"
                value={data?.props?.src as string | undefined}
                placeholder="https://example.com/image.png"
                onChange={(val) => setData({
                    ...data,
                    props: { ...data.props, src: val }
                })}
            />
            <TextInput
                label="Alt text"
                value={data?.props?.alt as string | undefined}
                placeholder="Image description"
                onChange={(val) => setData({
                    ...data,
                    props: { ...data.props, alt: val }
                })}
            />
            <SizeInput
                label="Width"
                min={20}
                max={100}
                step={1}
                unit="%"
                value={parseInt(data?.style?.width as string || "100%") || undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, width: `${val}%` }
                })}
            />
            <SizeInput
                label="Height"
                min={20}
                max={800}
                step={10}
                unit="px"
                value={parseInt(data?.style?.height as string || "300px") || undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, height: `${val}px` }
                })}
            />
            <ObjectFitSelector
                label="Object fit"
                value={data?.style?.objectFit as string | undefined}
                onChange={(val) => setData({
                    ...data,
                    style: { ...data.style, objectFit: val as React.CSSProperties['objectFit'] }
                })}
            />
        </Stack>
    );
}
