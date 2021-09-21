import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, Row, Col, Image} from 'antd'
import { makeStyles } from '@material-ui/core/styles';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
const useStyles = makeStyles(theme => ({
    title: {
        fontSize:'38px',
        fontFamily: 'Montserrat',
        color: '#3a3a3a',
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: '20px',
        
    },
    answer : {
        borderLeft: '1px solid #d4d4d4',
        borderRight: '1px solid #d4d4d4',
        borderBottom: '1px solid #d4d4d4',
        padding: '15px 20px',
    },
    anserFont : {
        fontSize:'16px',
        fontFamily: 'Montserrat',
    },
    anserFont_bold : {
        fontSize:'16px',
        fontFamily: 'Montserrat',
        fontWeight: 800,
        paddingTop: '10px',
        paddingBottom: '20px'
    },
    question: {
        borderTop: '1px solid #d4d4d4',
        borderLeft: '1px solid #d4d4d4',
        borderRight: '1px solid #d4d4d4',
        borderBottom: '1px solid #d4d4d4',
        padding: '15px 20px',
        fontSize:'24px',
        fontFamily: 'Montserrat',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

}));

const FaqSection = () => {

    const classes = useStyles();

    const [isExp1, setExp1] = useState(false)
    const [isExp2, setExp2] = useState(false)
    const [isExp3, setExp3] = useState(false)
    const [isExp4, setExp4] = useState(false)
    const [isExp5, setExp5] = useState(false)
    const [isExp6, setExp6] = useState(false)
    const [isExp7, setExp7] = useState(false)
    const [isExp8, setExp8] = useState(false)
    const [isExp9, setExp9] = useState(false)
    const [isExp10, setExp10] = useState(false)
    const [expandIndex, setExpandIndex] = useState(-1)

    const expandHandle = (e, num) => {
        e.preventDefault()
        if(num === 1) {
            setExp1(!isExp1)
        } else if(num === 2) {
            setExp2(!isExp2)
        } else if(num === 3) {
            setExp3(!isExp3)
        } else if(num === 4) {
            setExp4(!isExp4)
        }else if(num === 5) {
            setExp5(!isExp5)
        } else if(num === 6) {
            setExp6(!isExp6)
        } else if(num === 7) {
            setExp7(!isExp7)
        }else if(num === 8) {
            setExp8(!isExp8)
        }else if(num === 9) {
            setExp9(!isExp9)
        }else if(num === 10) {
            setExp10(!isExp10)
        }        
    }

    return (
        <S.Container
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1300"
        > 
            <Row justify="center" style={{width: '100%'}}>
                <Col xs={24} sm={24} md={24} lg={18} xl={16}>
                    <div className={classes.title}>
                    FREQUENTLY ASKED QUESTIONS
                    </div>
                
                </Col>
            </Row>
            <Row justify="center" style={{width: '100%'}}>
                <Col xs={24} sm={24} md={24} lg={18} xl={14}>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 1)}>
                                <Col>
                                    What is an Investment DAO?  
                                </Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp1 ? <AiOutlineMinus style={{float: 'right'}} /> : <AiOutlinePlus style={{float: 'right'}} />}
                                </Col>
                            </div>
                            {isExp1&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>A DAO is an automated blockchain-based organization that is self-governed using sets of rules. The organization is made up of individuals who hold the native tokens of the DAO, with each token representing a vote in DAO ballots. </p>
                                    <p className={classes.anserFont}>An investment DAO has an additional feature called a Treasury. This is a multi-sig crypto currency wallet which holds all of the assets of the DAO. This could be in the form of crypto currency, land-NFTs, NFT art or other digital assets of value. As the treasury grows in value as do the tokens held by the DAO community. </p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 2)}>
                                <Col >What makes CoolBeez different?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp2 ? <AiOutlineMinus  style={{float: 'right'}}/> : <AiOutlinePlus  style={{float: 'right'}}/>}
                                </Col>
                            </div>
                            {isExp2&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>Unlike many other investment DAOs, the CoolBeez DAO is funded by 100% of all initial NFT sales at mint, royalties from secondary sales and future revenues generated from the DAO assets, such as metaverse land-NFTs and developments.  This ensures that any spend from the DAOs treasury (in the case of CoolBeez we call this the Community Development Fund), is fully auditable on the blockchain, so as marketing and development costs are deducted from the CDF the transactions are open for public review. </p>
                                    <p className={classes.anserFont}>All assets, such as land-NFTs or other profitable NFTs are also held in the CDF so the true value of the DAO is known by all community members at all times. As the value of the DAO grows the $COOLBEEZ tokens will increase in value too. </p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 3)}>
                                <Col >
                                    How secure is the CoolBeez DAO?
                                </Col>
                                
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp3 ? <AiOutlineMinus  style={{float: 'right'}}/> : <AiOutlinePlus style={{float: 'right'}} />}
                                </Col>
                            </div>
                            {isExp3&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>We take security of your funds very seriously, as such we use a solidity multisig 3 of 5, wallet contract, meaning that at least 3 of the 5 signatories need to sign a transaction to withdraw any funds from the CDF. The signatories are currently members of the dev and marketing team to avoid any mistrust in bringing in a 3rd party, however as resources permit this will be scaled up to a trusted independent 3rd party, such as a lawyer or accounting firm. Decisions around security will also be something the community will be able to vote on. </p>
                                    <p className={classes.anserFont}>In addition to this the minting, staking, DAO and multi-sig smart contracts will be audited by an external 3rd party to ensure any vulnerabilities are identified prior to deploying the smart contracts on the mainnet. All 4 contracts will be made available for review on the testnet should you wish to test the functionality for yourself. Test contract addresses will be made available once they are live.  </p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 4)}>
                                <Col >How much is a CoolBeez NFT?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp4 ? <AiOutlineMinus  style={{float: 'right'}}/> : <AiOutlinePlus  style={{float: 'right'}}/>}
                                </Col>
                            </div>
                            {isExp4&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>The public sale floor price is set at 0.075ETH. We have set it at this level to allow easy access to the investment DAO by a larger number of people. </p>
                                    <p className={classes.anserFont}>If you are lucky enough to be on our Whitelist the presale price will be lower but number of NFTs will be limited to just 2 per wallet address. </p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 5)}>
                                <Col >What is the Community Development Fund (CDF)?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                {isExp5 ? <AiOutlineMinus  style={{float: 'right'}}/> : <AiOutlinePlus style={{float: 'right'}} />}
                                </Col>
                            </div>
                            {isExp5&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>The CDF is our name for the DAO Treasury. This is a crypto currency wallet used to hold all of the assets and ETH that the DAO owns and is used to back the value of the DAO’s native token, $COOLBEEZ. Our aim is to build a solid community who are invested in the development of the DAO and its assets, hence we wanted the DAO treasury name to reflect our goal. </p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 6)}>
                                <Col >How do I get on the Whiltelist?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp6 ? <AiOutlineMinus  style={{float: 'right'}}/> : <AiOutlinePlus  style={{float: 'right'}}/>}
                                </Col>
                            </div>
                            {isExp6&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>It’s easy, just join our Discord server and Twitter and enter the regular giveaways. Spots are filling up fast!</p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 7)}>
                                <Col >How does staking work with CoolBeez?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp7 ? <AiOutlineMinus  style={{float: 'right'}}/> : <AiOutlinePlus  style={{float: 'right'}}/>}
                                </Col>
                            </div>
                            {isExp7&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>All NFTs from the CoolBeez collection are entitled to stake their NFT in return for daily rewards in the form of the native token of the DAO – $COOLBEEZ. </p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 8)}>
                                <Col >How much can I earn with staking?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp8 ? <AiOutlineMinus style={{float: 'right'}} /> : <AiOutlinePlus  style={{float: 'right'}}/>}
                                </Col>
                            </div>
                            {isExp8&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>Staking is calculated and paid on a daily basis based on the rarity of your NFT. </p>
                                    <p className={classes.anserFont}>‘OG’ NFTs will earn 10 x $COOLBEEZ tokens per day</p>
                                    <p className={classes.anserFont}>‘Naked’ NFTs will earn 20 x $COOLBEEZ tokens per day.</p>
                                    <p className={classes.anserFont}>Queen Beez NFTs will earn 50 x $COOLBEEZ tokens per day.</p>
                                    <p className={classes.anserFont}>1 of 1 NFTs will earn 1000 x $COOLBEEZ tokens per day.</p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 9)}>
                                <Col >How do the rarities of the collection work?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp9 ? <AiOutlineMinus style={{float: 'right'}}/> : <AiOutlinePlus style={{float: 'right'}}/>}
                                </Col>
                            </div>
                            {isExp9&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>There are 4 core rarities. Within each of the core rarities there are various additional traits that produce rarities within each core rarity. A double hit at getting a valuable NFT. The ETH value of the $COOLBEEZ token will be relative to the amount of tokens in circulation and the value of the DAO treasury, as well as the usual market forces. We intend to list the token on exchanges as soon a possible. </p>
                                    <p className={classes.anserFont_bold}>There are: </p>
                                    <p className={classes.anserFont_bold}>5500  x OG NFTs</p>
                                    <p className={classes.anserFont_bold}>489 x Naked NFTs</p>
                                    <p className={classes.anserFont_bold}>10 x QueenBeez NFTs</p>
                                    <p className={classes.anserFont_bold}>1 x 1of1 NFT</p>
                                    <p className={classes.anserFont_bold}>Totaling 6000</p>
                                </div>
                            }
                        </Col>
                    </Row>
                    <Row  style={{width: '100%'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div className={classes.question} onClick={(e) => expandHandle(e, 10)}>
                                <Col >When will the project launch?</Col>
                                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                    {isExp10 ? <AiOutlineMinus style={{float: 'right'}} /> : <AiOutlinePlus style={{float: 'right'}} />}
                                </Col>
                            </div>
                            {isExp10&&
                                <div className={classes.answer} data-aos={'fade-in'} data-aos-duration="700">
                                    <p className={classes.anserFont}>The collection will be released for presale at the end of March 2022. The public sale will take place with 24hrs of the presale. </p>
                                </div>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </S.Container>
    );
}

const S = {
    Container: styled(Row)`
        height: fit-content;
        width: 100%;
        padding: 10px;
        background-color: #f2f5f7;
        padding-top: 50px;
        padding-bottom: 50px;
        min-width: 300px;
    `,
}

export default FaqSection;