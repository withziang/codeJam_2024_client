// ---------------------------      React Lib       ----------------------------------------------------------------
import {memo, useEffect, useState} from 'react'
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import Button from 'react-bootstrap/Button';
// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box, Stack} from "@mui/material";
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const SecondLevelOption = ({optionList = [], setCurrentStep, data}) => {
    // ---------------------- hooks --------------------------------------------------
    const [buttonList, setButtonList] = useState([]);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    useEffect(() => {
        setButtonList(optionList.reduce((acc, key, ind) => {
            return [...acc, <Button className="questionOptionButton" variant="outline-light"
                                    key={ind} onClick={() => {
                data.current["questionType"] = key;
                setCurrentStep(2);
            }}>{key}</Button>]
        }, []));

        //console.log(data);
    }, [optionList]);
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Box className="center_xy h100">
                <Stack spacing={3}>
                    {buttonList}
                </Stack>
            </Box>
        </>
    );
};

export default memo(SecondLevelOption);