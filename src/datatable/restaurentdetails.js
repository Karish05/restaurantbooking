import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';


const Restaurentdetails=[
    {
        Sno:1,
        Restaurentname:"Take it Cheesy",
        Location:"T-nagar ,Chennai-28",
        offer:"25% off",
        Contact:"04656-849284",
        info:<Link to="/RestaurentFullDetails"><InfoIcon/></Link>,

    },
    {
        Sno:2,
        Restaurentname:`Wingman’s Pub`,
        Location:"Tambaram, Chennai-78",
        offer:"30% Off",
        Contact:"04656-849284",
        info:<InfoIcon/>
    },
    {
        Sno:3,
        Restaurentname:"Foraged Fare",
        Location:"porur, Chennai-28",
        offer:"35% off",
        Contact:"04576-8786284",
        info:<InfoIcon/>
    },
    {
        Sno:4,
        Restaurentname:"Palm & Pine",
        Location:"Velachery,Chennai-36",
        offer:"55% off",
        Contact:"04987-8465765",
        info:<InfoIcon/>
    },
    {
        Sno:5,
        Restaurentname:"Herbivoria",
        Location:"Mahabaliburam,Chennai-76",
        offer:"25% off",
        Contact:"04789-657689",
        info:<InfoIcon/>
    },
    {
        Sno:6,
        Restaurentname:"Girl & the Goat",
        Location:"Meenambakkam,Chennai-65",
        offer:"15% off",
        Contact:"04565-456578",
        info:<InfoIcon/>
    }
]

export default Restaurentdetails;