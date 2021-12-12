import { ContainerBackground, Paragraph } from "../../components/common/styled"
import Cabecalho from "../../components/common/cabecalho"
import { ContainerDataSelect } from "./styled"
import { BigBox, SmallBox } from "./boxes"

import Api from "../../service/apiSessoes"
import { useState } from "react"
const api = new Api();

export default function DataSelect() {
    const [dates, setDates] = useState([]);

    const getDates = async () => {
        let r = await api.availableDays();
        setDates(r);
    }

    useState(() => {
        getDates();
    }, [])
    

    return (
        <ContainerBackground>
            <Cabecalho />
            <ContainerDataSelect>
                <Paragraph> Escolha a data que você deseja comprar o ingresso. </Paragraph>
                <div className="Boxes">
                {!dates[0] ? <div> </div> :<div className="BigBox"> <BigBox date={dates[0]}/> </div>}
                    <div className="MiniBoxes">
                       
                        <div className="UpperBox">
                            {!dates ? <div> </div> : dates.slice(1, 4).map((item, i) => {
                                return <SmallBox key={i} date={item}/>
                            })}
                        </div> 
                        <div className="BottomBox"> 
                            {!dates ? <div> </div> : dates.slice(4, 7).map((item, i) => {
                                return <SmallBox key={i} date={item}/>
                            })}
                        </div>

                    </div>
                </div>

            </ContainerDataSelect>
        </ContainerBackground>
    )
}