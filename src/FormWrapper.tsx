import { ReactNode } from "react"

type FormWrapperProps = {
    title: string,
    children: ReactNode
}
export function FormWrapper({ title, children }: 
    FormWrapperProps) {
        return <>
            <h2 style={{ 
                textAlign: "center", 
                margin: 0, 
                marginBottom: "2rem"
                }}
            >
                { title }
            </h2>
            <div style={{ 
                display: "grid", 
                gap: "1rem 1rem", 
                justifyContent: "center", 
                gridTemplateColumns: "auto minmax(auto, 300px)",
                }}
            >
                { children }
            </div>
        </>
}