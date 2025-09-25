import React from "react";
import Events from "./Events";
import ukusefyaImg from '../assets/ukusefyaImg.jpg';
import kuombokaImg from '../assets/kuombokaImg.jpg';
import ncwalaImg from '../assets/ncwalaImg.jpg';
import likumbiImg from '../assets/likumbiImg.jpg';
import lwiindiImg from '../assets/lwiindiImg.jpg';
import kkImg from '../assets/kkImg.jpg';
import kulambaImg from '../assets/kulambaImg.jpg';
import umutombokaImg from '../assets/umutombokaImg.jpg';
import tuwimbaImg from '../assets/tuwimbaImg.jpg';
import chibwelaImg from '../assets/chibwelaImg.jpg';







const Card = () => {
    return (
        <div className="container">
            <Events
                img={ukusefyaImg}
                title="Ukusefya Pa'gwena"
                description="Ukusefya Pa Ng’wena is a ceremony of the Bemba people 
                that celebrates their migration and settlement history. It is marked 
                by traditional dances, songs, and storytelling that honor the origins 
                of the Bemba kingdom."           
            />
            <Events
                img={kuombokaImg}
                title="Kuomboka"
                description="Kuomboka, meaning “to get out of water,” is celebrated by the Lozi
                 people when the Litunga moves from the flooded plains to higher ground. It is 
                 famous for the royal barge, vibrant paddlers in traditional attire, and rhythmic drums."            
            />
            <Events
                img={ncwalaImg}
                title="Ncwala"
                description="Nc’wala is a Ngoni ceremony that marks the first harvest. 
                It honors ancestors, celebrates unity, and features warriors in traditional 
                regalia performing dances that showcase Ngoni strength and heritage."            
            />
            <Events
                img={likumbiImg}
                title="Likumbi Lya Mize"
                description="Likumbi Lya Mize is a Luvale ceremony recognized by UNESCO for
                its cultural significance. It highlights the Mukanda initiation rite, with
                masked Makishi dancers performing to honor ancestral spirits and preserve Luvale traditions."            
            />
            <Events
                img={lwiindiImg}
                title="Lwindi "
                description="Lwiindi is a Tonga thanksgiving ceremony where people offer prayers 
                for rain and a good harvest. It is marked by sacrifices, songs, and communal feasting
                that express gratitude to ancestral spirits."            
            />
            <Events
                img={kkImg}
                title="Kulamba Kubwalo"
                description="The Lenje people in Central Province celebrate Kulamba Kubwalo under 
                Senior Chief Mukuni Ng’ombe. The thanksgiving ceremony honors ancestors and seeks 
                blessings for rain and harvest. It features traditional dances, rituals, and 
                communal feasting."            
            />
            <Events
                img={kulambaImg}
                title="Kulamba"
                description="The Chewa people celebrate Kulamba at Mkaika in Katete District. Chiefs 
                from Zambia, Malawi, and Mozambique gather to pay homage to Paramount Chief Kalonga 
                Gawa Undi. The ceremony showcases traditional dances, drumming, and cultural unity."            
            />
            <Events
                img={umutombokaImg}
                title="Umutomboka"
                description="Umutomboko is a Lunda ceremony commemorating their historic victories 
                and migrations. It features dramatic war dances, drumbeats, and storytelling that
                celebrate Lunda resilience and leadership."            
            />
            <Events
                img={tuwimbaImg}
                title="Tuwimba"
                description="The Nsenga people in Eastern Province celebrate Tuwimba at Chief Kafwimbi’s palace.
                It is a harvest thanksgiving festival marked by singing, dancing, and the sharing of food. 
                The ceremony brings the community together in gratitude for a successful farming season."            
            />
            <Events
                img={chibwelaImg}
                title="Chibwela kumushi"
                description="The Soli people in Lusaka Province celebrate Chibwela Kumushi in the Luangwa
                and Rufunsa districts. The ceremony is led by Chief Bunda-Bunda and marks the end of the 
                farming season. It features singing, dancing, and traditional drumming. "            
            />
        </div>
    )
}

export default Card;