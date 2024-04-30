import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Topic {
    id: number;
    heading: string;
    color: string;
    paragraphs: string[];

}


const PageSection = ({ topic, setMarquee }: { topic: Topic, setMarquee: React.Dispatch<React.SetStateAction<string>> }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)


    useEffect(() => {
        isInView && console.log(topic.heading + ': ' + isInView)

        // sets the marquee
        isInView && setMarquee(setMarqueeText(topic.heading))
    }, [isInView, topic, setMarquee])

    const setMarqueeText = (string: string | undefined) => {
        let text = ""

        // sets the marquee with repeated text
        string && string.length !== 0 && (text = `😎  ${string} `.repeat(20))
        return text;
    }

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