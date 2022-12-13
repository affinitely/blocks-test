import Button, {ACTION_CLOSE, ACTION_LINK, ACTION_SUBMIT} from "./index";
import SettingsSection from "../../settings/SettingsSection";
import {BlockColorChooser, BlockSettingsLabel} from "../../settings";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import {TextSettings} from "../../settings/TextSettings";
import {BlockSettings} from "../../settings/BlockSettings";
import {Element, useNode} from "@craftjs/core";

const ACTION_OPTIONS = [
    {
        label: "Close the Form",
        value: ACTION_CLOSE,
    },
    {
        label: "Submit the Form",
        value: ACTION_SUBMIT,
    },
    {
        label: "Open a Link in New Tab",
        value: ACTION_LINK,
    },
]


export function ButtonSettings() {
    const {
        actions: {setProp},
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="flex flex-col">
            <SettingsSection
                title="Button Action"
                className="grid grid-cols-3 items-center justify-center gap-x-2 gap-y-4"
            >
                <BlockSettingsLabel>Button Action</BlockSettingsLabel>
                <Select
                    className="col-span-2 text-xs"
                    value={props.action}
                    onChange={option => setProp(props => (props.action = option.value))}
                    options={ACTION_OPTIONS}
                />
            </SettingsSection>
            <SettingsSection
                title="Button Text"
                className="grid grid-cols-3 items-center justify-center gap-x-2 gap-y-4"
            >
                <BlockSettingsLabel>Button Text</BlockSettingsLabel>
                <Input
                    className="col-span-2 text-xs"
                    value={props.text || ''}
                    onChange={(e) => setProp(props => (props.text = e.target.value))}
                />
            </SettingsSection>
            <SettingsSection title="Button Styling" className="grid grid-cols-3 items-center">
                <BlockSettingsLabel>Background Color</BlockSettingsLabel>
                <BlockColorChooser
                    className="col-span-2"
                    resetValue="#1e293b"
                    value={props.backgroundColor}
                    onChange={color => setProp(props => (props.backgroundColor = color))}
                />
            </SettingsSection>
            <TextSettings props={props} setProp={setProp}/>
            <BlockSettings props={props} setProp={setProp}/>
        </div>
    )
}

Button.craft = {
    displayName: "Button",
    props: {
        text: "Submit",
        action: ACTION_SUBMIT,
        fontWeight: 600,
        fontSize: 18,
        backgroundColor: "#1e293b",
        blockStyle: {
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            backgroundColor: 'transparent'
        },
    },
    related: {
        settings: ButtonSettings,
    },
};

export default Button;