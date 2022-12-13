import React from 'react';
import PropTypes from 'prop-types';
import './Marquee.css'

const Marquee = ({ speed, children }) => {

    const container = React.useRef()
    const marquee = React.useRef()

    const [left, setLeft] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLeft((prev) => {
                let left = prev;
                left--;
                if (left < -marquee.current.clientWidth) {
                    left = container.current.clientWidth;
                }
                return left
            })
        }, speed)

        return () => clearInterval(interval)
    }, [speed])

    return (
        <div
            ref={container}
            className="marquee-container"
        >
            <div
            ref={marquee}
            className="marquee"
            style={{ 
                left: `${left}px`,
            }}
            >
            {children}
            </div>
        </div>
    )
}

Marquee.defaultProps = {
    speed: 30,
}

Marquee.propTypes = {
    speed: PropTypes.number,
}

export default Marquee