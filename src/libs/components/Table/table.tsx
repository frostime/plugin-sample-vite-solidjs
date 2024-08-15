import { JSX } from "solid-js";
import styles from "./table.module.scss";

interface TableProps {
    columns: string[];
    children: JSX.Element;
    style?: JSX.CSSProperties;
}

export function Table(props: TableProps) {
    return (
        <table class={styles.table} style={props.style ?? {}}>
            <thead>
                <tr>
                    {props.columns.map((column) => (
                        <th>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </table>
    );
}

export function TableRow(props: { children: JSX.Element, style?: JSX.CSSProperties }) {
    return <tr style={props.style ?? {}}>{props.children}</tr>;
}

export function TableCell(props: { children: JSX.Element, style?: JSX.CSSProperties }) {
    return <td style={props.style ?? {}}>{props.children}</td>;
}

