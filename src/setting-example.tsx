import { Component, createSignal, For } from "solid-js";
import { showMessage } from "siyuan";
import SettingPanel from "./libs/components/setting-panel";

const App: Component = () => {
    const [groups, _] = createSignal(["🌈 Default"]);
    const [focusGroup, setFocusGroup] = createSignal(groups()[0]);

    const SettingItems: ISettingItem[] = [
        {
            type: 'checkbox',
            title: 'checkbox',
            description: 'checkbox',
            key: 'a',
            value: true
        },
        {
            type: 'textinput',
            title: 'text',
            description: 'This is a text',
            key: 'b',
            value: 'This is a text',
            placeholder: 'placeholder'
        },
        {
            type: 'textarea',
            title: 'textarea',
            description: 'This is a textarea',
            key: 'b2',
            value: 'This is a textarea',
            placeholder: 'placeholder',
            direction: 'row'
        },
        {
            type: 'select',
            title: 'select',
            description: 'select',
            key: 'c',
            value: 'x',
            options: {
                x: 'x',
                y: 'y',
                z: 'z'
            }
        },
        {
            type: 'slider',
            title: 'slider',
            description: 'slider',
            key: 'd',
            value: 50,
            slider: {
                min: 0,
                max: 100,
                step: 1
            }
        },
        {
            type: 'button',
            title: 'button',
            description: 'This is a button',
            key: 'e',
            value: 'Click Button',
            button: {
                label: 'Click Me',
                callback: () => {
                    showMessage('Hello, world!');
                }
            }
        }
    ];

    return (
        <div class="fn__flex-1 fn__flex config__panel" style={{ height: "100%" }}>
            <ul class="b3-tab-bar b3-list b3-list--background">
                <For each={groups()}>
                    {(group) => (
                        <li
                            data-name="editor"
                            class={`b3-list-item${group === focusGroup() ? " b3-list-item--focus" : ""}`}
                            onClick={() => setFocusGroup(group)}
                            onKeyDown={() => { }}
                            style={{ 'padding-left': "1rem" }}
                        >
                            <span class="b3-list-item__text">{group}</span>
                        </li>
                    )}
                </For>
            </ul>
            <div class="config__tab-wrap">
                <SettingPanel
                    group={groups()[0]}
                    settingItems={SettingItems}
                    display={focusGroup() === groups()[0]}
                    onChanged={(kv) => console.debug("Changed:", kv)}
                >
                    <div class="fn__flex b3-label">💡 This is our default settings.</div>
                </SettingPanel>
            </div>
        </div>
    );
};

export default App;
