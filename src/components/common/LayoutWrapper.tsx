import { ReactNode } from 'react';
import { Flex } from '@flodesk/grain';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutProps) {

    return (
        <Flex
            width="100vw"
            height="100vh"
            direction="column"
        >
            <Flex
                width="100%"
                alignItems="center"
            >
                <Header />
            </Flex>

            <Flex
                flex="1"
                width="100%"
                overflow="hidden"
            > 
                {children}
            </Flex>
        </Flex>
    );
}