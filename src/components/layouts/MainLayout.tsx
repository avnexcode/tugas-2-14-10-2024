import { Container } from "./Container"

type MainLayoutProps = {
    children: React.ReactNode
    className?: string
}
export const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const { children, className } = props
    return (
        <div className={`${className} min-h-screen`}>
            <Container>
                {children}
            </Container>
        </div>
    )
}