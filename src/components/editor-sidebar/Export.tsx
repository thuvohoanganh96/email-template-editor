import { Button } from "@flodesk/grain";
import { useEditorContext } from "../../context/EditorContext";
import { generateHtml } from "./RenderHtml";

export default function Export() {
  const { templateConfig, blockIds, blocks } = useEditorContext();

  const handleExport = () => {
    const html = generateHtml(templateConfig, blockIds, blocks);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email-template.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="accent" onClick={handleExport}>
      Export HTML
    </Button>
  );
}
