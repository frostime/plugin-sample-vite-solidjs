// Copyright (c) 2024 by frostime. All Rights Reserved.
// Author       : frostime
// Date         : 2024-06-01 20:03:50
// FilePath     : /src/libs/setting-item-wrap.tsx
// LastEditTime : 2024-06-07 19:14:28
// Description  : The setting item container

import { children, Component, JSX } from "solid-js";

import css from './form-wrap.module.css';

interface FormWrap {
    title: string;
    description: string;
    direction?: 'row' | 'column';
    children?: JSX.Element;
}

const FormWrap: Component<FormWrap> = (props) => {

    const c = children(() => props.children);

    return (
        <>
            {props.direction === "row" ? (
                <div class={`${css['item-wrap']} b3-label`}>
                    <div class="fn__block">
                        <span class={css.title}>{props.title}</span>
                        <div class="b3-label__text" innerHTML={props.description}></div>
                        <div class="fn__hr"></div>
                        <div style="display: flex; flex-direction: column; gap: 5px; position: relative;">
                            {c()}
                        </div>
                    </div>
                </div>
            ) : (
                <div class={`${css['item-wrap']} fn__flex b3-label config__item`} style="position: relative;">
                    <div class="fn__flex-1">
                        <span class={css.title}>{props.title}</span>
                        <div class="b3-label__text" innerHTML={props.description}></div>
                    </div>
                    <span class="fn__space" />
                    {c()}
                </div>
            )}
        </>
    );
};

export default FormWrap;
