import { ContainerBackground, Paragraph } from "../../components/common/styled"
import Cabecalho from "../../components/cabecalho"
import { ContainerDataSelect } from "./styled"
import { BigBox, SmallBox } from "./boxes"


export default function DataSelect() {
    const apiSimulation = [
        '2020-10-11',
        '2020-10-12',
        '2020-10-13',
        '2020-10-14',
        '2020-10-15',
        '2020-10-16',
        '2020-10-17'
    ]

    return (
        <ContainerBackground>
            <Cabecalho />
            <ContainerDataSelect>
                <Paragraph> Escolha a data que você deseja comprar o ingresso. </Paragraph>
                <div className="Boxes">
                    <div className="BigBox"> <BigBox date={apiSimulation[0]}/> </div>
                    <div className="MiniBoxes">
                        {delete apiSimulation[0]}
                        
                        <div className="UpperBox">
                            {apiSimulation.slice(0, 4).map((item, i) => {
                                return <SmallBox key={i} date={item}/>
                            })}
                        </div> 
                        <div className="BottomBox"> 
                            {apiSimulation.slice(4, 7).map((item, i) => {
                                return <SmallBox key={i} date={item}/>
                            })}
                        </div>

                    </div>
                </div>

            </ContainerDataSelect>
        </ContainerBackground>
    )
}