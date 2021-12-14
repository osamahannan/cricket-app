import React, { useState, useEffect } from 'react'
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useWindowScroll } from 'react-use';
import Fade from 'react-reveal/Fade';

const ScrollButton = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [pageYOffset]);

    if (!visibility) {
        return false;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Fade up>
            <div className='scroll-button'>
                <button className='scroll-btn' onClick={() => scrollToTop()}>
                    <BsFillArrowUpSquareFill className='scroll-icon' />
                </button>
            </div>
        </Fade>
    )
}

export default ScrollButton
