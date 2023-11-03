import UIButton from "@/shared/uikit/UIButton";

const Item = ({data, active}) => {

    return (
        <UIButton active={active} style={{color:data.color}}>
            {data.text.en.name}
        </UIButton>
    );
};

export default Item;
