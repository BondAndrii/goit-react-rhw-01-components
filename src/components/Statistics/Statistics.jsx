import React from "react";


export const Statistic = ({title, stats}) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
               
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id}>
                            <span>{label}</span>
                            <span>{ percentage}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}