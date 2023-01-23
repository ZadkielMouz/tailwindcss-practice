
export const AppLayout = ({ children }) => {
    return (
        <>
            <div className="flex justify-center rounded-xl shadow-xl h-32 md:h-48 max-w-2xl mx-auto">
                <img src="./tailwindcss.svg" alt="tailwindcss" />
            </div>

            {children}

        </>
    )
}
