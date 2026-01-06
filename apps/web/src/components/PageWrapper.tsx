type PageWrapperProps = {
    children: React.ReactNode
}

export function PageWrapper( {children} :  PageWrapperProps) {
    return(
        <div className="min-h-screen w-full bg-amber-50 font-firasans font-light text-lg">
            {children}
        </div>
    )
}