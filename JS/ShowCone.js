const selector = document.getElementById("price");
const ifCone = document.querySelector(".flavorfour");
const tasteselect = document.getElementById("order");

const taste1 = document.getElementById("scoop1");
const taste2 = document.getElementById("scoop2");
const taste3 = document.getElementById("scoop3");
const taste4 = document.getElementById("scoop4");

function showImg(){
    //SHOW CONE
    if(ifCone.style.display === ""){
        //SHOW 1 SCOOP
        if (selector.innerText === "€2"){
            const imgcone1 = document.getElementById("cone1");
            imgcone1.style.display = "block"
                //SMAKEN
                if(tasteselect.innerText === "Vanilla"){
                    const vanilla1 = document.getElementById("vScone1")
                    vanilla1.style.display = "block"
                }else if(tasteselect.innerText === "Chocolate"){
                    const chocolate1 = document.getElementById("cScone1")
                    chocolate1.style.display = "block"
                }else if(tasteselect.innerText === "Strawberry"){
                    const strawberry1 = document.getElementById("sScone1")
                    strawberry1.style.display = "block"
                }

        //SHOW 2 SCOOP
        }else if(selector.innerText === "€4"){
            const imgcone2 = document.getElementById("cone2");
            imgcone2.style.display = "block"
            //SMAKEN
            if(taste1.options[taste1.selectedIndex].text === "Vanilla"){
                const twoScoopVanLeft = document.getElementById("vScone2Left")
                twoScoopVanLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vScone2Right")
                    twoScoopVanRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cScone2Right")
                    twoScoopChocRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sScone2Right")
                    twoScoopStrawRight.style.display = "block"
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Chocolate"){
                const twoScoopChocLeft = document.getElementById("cScone2Left")
                twoScoopChocLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vScone2Right")
                    twoScoopVanRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cScone2Right")
                    twoScoopChocRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sScone2Right")
                    twoScoopStrawRight.style.display = "block"
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Strawberry"){
                const twoScoopStrawLeft = document.getElementById("sScone2Left")
                twoScoopStrawLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vScone2Right")
                    twoScoopVanRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cScone2Right")
                    twoScoopChocRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sScone2Right")
                    twoScoopStrawRight.style.display = "block"
                }
            }
            
            

        //SHOW 3 SCOOP
        }else if(selector.innerText === "€6"){
            const imgcone3 = document.getElementById("cone3");
            imgcone3.style.display = "block"
            if(taste1.options[taste1.selectedIndex].text === "Vanilla"){
                const twoScoopVanLeft = document.getElementById("vScone2Left")
                twoScoopVanLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vScone2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                    
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cScone2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }

                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sScone2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                        if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vScone3top")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cScone3top")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sScone3top")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                        if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vScone3top")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cScone3top")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sScone3top")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                        if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vScone3top")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cScone3top")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sScone3top")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Chocolate"){
                const twoScoopChocLeft = document.getElementById("cScone2Left")
                twoScoopChocLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vScone2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cScone2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sScone2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Strawberry"){
                const twoScoopStrawLeft = document.getElementById("sScone2Left")
                twoScoopStrawLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vScone2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cScone2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sScone2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vScone3top")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cScone3top")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sScone3top")
                        threeScoopStrawTop.style.display = "block"
                    }
                }
            }
        }


    }
    //SHOW CUP
    else if (ifCone.style.display === "block"){
        if (selector.innerText === "€2"){
            const imgcone1 = document.getElementById("cup1");
            imgcone1.style.display = "block";
            if(tasteselect.innerText === "Vanilla"){
                const vanilla1 = document.getElementById("vCup1")
                vanilla1.style.display = "block"
            }else if(tasteselect.innerText === "Chocolate"){
                const chocolate1 = document.getElementById("cCup1")
                chocolate1.style.display = "block"
            }else if(tasteselect.innerText === "Strawberry"){
                const strawberry1 = document.getElementById("sCup1")
                strawberry1.style.display = "block"
            }


        }else if(selector.innerText === "€4"){
            const imgcone2 = document.getElementById("cup2");
            imgcone2.style.display = "block";
            if(taste1.options[taste1.selectedIndex].text === "Vanilla"){
                const twoScoopVanLeft = document.getElementById("vCup2Left")
                twoScoopVanLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Chocolate"){
                const twoScoopChocLeft = document.getElementById("cCup2Left")
                twoScoopChocLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVan = document.getElementById("vCup2Right")
                    twoScoopVan.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Strawberry"){
                const twoScoopStrawLeft = document.getElementById("sCup2Left")
                twoScoopStrawLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                }
            }



        }else if(selector.innerText === "€6"){
            const imgcone3 = document.getElementById("cup3");
            imgcone3.style.display = "block";
            if(taste1.options[taste1.selectedIndex].text === "Vanilla"){
                const twoScoopVanLeft = document.getElementById("vCup2Left")
                twoScoopVanLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                    
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }

                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3top")
                        threeScoopVanTop.style.display = "block"
                        if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vCup3")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cCup3")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sCup3")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                        if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vCup3")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cCup3")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sCup3")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                        if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vCup3")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cCup3")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sCup3")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Chocolate"){
                const twoScoopChocLeft = document.getElementById("cCup2Left")
                twoScoopChocLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                }

            }else if(taste1.options[taste1.selectedIndex].text === "Strawberry"){
                const twoScoopStrawLeft = document.getElementById("sCup2Left")
                twoScoopStrawLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup3")
                        threeScoopVanTop.style.display = "block"
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup3")
                        threeScoopChocTop.style.display = "block"
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                    }
                }
            }
        }else if(selector.innerText === "€8"){
            const imgcone3 = document.getElementById("cup4");
            imgcone3.style.display = "block";
            if(taste1.options[taste1.selectedIndex].text === "Vanilla"){
                const twoScoopVanLeft = document.getElementById("vCup2Left")
                twoScoopVanLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    
                }
                else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }

                }                
                else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const threeScoopVanTop = document.getElementById("vCup4Left")
                        threeScoopVanTop.style.display = "block"
                        if(taste.options[taste4.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vCup4Right")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cCup4Right")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sCup4Right")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const threeScoopChocTop = document.getElementById("cCup4Left")
                        threeScoopChocTop.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vCup4Right")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cCup4Right")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sCup4Right")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const threeScoopStrawTop = document.getElementById("sCup3")
                        threeScoopStrawTop.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const threeScoopVanTop = document.getElementById("vCup4Right")
                            threeScoopVanTop.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const threeScoopChocTop = document.getElementById("cCup4Right")
                            threeScoopChocTop.style.display = "block"
                        }
                        else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const threeScoopStrawTop = document.getElementById("sCup4Right")
                            threeScoopStrawTop.style.display = "block"
                        }
                    }
                }
            }




            
            else if(taste1.options[taste1.selectedIndex].text === "Chocolate"){
                const twoScoopChocLeft = document.getElementById("cCup2Left")
                twoScoopChocLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                }
            }
            
            
            
            
            
            else if(taste1.options[taste1.selectedIndex].text === "Strawberry"){
                const twoScoopStrawLeft = document.getElementById("sCup2Left")
                twoScoopStrawLeft.style.display = "block"
                if(taste2.options[taste2.selectedIndex].text === "Vanilla"){
                    const twoScoopVanRight = document.getElementById("vCup2Right")
                    twoScoopVanRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Chocolate"){
                    const twoScoopChocRight = document.getElementById("cCup2Right")
                    twoScoopChocRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                }else if(taste2.options[taste2.selectedIndex].text === "Strawberry"){
                    const twoScoopStrawRight = document.getElementById("sCup2Right")
                    twoScoopStrawRight.style.display = "block"
                    if(taste3.options[taste3.selectedIndex].text === "Vanilla"){
                        const FourScoopVanLeft = document.getElementById("vCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }else if(taste3.options[taste3.selectedIndex].text === "Chocolate"){
                        const FourScoopVanLeft = document.getElementById("cCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                    else if(taste3.options[taste3.selectedIndex].text === "Strawberry"){
                        const FourScoopVanLeft = document.getElementById("sCup4Left")
                        FourScoopVanLeft.style.display = "block"
                        if(taste4.options[taste4.selectedIndex].text === "Vanilla"){
                            const fourScoopVanRight = document.getElementById("vCup4Right")
                            fourScoopVanRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Chocolate"){
                            const fourScoopChocRight = document.getElementById("cCup4Right")
                            fourScoopChocRight.style.display = "block"
                        }else if(taste4.options[taste4.selectedIndex].text === "Strawberry"){
                            const fourScoopStrawRight = document.getElementById("sCup4Right")
                            fourScoopStrawRight.style.display = "block"
                        }
                    }
                }
            }
        }
    }
};


function hideImg(){
    const img = document.querySelector(".goAway")
    img.style.display = "none";
}