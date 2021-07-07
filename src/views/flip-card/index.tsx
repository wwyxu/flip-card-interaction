import React, { useState } from "react";
import Models from "src/models";
import Back from "./back";
import Front from "./front";

interface Card {
    flipCard: Models.FlipCard
    active: number;
    setActive: any;
}

const FlipCard = ({ flipCard, active, setActive }: Card) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(true);
    const [complete, setComplete] = useState<boolean>(false);

    const handleClick = () => {
        if (flipCard.id === active) {
            setComplete(true);
            setActive(++active);
        }

        if (active > flipCard.id) {
            setIsFlipped(!isFlipped);
        }
    }

    const renderFront = () => {
        return (
            <Front
                title={flipCard.front.title}
                asset={flipCard.front.asset}
                theme={active >= flipCard.id ? 'front-enabled' : 'front-disabled'}
            />
        )
    }

    const renderBack = () => {
        return (
            <Back
                title={flipCard.back.title}
                description={flipCard.back.description}
                asset={flipCard.back.asset}
            />
        )
    }

    const renderReturnIndicator = () => {
        if (isFlipped) return null;

        return (
            <>
                <div className="corner-triangle" />
                <img className="bottom-right" alt="marker" src="assets/back_arrow.png" width="20" height="20" />
            </>
        );
    }

    const renderCompletionIndicator = () => {
        return (
            <img className="top-right" src={complete ? "assets/complete.png" : "assets/incomplete.png"} alt="marker" width="20" height="20" />
        );
    }

    return (
        <div className="flip-container">
            <div className={`${isFlipped ? "" : "selected"}`}>
                <div className="flipper">
                    <div className={`card ${isFlipped ? "" : "blue-background"}`} onClick={() => handleClick()}>
                        <div className="front">
                            {renderCompletionIndicator()}
                            {renderFront()}
                        </div>
                        <div className="back">
                            {renderCompletionIndicator()}
                            {renderBack()}
                            {renderReturnIndicator()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
