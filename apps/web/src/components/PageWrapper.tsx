type PageWrapperProps = {
    children: React.ReactNode
}

export function PageWrapper( {children} :  PageWrapperProps) {
    return(
        <div className="min-h-screen w-full bg-amber-100">
            {children}
        </div>
    )
}