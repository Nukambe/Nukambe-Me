export default function PageContainer({
  children,
  id,
}: {
  children: any
  id?: string
}) {
  return (
    <div id={id} style={{ padding: "32px 0" }}>
      {children}
    </div>
  )
}
