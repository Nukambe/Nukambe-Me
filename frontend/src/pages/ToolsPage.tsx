import ToolGallery from "../features/tools/ToolGallery"
import PageContainer from "./PageContainer"

export default function ToolsPage() {
  return (
    <PageContainer id="tools">
      <h1>Tools</h1>
      <p>Welcome to the tools page!</p>
      <ToolGallery />
    </PageContainer>
  )
}
