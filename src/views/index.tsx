import React, { useState } from "react";
import "./styles.css";
import Data from "src/data/data.json"
import FlipCard from "./flip-card"
import InfoCard from "./info-card";

const FlipCards = () => {
    const [active, setActive] = useState<number>(1);

    const flipCards = Data.flipCards.map((flipCard) => <FlipCard flipCard={flipCard} active={active} setActive={setActive} />);

    const renderIntroduction = () => {
        return (
            <InfoCard
            asset={Data.introductionContent.asset}
            title={Data.introductionContent.title}
            description={Data.introductionContent.description}
            type="introduction"
            />
        );
    };

    const renderConclusion = () => {
        if (active > Data.flipCards.length) {
            return (
                <InfoCard
                asset={Data.conclusionContent.asset}
                title={Data.conclusionContent.title}
                description={Data.conclusionContent.description}
                type="conclusion"
                />
            );
        };

        return null;
    };

    return (
        <div className="container">
            <h2 className="text-center mt-2">{Data.title}</h2>
            {renderIntroduction()}
            <div className="deck">
                {flipCards}
            </div>
            {renderConclusion()}
        </div>
    );
};

export default FlipCards;
