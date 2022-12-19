import { useState } from "react";
import {
    DropdownContainer,
    DropdownItem,
    DropdownLabel,
    DropDownMenu,
    DrowdownList,
} from "./Dropdown.style";

interface Props {
    width?: string;
    selectValue: any;
    list: any[];
    handler: (value: any) => any;
}
const Dropdown = ({ width, selectValue, list, handler }: Props) => {
    const [active, setActive] = useState(false);

    return (
        <DropdownContainer width={width} active={active}>
            <DropdownLabel
                value={selectValue}
                onClick={() => {
                    setActive((prev) => !prev);
                }}
            >
                {selectValue ? selectValue : "--선택해주세요--"}
            </DropdownLabel>
            {active ? (
                <DropDownMenu>
                    <DrowdownList>
                        {list.map((item, index) => (
                            <DropdownItem
                                key={item}
                                onClick={(e) => {
                                    handler({ index: index, item: item });
                                    setActive(false);
                                }}
                            >
                                {item}
                            </DropdownItem>
                        ))}
                    </DrowdownList>
                </DropDownMenu>
            ) : null}
        </DropdownContainer>
    );
};

export default Dropdown;
