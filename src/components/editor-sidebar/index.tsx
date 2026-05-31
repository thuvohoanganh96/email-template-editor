import { Box } from '@flodesk/grain';
import SidebarRender from './SidebarRender';
import Footer from './Footer';



export default function EditorSidebar() {
    return (
        <Box position="relative" height="100%" overflow="hidden" paddingBottom="xxl">
            <Box height="100%" overflowY="auto" padding={{
                default: "xl",
                tablet: "l", 
                mobile: "m"
            }} paddingBottom="xxl">
                <SidebarRender />
            </Box>
            <Footer />
        </Box>
    );
}

