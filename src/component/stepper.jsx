// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, useState, memo} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------
import {Step, Stepper} from 'react-form-stepper';
// ---------------------------      Local Comp      ----------------------------------------------------------------

const StepperComp = ({currentStep, listName}) => {
    // ---------------------- hooks --------------------------------------------------
    const [steps, setSteps] = useState([]);                   // physical steps element

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    const ConnectorStyleProps = {
        disabledColor: 'rgba(193,192,192,0.44)',
        activeColor: '#2dcc1a',
        completedColor: '#2dcc1a'
    }

    const StepStyleDTO = {
        activeBgColor: '#1271c8',
        completedBgColor: '#2dcc1a',
        inactiveBgColor: 'rgba(193,192,192,0.44)',
        size: '2.5em',
    };

    // --------------------- Function ------------------------------------------------
    useEffect(() => {
        setSteps(()=>{
            return listName.reduce((acc, key)=>{
                return [...acc, <Step label={key} key={acc.length + 1}/>]
            },[]);
        });
    }, []);
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Stepper activeStep={currentStep} connectorStateColors={true}
                     styleConfig={StepStyleDTO}
                     connectorStyleConfig={ConnectorStyleProps}
                     style={{color:'#94a2ac'}}>
                {steps}
            </Stepper>
        </>
    );
};

export default memo(StepperComp);