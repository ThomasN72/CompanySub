import {Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import LandingCardStyle from './styles/LandingCardStyle';

const LandingGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 300px;
    grid-template-rows: 100px;
`


const LandingCard = () => (
    <LandingCardStyle>
        <LandingGrid>
            <div>
                <Icon name='paper plane outline' size='huge'></Icon>
            </div>
            <div>
                <h3>Company Sub</h3>
                <h5>Here to make your replacements go smootly</h5>
            </div>
        </LandingGrid>
        <div>
            <h3>hi lkasjd aisd;glkjad bacon l;aksdjf;lad Go Chiefs a;lskdjf;laisdgnal Pat Mahomes MVP ;alkjsdfl;kajsd</h3>
        </div>
    </LandingCardStyle>
    
)

export default LandingCard;
