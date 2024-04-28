import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Topic {
    id: number;
    heading: string;
    color: string;
    paragraphs: string[];
}


const PageSection = ({ topic }: { topic: Topic }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
       isInView && console.log(topic.heading + ': ' + isInView)
    }, [isInView, topic])

    return (
        <section className="page-content__section" data-bg-color={topic.color}>
            <h2 ref={ref}>{topic.heading}</h2>

            {topic.paragraphs.map((paragraph, index) => {

                return (
                    <p key={index}>{paragraph}</p>
                )
            })}
        </section>
    )
}

export default PageSection