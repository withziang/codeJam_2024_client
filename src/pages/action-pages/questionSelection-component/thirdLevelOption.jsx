// ---------------------------      React Lib       ----------------------------------------------------------------
import {memo, useEffect, useState} from 'react'

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box, FormGroup, FormControlLabel, Checkbox} from "@mui/material";

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const ThirdLevelOption = ({optionList = [], data, currentStep}) => {
    // ---------------------- hooks --------------------------------------------------
    const [checkedState, setCheckedState] = useState({});
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    useEffect(() => {
        // Initialize the state whenever optionList changes
        const initialCheckedState = optionList.reduce((acc, key) => {
            acc[key] = false; // Set all checkboxes to unchecked
            return acc;
        }, {});
        setCheckedState(initialCheckedState);

        // Reset data.current['cases'] when optionList changes
        data.current.cases = [];
        // console.log("Initialized data:", data);
    }, [currentStep]);

    const handleChange = (key) => (event) => {
        const isChecked = event.target.checked;

        // Update the checked state
        setCheckedState((prevState) => ({
            ...prevState,
            [key]: isChecked,
        }));

        // Update the data object
        if (isChecked) {
            data.current.cases.push(key);
        } else {
            data.current.cases = data.current.cases.filter((item) => item !== key);
        }

        // console.log("Updated data:", data.current);
    };
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Box className="center_xy h100">
                <FormGroup>
                    {optionList.map((key, ind) => (
                        <FormControlLabel
                            key={ind}
                            control={
                                <Checkbox
                                    checked={!!checkedState[key]} // Controlled state
                                    onChange={handleChange(key)}
                                />
                            }
                            label={key}
                            sx={{
                                color: "#ffffff", // Unchecked color
                                "&.Mui-checked": {
                                    color: "#ffffff", // Checked color
                                },
                                "& .MuiSvgIcon-root": {
                                    fill: "#ffffff", // Fill color for the checkbox box
                                },
                            }}
                        />
                    ))}
                </FormGroup>
            </Box>
        </>
    );
};

export default memo(ThirdLevelOption);