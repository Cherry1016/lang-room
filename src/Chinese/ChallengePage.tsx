import React, { useState, useEffect, MouseEvent } from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { ListLevel1, PinyinDict, DefDict } from "./CharacterList";

const LevelSelectPage = (props: RouteComponentProps) => {

    const history = useHistory()
    const [word, setWord] = useState<string | null>(null)
    const [pinyinAns, setPinyinAns] = useState<string | null>(null)
    const [defAns, setDefAns] = useState<string | null>(null)
    const [selectedPinyin, setSelectedPinyin] = useState<string | null>(null)
    const [selectedDef, setSelectedDef] = useState<string | null>(null)
    const [pinyinChoices, setPinyinChoices] = useState<string[]>([])
    const [defChoices, setDefChoices] = useState<string[]>([])
    const [wrongPinyinList, setWrongPinyinList] = useState<string[]>([])
    const [wrongDefList, setWrongDefList] = useState<string[]>([])
    const [pinyinPass, setPinyinPass] = useState<boolean>(false)
    const [defPass, setDefPass] = useState<boolean>(false)

    useEffect(() => {
        handleSetWord()
    }, [])

    useEffect(() => {
        if (word) {
            createPinyinChoice()
            createDefinitionChoice()
        }
    }, [word])

    const clearState = () => {
        setWord(null)
        setPinyinAns(null)
        setDefAns(null)
        setSelectedPinyin(null)
        setSelectedDef(null)
        setPinyinChoices([])
        setDefChoices([])
        setWrongPinyinList([])
        setWrongDefList([])
        setPinyinPass(false)
        setDefPass(false)
    }

    const handleNext = () => {
        clearState()
        handleSetWord()
    }

    const handleSetWord = () => {
        let randomWord = ListLevel1[Math.floor(Math.random() * ListLevel1.length)]
        let len = randomWord.length
        setWord(randomWord)
        setPinyinAns(PinyinDict[`len${len}`][randomWord])
        setDefAns(DefDict[randomWord])
    }

    const handleClickPinyin = (e: MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement
        setSelectedPinyin(target.innerText)
    }

    const handleClickDef = (e: MouseEvent<HTMLButtonElement>) => {
        let target = e.target as HTMLButtonElement
        setSelectedDef(target.innerText)
    }

    const createPinyinChoice = () => {
        let choices: string[] = []
        let len = word?.length
        let pinyinObj = PinyinDict[`len${len}`]
        if (word) {
            let correctPinyin = pinyinObj[word]
            choices.push(correctPinyin)
        }
        while (choices.length < 4) {
            let pinyin = randomObjValue(pinyinObj)
            if (!choices.includes(pinyin)) {
                choices.push(pinyin)
            }
        }
        setPinyinChoices(shuffleArray(choices))
    }

    const createDefinitionChoice = () => {
        let choices: string[] = []

        if (word) {
            let correctDef = DefDict[word]
            choices.push(correctDef)
        }

        while (choices.length < 4) {
            let def = randomObjValue(DefDict)
            if (!choices.includes(def)) {
                choices.push(def)
            }
        }
        setDefChoices(shuffleArray(choices))
    }

    const randomObjValue = (obj: { [key: string]: string }) => {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    const shuffleArray = (a: Array<any>) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const handleConfirm = () => {
        if (selectedPinyin && selectedPinyin !== pinyinAns) {
            setWrongPinyinList([...wrongPinyinList, selectedPinyin])
            setSelectedPinyin(null)
        } else if (selectedPinyin){
            setPinyinPass(true)
        }
        if (selectedDef && selectedDef !== defAns) {
            setWrongDefList([...wrongDefList, selectedDef])
            setSelectedDef(null)
        } else if (selectedDef){
            setDefPass(true)
        }
    }

    return (
        <div>
            <h1 className="challenge-word">{word}</h1>
            <h3>Please choose Pinyin</h3>
            <div>
                {pinyinChoices.map((item, index) => {
                    return (
                        <button
                            key={index}
                            disabled={wrongPinyinList.includes(item) || pinyinPass}
                            className={`option-button ${selectedPinyin === item ? "selected" : ""} ${wrongPinyinList.includes(item) ? "wrong" : ""} ${pinyinPass ? "pass" : ""}`}
                            onClick={handleClickPinyin}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>
            <h3>Please choose definition</h3>
            {defChoices.map((item, index) => {
                return (
                    <button
                        key={index}
                        disabled={wrongDefList.includes(item) || defPass}
                        className={`option-button ${selectedDef === item ? "selected" : ""} ${wrongDefList.includes(item) ? "wrong" : ""} ${defPass ? "pass" : ""}`}
                        onClick={handleClickDef}
                    >
                        {item}
                    </button>
                )
            })}
            <br /><br />
            <div className="submit-button-wrapper">
                {(!pinyinPass || !defPass) && <button className="submit-button" onClick={handleConfirm} disabled={!selectedDef || !selectedPinyin}>Confirm</button>}
                {(pinyinPass && defPass) && <button className="submit-button" onClick={handleNext}>Next</button>}
            </div>
        </div>
    )
}

export default withRouter(LevelSelectPage);