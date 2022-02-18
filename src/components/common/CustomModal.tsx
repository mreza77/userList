import React from 'react';
import { Overlay } from "react-native-elements";


const CustomModal = (
    {
        backdropStyle = {
            opacity: 0.7
        },
        children,
        fullscreen = false,
        isVisible,
        onHide,
        overlayStyle,
        animationType
    }: any
) => {
    return (
        <Overlay
            backdropStyle={backdropStyle}
            fullScreen={fullscreen}
            isVisible={isVisible}
            onBackdropPress={onHide}
            overlayStyle={overlayStyle}
            animationType={animationType}
        >
            {children}
        </Overlay>
    )
}

export default CustomModal

