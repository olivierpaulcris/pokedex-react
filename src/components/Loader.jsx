import { DotSpinner } from '@uiball/loaders'

export const Loader = () => {
    return (
        <div className="container-loader">
            <DotSpinner
                size={40}
                speed={1.75}
                color="black"
            />
        </div>
    )
}