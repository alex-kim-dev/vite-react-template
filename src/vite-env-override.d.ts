declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>
  export default content
}
