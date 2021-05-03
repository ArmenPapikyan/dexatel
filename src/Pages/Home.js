import React from 'react';
import Banner from "../Components/Home/Banner";
import Careers from "../Components/Home/Careers";
import ModernLife from "../Components/Home/ModernLife";
import Values from "../Components/Home/Values";
import Perks from "../Components/Home/Perks";
import Budgets from "../Components/Home/Budgets";
import Offices from "../Components/Home/Offices";
import GlassDoor from "../Components/Home/GlassDoor";
import Interview from "../Components/Home/Interview";
import ViewJob from "../Components/Home/ViewJob";
import Form from "../Components/Home/Form";
function Home(){
    return(
        <div>
            <Banner/>
            <Careers/>
            <ModernLife/>
            <Values/>
            <Perks/>
            <Budgets/>
            <Offices/>
            <GlassDoor/>
            <Interview/>
            <ViewJob/>
            <Form/>
        </div>
    )
}
export default Home
