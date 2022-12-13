import { useState, useEffect } from 'react';

function useElementWidth(elementRef) {
    
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        
        const handleResize = () => {
            if (elementRef.current) {
                setWidth(elementRef.current.offsetWidth);
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    }, [elementRef])

    return width;
}

export default useElementWidth