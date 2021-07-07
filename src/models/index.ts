declare namespace Models {
    interface FlipCard {
        id: number;
        front: Front;
        back: Back;
    }

    interface Front {
        title: string,
        asset: string,
    }

    interface Back {
        title: string,
        description: string,
        asset: string,
    }
};

export default Models;
