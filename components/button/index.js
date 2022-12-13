import Block from "../Block";
import isLightColored from "../../utils";
import classNames from "classnames";

export const ACTION_CLOSE = 'close';
export const ACTION_SUBMIT = 'submit';
export const ACTION_LINK = 'link';

export default function Button({
                                   action,
                                   text,
                                   fontSize,
                                   fontWeight,
                                   textColor,
                                   backgroundColor,
                                   blockStyle
                               }) {
    const derivedColor = textColor || (
        backgroundColor === 'transparent' ? "#1e293b" :
            (isLightColored(backgroundColor || '') ? "#1e293b" : "white")
    )
    return (
        <Block {...blockStyle}>
            <button
                className={classNames("x-aff-p-button", {
                    "transparent": !textColor && backgroundColor === 'transparent'
                })}
                style={{
                    fontSize,
                    fontWeight,
                    color: backgroundColor && backgroundColor !== 'transparent' && derivedColor,
                    backgroundColor
                }}
            >
                {text}
            </button>
        </Block>
    )
}