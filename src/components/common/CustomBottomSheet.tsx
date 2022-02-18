import React, { useMemo, useRef, useEffect, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../config/colors';

interface sheetProps {
    children: React.ReactNode,
    visibleSheet?: boolean,
    closeSheet?: boolean
}

const CustomBottomSheet = ({ children, visibleSheet, closeSheet = false }: sheetProps) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => [hp(1), hp(50)], []);

    useEffect(() => {
        bottomSheetRef.current?.expand()
    }, [visibleSheet]);

    useEffect(() => {
        closeSheet && bottomSheetRef.current?.close()
    }, [closeSheet]);

    const handleSheetChanges = useCallback((index: number) => {
        index === 0 && bottomSheetRef?.current?.close()
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={{ backgroundColor: colors.bgModalColor }}
        >
            {children}
        </BottomSheet>
    )
}

export default CustomBottomSheet

