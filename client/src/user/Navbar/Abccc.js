import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';//import styles 👇
import 'react-modern-drawer/dist/index.css'

import Nishant from '../../assets/Nishant.JPG'

const Abccc = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer} ><ArrowForwardIosSharpIcon /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </>
    )
}

export default Abccc