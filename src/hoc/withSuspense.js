import React, {Suspense} from 'react'
import Preloader from "../Components/common/Preloader/Preloader";

export let withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}

