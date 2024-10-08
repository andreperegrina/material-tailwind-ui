import React from 'react';
import {DropdownMenu as RadixDropdownMenu} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuProps} from './DropdownMenu.types';
import {DropdownMenuThemeContext} from "./useDropdownMenuTheme";



const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>((props) => {
    const {condensed = false, ...rest} = props;
    return (
        <DropdownMenuThemeContext.Provider value={{condensed}}>
            <RadixDropdownMenu
                {...rest}
            />
        </DropdownMenuThemeContext.Provider>
    );
});

export default DropdownMenu;
